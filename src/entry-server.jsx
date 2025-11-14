import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import App from './App'

/**
 * @param {string} _url
 */
export function render(_url) {
  const html = renderToString(
    <StrictMode>
      <App />
    </StrictMode>,
  )

  const head = `
    <title>My Vite SSR App</title>
    <meta charset="UTF-8" />
    <meta name="description" content="This page is server-side rendered with Vite for SEO." />
    <meta property="og:title" content="My Vite SSR App" />
    <meta property="og:description" content="This is a Vite + React SSR sample." />
    <meta property="og:type" content="website" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  `
  return { html, head }
}
