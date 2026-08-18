import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import App from './App'

/**
 * Build-time render target. scripts/prerender.mjs imports this from the SSR
 * bundle and calls render(), writing the result into dist/index.html.
 */
export function render(url: string): string {
  return renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <Routes>
          <Route path="/" element={<App />} />
        </Routes>
      </StaticRouter>
    </StrictMode>,
  )
}
