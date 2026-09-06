// The data object: figures only this institute can quote. Tabular, fixed-width, one weight
// step above the label — the value is what matters, the label is small and quiet.
export type Figure = { value: string; label: string }

export default function Numbers({ figures, className = '' }: { figures: Figure[]; className?: string }) {
  return (
    <dl className={`grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-4 ${className}`}>
      {figures.map((f) => (
        <div key={f.label} className="hairline-soft-t pt-4">
          <dd className="tnum text-numeric-sm text-fg md:text-numeric">{f.value}</dd>
          <dt className="mt-2 text-body-sm text-sub">{f.label}</dt>
        </div>
      ))}
    </dl>
  )
}
