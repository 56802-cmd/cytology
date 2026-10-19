import Image from 'next/image'
import { sci } from '../sci'
import { DeepDive, InfoCard, Prose, Section, SubHeading } from '../section-shell'

const components = [
  {
    title: 'ฟอสโฟลิพิด',
    tag: 'โครงหลัก',
    body: 'โมเลกุลแบบแอมฟิพาทิก (amphipathic) มีส่วนหัวที่มีฟอสเฟตชอบน้ำ (hydrophilic) และหางกรดไขมัน 2 สายไม่ชอบน้ำ (hydrophobic) ในน้ำจึงจัดเรียงตัวเป็นสองชั้นเองโดยหันหางเข้าหากัน',
  },
  {
    title: 'คอเลสเตอรอล',
    tag: 'ตัวปรับความลื่นไหล',
    body: 'แทรกระหว่างฟอสโฟลิพิดในเซลล์สัตว์ ทำหน้าที่เป็น “บัฟเฟอร์ความลื่นไหล” — ที่อุณหภูมิสูงลดการเคลื่อนที่ของฟอสโฟลิพิด ที่อุณหภูมิต่ำป้องกันไม่ให้เยื่อแข็งตัว (พืชใช้สเตอรอลชนิดอื่นแทน)',
  },
  {
    title: 'โปรตีนแทรกตลอดชั้น',
    tag: 'Integral',
    body: 'ฝังอยู่ในชั้นลิพิด บางชนิดทะลุทั้งสองด้าน (transmembrane) เช่น โปรตีนช่อง (channel) และโปรตีนพาหะ (carrier) มีบริเวณไม่ชอบน้ำอยู่ในเนื้อเยื่อ',
  },
  {
    title: 'โปรตีนผิวนอก',
    tag: 'Peripheral',
    body: 'เกาะอยู่ที่ผิวด้านใดด้านหนึ่งอย่างหลวม ๆ มักยึดติดกับโปรตีนแทรกหรือโครงร่างของเซลล์',
  },
  {
    title: 'ไกลโคโปรตีนและไกลโคลิพิด',
    tag: 'ป้ายชื่อเซลล์',
    body: 'คาร์โบไฮเดรตสายสั้นต่อกับโปรตีนหรือลิพิดที่ผิวด้านนอก รวมกันเป็นไกลโคแคลิกซ์ (glycocalyx) ใช้จดจำเซลล์ เช่น หมู่เลือด ABO และการแยกเซลล์ตัวเองออกจากสิ่งแปลกปลอม',
  },
]

const proteinRoles = [
  'การลำเลียงสาร (transport)',
  'การเร่งปฏิกิริยา (enzymatic activity)',
  'การรับและส่งสัญญาณ (signal transduction)',
  'การจดจำระหว่างเซลล์ (cell–cell recognition)',
  'การเชื่อมต่อระหว่างเซลล์ (intercellular joining)',
  'การยึดเกาะกับโครงร่างของเซลล์และสารนอกเซลล์',
]

const permeability = [
  { name: 'ก๊าซ (O₂, CO₂, N₂)', level: 95, note: 'ผ่านได้ง่ายมาก' },
  { name: 'โมเลกุลไม่มีขั้วขนาดเล็ก (สเตอรอยด์)', level: 85, note: 'ผ่านได้ง่าย' },
  { name: 'โมเลกุลมีขั้วขนาดเล็ก (น้ำ, ยูเรีย)', level: 45, note: 'ผ่านได้บ้าง เร็วขึ้นมากเมื่อมีอะควาพอริน' },
  { name: 'โมเลกุลมีขั้วขนาดใหญ่ (กลูโคส)', level: 12, note: 'ต้องอาศัยโปรตีนพาหะ' },
  { name: 'ไอออน (Na⁺, K⁺, Cl⁻)', level: 3, note: 'แทบผ่านไม่ได้ ต้องใช้โปรตีนช่อง' },
]

export function MembraneSection() {
  return (
    <Section
      id="membrane"
      number="05"
      eyebrow="แบบจำลองฟลูอิดโมเซก"
      title="เยื่อหุ้มเซลล์ (Cell Membrane)"
      intro="ในปี 1972 Singer และ Nicolson เสนอว่าเยื่อหุ้มเซลล์เป็น “ฟลูอิด” เพราะโมเลกุลลิพิดและโปรตีนเคลื่อนที่ไปด้านข้างได้อย่างอิสระ และเป็น “โมเสก” เพราะมีโปรตีนหลากชนิดแทรกอยู่เหมือนกระเบื้องโมเสก"
    >
      <figure>
        <div className="overflow-hidden rounded-2xl border border-border bg-card">
          <Image
            src="/images/cell-membrane.png"
            alt="ภาพจำลองเยื่อหุ้มเซลล์แบบฟลูอิดโมเซก แสดงฟอสโฟลิพิดสองชั้น โปรตีนแทรก คอเลสเตอรอล และสายคาร์โบไฮเดรตด้านนอก"
            width={1408}
            height={768}
            className="h-auto w-full"
          />
        </div>
        <figcaption className="mt-3 text-sm text-muted-foreground">
          แบบจำลองฟลูอิดโมเซก — ด้านบนคือผิวนอกเซลล์ซึ่งมีสายคาร์โบไฮเดรตยื่นออกมา
        </figcaption>
      </figure>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {components.map((c) => (
          <InfoCard key={c.title} title={c.title} tag={c.tag}>
            <p>{c.body}</p>
          </InfoCard>
        ))}
        <InfoCard title="หน้าที่ของโปรตีนเยื่อหุ้ม" tag="6 บทบาท">
          <ul className="ml-4 list-disc space-y-1">
            {proteinRoles.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
        </InfoCard>
      </div>

      <div className="flex flex-col gap-5">
        <SubHeading>สภาพยอมให้ผ่านแบบเลือก (Selective Permeability)</SubHeading>
        <p className="max-w-3xl text-muted-foreground">
          ใจกลางของเยื่อหุ้มเป็นชั้นไม่ชอบน้ำ สารที่ละลายในลิพิดได้และมีขนาดเล็กจึงผ่านได้ง่าย
          ส่วนไอออนและโมเลกุลมีขั้วขนาดใหญ่ต้องอาศัยโปรตีนช่วย (ค่าเป็นการเปรียบเทียบเชิงคุณภาพ)
        </p>
        <ul className="flex flex-col gap-4 rounded-xl border border-border bg-card p-5 md:p-6">
          {permeability.map((p) => (
            <li key={p.name} className="flex flex-col gap-1.5">
              <div className="flex flex-wrap items-baseline justify-between gap-2 text-sm">
                <span className="font-medium">{sci(p.name)}</span>
                <span className="text-muted-foreground">{p.note}</span>
              </div>
              <div className="h-2.5 overflow-hidden rounded-full bg-muted" aria-hidden="true">
                <div className="h-full rounded-full bg-primary" style={{ width: `${p.level}%` }} />
              </div>
            </li>
          ))}
        </ul>
      </div>

      <Prose>
        <p>
          ความลื่นไหลของเยื่อหุ้มขึ้นกับชนิดของกรดไขมัน กรดไขมันไม่อิ่มตัวมีพันธะคู่ทำให้หางหักงอ
          โมเลกุลเรียงตัวชิดกันไม่ได้ เยื่อจึงลื่นไหลมากกว่า สิ่งมีชีวิตที่อาศัยในที่หนาวเย็น
          เช่น ปลาในขั้วโลก จึงมีสัดส่วนกรดไขมันไม่อิ่มตัวในเยื่อหุ้มเซลล์สูงกว่า
        </p>
      </Prose>

      <DeepDive title="อะควาพอริน: ท่อน้ำระดับโมเลกุล">
        <p>
          นานหลายสิบปีนักวิทยาศาสตร์สงสัยว่าทำไมน้ำผ่านเยื่อหุ้มของบางเซลล์ (เช่น เซลล์ไตและเม็ดเลือดแดง)
          ได้รวดเร็วผิดปกติ จนปี 1992 Peter Agre ค้นพบโปรตีนช่องน้ำ “อะควาพอริน” (aquaporin)
          และได้รับรางวัลโนเบลสาขาเคมีปี 2003
        </p>
        <p>
          อะควาพอรินหนึ่งช่องยอมให้น้ำผ่านได้ราว 3 พันล้านโมเลกุลต่อวินาที โดยเรียงน้ำทีละโมเลกุลผ่านช่องแคบ
          และมีกลไกผลักประจุที่กันไม่ให้โปรตอน (H⁺) ผ่านไปด้วย ไตของมนุษย์อาศัยอะควาพอรินในการดูดน้ำกลับวันละราว 180 ลิตร
        </p>
      </DeepDive>
    </Section>
  )
}
