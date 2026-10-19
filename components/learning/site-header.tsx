'use client'

import { Menu, Microscope, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { sections } from '@/lib/sections'

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      setProgress(max > 0 ? Math.min(100, (window.scrollY / max) * 100) : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-8">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="flex size-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <Microscope className="size-4.5" aria-hidden="true" />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-serif text-base font-semibold">เซลล์วิทยา</span>
            <span className="text-xs text-muted-foreground">สื่อการเรียนรู้ชีววิทยา</span>
          </span>
        </a>

        <nav aria-label="หัวข้อหลัก" className="hidden items-center gap-1 md:flex">
          {sections
            .filter((s) => ['organelles', 'transport', 'respiration', 'division', 'quiz'].includes(s.id))
            .map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="rounded-full px-3 py-1.5 text-sm text-foreground/80 transition-colors hover:bg-secondary hover:text-secondary-foreground"
              >
                {s.label}
              </a>
            ))}
        </nav>

        <button
          type="button"
          className="flex size-10 items-center justify-center rounded-full border border-border lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
          <span className="sr-only">{open ? 'ปิดเมนู' : 'เปิดเมนูสารบัญ'}</span>
        </button>
      </div>

      <div
        className="h-0.5 bg-accent transition-[width] duration-150"
        style={{ width: `${progress}%` }}
        role="progressbar"
        aria-label="ความคืบหน้าการอ่าน"
        aria-valuenow={Math.round(progress)}
        aria-valuemin={0}
        aria-valuemax={100}
      />

      {open ? (
        <nav
          id="mobile-nav"
          aria-label="สารบัญ"
          className="max-h-[70vh] overflow-y-auto border-t border-border bg-background px-4 py-4 lg:hidden"
        >
          <ol className="grid grid-cols-1 gap-1 sm:grid-cols-2">
            {sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 rounded-lg px-3 py-2.5 hover:bg-secondary"
                >
                  <span className="font-serif text-sm text-accent">{s.number}</span>
                  <span>{s.label}</span>
                </a>
              </li>
            ))}
          </ol>
        </nav>
      ) : null}
    </header>
  )
}
