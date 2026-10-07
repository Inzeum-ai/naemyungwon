// A fact list: the value carries the weight, the label stays quiet (labels are a last resort,
// and when unavoidable they are small and grey). Hairline rows, no card.
export type Fact = { label: string; value: React.ReactNode }

export default function Facts({ facts, className = '' }: { facts: Fact[]; className?: string }) {
  return (
    <dl className={`hairline-t ${className}`}>
      {facts.map((f) => (
        <div key={f.label} className="hairline-soft-b grid grid-cols-[88px_1fr] gap-4 py-4 md:grid-cols-[112px_1fr]">
          <dt className="text-meta text-muted">{f.label}</dt>
          <dd className="text-body font-medium text-fg">{f.value}</dd>
        </div>
      ))}
    </dl>
  )
}
