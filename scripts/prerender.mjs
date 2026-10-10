/* global process */
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { resolve } from 'node:path';
import { URL } from 'node:url';
import { createServer, loadEnv } from 'vite';
import React from 'react';
import { renderToString } from 'react-dom/server';

const env = loadEnv('production', process.cwd(), 'VITE_');
const siteUrl = new URL(env.VITE_SITE_URL || 'https://secondhandlanka.lk');
if (siteUrl.protocol !== 'https:' || siteUrl.pathname !== '/' || siteUrl.search || siteUrl.hash || siteUrl.username || siteUrl.password) {
  throw new Error('VITE_SITE_URL must be an HTTPS site origin without a path, credentials, query or fragment.');
}
const origin = siteUrl.origin;
const escape = (value) => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
const server = await createServer({ server: { middlewareMode: true, hmr: false, ws: false }, appType: 'custom', mode: 'production' });
try {
  const { App } = await server.ssrLoadModule('/src/App.tsx');
  const { pageMetadata } = await server.ssrLoadModule('/src/seo.ts');
  const template = await readFile('dist/index.html', 'utf8');
  const paths = Object.keys(pageMetadata).filter((path) => path !== '/404');
  for (const path of [...paths, '/404']) {
    const { title, description } = pageMetadata[path];
    const url = `${origin}${path === '/' ? '/' : path}`;
    const metadata = `
    <meta name="robots" content="${path === '/404' ? 'noindex' : 'index, follow'}" />
    ${path === '/404' ? '' : `<link rel="canonical" href="${escape(url)}" />`}
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Secondhand Lanka" />
    <meta property="og:locale" content="en_LK" />
    <meta property="og:title" content="${escape(title)}" />
    <meta property="og:description" content="${escape(description)}" />
    <meta property="og:url" content="${escape(url)}" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content="${escape(title)}" />
    <meta name="twitter:description" content="${escape(description)}" />`;
    const schema = path === '/' ? `<script type="application/ld+json">${JSON.stringify({
      '@context': 'https://schema.org', '@graph': [
        { '@type': 'Organization', '@id': `${origin}/#organization`, name: 'Secondhand Lanka', url: `${origin}/`, logo: `${origin}/icons/icon-512.png` },
        { '@type': 'WebSite', '@id': `${origin}/#website`, name: 'Secondhand Lanka', url: `${origin}/`, inLanguage: 'en-LK', publisher: { '@id': `${origin}/#organization` } },
      ],
    }).replaceAll('<', '\\u003c')}</script>` : '';
    const html = template
      .replace(/<title>.*?<\/title>/s, `<title>${escape(title)}</title>`)
      .replace(/<meta\s+name="description"\s+content="[^"]*"\s*\/>/s, `<meta name="description" content="${escape(description)}" />`)
      .replace('</head>', `${metadata}\n${schema}\n</head>`)
      .replace('<div id="root"></div>', `<div id="root" data-path="${path}">${renderToString(React.createElement(App, { path }))}</div>`);
    const destination = path === '/' ? 'dist/index.html' : path === '/404' ? 'dist/404.html' : `dist${path}/index.html`;
    await mkdir(resolve(destination, '..'), { recursive: true });
    await writeFile(destination, html);
  }
  await writeFile('dist/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${paths.map((path) => `<url><loc>${escape(origin + (path === '/' ? '/' : path))}</loc></url>`).join('')}</urlset>\n`);
  await writeFile('dist/robots.txt', `User-agent: *\nAllow: /\n\nSitemap: ${origin}/sitemap.xml\n`);
} finally {
  await server.close();
}
