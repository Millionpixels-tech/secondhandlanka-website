# Secondhand Lanka website

A responsive React + TypeScript website, built with Vite. Includes a branded home page, interactive category showcase, FAQs, privacy policy, terms, contact page, and custom favicon.

## Run

```sh
npm install
npm run dev
```

## Verify and build

```sh
npm run lint
npm run typecheck
npm run build
npm run preview
```

## Launch settings

Copy `.env.example` to `.env.local`. Android is available through the default Google Play listing (`lk.secondhand.app`); set `VITE_GOOGLE_PLAY_URL` to override it. iOS displays a coming-soon notice until `VITE_APP_STORE_URL` is set to the published App Store listing. `VITE_SUPPORT_EMAIL` defaults to `support@secondhandlanka.lk`.

The contact form prepares a mailto message and opens the visitor's email app. It does not send or store messages itself.

The policy pages are clearly marked launch drafts. Confirm the operator identity, actual hosting/data processing locations, retention schedule, account deletion process, and final terms before public release. Privacy and terms describe server-managed deletion, reporting, blocking, and moderator review. Reports expire after 90 days and completed deletion records after 30 days through daily backend maintenance. Deploy the matching mobile backend before publishing these policies.

`/delete-account` is the external deletion-request page for Google Play. It prepares an email request for people without the app. Ensure `VITE_SUPPORT_EMAIL` is monitored. Support must verify ownership and initiate deletion using the operator procedure in the mobile repository’s `docs/PRODUCTION_RELEASE.md`. The website does not submit requests to Firebase automatically.

## Hosting

Deploy `dist/` after `npm run build` to a static host. Route fallback must serve `index.html` for `/privacy`, `/terms`, `/contact`, `/delete-account`, and unknown URLs. `public/_redirects` provides this for Netlify/Cloudflare Pages; `vercel.json` provides it for Vercel. Normal anchor navigation supports direct links, browser history, and keyboard navigation without a routing dependency.

Product imagery is downloaded locally from Unsplash and used as illustrative sample items, not real marketplace listings. Sources: chair photo `1598300042247-d088f8ab3a91`, camera photo `1516035069371-29a1b244cc32`, shoes photo `1542291026-7eec264c27ff`. Fonts: DM Sans and Manrope via Google Fonts, with system fallbacks. Firebase privacy source: https://firebase.google.com/support/privacy.

## Search visibility

Production builds prerender all five public pages to HTML, with unique titles, descriptions, canonical URLs and social sharing metadata. The homepage includes Organization and WebSite structured data. The build also creates `dist/sitemap.xml`, `dist/robots.txt` and `dist/404.html`. No live listing or product data is represented by the illustrative previews.

Set `VITE_SITE_URL` to the actual primary HTTPS domain **before building and deploying**. It defaults to `https://secondhandlanka.lk`, matching the support email domain; confirm this is your production website domain. Canonicals and sitemap URLs use this value. Submit `/sitemap.xml` in Search Console after deployment and inspect the homepage and contact page. Rebuild whenever these pages change.

Deploy the whole `dist/` directory. Vercel rewrites map known pages to their prerendered HTML. Hosts using `public/_redirects` must serve existing static files before the SPA fallback. Unknown client-side routes add `noindex`; configure the host to return the generated `404.html` with HTTP 404 where supported. No ranking position is guaranteed.
