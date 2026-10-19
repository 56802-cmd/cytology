'use client'

import { Search } from 'lucide-react'
import { useState } from 'react'

const terms = [
  { th: 'อะพอพโทซิส', en: 'Apoptosis', def: 'การตายของเซลล์แบบมีโปรแกรม เซลล์ทำลายตัวเองอย่างเป็นระเบียบโดยไม่ก่อการอักเสบ' },
  { th: 'ออโตฟาจี', en: 'Autophagy', def: 'กระบวนการที่เซลล์ย่อยสลายองค์ประกอบของตัวเองผ่านไลโซโซมเพื่อนำกลับมาใช้ใหม่' },
  { th: 'เซนโทรเมียร์', en: 'Centromere', def: 'ตำแหน่งคอดบนโครโมโซมที่ยึดซิสเตอร์โครมาทิดไว้ด้วยกัน และเป็นที่ตั้งของไคนีโทคอร์' },
  { th: 'โครมาทิน', en: 'Chromatin', def: 'สารพันธุกรรมในนิวเคลียสที่ประกอบด้วย DNA พันรอบโปรตีนฮิสโตน' },
  { th: 'คริสตี', en: 'Cristae', def: 'รอยพับของเยื่อชั้นในไมโทคอนเดรีย เพิ่มพื้นที่ผิวให้ลูกโซ่ถ่ายทอดอิเล็กตรอน' },
  { th: 'ครอสซิงโอเวอร์', en: 'Crossing over', def: 'การแลกเปลี่ยนชิ้นส่วนระหว่างโครมาทิดของฮอมอโลกัสโครโมโซมในโพรเฟส I' },
  { th: 'ไซโทซอล', en: 'Cytosol', def: 'ของเหลวกึ่งเจลในไซโทพลาซึม ไม่รวมออร์แกเนลล์' },
  { th: 'ดิพลอยด์', en: 'Diploid (2n)', def: 'เซลล์ที่มีโครโมโซมเป็นคู่ครบชุด เช่น เซลล์ร่างกายมนุษย์ (46 แท่ง)' },
  { th: 'เอนโดไซโทซิส', en: 'Endocytosis', def: 'การนำสารเข้าเซลล์โดยเยื่อหุ้มเซลล์เว้าเข้าห่อหุ้มสารเป็นเวสิเคิล' },
  { th: 'ฮาพลอยด์', en: 'Haploid (n)', def: 'เซลล์ที่มีโครโมโซมเพียงชุดเดียว เช่น เซลล์ไข่และอสุจิ (23 แท่ง)' },
  { th: 'ฮอมอโลกัสโครโมโซม', en: 'Homologous chromosomes', def: 'โครโมโซมคู่ที่มีขนาด รูปร่าง และตำแหน่งยีนเหมือนกัน แท่งหนึ่งมาจากแม่ อีกแท่งมาจากพ่อ' },
  { th: 'ไคนีโทคอร์', en: 'Kinetochore', def: 'โครงสร้างโปรตีนที่เซนโทรเมียร์ สำหรับยึดกับเส้นใยสปินเดิล' },
  { th: 'ออร์แกเนลล์', en: 'Organelle', def: 'โครงสร้างภายในเซลล์ที่ทำหน้าที่เฉพาะ มักมีเยื่อหุ้มล้อมรอบ' },
  { th: 'ออสโมซิส', en: 'Osmosis', def: 'การแพร่ของน้ำผ่านเยื่อเลือกผ่าน จากบริเวณที่มีศักย์ของน้ำสูงไปต่ำ' },
  { th: 'พลาสโมไลซิส', en: 'Plasmolysis', def: 'ภาวะที่เยื่อหุ้มเซลล์พืชหดตัวแยกออกจากผนังเซลล์ เมื่ออยู่ในสารละลายไฮเพอร์โทนิก' },
  { th: 'พลาสโมเดสมาตา', en: 'Plasmodesmata', def: 'ช่องทะลุผนังเซลล์พืชที่เชื่อมไซโทพลาซึมของเซลล์ข้างเคียง' },
  { th: 'ซิสเตอร์โครมาทิด', en: 'Sister chromatids', def: 'โครมาทิดสองเส้นที่เกิดจากการจำลอง DNA เหมือนกันทุกประการ ยึดกันที่เซนโทรเมียร์' },
  { th: 'เส้นใยสปินเดิล', en: 'Spindle fibers', def: 'ไมโครทิวบูลที่ดึงโครโมโซมแยกไปยังขั้วเซลล์ระหว่างการแบ่งเซลล์' },
  { th: 'ไทลาคอยด์', en: 'Thylakoid', def: 'ถุงเยื่อแบนในคลอโรพลาสต์ เป็นที่เกิดปฏิกิริยาแสงของการสังเคราะห์ด้วยแสง' },
  { th: 'แรงดันเต่ง', en: 'Turgor pressure', def: 'แรงดันที่โพรโทพลาสต์ดันผนังเซลล์พืช เมื่อแวคิวโอลได้รับน้ำเต็มที่' },
]

export function Glossary() {
  const [query, setQuery] = useState('')
  const q = query.trim().toLowerCase()
  const filtered = q
    ? terms.filter((t) => t.th.includes(q) || t.en.toLowerCase().includes(q) || t.def.includes(q))
    : terms

  return (
    <div className="flex flex-col gap-5">
      <div className="relative max-w-md">
        <Search className="pointer-events-none absolute top-1/2 left-3.5 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
        <label htmlFor="glossary-search" className="sr-only">
          ค้นหาคำศัพท์
        </label>
        <input
          id="glossary-search"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="ค้นหาคำศัพท์ไทยหรืออังกฤษ..."
          className="w-full rounded-full border border-input bg-card py-2.5 pr-4 pl-10 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
        />
      </div>
      <p className="text-sm text-muted-foreground" aria-live="polite">
        พบ {filtered.length} คำ
      </p>
      <dl className="grid gap-x-8 gap-y-0 md:grid-cols-2">
        {filtered.map((t) => (
          <div key={t.en} className="border-b border-border py-4">
            <dt className="flex flex-wrap items-baseline gap-x-2">
              <span className="font-serif text-lg font-semibold">{t.th}</span>
              <span className="text-sm italic text-muted-foreground">{t.en}</span>
            </dt>
            <dd className="mt-1 text-sm leading-relaxed text-foreground/85">{t.def}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}
