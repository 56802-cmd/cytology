'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import { type ReactNode, useState } from 'react'
import { cn } from '@/lib/utils'

const colors = ['stroke-accent', 'stroke-chart-3', 'stroke-accent', 'stroke-chart-3']

function Chromosome({ x, y, i }: { x: number; y: number; i: number }) {
  return (
    <g className={cn(colors[i % 4])} strokeWidth={3.5} strokeLinecap="round" fill="none">
      <path d={`M${x - 5},${y - 9} Q${x},${y} ${x - 5},${y + 9}`} />
      <path d={`M${x + 5},${y - 9} Q${x},${y} ${x + 5},${y + 9}`} />
    </g>
  )
}

function Chromatid({ x, y, i, toLeft }: { x: number; y: number; i: number; toLeft: boolean }) {
  const d = toLeft ? `M${x + 7},${y - 7} L${x},${y} L${x + 7},${y + 7}` : `M${x - 7},${y - 7} L${x},${y} L${x - 7},${y + 7}`
  return <path d={d} className={cn(colors[i % 4])} strokeWidth={3.5} strokeLinecap="round" strokeLinejoin="round" fill="none" />
}

function Pole({ x, y }: { x: number; y: number }) {
  return (
    <g>
      {[-60, -30, 0, 30, 60, 120, 150, 180, 210, 240].map((a) => {
        const r = (a * Math.PI) / 180
        return (
          <line
            key={a}
            x1={x}
            y1={y}
            x2={x + Math.cos(r) * 10}
            y2={y + Math.sin(r) * 10}
            className="stroke-primary/40"
            strokeWidth={1}
          />
        )
      })}
      <circle cx={x} cy={y} r={3.5} className="fill-primary" />
    </g>
  )
}

function Spindle({ targets }: { targets: { x: number; y: number }[] }) {
  return (
    <g className="stroke-primary/35" strokeWidth={1}>
      {targets.map((t, i) => (
        <line key={i} x1={t.x < 100 ? 40 : 160} y1={80} x2={t.x} y2={t.y} />
      ))}
    </g>
  )
}

function Nucleus({ cx, cy, r, dashed }: { cx: number; cy: number; r: number; dashed?: boolean }) {
  return (
    <circle
      cx={cx}
      cy={cy}
      r={r}
      className="fill-chart-4/15 stroke-chart-4"
      strokeWidth={2}
      strokeDasharray={dashed ? '5 5' : undefined}
    />
  )
}

function Chromatin({ cx, cy }: { cx: number; cy: number }) {
  return (
    <g className="stroke-accent/60" strokeWidth={1.2} fill="none">
      <path d={`M${cx - 14},${cy - 6} q6,-8 12,0 t12,0`} />
      <path d={`M${cx - 12},${cy + 8} q5,6 10,0 t12,0`} />
      <path d={`M${cx - 4},${cy - 14} q4,6 0,12`} />
    </g>
  )
}

const cellClass = 'fill-primary/10 stroke-primary'

const phases: {
  name: string
  en: string
  chromosomes: string
  dna: string
  body: string
  points: string[]
  art: ReactNode
}[] = [
  {
    name: 'อินเตอร์เฟส',
    en: 'Interphase',
    chromosomes: '46',
    dna: '2C → 4C',
    body: 'ไม่ใช่ระยะพัก แต่เป็นระยะที่เซลล์เติบโตและเตรียมพร้อมมากที่สุด ใช้เวลาราว 90% ของวัฏจักรเซลล์',
    points: [
      'G1: เซลล์เติบโต สร้างโปรตีนและออร์แกเนลล์',
      'S: จำลอง DNA โครโมโซมแต่ละแท่งมี 2 โครมาทิด',
      'G2: สร้างโปรตีนสำหรับการแบ่ง จำลองเซนโทรโซม',
      'โครโมโซมยังเป็นเส้นใยโครมาทินบาง ๆ มองไม่เห็นเป็นแท่ง',
    ],
    art: (
      <>
        <circle cx={100} cy={80} r={65} className={cellClass} strokeWidth={2.5} />
        <Nucleus cx={100} cy={80} r={30} />
        <circle cx={108} cy={74} r={6} className="fill-chart-4/60" />
        <Chromatin cx={98} cy={84} />
        <circle cx={140} cy={42} r={3} className="fill-primary" />
        <circle cx={146} cy={46} r={3} className="fill-primary" />
      </>
    ),
  },
  {
    name: 'โพรเฟส',
    en: 'Prophase',
    chromosomes: '46',
    dna: '4C',
    body: 'โครมาทินขดตัวแน่นจนเห็นเป็นแท่งโครโมโซม แต่ละแท่งมีซิสเตอร์โครมาทิด 2 เส้นติดกันที่เซนโทรเมียร์',
    points: [
      'นิวคลีโอลัสหายไป เยื่อหุ้มนิวเคลียสเริ่มสลาย (โพรเมทาเฟส)',
      'เซนโทรโซมเคลื่อนไปยังขั้วตรงข้ามของเซลล์',
      'เริ่มสร้างเส้นใยสปินเดิลจากไมโครทิวบูล',
      'ไคนีโทคอร์ที่เซนโทรเมียร์เริ่มจับกับเส้นใยสปินเดิล',
    ],
    art: (
      <>
        <circle cx={100} cy={80} r={65} className={cellClass} strokeWidth={2.5} />
        <Nucleus cx={100} cy={80} r={32} dashed />
        <Chromosome x={88} y={68} i={0} />
        <Chromosome x={113} y={70} i={1} />
        <Chromosome x={90} y={94} i={2} />
        <Chromosome x={112} y={93} i={3} />
        <Pole x={50} y={80} />
        <Pole x={150} y={80} />
      </>
    ),
  },
  {
    name: 'เมทาเฟส',
    en: 'Metaphase',
    chromosomes: '46',
    dna: '4C',
    body: 'โครโมโซมขดตัวสั้นที่สุดและเรียงตัวอยู่กลางเซลล์บนแนวเมทาเฟสเพลต (metaphase plate) — ระยะที่เหมาะที่สุดสำหรับศึกษาจำนวนและรูปร่างโครโมโซม (karyotype)',
    points: [
      'เส้นใยสปินเดิลจากทั้งสองขั้วยึดไคนีโทคอร์ของซิสเตอร์โครมาทิดแต่ละด้าน',
      'จุดตรวจสอบ M (spindle checkpoint) ตรวจว่าโครโมโซมทุกแท่งยึดกับสปินเดิลถูกต้อง',
    ],
    art: (
      <>
        <circle cx={100} cy={80} r={65} className={cellClass} strokeWidth={2.5} />
        <line x1={100} y1={22} x2={100} y2={138} className="stroke-foreground/25" strokeDasharray="3 4" />
        <Spindle
          targets={[44, 68, 92, 116].flatMap((y) => [
            { x: 96, y },
            { x: 104, y },
          ])}
        />
        {[44, 68, 92, 116].map((y, i) => (
          <Chromosome key={y} x={100} y={y} i={i} />
        ))}
        <Pole x={40} y={80} />
        <Pole x={160} y={80} />
      </>
    ),
  },
  {
    name: 'แอนาเฟส',
    en: 'Anaphase',
    chromosomes: '92',
    dna: '4C',
    body: 'ระยะที่สั้นที่สุด โปรตีนโคฮีซิน (cohesin) ที่ยึดซิสเตอร์โครมาทิดถูกตัด ซิสเตอร์โครมาทิดแยกออกจากกันและถูกดึงไปยังขั้วเซลล์ตรงข้าม',
    points: [
      'เมื่อแยกกันแล้ว โครมาทิดแต่ละเส้นนับเป็น 1 โครโมโซม จำนวนโครโมโซมจึงเพิ่มเป็นสองเท่าชั่วคราว',
      'เส้นใยสปินเดิลที่ยึดไคนีโทคอร์หดสั้น ส่วนเส้นใยที่ไม่ยึดยืดยาวขึ้น ดันให้เซลล์ยืดออก',
    ],
    art: (
      <>
        <ellipse cx={100} cy={80} rx={74} ry={60} className={cellClass} strokeWidth={2.5} />
        <Spindle
          targets={[50, 68, 92, 110].flatMap((y) => [
            { x: 70, y },
            { x: 130, y },
          ])}
        />
        {[50, 68, 92, 110].map((y, i) => (
          <g key={y}>
            <Chromatid x={70} y={y} i={i} toLeft />
            <Chromatid x={130} y={y} i={i} toLeft={false} />
          </g>
        ))}
        <Pole x={40} y={80} />
        <Pole x={160} y={80} />
      </>
    ),
  },
  {
    name: 'เทโลเฟส',
    en: 'Telophase',
    chromosomes: '46 (ต่อขั้ว)',
    dna: '2C (ต่อขั้ว)',
    body: 'โครโมโซมมาถึงขั้วเซลล์และเริ่มคลายตัวเป็นโครมาทิน เยื่อหุ้มนิวเคลียสและนิวคลีโอลัสกลับมาปรากฏ ได้ 2 นิวเคลียสที่มีสารพันธุกรรมเหมือนกันทุกประการ',
    points: [
      'เส้นใยสปินเดิลสลายตัว',
      'มักเกิดพร้อมกับการเริ่มแบ่งไซโทพลาซึม',
    ],
    art: (
      <>
        <path
          d="M100,26 C60,18 18,40 18,80 C18,120 60,142 100,134 C140,142 182,120 182,80 C182,40 140,18 100,26 Z"
          className={cellClass}
          strokeWidth={2.5}
        />
        <path d="M100,26 L100,40 M100,134 L100,120" className="stroke-primary" strokeWidth={3} />
        <Nucleus cx={60} cy={80} r={22} />
        <Nucleus cx={140} cy={80} r={22} />
        <Chromatin cx={60} cy={80} />
        <Chromatin cx={140} cy={80} />
      </>
    ),
  },
  {
    name: 'ไซโทไคนีซิส',
    en: 'Cytokinesis',
    chromosomes: '46 (ต่อเซลล์)',
    dna: '2C (ต่อเซลล์)',
    body: 'การแบ่งไซโทพลาซึมได้ 2 เซลล์ลูกที่มีจำนวนโครโมโซมเท่ากับเซลล์แม่ (2n → 2n)',
    points: [
      'เซลล์สัตว์: วงแหวนแอกทิน-ไมโอซินหดตัว เกิดร่องแบ่ง (cleavage furrow) คอดเข้าจากด้านนอก',
      'เซลล์พืช: เวสิเคิลจากกอลจิรวมกันกลางเซลล์เป็นเซลล์เพลต (cell plate) แล้วขยายออกด้านข้างจนเป็นผนังเซลล์ใหม่',
    ],
    art: (
      <>
        <circle cx={55} cy={80} r={44} className={cellClass} strokeWidth={2.5} />
        <circle cx={145} cy={80} r={44} className={cellClass} strokeWidth={2.5} />
        <Nucleus cx={55} cy={80} r={20} />
        <Nucleus cx={145} cy={80} r={20} />
        <Chromatin cx={55} cy={80} />
        <Chromatin cx={145} cy={80} />
      </>
    ),
  },
]

export function MitosisStepper() {
  const [index, setIndex] = useState(0)
  const phase = phases[index]

  return (
    <div className="flex flex-col gap-5 rounded-2xl border border-border bg-card p-5 md:p-8">
      <ol className="flex gap-1 overflow-x-auto pb-1" aria-label="ระยะของไมโทซิส">
        {phases.map((p, i) => (
          <li key={p.en} className="flex-1">
            <button
              type="button"
              aria-current={i === index ? 'step' : undefined}
              onClick={() => setIndex(i)}
              className={cn(
                'flex w-full min-w-24 flex-col gap-1.5 rounded-lg px-2 py-2 text-left text-xs transition-colors md:text-sm',
                i === index ? 'bg-secondary' : 'hover:bg-muted',
              )}
            >
              <span className={cn('h-1 rounded-full', i <= index ? 'bg-accent' : 'bg-border')} aria-hidden="true" />
              <span className={cn('font-medium', i === index ? 'text-foreground' : 'text-muted-foreground')}>{p.name}</span>
            </button>
          </li>
        ))}
      </ol>

      <div className="grid gap-6 md:grid-cols-[1fr_1.1fr] md:items-center">
        <figure className="rounded-xl bg-muted p-4">
          <svg viewBox="0 0 200 160" role="img" aria-label={`แผนภาพระยะ${phase.name}`} className="mx-auto w-full max-w-sm">
            {phase.art}
          </svg>
          <figcaption className="mt-2 text-center text-xs text-muted-foreground">
            แผนภาพอย่างง่าย แสดง 2n = 4 (สีส้มและสีฟ้าแทนโครโมโซมจากแม่และพ่อ)
          </figcaption>
        </figure>

        <div key={phase.en} className="flex flex-col gap-4 animate-in fade-in duration-300" aria-live="polite">
          <div>
            <p className="text-sm text-muted-foreground">
              ระยะที่ {index + 1} จาก {phases.length} · {phase.en}
            </p>
            <h4 className="font-serif text-2xl font-semibold">{phase.name}</h4>
          </div>
          <p className="leading-relaxed text-foreground/85">{phase.body}</p>
          <ul className="flex flex-col gap-2">
            {phase.points.map((pt) => (
              <li key={pt} className="flex gap-3 text-sm leading-relaxed text-foreground/85">
                <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                {pt}
              </li>
            ))}
          </ul>
          <dl className="grid grid-cols-2 gap-3 text-sm">
            <div className="rounded-lg border border-border p-3">
              <dt className="text-xs text-muted-foreground">จำนวนโครโมโซม (มนุษย์)</dt>
              <dd className="font-serif text-lg font-semibold text-primary">{phase.chromosomes}</dd>
            </div>
            <div className="rounded-lg border border-border p-3">
              <dt className="text-xs text-muted-foreground">ปริมาณ DNA</dt>
              <dd className="font-serif text-lg font-semibold text-primary">{phase.dna}</dd>
            </div>
          </dl>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setIndex((i) => Math.max(0, i - 1))}
              disabled={index === 0}
              className="inline-flex items-center gap-1 rounded-full border border-border px-4 py-2 text-sm font-medium transition-colors hover:bg-secondary disabled:opacity-40"
            >
              <ChevronLeft className="size-4" aria-hidden="true" />
              ก่อนหน้า
            </button>
            <button
              type="button"
              onClick={() => setIndex((i) => Math.min(phases.length - 1, i + 1))}
              disabled={index === phases.length - 1}
              className="inline-flex items-center gap-1 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-40"
            >
              ถัดไป
              <ChevronRight className="size-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
