'use client'

import { Check, RotateCcw, X } from 'lucide-react'
import { useState } from 'react'
import { questions } from '@/lib/quiz'
import { cn } from '@/lib/utils'
import { sci } from './sci'

const letters = ['ก', 'ข', 'ค', 'ง']

export function Quiz() {
  const [answers, setAnswers] = useState<(number | null)[]>(() => questions.map(() => null))
  const answeredCount = answers.filter((a) => a !== null).length
  const score = answers.reduce<number>((s, a, i) => (a === questions[i].answer ? s + 1 : s), 0)
  const finished = answeredCount === questions.length

  function choose(qi: number, ci: number) {
    setAnswers((prev) => (prev[qi] !== null ? prev : prev.map((v, i) => (i === qi ? ci : v))))
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="sticky top-[66px] z-10 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-border bg-card/95 px-5 py-3 backdrop-blur">
        <p className="text-sm">
          ตอบแล้ว <span className="font-semibold">{answeredCount}</span> / {questions.length} ข้อ ·
          คะแนน <span className="font-semibold text-primary">{score}</span>
        </p>
        <button
          type="button"
          onClick={() => setAnswers(questions.map(() => null))}
          className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-sm transition-colors hover:bg-secondary"
        >
          <RotateCcw className="size-3.5" aria-hidden="true" />
          เริ่มใหม่
        </button>
      </div>

      <ol className="grid gap-4 md:grid-cols-2">
        {questions.map((q, qi) => {
          const picked = answers[qi]
          const isAnswered = picked !== null
          const isCorrect = picked === q.answer
          return (
            <li key={q.q} className="flex flex-col gap-4 rounded-xl border border-border bg-card p-5">
              <fieldset className="flex flex-col gap-3">
                <legend className="mb-3 font-medium leading-relaxed">
                  <span className="mr-2 font-serif text-accent">{qi + 1}.</span>
                  {q.q}
                </legend>
                {q.choices.map((c, ci) => {
                  const isPicked = picked === ci
                  const isAnswer = q.answer === ci
                  return (
                    <button
                      key={c}
                      type="button"
                      disabled={isAnswered}
                      onClick={() => choose(qi, ci)}
                      aria-pressed={isPicked}
                      className={cn(
                        'flex items-center gap-3 rounded-lg border px-3 py-2.5 text-left text-sm transition-colors',
                        !isAnswered && 'border-border hover:border-primary/40 hover:bg-secondary',
                        isAnswered && isAnswer && 'border-primary bg-primary/10',
                        isAnswered && isPicked && !isAnswer && 'border-destructive bg-destructive/10',
                        isAnswered && !isPicked && !isAnswer && 'border-border opacity-60',
                      )}
                    >
                      <span
                        className={cn(
                          'flex size-6 shrink-0 items-center justify-center rounded-full border text-xs',
                          isAnswered && isAnswer
                            ? 'border-primary bg-primary text-primary-foreground'
                            : isAnswered && isPicked
                              ? 'border-destructive bg-destructive text-primary-foreground'
                              : 'border-border',
                        )}
                      >
                        {isAnswered && isAnswer ? (
                          <Check className="size-3.5" aria-hidden="true" />
                        ) : isAnswered && isPicked ? (
                          <X className="size-3.5" aria-hidden="true" />
                        ) : (
                          letters[ci]
                        )}
                      </span>
                      <span>{sci(c)}</span>
                    </button>
                  )
                })}
              </fieldset>
              {isAnswered ? (
                <p
                  role="status"
                  className={cn(
                    'rounded-lg p-3 text-sm leading-relaxed',
                    isCorrect ? 'bg-primary/10 text-foreground' : 'bg-destructive/10 text-foreground',
                  )}
                >
                  <span className={cn('font-semibold', isCorrect ? 'text-primary' : 'text-destructive')}>
                    {isCorrect ? 'ถูกต้อง! ' : `ยังไม่ถูก — คำตอบคือ ${letters[q.answer]}. `}
                  </span>
                  {sci(q.explain)}
                </p>
              ) : null}
            </li>
          )
        })}
      </ol>

      {finished ? (
        <div role="status" className="rounded-2xl bg-primary p-6 text-center text-primary-foreground md:p-8">
          <p className="text-sm opacity-90">ผลการทดสอบ</p>
          <p className="font-serif text-4xl font-semibold">
            {score} / {questions.length}
          </p>
          <p className="mt-2 opacity-90">
            {score === questions.length
              ? 'ยอดเยี่ยม! คุณเข้าใจเรื่องเซลล์อย่างลึกซึ้ง'
              : score >= questions.length * 0.7
                ? 'ดีมาก! ทบทวนข้อที่ผิดอีกเล็กน้อยก็จะสมบูรณ์'
                : 'ลองย้อนกลับไปอ่านหัวข้อที่ยังไม่มั่นใจ แล้วทำใหม่อีกครั้ง'}
          </p>
        </div>
      ) : null}
    </div>
  )
}
