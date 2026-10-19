import { DeepDive, Prose, Section, SubHeading } from '../section-shell'

const timeline = [
  {
    year: '1665',
    who: 'โรเบิร์ต ฮุก (Robert Hooke)',
    what: 'ส่องไม้คอร์กด้วยกล้องจุลทรรศน์ที่ประดิษฐ์เอง เห็นช่องเล็ก ๆ คล้ายห้อง จึงเรียกว่า "cell" และตีพิมพ์ในหนังสือ Micrographia — แต่สิ่งที่เห็นคือผนังเซลล์ที่ตายแล้วเท่านั้น',
  },
  {
    year: '1674',
    who: 'อันโทนี ฟาน เลเวนฮุก (Antonie van Leeuwenhoek)',
    what: 'ใช้เลนส์เดี่ยวกำลังขยายราว 270 เท่า เป็นคนแรกที่เห็นเซลล์ที่มีชีวิต เช่น แบคทีเรีย โพรโทซัว และอสุจิ เรียกว่า "animalcules"',
  },
  {
    year: '1831',
    who: 'โรเบิร์ต บราวน์ (Robert Brown)',
    what: 'ค้นพบโครงสร้างกลมทึบในเซลล์กล้วยไม้ และตั้งชื่อว่า "นิวเคลียส" (nucleus)',
  },
  {
    year: '1838',
    who: 'มัทธีอัส ชไลเดน (Matthias Schleiden)',
    what: 'นักพฤกษศาสตร์ชาวเยอรมัน สรุปว่า "พืชทุกชนิดประกอบด้วยเซลล์"',
  },
  {
    year: '1839',
    who: 'เทโอดอร์ ชวันน์ (Theodor Schwann)',
    what: 'นักสัตววิทยา สรุปว่า "สัตว์ทุกชนิดประกอบด้วยเซลล์" และร่วมกับชไลเดนวางรากฐานทฤษฎีเซลล์',
  },
  {
    year: '1855',
    who: 'รูดอล์ฟ วีร์โชว์ (Rudolf Virchow)',
    what: 'เสนอ "Omnis cellula e cellula" — เซลล์ทุกเซลล์เกิดจากเซลล์ที่มีอยู่ก่อน (ต่อยอดจากงานของ Robert Remak) หักล้างแนวคิด spontaneous generation',
  },
  {
    year: '1931',
    who: 'เอิร์นสท์ รุสกา และ มักซ์ นอลล์',
    what: 'สร้างกล้องจุลทรรศน์อิเล็กตรอนเครื่องแรก ทำให้มองเห็นโครงสร้างภายในเซลล์ระดับนาโนเมตร (รุสกาได้รางวัลโนเบล ค.ศ. 1986)',
  },
  {
    year: '1967',
    who: 'ลินน์ มาร์กูลิส (Lynn Margulis)',
    what: 'ผลักดันทฤษฎีเอนโดซิมไบโอซิส อธิบายว่าไมโทคอนเดรียและคลอโรพลาสต์มีต้นกำเนิดจากแบคทีเรียที่อาศัยอยู่ในเซลล์อื่น',
  },
  {
    year: '1972',
    who: 'ซิงเกอร์ และ นิโคลสัน (Singer & Nicolson)',
    what: 'เสนอแบบจำลองฟลูอิดโมเซก (fluid mosaic model) ของเยื่อหุ้มเซลล์ ซึ่งยังใช้อธิบายมาจนถึงปัจจุบัน',
  },
]

const principles = [
  {
    title: 'สิ่งมีชีวิตทุกชนิดประกอบด้วยเซลล์',
    body: 'อาจเป็นเซลล์เดียว (unicellular) เช่น แบคทีเรีย อะมีบา หรือหลายเซลล์ (multicellular) เช่น พืช สัตว์ และมนุษย์',
  },
  {
    title: 'เซลล์เป็นหน่วยพื้นฐานของโครงสร้างและการทำงาน',
    body: 'กิจกรรมของชีวิตทั้งหมด ทั้งเมแทบอลิซึม การตอบสนอง และการสืบพันธุ์ เกิดขึ้นในระดับเซลล์',
  },
  {
    title: 'เซลล์เกิดจากเซลล์ที่มีอยู่ก่อน',
    body: 'เซลล์ใหม่เกิดจากการแบ่งเซลล์เดิมเท่านั้น โดยถ่ายทอดสารพันธุกรรม (DNA) ไปยังเซลล์รุ่นถัดไป',
  },
]

export function TheorySection() {
  return (
    <Section
      id="theory"
      number="01"
      eyebrow="ประวัติและแนวคิดพื้นฐาน"
      title="ทฤษฎีเซลล์ (Cell Theory)"
      intro="ทฤษฎีเซลล์เป็นหนึ่งในแนวคิดรากฐานของชีววิทยาสมัยใหม่ เกิดจากการสะสมหลักฐานของนักวิทยาศาสตร์หลายรุ่นตลอดเกือบ 200 ปี และพัฒนาไปพร้อมกับเทคโนโลยีกล้องจุลทรรศน์"
    >
      <div className="grid gap-4 md:grid-cols-3">
        {principles.map((p, i) => (
          <div key={p.title} className="flex flex-col gap-3 rounded-xl border border-border bg-card p-6">
            <span className="flex size-10 items-center justify-center rounded-full bg-primary font-serif text-lg font-semibold text-primary-foreground">
              {i + 1}
            </span>
            <h3 className="font-serif text-lg font-semibold leading-snug">{p.title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{p.body}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-6">
        <SubHeading>เส้นเวลาของการค้นพบ</SubHeading>
        <ol className="relative flex flex-col gap-0 border-l-2 border-primary/25 pl-6 md:pl-8">
          {timeline.map((t) => (
            <li key={t.year} className="relative pb-8 last:pb-0">
              <span
                aria-hidden="true"
                className="absolute top-1.5 -left-[33px] size-4 rounded-full border-4 border-background bg-primary md:-left-[41px]"
              />
              <p className="font-serif text-2xl font-semibold text-accent">{t.year}</p>
              <p className="mt-1 font-medium">{t.who}</p>
              <p className="mt-1 max-w-2xl leading-relaxed text-muted-foreground">{t.what}</p>
            </li>
          ))}
        </ol>
      </div>

      <Prose>
        <SubHeading>ทฤษฎีเซลล์สมัยใหม่</SubHeading>
        <p>
          เมื่อความรู้ด้านชีวเคมีและพันธุศาสตร์ก้าวหน้าขึ้น ทฤษฎีเซลล์จึงได้รับการขยายเพิ่มเติม ได้แก่
        </p>
        <ul className="ml-5 list-disc space-y-2">
          <li>เซลล์มีสารพันธุกรรม (DNA) ที่ถ่ายทอดจากเซลล์หนึ่งไปสู่อีกเซลล์หนึ่งในระหว่างการแบ่งเซลล์</li>
          <li>เซลล์ทุกชนิดมีองค์ประกอบทางเคมีพื้นฐานคล้ายกัน คือ คาร์โบไฮเดรต ลิพิด โปรตีน และกรดนิวคลีอิก</li>
          <li>การไหลของพลังงาน (เมแทบอลิซึมและชีวเคมี) ของสิ่งมีชีวิตเกิดขึ้นภายในเซลล์</li>
        </ul>
      </Prose>

      <DeepDive title="ไวรัสเป็นข้อยกเว้นของทฤษฎีเซลล์หรือไม่?">
        <p>
          ไวรัสไม่มีโครงสร้างเป็นเซลล์ ไม่มีไรโบโซม และไม่สามารถสร้างพลังงานหรือเพิ่มจำนวนได้ด้วยตนเอง
          ต้องอาศัยกลไกของเซลล์เจ้าบ้าน นักชีววิทยาส่วนใหญ่จึงไม่จัดไวรัสเป็นสิ่งมีชีวิตในความหมายดั้งเดิม
          และไม่ถือว่าเป็นข้อขัดแย้งกับทฤษฎีเซลล์
        </p>
        <p>
          อย่างไรก็ตาม การค้นพบไวรัสยักษ์ (giant viruses) เช่น Mimivirus ซึ่งมีขนาดใหญ่กว่าแบคทีเรียบางชนิด
          และมียีนเกี่ยวกับการแปลรหัสโปรตีนบางส่วน ทำให้เส้นแบ่งระหว่าง “มีชีวิต” กับ “ไม่มีชีวิต” ยังเป็นประเด็นที่ถกเถียงกันอยู่
        </p>
      </DeepDive>
    </Section>
  )
}
