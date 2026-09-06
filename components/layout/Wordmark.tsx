import Image from 'next/image'
import clsx from 'clsx'
import type { Ground } from './PageShell'

// The two-tier lockup (INZEUM over 내면소통연구소) ships as a drawn asset in both inks.
// 1200×392 paper on transparent (the app's splash asset) · 1967×723 ink on transparent.
// Brand rule: never below ~120 px wide in the two-tier form.
type Props = { ground: Ground; height?: number; priority?: boolean; className?: string }

export default function Wordmark({ ground, height = 40, priority, className }: Props) {
  const paper = ground === 'ink'
  const ratio = paper ? 1200 / 392 : 1967 / 723
  const width = Math.round(height * ratio)
  return (
    <Image
      src={paper ? '/images/wordmark-paper.png' : '/images/inzeum_logo.png'}
      alt="INZEUM 내면소통연구소"
      width={width}
      height={height}
      priority={priority}
      className={clsx('h-auto', className)}
      style={{ width, height }}
    />
  )
}
