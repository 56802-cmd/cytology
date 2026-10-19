import { MitosisStepper } from '../mitosis-stepper'
import { DeepDive, InfoCard, Section, SubHeading } from '../section-shell'

const cycle = [
  { phase: 'G1', hours: 11, color: 'bg-primary', desc: 'เติบโต' },
  { phase: 'S', hours: 8, color: 'bg-chart-3', desc: 'จำลอง DNA' },
  { phase: 'G2', hours: 4, color: 'bg-chart-4', desc: 'เตรียมแบ่ง' },
  { phase: 'M', hours: 1, color: 'bg-accent', desc: 'แบ่งเซลล์' },
]
const totalHours = cycle.reduce((s, c) => s + c.hours, 0)

const checkpoints = [
  { title: 'จุดตรวจสอบ G1', tag: 'Restriction point', body: 'ตรวจขนาดเซลล์ สารอาหาร สัญญาณ growth factor และความเสียหายของ DNA หากไม่ผ่าน เซลล์จะเข้าสู่ระยะ G0 (หยุดแบ่ง) เช่น เซลล์ประสาทและเซลล์กล้ามเนื้อส่วนใหญ่' },
  { title: 'จุดตรวจสอบ G2', tag: 'G2/M checkpoint', body: 'ตรวจว่าการจำลอง DNA สมบูรณ์และไม่มีความเสียหาย ก่อนอนุญาตให้เข้าสู่ไมโทซิส' },
  { title: 'จุดตรวจสอบ M', tag: 'Spindle checkpoint', body: 'ในระยะเมทาเฟส ตรวจว่าไคนีโทคอร์ทุกอันยึดกับเส้นใยสปินเดิลแล้ว จึงอนุญาตให้เข้าสู่แอนาเฟส' },
]

const meiosis = [
  { stage: 'โพรเฟส I', detail: 'ฮอมอโลกัสโครโมโซมจับคู่กัน (synapsis) เกิดเป็นไบวาเลนต์หรือเททราด และเกิดการแลกเปลี่ยนชิ้นส่วนระหว่างโครมาทิด (crossing over) ที่ตำแหน่งไคแอสมา — ระยะที่ยาวที่สุดของไมโอซิส' },
  { stage: 'เมทาเฟส I', detail: 'ฮอมอโลกัสโครโมโซมเรียงตัวเป็น “คู่” อยู่กลางเซลล์ การวางตัวของแต่ละคู่เป็นอิสระต่อกัน (independent assortment)' },
  { stage: 'แอนาเฟส I', detail: 'ฮอมอโลกัสโครโมโซมแยกจากกันไปคนละขั้ว — ซิสเตอร์โครมาทิดยังติดกันอยู่' },
  { stage: 'เทโลเฟส I + ไซโทไคนีซิส', detail: 'ได้ 2 เซลล์ แต่ละเซลล์มีโครโมโซมเป็น n (ลดจำนวนลงครึ่งหนึ่ง) แต่ยังมี 2 โครมาทิดต่อแท่ง' },
  { stage: 'ไมโอซิส II', detail: 'คล้ายไมโทซิส ซิสเตอร์โครมาทิดแยกจากกันในแอนาเฟส II ไม่มีการจำลอง DNA ก่อนเริ่ม สุดท้ายได้ 4 เซลล์ที่มีโครโมโซม n และพันธุกรรมแตกต่างกัน' },
]

const compareRows = [
  ['เซลล์ที่เกิด', 'เซลล์ร่างกาย (somatic cell)', 'เซลล์สืบพันธุ์ (germ cell) → เซลล์สืบพันธุ์/สปอร์'],
  ['จำนวนรอบการแบ่งนิวเคลียส', '1 รอบ', '2 รอบ (ไมโอซิส I และ II)'],
  ['จำนวนเซลล์ที่ได้', '2 เซลล์', '4 เซลล์'],
  ['จำนวนโครโมโซม', '2n → 2n (คงเดิม)', '2n → n (ลดลงครึ่งหนึ่ง)'],
  ['การจับคู่ฮอมอโลกัส / crossing over', 'ไม่เกิด', 'เกิดในโพรเฟส I'],
  ['พันธุกรรมของเซลล์ลูก', 'เหมือนเซลล์แม่ทุกประการ', 'แตกต่างจากเซลล์แม่และแตกต่างกันเอง'],
  ['บทบาท', 'การเจริญเติบโต ซ่อมแซม สืบพันธุ์แบบไม่อาศัยเพศ', 'สร้างเซลล์สืบพันธุ์ เพิ่มความหลากหลายทางพันธุกรรม'],
]

export function DivisionSection() {
  return (
    <Section
      id="division"
      number="09"
      eyebrow="วัฏจักรเซลล์"
      title="การแบ่งเซลล์ (Cell Division)"
      intro="ร่างกายมนุษย์สร้างเซลล์ใหม่ทดแทนราว 3.3 แสนล้านเซลล์ต่อวัน (เกือบ 4 ล้านเซลล์ต่อวินาที) การแบ่งเซลล์ประกอบด้วยการแบ่งนิวเคลียส (karyokinesis) และการแบ่งไซโทพลาซึม (cytokinesis) ซึ่งต้องถูกควบคุมอย่างเข้มงวด"
    >
      <div className="flex flex-col gap-4">
        <SubHeading>วัฏจักรเซลล์ (Cell Cycle)</SubHeading>
        <p className="max-w-3xl text-muted-foreground">
          ตัวอย่างเซลล์มนุษย์ที่เพาะเลี้ยงซึ่งมีวัฏจักรราว 24 ชั่วโมง — สังเกตว่าระยะแบ่งเซลล์ (M) ใช้เวลาเพียงประมาณ 1 ชั่วโมง
        </p>
        <div className="rounded-xl border border-border bg-card p-5 md:p-6">
          <div className="flex h-12 overflow-hidden rounded-lg" role="img" aria-label="สัดส่วนเวลา G1 11 ชั่วโมง S 8 ชั่วโมง G2 4 ชั่วโมง M 1 ชั่วโมง">
            {cycle.map((c) => (
              <div
                key={c.phase}
                className={`flex items-center justify-center font-serif text-sm font-semibold text-primary-foreground ${c.color}`}
                style={{ width: `${(c.hours / totalHours) * 100}%` }}
              >
                {c.phase}
              </div>
            ))}
          </div>
          <dl className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {cycle.map((c) => (
              <div key={c.phase} className="flex items-start gap-2">
                <span className={`mt-1.5 size-2.5 shrink-0 rounded-full ${c.color}`} aria-hidden="true" />
                <div>
                  <dt className="text-sm font-medium">
                    {c.phase} · {c.desc}
                  </dt>
                  <dd className="text-xs text-muted-foreground">~{c.hours} ชั่วโมง</dd>
                </div>
              </div>
            ))}
          </dl>
          <p className="mt-4 text-sm text-muted-foreground">
            อินเตอร์เฟส = G1 + S + G2 · ระยะ M = ไมโทซิส + ไซโทไคนีซิส
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <SubHeading>ไมโทซิสทีละขั้นตอน</SubHeading>
        <MitosisStepper />
      </div>

      <div className="flex flex-col gap-4">
        <SubHeading>จุดตรวจสอบของวัฏจักรเซลล์ (Checkpoints)</SubHeading>
        <div className="grid gap-4 md:grid-cols-3">
          {checkpoints.map((c) => (
            <InfoCard key={c.title} title={c.title} tag={c.tag}>
              <p>{c.body}</p>
            </InfoCard>
          ))}
        </div>
      </div>

      <DeepDive title="มะเร็ง: เมื่อเซลล์ลืมวิธีหยุดแบ่งตัว">
        <p>
          วัฏจักรเซลล์ถูกขับเคลื่อนด้วยโปรตีนไซคลิน (cyclin) และเอนไซม์ไซคลินดีเพนเดนต์ไคเนส (Cdk)
          ซึ่ง Leland Hartwell, Tim Hunt และ Paul Nurse ค้นพบและได้รับรางวัลโนเบลปี 2001
        </p>
        <p>
          มะเร็งเกิดเมื่อยีนควบคุมวัฏจักรเซลล์กลายพันธุ์ ทั้ง <strong className="font-semibold">โปรโต-ออนโคยีน</strong>
          ที่เปรียบเหมือน “คันเร่ง” กลายเป็นออนโคยีนที่ทำงานตลอดเวลา และ <strong className="font-semibold">ยีนต้านมะเร็ง</strong>
          ที่เปรียบเหมือน “เบรก” เสียหาย ตัวอย่างสำคัญคือยีน <strong className="font-semibold">p53</strong> ซึ่งได้ชื่อว่า
          “ผู้พิทักษ์จีโนม” ทำหน้าที่หยุดวัฏจักรเมื่อ DNA เสียหาย และสั่งให้เซลล์ตายแบบอะพอพโทซิสหากซ่อมไม่ได้
          พบการกลายพันธุ์ของ p53 ในมะเร็งราวครึ่งหนึ่งของทุกชนิด
        </p>
      </DeepDive>

      <div className="flex flex-col gap-4">
        <SubHeading>ไมโอซิส (Meiosis) — การแบ่งเซลล์แบบลดจำนวนโครโมโซม</SubHeading>
        <ol className="flex flex-col divide-y divide-border rounded-xl border border-border bg-card">
          {meiosis.map((m, i) => (
            <li key={m.stage} className="grid gap-2 p-5 md:grid-cols-[180px_1fr] md:gap-6">
              <p className="flex items-center gap-3 font-serif font-semibold">
                <span className="text-sm text-accent">{String(i + 1).padStart(2, '0')}</span>
                {m.stage}
              </p>
              <p className="text-sm leading-relaxed text-foreground/85">{m.detail}</p>
            </li>
          ))}
        </ol>
      </div>

      <div className="flex flex-col gap-4">
        <SubHeading>เปรียบเทียบไมโทซิสกับไมโอซิส</SubHeading>
        <div className="overflow-x-auto rounded-xl border border-border bg-card">
          <table className="w-full min-w-[620px] text-left text-sm">
            <caption className="sr-only">ตารางเปรียบเทียบไมโทซิสและไมโอซิส</caption>
            <thead>
              <tr className="border-b border-border bg-muted">
                <th scope="col" className="px-4 py-3 font-semibold">หัวข้อ</th>
                <th scope="col" className="px-4 py-3 font-semibold text-primary">ไมโทซิส</th>
                <th scope="col" className="px-4 py-3 font-semibold text-accent">ไมโอซิส</th>
              </tr>
            </thead>
            <tbody>
              {compareRows.map(([label, mi, me]) => (
                <tr key={label} className="border-b border-border last:border-0">
                  <th scope="row" className="px-4 py-3 align-top font-medium">{label}</th>
                  <td className="px-4 py-3 align-top text-foreground/85">{mi}</td>
                  <td className="px-4 py-3 align-top text-foreground/85">{me}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <DeepDive title="ทำไมพี่น้องจึงไม่เหมือนกัน? — คณิตศาสตร์ของความหลากหลาย">
          <p>
            มนุษย์มีโครโมโซม 23 คู่ การจัดเรียงแบบอิสระในเมทาเฟส I จึงสร้างเซลล์สืบพันธุ์ได้ 2<sup>23</sup> ≈ 8.4 ล้านแบบ
            เมื่อรวมกับการปฏิสนธิแบบสุ่มของไข่และอสุจิ จะได้ราว 8.4 ล้าน × 8.4 ล้าน ≈ 70 ล้านล้านแบบ
          </p>
          <p>
            และยังไม่รวม crossing over ซึ่งเกิดเฉลี่ย 1–3 ครั้งต่อโครโมโซมหนึ่งคู่ ทำให้แทบเป็นไปไม่ได้ที่พี่น้อง
            (ยกเว้นแฝดเหมือน) จะมีพันธุกรรมเหมือนกันทุกประการ
          </p>
        </DeepDive>
        <DeepDive title="เทโลเมียร์และขีดจำกัดของการแบ่งเซลล์">
          <p>
            ปลายโครโมโซมมีลำดับเบสซ้ำ TTAGGG เรียกว่าเทโลเมียร์ ซึ่งสั้นลงทุกครั้งที่จำลอง DNA เซลล์ร่างกายจึงแบ่งได้ราว
            50–70 ครั้ง ก่อนหยุดแบ่ง (Hayflick limit)
          </p>
          <p>
            เซลล์ต้นกำเนิดและเซลล์มะเร็งส่วนใหญ่มีเอนไซม์เทโลเมอเรส (telomerase) ต่อเทโลเมียร์ให้ยาวขึ้น จึงแบ่งตัวได้ไม่จำกัด
            การค้นพบนี้ได้รับรางวัลโนเบลปี 2009 ส่วนความผิดพลาดในไมโอซิส เช่น nondisjunction ของโครโมโซมคู่ที่ 21
            ทำให้เกิดกลุ่มอาการดาวน์ (trisomy 21)
          </p>
        </DeepDive>
      </div>
    </Section>
  )
}
