import { sci } from '../sci'
import { DeepDive, InfoCard, Section, SubHeading } from '../section-shell'

const stages = [
  {
    step: 'Reception',
    th: 'การรับสัญญาณ',
    body: 'โมเลกุลสัญญาณ (ligand) เช่น ฮอร์โมน จับกับโปรตีนตัวรับ (receptor) อย่างจำเพาะ คล้ายกุญแจกับแม่กุญแจ ทำให้รูปร่างของตัวรับเปลี่ยนไป',
  },
  {
    step: 'Transduction',
    th: 'การถ่ายทอดสัญญาณ',
    body: 'สัญญาณถูกแปลงและส่งต่อเป็นลำดับขั้นภายในเซลล์ (signal cascade) มักผ่านการเติมหมู่ฟอสเฟตให้โปรตีน (phosphorylation) และโมเลกุลนำสัญญาณที่สอง เช่น cAMP, Ca²⁺, IP₃ ซึ่งช่วยขยายสัญญาณ',
  },
  {
    step: 'Response',
    th: 'การตอบสนอง',
    body: 'เซลล์ตอบสนองต่อสัญญาณ เช่น กระตุ้นเอนไซม์ เปิดช่องไอออน เปลี่ยนแปลงการแสดงออกของยีน หรือเริ่มการแบ่งเซลล์',
  },
]

const types = [
  { title: 'การสัมผัสโดยตรง', tag: 'Direct contact', body: 'สารผ่านช่องเชื่อมระหว่างเซลล์ — gap junction ในสัตว์ และ plasmodesmata ในพืช หรือโมเลกุลที่ผิวเซลล์สัมผัสกันโดยตรง เช่น การจดจำของเซลล์ภูมิคุ้มกัน' },
  { title: 'สัญญาณเฉพาะที่', tag: 'Paracrine', body: 'เซลล์หลั่งสารควบคุมเฉพาะที่ (local regulator) ไปกระตุ้นเซลล์ข้างเคียง เช่น growth factor และ histamine' },
  { title: 'สัญญาณผ่านไซแนปส์', tag: 'Synaptic', body: 'เซลล์ประสาทหลั่งสารสื่อประสาทข้ามช่องไซแนปส์ไปยังเซลล์เป้าหมายที่อยู่ใกล้กันมาก ส่งสัญญาณได้รวดเร็ว' },
  { title: 'สัญญาณระยะไกล', tag: 'Endocrine', body: 'ต่อมไร้ท่อหลั่งฮอร์โมนเข้าสู่กระแสเลือดไปยังเซลล์เป้าหมายทั่วร่างกาย เช่น อินซูลินและอะดรีนาลิน ในพืชมีฮอร์โมนเช่น ออกซินและเอทิลีน' },
]

const receptors = [
  { name: 'G protein-coupled receptor (GPCR)', body: 'ตัวรับกลุ่มใหญ่ที่สุดในเยื่อหุ้ม เมื่อถูกกระตุ้นจะกระตุ้น G protein ต่อ เกี่ยวข้องกับการมองเห็น การรับกลิ่น และฮอร์โมนหลายชนิด ยาที่ใช้ในปัจจุบันราว 1 ใน 3 ออกฤทธิ์ที่ GPCR' },
  { name: 'Receptor tyrosine kinase (RTK)', body: 'จับคู่กันเมื่อมีโมเลกุลสัญญาณมาจับ แล้วเติมฟอสเฟตให้กันเอง กระตุ้นหลายเส้นทางพร้อมกัน เช่น ตัวรับอินซูลินและ growth factor หาก RTK ทำงานตลอดเวลาอาจนำไปสู่มะเร็ง' },
  { name: 'Ligand-gated ion channel', body: 'ช่องไอออนที่เปิด-ปิดเมื่อมีโมเลกุลสัญญาณมาจับ สำคัญมากในระบบประสาท เช่น ตัวรับแอซิทิลโคลีนที่กล้ามเนื้อ' },
  { name: 'ตัวรับภายในเซลล์', body: 'โมเลกุลสัญญาณที่ละลายในลิพิด เช่น ฮอร์โมนสเตอรอยด์ (เทสโทสเตอโรน เอสโตรเจน) แพร่ผ่านเยื่อหุ้มเข้าไปจับตัวรับในไซโทพลาซึมหรือนิวเคลียส แล้วควบคุมการถอดรหัสยีนโดยตรง' },
]

export function SignalingSection() {
  return (
    <Section
      id="signaling"
      number="07"
      eyebrow="Cell Signaling"
      title="การสื่อสารระหว่างเซลล์"
      intro="เซลล์ในสิ่งมีชีวิตหลายเซลล์ต้องทำงานประสานกันอย่างแม่นยำ ผ่านกระบวนการรับ-ส่งสัญญาณเคมี ซึ่ง Earl Sutherland ศึกษาจากการทำงานของฮอร์โมนอะดรีนาลินและได้รับรางวัลโนเบลปี 1971"
    >
      <ol className="grid gap-4 md:grid-cols-3">
        {stages.map((s, i) => (
          <li key={s.step} className="flex flex-col gap-3 rounded-xl border border-border bg-card p-6">
            <div className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-full bg-primary font-serif text-lg font-semibold text-primary-foreground">
                {i + 1}
              </span>
              <div>
                <p className="font-serif text-lg font-semibold">{s.th}</p>
                <p className="text-xs text-muted-foreground">{s.step}</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-foreground/85">{sci(s.body)}</p>
          </li>
        ))}
      </ol>

      <div className="flex flex-col gap-4">
        <SubHeading>รูปแบบการส่งสัญญาณตามระยะทาง</SubHeading>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {types.map((t) => (
            <InfoCard key={t.title} title={t.title} tag={t.tag}>
              <p>{t.body}</p>
            </InfoCard>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <SubHeading>ชนิดของโปรตีนตัวรับ</SubHeading>
        <dl className="grid gap-x-8 gap-y-5 rounded-xl border border-border bg-card p-6 md:grid-cols-2">
          {receptors.map((r) => (
            <div key={r.name} className="flex flex-col gap-1.5">
              <dt className="font-semibold text-primary">{r.name}</dt>
              <dd className="text-sm leading-relaxed text-foreground/85">{r.body}</dd>
            </div>
          ))}
        </dl>
      </div>

      <DeepDive title="การขยายสัญญาณ: อะดรีนาลิน 1 โมเลกุล ปลดปล่อยกลูโคสนับร้อยล้าน">
        <p>
          เมื่อตกใจ ต่อมหมวกไตหลั่งอะดรีนาลิน (epinephrine) ซึ่งจับกับ GPCR บนเซลล์ตับ
          G protein กระตุ้นเอนไซม์ adenylyl cyclase ให้สร้าง cAMP จำนวนมาก cAMP กระตุ้น protein kinase A
          ซึ่งกระตุ้นเอนไซม์ต่อเป็นทอด ๆ จนถึง glycogen phosphorylase ที่ย่อยไกลโคเจน
        </p>
        <p>
          เนื่องจากเอนไซม์แต่ละขั้นกระตุ้นโมเลกุลขั้นถัดไปได้หลายโมเลกุล อะดรีนาลินเพียง 1 โมเลกุลจึงนำไปสู่การปล่อย
          กลูโคส-1-ฟอสเฟตได้ถึงราว 10<sup>8</sup> โมเลกุล ให้พลังงานแก่กล้ามเนื้อสำหรับ “สู้หรือหนี” ภายในไม่กี่วินาที
        </p>
        <p>
          ในทางกลับกัน <strong className="font-semibold">สารพิษอหิวาตกโรค</strong> ดัดแปลง G protein ให้ค้างอยู่ในสภาพทำงานตลอดเวลา
          เซลล์ลำไส้จึงสร้าง cAMP ไม่หยุดและหลั่ง Cl⁻ กับน้ำออกมามหาศาล เกิดอาการท้องร่วงรุนแรง
        </p>
      </DeepDive>
    </Section>
  )
}
