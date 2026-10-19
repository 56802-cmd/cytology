import { DeepDive, InfoCard, Prose, Section, SubHeading } from '../section-shell'

const scale = [
  { name: 'อะตอม', size: '0.1 nm', log: -10 },
  { name: 'โมเลกุลโปรตีน', size: '2–10 nm', log: -8.5 },
  { name: 'ไรโบโซม', size: '~25 nm', log: -7.6 },
  { name: 'ไวรัส', size: '20–300 nm', log: -7 },
  { name: 'แบคทีเรีย', size: '1–5 µm', log: -6 },
  { name: 'ไมโทคอนเดรีย', size: '0.5–10 µm', log: -5.7 },
  { name: 'เซลล์เม็ดเลือดแดง', size: '~7.5 µm', log: -5.1 },
  { name: 'เซลล์สัตว์ทั่วไป', size: '10–30 µm', log: -4.7 },
  { name: 'เซลล์พืชทั่วไป', size: '10–100 µm', log: -4.3 },
  { name: 'เซลล์ไข่มนุษย์', size: '~120 µm', log: -3.9 },
  { name: 'ไข่นกกระจอกเทศ', size: '~15 cm', log: -0.8 },
]

const minLog = -10
const maxLog = 0

const ranges = [
  { name: 'ตาเปล่า', from: -4, to: 0, color: 'bg-chart-4' },
  { name: 'กล้องจุลทรรศน์แบบใช้แสง', from: -6.7, to: -3, color: 'bg-primary' },
  { name: 'กล้องจุลทรรศน์อิเล็กตรอน', from: -10, to: -4, color: 'bg-chart-3' },
]

function pct(log: number) {
  return ((log - minLog) / (maxLog - minLog)) * 100
}

export function MicroscopeSection() {
  return (
    <Section
      id="microscope"
      number="02"
      eyebrow="เครื่องมือศึกษาเซลล์"
      title="กล้องจุลทรรศน์และขนาดของเซลล์"
      intro="เซลล์ส่วนใหญ่มีขนาดเล็กกว่าที่ตาเปล่าจะมองเห็นได้ (ตามนุษย์แยกรายละเอียดได้ราว 0.1 mm) การศึกษาเซลล์จึงต้องอาศัยกล้องจุลทรรศน์ ซึ่งมีคุณสมบัติสำคัญ 2 ประการ คือ กำลังขยาย และ กำลังแยกภาพ"
    >
      <Prose>
        <p>
          <strong className="font-semibold">กำลังขยาย (magnification)</strong> คืออัตราส่วนของขนาดภาพที่เห็นต่อขนาดจริง
          สำหรับกล้องแบบใช้แสงเชิงประกอบ คำนวณจาก
        </p>
        <p className="rounded-lg border border-border bg-card px-4 py-3 text-center font-medium">
          กำลังขยายรวม = กำลังขยายเลนส์ใกล้วัตถุ × กำลังขยายเลนส์ใกล้ตา
        </p>
        <p>
          <strong className="font-semibold">กำลังแยกภาพ (resolution)</strong> คือความสามารถในการแยกจุดสองจุดที่อยู่ใกล้กันให้เห็นเป็นสองจุด
          ซึ่งสำคัญกว่ากำลังขยาย เพราะถ้าขยายมากแต่แยกภาพไม่ได้ ภาพก็จะพร่ามัว
          กำลังแยกภาพถูกจำกัดด้วยความยาวคลื่นของแหล่งกำเนิด — แสงที่มองเห็นได้ (400–700 nm)
          จึงจำกัดกล้องแบบใช้แสงไว้ที่ประมาณ 200 nm ขณะที่อิเล็กตรอนมีความยาวคลื่นสั้นกว่ามาก
        </p>
      </Prose>

      <div className="grid gap-4 md:grid-cols-3">
        <InfoCard title="กล้องแบบใช้แสง" tag="Light Microscope">
          <p>ใช้แสงและเลนส์แก้ว ส่องดูเซลล์ที่มีชีวิตได้ ย้อมสีได้</p>
          <ul className="ml-4 list-disc space-y-1">
            <li>กำลังขยายสูงสุด ~1,000–1,500 เท่า</li>
            <li>กำลังแยกภาพ ~0.2 µm (200 nm)</li>
            <li>เห็น: เซลล์ นิวเคลียส คลอโรพลาสต์ แวคิวโอล</li>
          </ul>
        </InfoCard>
        <InfoCard title="แบบส่องผ่าน (TEM)" tag="Electron">
          <p>ลำอิเล็กตรอนทะลุผ่านตัวอย่างที่ตัดบางมาก ให้ภาพ 2 มิติของโครงสร้างภายใน</p>
          <ul className="ml-4 list-disc space-y-1">
            <li>กำลังขยาย ~1,000,000 เท่าขึ้นไป</li>
            <li>กำลังแยกภาพ ~0.1–0.5 nm</li>
            <li>เห็น: ไรโบโซม คริสตี เยื่อหุ้มสองชั้น</li>
          </ul>
        </InfoCard>
        <InfoCard title="แบบส่องกราด (SEM)" tag="Electron">
          <p>ลำอิเล็กตรอนกวาดบนผิวตัวอย่างที่เคลือบโลหะ ให้ภาพพื้นผิว 3 มิติ</p>
          <ul className="ml-4 list-disc space-y-1">
            <li>กำลังขยาย ~10–500,000 เท่า</li>
            <li>กำลังแยกภาพ ~1–10 nm</li>
            <li>เห็น: ผิวเซลล์ ซิเลีย ละอองเรณู</li>
          </ul>
        </InfoCard>
      </div>

      <div className="flex flex-col gap-5">
        <SubHeading>มาตราส่วนลอการิทึมของโลกจุลภาค</SubHeading>
        <p className="max-w-3xl text-muted-foreground">
          แต่ละช่วงบนแกนห่างกัน 10 เท่า — สังเกตว่าเซลล์ส่วนใหญ่อยู่ในช่วงที่กล้องแบบใช้แสงมองเห็นได้
          แต่ออร์แกเนลล์ขนาดเล็กอย่างไรโบโซมต้องใช้กล้องจุลทรรศน์อิเล็กตรอน
        </p>
        <div className="overflow-x-auto rounded-xl border border-border bg-card p-5">
          <div className="min-w-[640px]">
            <div className="flex flex-col gap-2">
              {ranges.map((r) => (
                <div key={r.name} className="relative h-7">
                  <div
                    className={`absolute inset-y-0 flex items-center rounded-full px-3 text-xs font-medium text-primary-foreground ${r.color}`}
                    style={{ left: `${pct(r.from)}%`, width: `${pct(r.to) - pct(r.from)}%` }}
                  >
                    {r.name}
                  </div>
                </div>
              ))}
            </div>
            <div className="relative mt-4 h-px bg-foreground/30" />
            <div className="relative mt-1 h-5 text-[11px] text-muted-foreground">
              {['0.1 nm', '1 nm', '10 nm', '100 nm', '1 µm', '10 µm', '100 µm', '1 mm', '1 cm', '10 cm', '1 m'].map(
                (l, i) => (
                  <span key={l} className="absolute -translate-x-1/2" style={{ left: `${i * 10}%` }}>
                    {l}
                  </span>
                ),
              )}
            </div>
            <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-2 sm:grid-cols-3 lg:grid-cols-4">
              {scale.map((s) => (
                <li key={s.name} className="flex items-baseline justify-between gap-2 border-b border-dashed border-border pb-1 text-sm">
                  <span>{s.name}</span>
                  <span className="font-medium text-primary">{s.size}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <DeepDive title="ทำไมเซลล์จึงมีขนาดเล็ก? — อัตราส่วนพื้นที่ผิวต่อปริมาตร">
        <p>
          เมื่อเซลล์มีขนาดใหญ่ขึ้น ปริมาตรเพิ่มขึ้นตามกำลังสามของรัศมี (r³) แต่พื้นที่ผิวเพิ่มขึ้นเพียงกำลังสอง (r²)
          เช่น ลูกบาศก์ด้าน 1 หน่วยมีอัตราส่วน SA:V = 6:1 แต่ลูกบาศก์ด้าน 10 หน่วยเหลือเพียง 0.6:1
        </p>
        <p>
          เยื่อหุ้มเซลล์คือ “ประตู” เดียวสำหรับรับสารอาหาร ออกซิเจน และกำจัดของเสีย หากเซลล์ใหญ่เกินไป
          พื้นที่ผิวจะไม่เพียงพอต่อความต้องการของปริมาตรภายใน เซลล์จึงแก้ปัญหาด้วยการมีขนาดเล็ก
          มีรูปร่างแบนหรือยาว (เช่น เซลล์ประสาท) หรือมีส่วนยื่นเพิ่มพื้นที่ผิว เช่น ไมโครวิลไลของเซลล์ลำไส้เล็ก
        </p>
      </DeepDive>

      <DeepDive title="เทคนิคสมัยใหม่: เห็นสิ่งที่เล็กกว่าขีดจำกัดของแสง">
        <p>
          <strong className="font-semibold">กล้องจุลทรรศน์ฟลูออเรสเซนต์และคอนโฟคอล</strong> ใช้สารเรืองแสง เช่น GFP
          (โปรตีนเรืองแสงสีเขียวจากแมงกะพรุน — โนเบลเคมี 2008) ติดฉลากโปรตีนเฉพาะในเซลล์ที่มีชีวิต
        </p>
        <p>
          <strong className="font-semibold">Super-resolution microscopy</strong> (โนเบลเคมี 2014) ทลายขีดจำกัด 200 nm
          ลงมาเหลือราว 20 nm และ <strong className="font-semibold">Cryo-EM</strong> (โนเบลเคมี 2017)
          แช่แข็งตัวอย่างอย่างรวดเร็วเพื่อหาโครงสร้างสามมิติของโปรตีนในระดับใกล้อะตอม
        </p>
      </DeepDive>
    </Section>
  )
}
