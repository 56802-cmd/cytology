'use client'

import Image from 'next/image'
import { Lightbulb } from 'lucide-react'
import { useState } from 'react'
import { type CellKind, organelles } from '@/lib/organelles'
import { cn } from '@/lib/utils'
import { sci } from './sci'

const cellImages: Record<CellKind, { src: string; alt: string; label: string }> = {
  animal: {
    src: '/images/animal-cell.png',
    alt: 'ภาพตัดขวางเซลล์สัตว์ แสดงนิวเคลียส ร่างแหเอนโดพลาซึม กอลจิ ไมโทคอนเดรีย เซนทริโอล และไลโซโซม',
    label: 'เซลล์สัตว์',
  },
  plant: {
    src: '/images/plant-cell.png',
    alt: 'ภาพตัดขวางเซลล์พืช แสดงผนังเซลล์ แวคิวโอลกลางขนาดใหญ่ คลอโรพลาสต์ และนิวเคลียส',
    label: 'เซลล์พืช',
  },
}

export function OrganelleExplorer() {
  const [kind, setKind] = useState<CellKind>('animal')
  const [selectedId, setSelectedId] = useState('nucleus')

  const visible = organelles.filter((o) => o.foundIn.includes(kind))
  const selected = visible.find((o) => o.id === selectedId) ?? visible[0]

  function switchKind(next: CellKind) {
    setKind(next)
    if (!organelles.find((o) => o.id === selectedId)?.foundIn.includes(next)) {
      setSelectedId('nucleus')
    }
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_1.05fr]">
      <div className="flex flex-col gap-4">
        <div role="tablist" aria-label="เลือกชนิดเซลล์" className="flex w-fit gap-1 rounded-full border border-border bg-card p-1">
          {(Object.keys(cellImages) as CellKind[]).map((k) => (
            <button
              key={k}
              type="button"
              role="tab"
              aria-selected={kind === k}
              onClick={() => switchKind(k)}
              className={cn(
                'rounded-full px-5 py-2 text-sm font-medium transition-colors',
                kind === k ? 'bg-primary text-primary-foreground' : 'text-foreground/75 hover:bg-secondary',
              )}
            >
              {cellImages[k].label}
            </button>
          ))}
        </div>

        <div className="overflow-hidden rounded-2xl border border-border bg-card">
          <Image
            key={kind}
            src={cellImages[kind].src}
            alt={cellImages[kind].alt}
            width={1408}
            height={768}
            className="h-auto w-full animate-in fade-in duration-500"
          />
        </div>

        <div>
          <p className="mb-2 text-sm font-medium text-muted-foreground">
            เลือกออร์แกเนลล์ ({visible.length} โครงสร้างใน{cellImages[kind].label})
          </p>
          <ul className="flex flex-wrap gap-2">
            {visible.map((o) => {
              const isActive = o.id === selected.id
              return (
                <li key={o.id}>
                  <button
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => setSelectedId(o.id)}
                    className={cn(
                      'rounded-full border px-3.5 py-1.5 text-sm transition-colors',
                      isActive
                        ? 'border-accent bg-accent text-accent-foreground'
                        : 'border-border bg-card hover:border-primary/40 hover:bg-secondary',
                    )}
                  >
                    {o.th}
                  </button>
                </li>
              )
            })}
          </ul>
        </div>
      </div>

      <article
        key={selected.id}
        aria-live="polite"
        className="flex flex-col gap-5 rounded-2xl border border-border bg-card p-6 animate-in fade-in slide-in-from-bottom-2 duration-300 md:p-8"
      >
        <header className="flex flex-col gap-2">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground">
              {selected.membrane}
            </span>
            <span className="rounded-full border border-border px-2.5 py-0.5 text-xs text-muted-foreground">
              พบใน: {selected.foundIn.map((k) => cellImages[k].label).join(' และ ')}
            </span>
          </div>
          <h3 className="font-serif text-3xl font-semibold">{selected.th}</h3>
          <p className="text-muted-foreground">
            <span className="italic">{selected.en}</span> · เปรียบได้กับ “{selected.analogy}”
          </p>
        </header>

        <section className="flex flex-col gap-2">
          <h4 className="text-sm font-semibold uppercase tracking-wider text-primary">โครงสร้าง</h4>
          <p className="leading-relaxed text-foreground/85">{sci(selected.structure)}</p>
        </section>

        <section className="flex flex-col gap-2">
          <h4 className="text-sm font-semibold uppercase tracking-wider text-primary">หน้าที่</h4>
          <ul className="flex flex-col gap-2">
            {selected.functions.map((f) => (
              <li key={f} className="flex gap-3 leading-relaxed text-foreground/85">
                <span aria-hidden="true" className="mt-2.5 size-1.5 shrink-0 rounded-full bg-accent" />
                <span>{sci(f)}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="flex flex-col gap-2 rounded-xl border border-accent/30 bg-accent/5 p-4">
          <h4 className="flex items-center gap-2 text-sm font-semibold text-accent">
            <Lightbulb className="size-4" aria-hidden="true" />
            ข้อมูลเชิงลึก
          </h4>
          <p className="leading-relaxed text-foreground/85">{sci(selected.insight)}</p>
        </section>
      </article>
    </div>
  )
}
