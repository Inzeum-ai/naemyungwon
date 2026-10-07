import type { CSSProperties, ReactNode } from 'react'
import AmbientArtwork from './AmbientArtwork'

type Props = { title: ReactNode; lede?: ReactNode; painting?: { src: string; mobileSrc?: string; position?: string }; children?: ReactNode }
export default function InkBand({ title, lede, painting, children }: Props) {
  return <section data-band="" className={`ink-band ground-ink ${painting ? 'ink-band-painted' : ''}`}>
    {painting && <AmbientArtwork src={painting.src} mobileSrc={painting.mobileSrc} position={painting.position} className="band-art" priority />}
    <div className="ink-band-copy mx-auto w-full max-w-page px-gutter lg:px-gutter-lg">
      <h1 className="rise max-w-[12em] text-display-sm md:text-display" style={{ '--i': 0 } as CSSProperties}>{title}</h1>
      {lede && <p className="rise mt-6 max-w-[30em] text-body-lg text-copy" style={{ '--i': 1 } as CSSProperties}>{lede}</p>}
      {children}
    </div>
  </section>
}
