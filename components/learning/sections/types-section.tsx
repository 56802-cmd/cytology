import { DeepDive, Prose, Section, SubHeading } from '../section-shell'

const rows = [
  { label: 'เยื่อหุ้มนิวเคลียส', pro: 'ไม่มี — DNA อยู่ในบริเวณนิวคลีออยด์', eu: 'มี — เยื่อหุ้มสองชั้นพร้อมรูนิวเคลียส' },
  { label: 'ขนาดโดยทั่วไป', pro: '0.1–5 µm', eu: '10–100 µm' },
  { label: 'ลักษณะ DNA', pro: 'วงกลม 1 โมเลกุล มักมีพลาสมิดเพิ่ม (แบคทีเรียไม่มีฮิสโตน)', eu: 'เส้นตรงหลายแท่ง พันรอบโปรตีนฮิสโตนเป็นโครมาทิน' },
  { label: 'ไรโบโซม', pro: '70S (50S + 30S)', eu: '80S (60S + 40S) ในไซโทซอล; 70S ในไมโทคอนเดรีย/คลอโรพลาสต์' },
  { label: 'ออร์แกเนลล์ที่มีเยื่อหุ้ม', pro: 'ไม่มี', eu: 'มี เช่น ER กอลจิ ไมโทคอนเดรีย ไลโซโซม' },
  { label: 'ผนังเซลล์', pro: 'แบคทีเรีย: เพปทิโดไกลแคน', eu: 'พืช: เซลลูโลส; ฟังไจ: ไคทิน; สัตว์: ไม่มี' },
  { label: 'โครงร่างของเซลล์', pro: 'มีโปรตีนคล้ายโครงร่างเซลล์อย่างง่าย', eu: 'มีไมโครฟิลาเมนต์ อินเทอร์มีเดียตฟิลาเมนต์ ไมโครทิวบูล' },
  { label: 'การแบ่งเซลล์', pro: 'การแบ่งตัวแบบทวิภาค (binary fission)', eu: 'ไมโทซิสและไมโอซิส' },
  { label: 'ตัวอย่าง', pro: 'แบคทีเรีย อาร์เคีย (รวมไซยาโนแบคทีเรีย)', eu: 'โพรทิสต์ ฟังไจ พืช สัตว์' },
]

const evidence = [
  'มีเยื่อหุ้มสองชั้น โดยเยื่อชั้นในมีองค์ประกอบคล้ายเยื่อหุ้มเซลล์แบคทีเรีย (มีคาร์ดิโอลิพิน)',
  'มี DNA เป็นวงกลมของตนเอง ไม่พันกับฮิสโตน คล้าย DNA ของแบคทีเรีย',
  'มีไรโบโซมแบบ 70S และไวต่อยาปฏิชีวนะบางชนิดที่ยับยั้งไรโบโซมแบคทีเรีย',
  'เพิ่มจำนวนด้วยการแบ่งตัวคล้าย binary fission อย่างเป็นอิสระจากการแบ่งเซลล์',
  'ลำดับ DNA ของไมโทคอนเดรียใกล้เคียงแอลฟาโพรทีโอแบคทีเรีย และของคลอโรพลาสต์ใกล้เคียงไซยาโนแบคทีเรีย',
]

export function TypesSection() {
  return (
    <Section
      id="types"
      number="03"
      eyebrow="การจำแนกเซลล์"
      title="เซลล์โพรคาริโอตและยูคาริโอต"
      intro="สิ่งมีชีวิตทั้งหมดแบ่งตามโครงสร้างเซลล์ได้ 2 แบบ คำว่า “pro” แปลว่า ก่อน และ “eu” แปลว่า แท้จริง ส่วน “karyon” แปลว่า แก่นหรือนิวเคลียส"
    >
      <div className="overflow-x-auto rounded-xl border border-border bg-card">
        <table className="w-full min-w-[640px] text-left text-sm">
          <caption className="sr-only">ตารางเปรียบเทียบเซลล์โพรคาริโอตและยูคาริโอต</caption>
          <thead>
            <tr className="border-b border-border bg-muted">
              <th scope="col" className="px-4 py-3 font-semibold">ลักษณะ</th>
              <th scope="col" className="px-4 py-3 font-semibold text-accent">โพรคาริโอต (Prokaryote)</th>
              <th scope="col" className="px-4 py-3 font-semibold text-primary">ยูคาริโอต (Eukaryote)</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.label} className="border-b border-border last:border-0">
                <th scope="row" className="px-4 py-3 align-top font-medium">{r.label}</th>
                <td className="px-4 py-3 align-top leading-relaxed text-foreground/85">{r.pro}</td>
                <td className="px-4 py-3 align-top leading-relaxed text-foreground/85">{r.eu}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Prose>
        <SubHeading>สิ่งที่เซลล์ทุกชนิดมีเหมือนกัน</SubHeading>
        <p>
          ไม่ว่าจะเป็นโพรคาริโอตหรือยูคาริโอต เซลล์ทุกชนิดมีองค์ประกอบพื้นฐาน 4 อย่าง ได้แก่
          <strong className="font-semibold"> เยื่อหุ้มเซลล์ </strong> ที่ห่อหุ้มและควบคุมการผ่านเข้าออกของสาร,
          <strong className="font-semibold"> ไซโทซอล </strong> ของเหลวกึ่งเจลภายในเซลล์,
          <strong className="font-semibold"> สารพันธุกรรม (DNA) </strong> และ
          <strong className="font-semibold"> ไรโบโซม </strong> สำหรับสังเคราะห์โปรตีน
        </p>
      </Prose>

      <DeepDive title="ทฤษฎีเอนโดซิมไบโอซิส (Endosymbiotic Theory)">
        <p>
          เมื่อราว 1,500–2,000 ล้านปีก่อน เซลล์บรรพบุรุษของยูคาริโอตได้กลืนแบคทีเรียที่ใช้ออกซิเจนเข้าไปแต่ไม่ย่อย
          แบคทีเรียนั้นอาศัยอยู่ร่วมกันแบบพึ่งพาจนกลายเป็น <strong className="font-semibold">ไมโทคอนเดรีย</strong>
          ต่อมาเซลล์บางสายได้กลืนไซยาโนแบคทีเรียที่สังเคราะห์ด้วยแสงได้ จนกลายเป็น
          <strong className="font-semibold"> คลอโรพลาสต์</strong> ของพืชและสาหร่าย หลักฐานสนับสนุนได้แก่
        </p>
        <ul className="ml-5 list-disc space-y-1.5">
          {evidence.map((e) => (
            <li key={e}>{e}</li>
          ))}
        </ul>
      </DeepDive>
    </Section>
  )
}
