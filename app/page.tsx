import { Glossary } from '@/components/learning/glossary'
import { Hero } from '@/components/learning/hero'
import { Quiz } from '@/components/learning/quiz'
import { Section } from '@/components/learning/section-shell'
import { DivisionSection } from '@/components/learning/sections/division-section'
import { MembraneSection } from '@/components/learning/sections/membrane-section'
import { MicroscopeSection } from '@/components/learning/sections/microscope-section'
import { OrganellesSection } from '@/components/learning/sections/organelles-section'
import { RespirationSection } from '@/components/learning/sections/respiration-section'
import { SignalingSection } from '@/components/learning/sections/signaling-section'
import { TheorySection } from '@/components/learning/sections/theory-section'
import { TransportSection } from '@/components/learning/sections/transport-section'
import { TypesSection } from '@/components/learning/sections/types-section'
import { SiteFooter } from '@/components/learning/site-footer'
import { SiteHeader } from '@/components/learning/site-header'
import { TableOfContents } from '@/components/learning/toc'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <div className="mx-auto grid max-w-7xl gap-10 px-4 md:px-8 lg:grid-cols-[200px_minmax(0,1fr)] lg:gap-14">
          <aside className="hidden lg:block">
            <TableOfContents />
          </aside>
          <div className="min-w-0">
            <TheorySection />
            <MicroscopeSection />
            <TypesSection />
            <OrganellesSection />
            <MembraneSection />
            <TransportSection />
            <SignalingSection />
            <RespirationSection />
            <DivisionSection />
            <Section
              id="quiz"
              number="10"
              eyebrow="ทดสอบความเข้าใจ"
              title="แบบทดสอบท้ายบท"
              intro="ตอบคำถาม 12 ข้อครอบคลุมทุกหัวข้อ แต่ละข้อจะเฉลยพร้อมคำอธิบายทันทีหลังเลือกคำตอบ"
            >
              <Quiz />
            </Section>
            <Section
              id="glossary"
              number="11"
              eyebrow="คำศัพท์สำคัญ"
              title="อภิธานศัพท์"
              intro="รวมคำศัพท์ทางชีววิทยาที่ควรรู้ในบทเรียนเรื่องเซลล์ พร้อมคำภาษาอังกฤษ"
            >
              <Glossary />
            </Section>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
