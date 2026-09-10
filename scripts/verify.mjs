#!/usr/bin/env node
// Visual verification (DESIGN.md §10). A green build is not evidence — this renders every page,
// scrolls it, and writes frames to LOOK at:
//
//   npm run build && node scripts/verify.mjs [--out .impeccable/review] [--port 3311]
//
// Per page: desktop 1440×900 frames + mobile 390×844 frames, a full-page capture of each,
// horizontal-overflow check, console errors, and the computed font-family of the largest
// visible text (verify the font actually loaded — typography.md §Fonts).
import { spawn } from 'node:child_process'
import { mkdirSync, writeFileSync } from 'node:fs'
import { createRequire } from 'node:module'
import { resolve } from 'node:path'

const require = createRequire(import.meta.url)
let chromium
try {
  ;({ chromium } = require('playwright'))
} catch {
  ;({ chromium } = require(
    '/Users/jaehoshin/Code/tools/jaeho-claude-plugins/art-direction-first/skills/art-direction-first/scripts/node_modules/playwright',
  ))
}

const args = process.argv.slice(2)
const opt = (k, d) => {
  const i = args.indexOf(k)
  return i >= 0 ? args[i + 1] : d
}
const OUT = resolve(opt('--out', '.impeccable/review'))
const PORT = Number(opt('--port', 3311))
const BASE = `http://localhost:${PORT}`
const PAGES = ['/', '/courses', '/programs', '/app', '/about', '/faq', '/news', '/resources', '/privacy', '/nope-404']

const server = spawn('npx', ['next', 'start', '-p', String(PORT)], { stdio: 'ignore' })
const waitUp = async () => {
  for (let i = 0; i < 60; i++) {
    try {
      const r = await fetch(BASE + '/')
      if (r.ok) return
    } catch {}
    await new Promise((r) => setTimeout(r, 500))
  }
  throw new Error('server did not come up')
}

const slug = (p) => (p === '/' ? 'home' : p.replace(/^\//, '').replace(/\//g, '-'))

async function shoot(browser, path, { mobile }) {
  const viewport = mobile ? { width: 390, height: 844 } : { width: 1440, height: 900 }
  const ctx = await browser.newContext({ viewport, deviceScaleFactor: mobile ? 2 : 1, isMobile: mobile })
  const page = await ctx.newPage()
  const errors = []
  page.on('console', (m) => m.type() === 'error' && errors.push(m.text().slice(0, 200)))
  page.on('pageerror', (e) => errors.push('pageerror: ' + String(e).slice(0, 200)))
  await page.goto(BASE + path, { waitUntil: 'networkidle', timeout: 45000 })
  await page.waitForTimeout(900) // entrance settles (450 ms + stagger)

  const tag = mobile ? 'm' : 'd'
  const dir = resolve(OUT, 'frames', slug(path))
  mkdirSync(dir, { recursive: true })
  const height = await page.evaluate(() => document.documentElement.scrollHeight)
  const frames = mobile ? (path === '/' ? 6 : 3) : path === '/' ? 6 : 4
  for (let i = 0; i < frames; i++) {
    const y = Math.round(Math.max(0, height - viewport.height) * (i / (frames - 1)))
    await page.evaluate((v) => window.scrollTo(0, v), y)
    await page.waitForTimeout(250)
    await page.screenshot({ path: resolve(dir, `${tag}${i}_y${y}.png`) })
  }
  await page.evaluate(() => window.scrollTo(0, 0))
  await page.waitForTimeout(200)
  await page.screenshot({ path: resolve(OUT, `${slug(path)}-${mobile ? 'mobile' : 'desktop'}.png`), fullPage: true })

  // The mobile sheet is the one stateful surface: capture it open once.
  if (mobile && path === '/') {
    await page.click('[aria-controls="mobile-nav"]')
    await page.waitForTimeout(300)
    await page.screenshot({ path: resolve(OUT, 'home-mobile-menu.png') })
    await page.keyboard.press('Escape')
  }

  const facts = await page.evaluate(() => {
    const overflow = document.documentElement.scrollWidth > window.innerWidth + 1
    let best = { size: 0, family: '', text: '' }
    for (const el of document.querySelectorAll('h1,h2,h3,p,span,a,dd,dt,li')) {
      const cs = getComputedStyle(el)
      const size = parseFloat(cs.fontSize)
      const text = (el.textContent || '').trim()
      if (size > best.size && text && el.getClientRects().length) best = { size, family: cs.fontFamily, text: text.slice(0, 40) }
    }
    const body = getComputedStyle(document.body)
    return { overflow, largest: best, bodyFont: body.fontFamily, bodySize: body.fontSize, bg: body.backgroundColor }
  })
  await ctx.close()
  return { path, mobile, height, errors, ...facts }
}

;(async () => {
  await waitUp()
  mkdirSync(OUT, { recursive: true })
  const browser = await chromium.launch()
  const report = []
  for (const p of PAGES) {
    report.push(await shoot(browser, p, { mobile: false }))
    report.push(await shoot(browser, p, { mobile: true }))
  }
  await browser.close()
  server.kill()
  writeFileSync(resolve(OUT, 'report.json'), JSON.stringify(report, null, 2))
  for (const r of report) {
    const flag = r.overflow ? 'OVERFLOW' : 'ok'
    console.log(
      `${r.mobile ? 'M' : 'D'} ${r.path.padEnd(11)} h=${String(r.height).padStart(5)} ${flag.padEnd(8)} largest=${r.largest.size}px "${r.largest.text}" font=${r.largest.family.split(',')[0]} errors=${r.errors.length}`,
    )
    for (const e of r.errors) console.log('    ! ' + e)
  }
  // The home page's full-page captures are what the finish reviewer reads.
  console.log(`\nwrote ${OUT}/`)
})().catch((e) => {
  server.kill()
  console.error(e)
  process.exit(1)
})
