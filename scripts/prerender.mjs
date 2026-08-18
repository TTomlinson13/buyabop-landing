/**
 * Build-time prerenderer.
 *
 * The site was a client-rendered SPA: the served HTML was a shell whose entire
 * body was `<div id="root"></div>`. Google renders JavaScript but defers it,
 * and the AI crawlers that matter here — ClaudeBot, PerplexityBot,
 * OAI-SearchBot, CCBot, meta-externalagent — do not execute it at all, so they
 * saw twelve words of nav and a copyright line.
 *
 * This renders the page to real HTML at build time. The client bundle then
 * hydrates it, leaving behaviour unchanged.
 *
 * Run after `vite build` and `vite build --ssr`. See package.json.
 */
import { readFileSync, writeFileSync, existsSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const DIST = join(ROOT, 'dist')
const SSR_ENTRY = join(ROOT, 'dist-ssr', 'entry-server.js')
const ORIGIN = 'https://buyabop.com'
const PHONE = '+1-800-616-1418'

const escapeAttr = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

/** `</script>` inside JSON-LD would close the tag early. */
const jsonLd = (obj) =>
  JSON.stringify(obj).replace(/</g, '\\u003c').replace(/>/g, '\\u003e')

/**
 * The address matches the visible NAP in the page footer and the other agency
 * sites. Google cross-checks the rendered address against the Business Profile
 * and directory citations, so a mismatch is worse than an omission.
 */
const AGENCY = {
  '@type': 'InsuranceAgency',
  '@id': `${ORIGIN}/#agency`,
  name: 'BuyABOP',
  legalName: 'Tomlinson & Co Inc.',
  url: ORIGIN,
  telephone: PHONE,
  foundingDate: '1966',
  description:
    'Independent agency writing Business Owners Policies across Florida, Alabama, Louisiana, Mississippi, South Carolina and North Carolina. Property and liability bundled, quoted across multiple A-rated carriers.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '921 Douglas Ave Suite 102',
    addressLocality: 'Altamonte Springs',
    addressRegion: 'FL',
    postalCode: '32714',
    addressCountry: 'US',
  },
  areaServed: [
    { '@type': 'State', name: 'Florida' },
    { '@type': 'State', name: 'Alabama' },
    { '@type': 'State', name: 'Louisiana' },
    { '@type': 'State', name: 'Mississippi' },
    { '@type': 'State', name: 'South Carolina' },
    { '@type': 'State', name: 'North Carolina' },
  ],
  knowsAbout: [
    'Business Owners Policy (BOP)',
    'General liability insurance',
    'Commercial property insurance',
    'Lessor\u2019s risk (LRO) coverage',
    'Restaurant and retail insurance',
    'Habitational insurance',
    'Professional liability, cyber and EPLI',
  ],
  sameAs: [
    'https://tomlinsonandco.com',
    'https://hoinsurance.com',
    'https://floridauto.com',
    'https://easycommercialinsurance.com',
  ],
}

if (!existsSync(SSR_ENTRY)) {
  console.error(`prerender: SSR bundle missing at ${SSR_ENTRY}`)
  process.exit(1)
}

const template = readFileSync(join(DIST, 'index.html'), 'utf-8')
const { render } = await import(pathToFileURL(SSR_ENTRY).href)

const appHtml = render('/')

// A page that renders to almost nothing means something broke upstream —
// exactly the failure prerendering exists to prevent. Break the build rather
// than ship an empty page that looks fine in a browser.
if (appHtml.replace(/<[^>]*>/g, '').trim().length < 500) {
  console.error(
    `prerender: FAILED — rendered ${appHtml.length} bytes of markup but almost no text`,
  )
  process.exit(1)
}

const marker = '<div id="root"></div>'
if (!template.includes(marker)) {
  console.error('prerender: root marker not found in template')
  process.exit(1)
}

const injected = [
  `<link rel="canonical" href="${escapeAttr(ORIGIN + '/')}" />`,
  `<script type="application/ld+json">${jsonLd({
    '@context': 'https://schema.org',
    ...AGENCY,
  })}</script>`,
  `<script type="application/ld+json">${jsonLd({
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${ORIGIN}/#website`,
    url: ORIGIN,
    name: 'BuyABOP',
    publisher: { '@id': `${ORIGIN}/#agency` },
  })}</script>`,
].join('\n    ')

let html = template.replace(marker, `<div id="root">${appHtml}</div>`)
html = html.replace('</head>', `  ${injected}\n  </head>`)

writeFileSync(join(DIST, 'index.html'), html, 'utf-8')

const kb = (Buffer.byteLength(html) / 1024).toFixed(1)
const words = appHtml.replace(/<[^>]*>/g, ' ').split(/\s+/).filter((w) => w.length > 1).length
console.log(`prerender: index.html  ${kb} kB  (${words} words of rendered text)`)
