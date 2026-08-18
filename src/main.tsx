import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import './index.css'

/**
 * The router wraps a single route. That is what the deployed build does, so it
 * is reproduced here rather than simplified — matching production is what makes
 * this reconstruction verifiable. It is worth removing later: react-router is
 * most of the ~38 KB the live bundle carries over the previous one, for a site
 * with exactly one page.
 */
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
