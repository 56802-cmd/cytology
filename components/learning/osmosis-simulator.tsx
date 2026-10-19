'use client'

import { useMemo, useState } from 'react'
import { cn } from '@/lib/utils'

type Tonicity = 'hypo' | 'iso' | 'hyper'
type Kind = 'animal' | 'plant'

const tonicityInfo: Record<Tonicity, { label: string; en: string; solutes: number; water: string }> = {
  hypo: {
    label: 'ไฮโพโทนิก',
    en: 'Hypotonic',
    solutes: 8,
    water: 'น้ำเคลื่อนที่เข้าสู่เซลล์มากกว่าออก',
  },
  iso: {
    label: 'ไอโซโทนิก',
    en: 'Isotonic',
    solutes: 22,
    water: 'น้ำเข้าและออกในอัตราเท่ากัน (สมดุลพลวัต)',
  },
  hyper: {
    label: 'ไฮเพอร์โทนิก',
    en: 'Hypertonic',
    solutes: 48,
    water: 'น้ำเคลื่อนที่ออกจากเซลล์มากกว่าเข้า',
  },
}

const outcomes: Record<Kind, Record<Tonicity, { title: string; body: string }>> = {
  animal: {
    hypo: {
      title: 'เซลล์เต่งและแตก (Hemolysis / Lysis)',
      body: 'เซลล์เม็ดเลือดแดงไม่มีผนังเซลล์ต้านแรงดัน เมื่อน้ำเข้ามากจะบวมจนเยื่อหุ้มแตก เรียกว่าฮีโมไลซิส นี่คือเหตุที่ห้ามฉีดน้ำกลั่นเข้าหลอดเลือดโดยตรง',
    },
    iso: {
      title: 'เซลล์ปกติ (Normal)',
      body: 'สภาวะที่เหมาะที่สุดสำหรับเซลล์สัตว์ น้ำเกลือที่ใช้ทางการแพทย์ (NaCl 0.9%) เป็นสารละลายไอโซโทนิกกับเลือด',
    },
    hyper: {
      title: 'เซลล์เหี่ยว (Crenation)',
      body: 'เซลล์สูญเสียน้ำ หดตัวและผิวเป็นรอยหยัก เรียกว่าครีเนชัน ปลาน้ำจืดที่ใส่ลงในน้ำทะเลจะเกิดผลแบบนี้กับเซลล์จำนวนมาก',
    },
  },
  plant: {
    hypo: {
      title: 'เซลล์เต่ง (Turgid)',
      body: 'น้ำเข้าสู่แวคิวโอล โพรโทพลาสต์ดันผนังเซลล์จนเกิดแรงดันเต่ง ผนังเซลล์ต้านไว้ไม่ให้แตก — สภาวะที่ดีที่สุดของเซลล์พืช ทำให้ใบและลำต้นตั้งตรง',
    },
    iso: {
      title: 'เซลล์ปวกเปียก (Flaccid)',
      body: 'ไม่มีการเคลื่อนที่สุทธิของน้ำ เซลล์ไม่มีแรงดันเต่ง พืชจะเริ่มเหี่ยว',
    },
    hyper: {
      title: 'พลาสโมไลซิส (Plasmolysis)',
      body: 'น้ำออกจากแวคิวโอล เยื่อหุ้มเซลล์หดตัวหลุดออกจากผนังเซลล์ เป็นเหตุที่พืชตายเมื่อดินเค็ม และเป็นหลักการถนอมอาหารด้วยการดองเกลือหรือแช่อิ่ม',
    },
  },
}

function seeded(n: number) {
  const pts: { x: number; y: number }[] = []
  let s = 7
  const rand = () => {
    s = (s * 9301 + 49297) % 233280
    return s / 233280
  }
  while (pts.length < n) {
    const x = 12 + rand() * 296
    const y = 12 + rand() * 196
    const dx = x - 160
    const dy = y - 110
    if (Math.abs(dx) < 100 && Math.abs(dy) < 85) continue
    pts.push({ x, y })
  }
  return pts
}

function crenatedPath(cx: number, cy: number, r: number) {
  const steps = 96
  let d = ''
  for (let i = 0; i <= steps; i++) {
    const t = (i / steps) * Math.PI * 2
    const rr = r * (1 + 0.09 * Math.sin(t * 14))
    const x = cx + rr * Math.cos(t)
    const y = cy + rr * Math.sin(t)
    d += `${i === 0 ? 'M' : 'L'}${x.toFixed(1)},${y.toFixed(1)} `
  }
  return `${d}Z`
}

export function OsmosisSimulator() {
  const [kind, setKind] = useState<Kind>('plant')
  const [tonicity, setTonicity] = useState<Tonicity>('iso')
  const dots = useMemo(() => seeded(tonicityInfo[tonicity].solutes), [tonicity])
  const outcome = outcomes[kind][tonicity]

  const animalScale = tonicity === 'hypo' ? 1.3 : tonicity === 'iso' ? 1 : 0.78
  const plantScale = tonicity === 'hypo' ? 1 : tonicity === 'iso' ? 0.96 : 0.58

  return (
    <div className="grid gap-6 rounded-2xl border border-border bg-card p-5 md:p-8 lg:grid-cols-[1fr_1fr]">
      <div className="flex flex-col gap-5">
        <div>
          <p className="mb-2 text-sm font-semibold">1. เลือกชนิดเซลล์</p>
          <div role="radiogroup" aria-label="ชนิดเซลล์" className="flex gap-2">
            {(['plant', 'animal'] as Kind[]).map((k) => (
              <button
                key={k}
                type="button"
                role="radio"
                aria-checked={kind === k}
                onClick={() => setKind(k)}
                className={cn(
                  'flex-1 rounded-lg border px-4 py-2.5 text-sm font-medium transition-colors',
                  kind === k ? 'border-primary bg-primary text-primary-foreground' : 'border-border hover:bg-secondary',
                )}
              >
                {k === 'plant' ? 'เซลล์พืช' : 'เซลล์เม็ดเลือดแดง'}
              </button>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-2 text-sm font-semibold">2. เลือกสารละลายภายนอกเซลล์</p>
          <div role="radiogroup" aria-label="ความเข้มข้นของสารละลาย" className="grid grid-cols-3 gap-2">
            {(Object.keys(tonicityInfo) as Tonicity[]).map((t) => (
              <button
                key={t}
                type="button"
                role="radio"
                aria-checked={tonicity === t}
                onClick={() => setTonicity(t)}
                className={cn(
                  'flex flex-col rounded-lg border px-3 py-2.5 text-left text-sm transition-colors',
                  tonicity === t ? 'border-accent bg-accent text-accent-foreground' : 'border-border hover:bg-secondary',
                )}
              >
                <span className="font-medium">{tonicityInfo[t].label}</span>
                <span className={cn('text-xs', tonicity === t ? 'opacity-90' : 'text-muted-foreground')}>
                  {tonicityInfo[t].en}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div aria-live="polite" className="flex flex-col gap-2 rounded-xl bg-muted p-4">
          <p className="text-sm text-muted-foreground">{tonicityInfo[tonicity].water}</p>
          <p className="font-serif text-xl font-semibold text-primary">{outcome.title}</p>
          <p className="leading-relaxed text-foreground/85">{outcome.body}</p>
        </div>
      </div>

      <figure className="flex flex-col gap-2">
        <svg
          viewBox="0 0 320 220"
          role="img"
          aria-label={`${kind === 'plant' ? 'เซลล์พืช' : 'เซลล์เม็ดเลือดแดง'}ในสารละลาย${tonicityInfo[tonicity].label}: ${outcome.title}`}
          className="w-full rounded-xl border border-border bg-chart-3/10"
        >
          {dots.map((d, i) => (
            <circle key={i} cx={d.x} cy={d.y} r={3} className="fill-accent/70" />
          ))}

          {kind === 'animal' ? (
            tonicity === 'hyper' ? (
              <path
                d={crenatedPath(160, 110, 46)}
                className="fill-accent/40 stroke-accent transition-all duration-700"
                strokeWidth={2.5}
              />
            ) : (
              <g style={{ transform: `scale(${animalScale})`, transformOrigin: '160px 110px', transition: 'transform 0.7s ease' }}>
                <circle
                  cx={160}
                  cy={110}
                  r={60}
                  className="fill-accent/40 stroke-accent"
                  strokeWidth={2.5}
                  strokeDasharray={tonicity === 'hypo' ? '10 7' : undefined}
                />
                <circle cx={160} cy={110} r={26} className="fill-accent/20" />
              </g>
            )
          ) : (
            <>
              <g style={{ transform: `scale(${plantScale})`, transformOrigin: '160px 110px', transition: 'transform 0.7s ease' }}>
                <rect
                  x={76}
                  y={36}
                  width={168}
                  height={148}
                  rx={tonicity === 'hyper' ? 48 : 8}
                  className="fill-primary/25 stroke-primary/70 transition-all duration-700"
                  strokeWidth={2}
                />
                <rect x={100} y={58} width={120} height={104} rx={18} className="fill-chart-3/30" />
                {[
                  [90, 50],
                  [218, 60],
                  [96, 160],
                  [214, 166],
                  [160, 44],
                ].map(([x, y]) => (
                  <ellipse key={`${x}-${y}`} cx={x} cy={y} rx={9} ry={5} className="fill-primary" />
                ))}
              </g>
              <rect x={70} y={30} width={180} height={160} rx={12} fill="none" className="stroke-primary" strokeWidth={7} />
            </>
          )}
        </svg>
        <figcaption className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <span aria-hidden="true" className="size-2.5 rounded-full bg-accent/70" />
            โมเลกุลตัวถูกละลายภายนอก
          </span>
          {kind === 'plant' ? (
            <>
              <span className="flex items-center gap-1.5">
                <span aria-hidden="true" className="size-2.5 rounded-sm border-2 border-primary" />
                ผนังเซลล์
              </span>
              <span className="flex items-center gap-1.5">
                <span aria-hidden="true" className="size-2.5 rounded-sm bg-chart-3/50" />
                แวคิวโอล
              </span>
            </>
          ) : null}
        </figcaption>
      </figure>
    </div>
  )
}
