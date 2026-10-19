import Image from 'next/image'
import { ArrowDown } from 'lucide-react'

const stats = [
  { value: '~37 ล้านล้าน', label: 'จำนวนเซลล์โดยประมาณในร่างกายมนุษย์ผู้ใหญ่' },
  { value: '200+', label: 'ชนิดของเซลล์ที่แตกต่างกันในร่างกายมนุษย์' },
  { value: '~3.5 พันล้านปี', label: 'อายุของหลักฐานเซลล์ที่เก่าแก่ที่สุดบนโลก' },
]

export function Hero() {
  return (
    <section id="top" className="mx-auto max-w-7xl px-4 pt-10 pb-16 md:px-8 md:pt-16 md:pb-20">
      <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-14">
        <div className="flex flex-col gap-6">
          <p className="w-fit rounded-full border border-primary/25 bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground">
            ชีววิทยา ม.4 – มหาวิทยาลัย · บทเรียนเชิงลึก
          </p>
          <h1 className="font-serif text-4xl font-bold leading-[1.25] text-balance md:text-6xl md:leading-[1.2]">
            เซลล์
            <span className="block text-primary">หน่วยพื้นฐานของสิ่งมีชีวิต</span>
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
            สำรวจโลกขนาดไมโครเมตรที่ซับซ้อนที่สุดในธรรมชาติ ตั้งแต่ประวัติการค้นพบ โครงสร้างของออร์แกเนลล์
            กลไกการลำเลียงสาร การสร้างพลังงาน ไปจนถึงการแบ่งเซลล์ พร้อมข้อมูลเชิงลึก
            การจำลองแบบโต้ตอบได้ และแบบทดสอบท้ายบท
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#theory"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              เริ่มเรียน
              <ArrowDown className="size-4" aria-hidden="true" />
            </a>
            <a
              href="#organelles"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-medium transition-colors hover:bg-secondary"
            >
              สำรวจออร์แกเนลล์
            </a>
          </div>
        </div>

        <figure className="relative">
          <div className="overflow-hidden rounded-2xl border border-border bg-card">
            <Image
              src="/images/hero-cells.png"
              alt="ภาพเซลล์พืชภายใต้กล้องจุลทรรศน์ เห็นผนังเซลล์ นิวเคลียส และเซลล์ที่กำลังแบ่งตัว"
              width={1408}
              height={768}
              priority
              className="h-auto w-full"
            />
          </div>
          <figcaption className="mt-3 text-sm text-muted-foreground">
            เซลล์พืชที่ย้อมสี — สังเกตเซลล์ตรงกลางที่กำลังอยู่ในระยะแอนาเฟสของไมโทซิส
          </figcaption>
        </figure>
      </div>

      <dl className="mt-14 grid gap-6 border-t border-border pt-8 sm:grid-cols-3">
        {stats.map((s) => (
          <div key={s.label} className="flex flex-col gap-1">
            <dt className="order-2 text-sm text-muted-foreground">{s.label}</dt>
            <dd className="order-1 font-serif text-3xl font-semibold text-primary">{s.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
