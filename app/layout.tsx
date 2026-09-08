import type { Metadata, Viewport } from 'next'
import { SITE_NAME, SITE_URL, SITE_DESCRIPTION, OG_IMAGE } from '@/lib/seo'
import { organizationSchema, websiteSchema } from '@/lib/structured-data'
import '@/styles/globals.css'

// Pretendard Variable — one family for Korean and Latin (Sumuk 3.0.0 §Typography), as a dynamic
// subset so a page only fetches the glyph ranges it uses. Linked here (not @imported in CSS) so
// it downloads in parallel with the app stylesheet instead of after it.
const PRETENDARD_CSS =
  'https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css'

export const metadata: Metadata = {
  // 카카오톡·검색엔진이 og:image / canonical 을 절대 URL 로 읽으려면 필수입니다.
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: ['명상', '내면소통', '마음근력', '명상교육', '명상지도자', 'meditation', 'mindfulness'],
  authors: [{ name: SITE_NAME }],
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
  openGraph: {
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    siteName: SITE_NAME,
    url: '/',
    type: 'website',
    locale: 'ko_KR',
    images: [OG_IMAGE],
  },
  twitter: { card: 'summary_large_image' },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#121210',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "if(new URLSearchParams(location.search).get('static')==='1')document.documentElement.dataset.static='true'" }} />
        {/* Ink before any stylesheet arrives: no white frame on a hard load. */}
        <style dangerouslySetInnerHTML={{ __html: 'html{background:#121210}' }} />
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />
        <link rel="preload" as="style" href={PRETENDARD_CSS} />
        <link rel="stylesheet" href={PRETENDARD_CSS} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organizationSchema, websiteSchema]),
          }}
        />
      </head>
      <body className="ground-ink">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-modal focus:rounded-md focus:bg-primary focus:px-4 focus:py-3 focus:text-primary-fg"
        >
          본문으로 건너뛰기
        </a>
        {children}
      </body>
    </html>
  )
}
