import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import App from "./App";
import { SEOContext } from "./SEOMetadata";

export function render(url) {
  let seo = {
    title: "",
    description: "",
    keywords: "",
    image: "",
    url: "",
    type: "website",
    twitterCard: "summary_large_image",
    extra: ""
  };

  const html = renderToString(
    <SEOContext.Provider value={(data) => { seo = { ...seo, ...data }; }}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </SEOContext.Provider>
  );

  const head = `
    ${seo.title ? `<title>${seo.title}</title>` : ""}
    ${seo.description ? `<meta name="description" content="${seo.description}">` : ""}
    ${seo.keywords ? `<meta name="keywords" content="${seo.keywords}">` : ""}

    <!-- Open Graph (Facebook) -->
    ${seo.title ? `<meta property="og:title" content="${seo.title}">` : ""}
    ${seo.description ? `<meta property="og:description" content="${seo.description}">` : ""}
    ${seo.url ? `<meta property="og:url" content="${seo.url}">` : ""}
    ${seo.image ? `<meta property="og:image" content="${seo.image}">` : ""}
    ${seo.type ? `<meta property="og:type" content="${seo.type}">` : ""}

    <!-- Twitter Card -->
    ${seo.twitterCard ? `<meta name="twitter:card" content="${seo.twitterCard}">` : ""}
    ${seo.title ? `<meta name="twitter:title" content="${seo.title}">` : ""}
    ${seo.description ? `<meta name="twitter:description" content="${seo.description}">` : ""}
    ${seo.image ? `<meta name="twitter:image" content="${seo.image}">` : ""}

    ${seo.extra}
  `;

  return { html, head };
}
