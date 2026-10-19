'use client'

import { useEffect, useState } from 'react'
import { sections } from '@/lib/sections'
import { cn } from '@/lib/utils'

export function TableOfContents() {
  const [active, setActive] = useState<string>(sections[0].id)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible[0]) setActive(visible[0].target.id)
      },
      { rootMargin: '-20% 0px -70% 0px' },
    )
    sections.forEach((s) => {
      const el = document.getElementById(s.id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <nav aria-label="สารบัญ" className="sticky top-24">
      <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        สารบัญ
      </p>
      <ol className="flex flex-col gap-0.5 border-l border-border">
        {sections.map((s) => {
          const isActive = active === s.id
          return (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                aria-current={isActive ? 'location' : undefined}
                className={cn(
                  '-ml-px flex items-baseline gap-3 border-l-2 py-1.5 pl-4 text-sm transition-colors',
                  isActive
                    ? 'border-accent font-medium text-foreground'
                    : 'border-transparent text-muted-foreground hover:text-foreground',
                )}
              >
                <span className="font-serif text-xs text-accent">{s.number}</span>
                {s.label}
              </a>
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
