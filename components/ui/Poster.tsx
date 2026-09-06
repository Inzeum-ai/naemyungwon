import Image from 'next/image'

// A printed poster shown as the document it is: 2:3, a hairline and the 8 px radius of a real
// capture (as the app screens have), never a photograph's square bleed. Opens the full sheet in a
// new tab, since the type on it is meant to be read.
type Props = { src: string; alt: string; caption: string; sizes?: string }

export default function Poster({ src, alt, caption, sizes = '(max-width: 768px) 45vw, 240px' }: Props) {
  return (
    <figure>
      <a
        href={src}
        target="_blank"
        rel="noopener noreferrer"
        className="relative block aspect-[2/3] w-full overflow-hidden rounded-md border border-line-soft"
        aria-label={`${caption} 포스터 전체 보기 (새 창)`}
      >
        <Image src={src} alt={alt} fill sizes={sizes} className="object-cover" />
      </a>
      <figcaption className="mt-3 text-meta text-muted">{caption}</figcaption>
    </figure>
  )
}
