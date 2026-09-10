import Image from 'next/image'
import Icon from './Icon'

type Props = { src: string; alt: string; caption: string; source: string; width: number; height: number; className?: string; sizes?: string }
export default function CommunityPhoto({ src, alt, caption, source, width, height, className = '', sizes = '(max-width: 767px) 100vw, 50vw' }: Props) {
  return <figure className={className}>
    <a href={src} target="_blank" rel="noopener noreferrer" aria-label={`${caption} 사진 전체 보기 (새 창)`} className="block">
      <Image src={src} alt={alt} width={width} height={height} sizes={sizes} className="h-auto w-full" />
    </a>
    <figcaption className="mt-3 flex flex-wrap items-center justify-between gap-x-4 text-body-sm text-sub">
      <span>{caption}</span><a href={source} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-hit items-center gap-2 underline decoration-line underline-offset-4">참가자의 기록<Icon name="arrow-up-right" size={16} /><span className="sr-only"> (새 창)</span></a>
    </figcaption>
  </figure>
}
