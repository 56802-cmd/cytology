import { sci } from '../sci'
import { DeepDive, InfoCard, Prose, Section, SubHeading } from '../section-shell'

const stages = [
  {
    no: 1,
    name: 'ไกลโคลิซิส',
    en: 'Glycolysis',
    where: 'ไซโทซอล',
    o2: 'ไม่ใช้ O₂',
    input: 'กลูโคส 1 โมเลกุล (6C)',
    output: 'ไพรูเวต 2 โมเลกุล (3C), 2 NADH',
    atp: 2,
    note: 'ใช้ 2 ATP ในช่วงลงทุนพลังงาน และได้ 4 ATP ในช่วงเก็บเกี่ยว — สุทธิ 2 ATP ผ่าน substrate-level phosphorylation',
  },
  {
    no: 2,
    name: 'การสร้างแอซิทิลโคเอนไซม์ เอ',
    en: 'Pyruvate oxidation',
    where: 'เมทริกซ์ไมโทคอนเดรีย',
    o2: 'ต้องมี O₂',
    input: 'ไพรูเวต 2 โมเลกุล',
    output: 'Acetyl CoA 2 โมเลกุล, 2 CO₂, 2 NADH',
    atp: 0,
    note: 'ไพรูเวตถูกลำเลียงเข้าไมโทคอนเดรีย ปล่อย CO₂ ออก 1 อะตอมคาร์บอน แล้วต่อกับโคเอนไซม์ เอ',
  },
  {
    no: 3,
    name: 'วัฏจักรเครบส์',
    en: 'Krebs / Citric acid cycle',
    where: 'เมทริกซ์ไมโทคอนเดรีย',
    o2: 'ต้องมี O₂',
    input: 'Acetyl CoA 2 โมเลกุล',
    output: '4 CO₂, 6 NADH, 2 FADH₂',
    atp: 2,
    note: 'Acetyl CoA (2C) รวมกับออกซาโลแอซีเตต (4C) เป็นซิเตรต (6C) แล้วเกิดปฏิกิริยา 8 ขั้นตอนกลับมาเป็นออกซาโลแอซีเตต (หมุน 2 รอบต่อกลูโคส 1 โมเลกุล)',
  },
  {
    no: 4,
    name: 'ลูกโซ่ถ่ายทอดอิเล็กตรอน',
    en: 'Oxidative phosphorylation',
    where: 'เยื่อชั้นในไมโทคอนเดรีย',
    o2: 'O₂ เป็นตัวรับอิเล็กตรอนสุดท้าย',
    input: '10 NADH, 2 FADH₂, O₂',
    output: 'H₂O และ ATP จำนวนมาก',
    atp: 28,
    note: 'อิเล็กตรอนส่งผ่านโปรตีนเชิงซ้อน I–IV พร้อมปั๊ม H⁺ ไปสะสมในช่องระหว่างเยื่อ จากนั้น H⁺ ไหลกลับผ่าน ATP synthase เพื่อสร้าง ATP (เคมีออสโมซิส)',
  },
]

const totalAtp = stages.reduce((s, x) => s + x.atp, 0)

export function RespirationSection() {
  return (
    <Section
      id="respiration"
      number="08"
      eyebrow="การสร้างพลังงาน"
      title="การหายใจระดับเซลล์ (Cellular Respiration)"
      intro="เซลล์สลายสารอาหาร โดยเฉพาะกลูโคส เพื่อเก็บพลังงานไว้ในรูป ATP ซึ่งเป็น “สกุลเงินพลังงาน” ที่เซลล์ใช้ในทุกกิจกรรม ตั้งแต่การหดตัวของกล้ามเนื้อไปจนถึงการลำเลียงสารแบบใช้พลังงาน"
    >
      <div className="rounded-xl border border-border bg-card p-6 text-center">
        <p className="mb-2 text-sm text-muted-foreground">สมการรวมของการหายใจแบบใช้ออกซิเจน</p>
        <p className="font-serif text-xl font-semibold leading-relaxed md:text-2xl">
          C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + 6O<sub>2</sub>
          <span className="mx-3 text-accent">→</span>
          6CO<sub>2</sub> + 6H<sub>2</sub>O + พลังงาน (~30–32 ATP)
        </p>
      </div>

      <ol className="flex flex-col gap-4">
        {stages.map((s) => (
          <li key={s.no} className="grid gap-4 rounded-xl border border-border bg-card p-5 md:grid-cols-[auto_1fr_auto] md:items-start md:p-6">
            <span className="flex size-12 items-center justify-center rounded-full bg-primary font-serif text-xl font-semibold text-primary-foreground">
              {s.no}
            </span>
            <div className="flex flex-col gap-3">
              <div>
                <h3 className="font-serif text-xl font-semibold">
                  {s.name} <span className="font-sans text-sm font-normal text-muted-foreground">({s.en})</span>
                </h3>
                <div className="mt-2 flex flex-wrap gap-2 text-xs">
                  <span className="rounded-full bg-secondary px-2.5 py-0.5 font-medium text-secondary-foreground">{s.where}</span>
                  <span className="rounded-full border border-border px-2.5 py-0.5 text-muted-foreground">{sci(s.o2)}</span>
                </div>
              </div>
              <dl className="grid gap-2 text-sm sm:grid-cols-2">
                <div>
                  <dt className="font-medium text-muted-foreground">สารตั้งต้น</dt>
                  <dd>{sci(s.input)}</dd>
                </div>
                <div>
                  <dt className="font-medium text-muted-foreground">ผลผลิต</dt>
                  <dd>{sci(s.output)}</dd>
                </div>
              </dl>
              <p className="text-sm leading-relaxed text-foreground/80">{sci(s.note)}</p>
            </div>
            <div className="flex items-baseline gap-1 md:flex-col md:items-end">
              <span className="font-serif text-3xl font-semibold text-accent">{s.atp === 28 ? '~26–28' : s.atp}</span>
              <span className="text-xs text-muted-foreground">ATP</span>
            </div>
          </li>
        ))}
      </ol>

      <div className="flex flex-col gap-3 rounded-xl border border-border bg-card p-5 md:p-6">
        <p className="text-sm font-semibold">สัดส่วน ATP ที่ได้จากแต่ละขั้น (ต่อกลูโคส 1 โมเลกุล ≈ {totalAtp})</p>
        <div className="flex h-8 overflow-hidden rounded-full" role="img" aria-label="ATP ส่วนใหญ่ราว 87% ได้จากลูกโซ่ถ่ายทอดอิเล็กตรอน">
          {stages
            .filter((s) => s.atp > 0)
            .map((s, i) => (
              <div
                key={s.no}
                className={`flex items-center justify-center text-xs font-medium text-primary-foreground ${['bg-chart-4', 'bg-chart-3', 'bg-primary'][i]}`}
                style={{ width: `${(s.atp / totalAtp) * 100}%` }}
              >
                {s.atp}
              </div>
            ))}
        </div>
        <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5"><span className="size-2.5 rounded-full bg-chart-4" aria-hidden="true" />ไกลโคลิซิส</span>
          <span className="flex items-center gap-1.5"><span className="size-2.5 rounded-full bg-chart-3" aria-hidden="true" />วัฏจักรเครบส์</span>
          <span className="flex items-center gap-1.5"><span className="size-2.5 rounded-full bg-primary" aria-hidden="true" />ลูกโซ่ถ่ายทอดอิเล็กตรอน</span>
        </div>
      </div>

      <Prose>
        <p>
          ตำราเรียนรุ่นเก่ามักระบุว่าได้ 36–38 ATP แต่ข้อมูลปัจจุบันชี้ว่าได้ราว 30–32 ATP เพราะ NADH 1 โมเลกุลให้ ATP ประมาณ 2.5
          และ FADH₂ ให้ประมาณ 1.5 (ไม่ใช่ 3 และ 2) อีกทั้งเซลล์ต้องใช้พลังงานในการลำเลียง NADH จากไซโทซอลเข้าไมโทคอนเดรีย
        </p>
      </Prose>

      <div className="flex flex-col gap-4">
        <SubHeading>เมื่อไม่มีออกซิเจน: การหมัก (Fermentation)</SubHeading>
        <p className="max-w-3xl text-muted-foreground">
          {sci(
            'หากขาด O₂ ลูกโซ่ถ่ายทอดอิเล็กตรอนจะหยุด NAD⁺ ไม่ถูกสร้างกลับคืน ไกลโคลิซิสจึงหยุดตามไปด้วย การหมักช่วยสร้าง NAD⁺ กลับคืนเพื่อให้ไกลโคลิซิสดำเนินต่อได้ แต่ได้พลังงานเพียง 2 ATP ต่อกลูโคส',
          )}
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          <InfoCard title="การหมักกรดแล็กติก" tag="Lactic acid">
            <p>ไพรูเวต → กรดแล็กติก (ไม่ปล่อย CO₂)</p>
            <p>เกิดในเซลล์กล้ามเนื้อที่ทำงานหนักจนขาด O₂ และในแบคทีเรีย Lactobacillus ที่ใช้ทำโยเกิร์ต นมเปรี้ยว ผักดอง</p>
          </InfoCard>
          <InfoCard title="การหมักแอลกอฮอล์" tag="Alcoholic">
            <p>ไพรูเวต → แอซีทัลดีไฮด์ + CO₂ → เอทานอล</p>
            <p>เกิดในยีสต์ ใช้ผลิตเครื่องดื่มแอลกอฮอล์และทำให้ขนมปังฟู (จากฟองก๊าซ CO₂)</p>
          </InfoCard>
        </div>
      </div>

      <DeepDive title="ATP synthase: มอเตอร์หมุนที่เล็กที่สุดในธรรมชาติ">
        <p>
          Peter Mitchell เสนอทฤษฎีเคมีออสโมซิส (chemiosmosis) ในปี 1961 ว่า ATP ถูกสร้างจากพลังงานของเกรเดียนต์ H⁺
          ไม่ใช่จากปฏิกิริยาเคมีโดยตรง แนวคิดนี้ถูกต่อต้านอย่างหนักก่อนจะได้รับรางวัลโนเบลปี 1978
        </p>
        <p>
          ATP synthase ทำงานเหมือนกังหันน้ำ เมื่อ H⁺ ไหลผ่าน ส่วนแกนจะหมุนด้วยความเร็วกว่า 100 รอบต่อวินาที
          และทุกหนึ่งรอบสร้าง ATP ได้ 3 โมเลกุล ร่างกายมนุษย์สร้างและใช้ ATP รวมกันราวน้ำหนักตัวทุกวัน
        </p>
        <p>
          <strong className="font-semibold">ไซยาไนด์</strong> เป็นพิษร้ายแรงเพราะยับยั้งโปรตีนเชิงซ้อน IV (cytochrome c oxidase)
          ทำให้อิเล็กตรอนส่งต่อให้ O₂ ไม่ได้ ส่วน <strong className="font-semibold">ไขมันสีน้ำตาล</strong> ในทารกมีโปรตีน thermogenin
          ที่ปล่อยให้ H⁺ ไหลกลับโดยไม่ผ่าน ATP synthase พลังงานจึงกลายเป็นความร้อนแทน
        </p>
      </DeepDive>
    </Section>
  )
}
