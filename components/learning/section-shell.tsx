import { Lightbulb } from 'lucide-react'
import type { ReactNode } from 'react'
import { sci, sciNode } from './sci'

export function Section({
  id,
  number,
  eyebrow,
  title,
  intro,
  children,
}: {
  id: string
  number: string
  eyebrow: string
  title: string
  intro?: ReactNode
  children: ReactNode
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="border-t border-border py-16 md:py-24"
    >
      <header className="mb-10 max-w-3xl">
        <p className="mb-3 flex items-center gap-3 text-sm font-medium tracking-wide text-accent">
          <span className="font-serif text-base">{number}</span>
          <span aria-hidden="true" className="h-px w-8 bg-accent/50" />
          <span>{eyebrow}</span>
        </p>
        <h2
          id={`${id}-title`}
          className="font-serif text-3xl font-semibold leading-tight text-balance md:text-4xl"
        >
          {title}
        </h2>
        {intro ? (
          <div className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
            {intro}
          </div>
        ) : null}
      </header>
      <div className="flex flex-col gap-10">{children}</div>
    </section>
  )
}

export function DeepDive({
  title,
  children,
}: {
  title: string
  children: ReactNode
}) {
  return (
    <aside className="rounded-xl border border-accent/30 bg-accent/5 p-5 md:p-6">
      <p className="mb-2 flex items-center gap-2 text-sm font-semibold text-accent">
        <Lightbulb className="size-4" aria-hidden="true" />
        ข้อมูลเชิงลึก
      </p>
      <h3 className="mb-2 font-serif text-lg font-semibold">{sci(title)}</h3>
      <div className="flex flex-col gap-3 leading-relaxed text-foreground/85">
        {sciNode(children)}
      </div>
    </aside>
  )
}

export function Prose({ children }: { children: ReactNode }) {
  return (
    <div className="flex max-w-3xl flex-col gap-4 text-base leading-relaxed text-foreground/90 md:text-[17px]">
      {sciNode(children)}
    </div>
  )
}

export function SubHeading({ children }: { children: ReactNode }) {
  return (
    <h3 className="font-serif text-xl font-semibold md:text-2xl">{children}</h3>
  )
}

export function InfoCard({
  title,
  tag,
  children,
}: {
  title: string
  tag?: string
  children: ReactNode
}) {
  return (
    <div className="flex h-full flex-col gap-3 rounded-xl border border-border bg-card p-5">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h4 className="font-serif text-lg font-semibold">{title}</h4>
        {tag ? (
          <span className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground">
            {tag}
          </span>
        ) : null}
      </div>
      <div className="flex flex-col gap-2 text-sm leading-relaxed text-foreground/85">
        {sciNode(children)}
      </div>
    </div>
  )
}
