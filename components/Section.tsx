import { PropsWithChildren } from 'react'

type SectionProps = PropsWithChildren<{
  id: string
  title: string
  subtitle?: string
}>

export default function Section({ id, title, subtitle, children }: SectionProps) {
  return (
    <section id={id} className="container-xl py-12 sm:py-16">
      <div className="mb-8">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">{title}</h2>
        {subtitle ? (
          <p className="text-sm text-gray-300 mt-2 max-w-2xl">{subtitle}</p>
        ) : null}
      </div>
      <div className="grid gap-6">{children}</div>
    </section>
  )
}


