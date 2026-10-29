# Chris in Me Gospel Arena

**Live concept:** https://chris-in-me.vercel.app

A warm, editorial, responsive and content-rich **church website concept**, designed and engineered by [Bespoke Technologies](https://www.bespoketech.com.ng).

> **Demonstration identity only:** The ministry name is preserved exactly as supplied ("Chris in Me Gospel Arena"). The website does not claim that this is an operating congregation. Services, venue, leadership, sermon recordings, pastoral care, and donation information are not invented or presented as verified. All message texts are original editorial reflections for demonstration; ministry and gathering information is illustrative. Stock imagery is not proof of a real church activity.

## Experience

- Immersive photographic hero with gentle cinematic motion, spacious type, and a clear next step.
- About / beliefs: story framework, four values, and biblical direction.
- First-time visitor guide with four steps and honest unverified status for practical logistics.
- Six unique original Scripture reflections, individually routed and searchable/filterable by topic.
- Six example ministry pages, each with descriptive focus areas and individual URLs.
- Four example gathering concepts with detail pages; no fictional dates or venue.
- Four full-length journal essays on belonging, spiritual growth, everyday faith, and hospitality.
- Bespoke Technologies contact form: browser-side validation, prepares a WhatsApp message for review. No storage, database or backend requests.
- Distinctive CSS-based illustration/wordmark, responsive menu, accessibility and keyboard styles.
- Automatically generated OG image at `/opengraph-image`, per-page metadata and canonical URLs, XML sitemap and robots policy.

## Technology

- Next.js 16 App Router, TypeScript, React 19
- Static Site Generation for all 28 defined routes; server-rendered metadata
- Custom CSS design system; Lucide icons
- Typed local content in `lib/content.ts`
- GitHub-linked Vercel production deployment
- No database, CMS, authentication, analytics cookies, env secrets, or payments

## Files

| Path | Purpose |
|---|---|
| `app/[[...slug]]/page.tsx` | Statically generated pages and detail routes |
| `app/layout.tsx` | Shared shell and global metadata |
| `app/globals.css` | Responsive design system and motion |
| `app/opengraph-image.tsx` | Bespoke branded 1200×630 social preview |
| `app/robots.ts`, `app/sitemap.ts` | Search-engine crawl guidance |
| `components/parts.tsx` | Shared presentation and identity |
| `components/client.tsx` | Navigation, search/filter, contact interaction |
| `lib/content.ts` | Complete structured demo content |

## Run locally

```bash
npm install
npm run dev
```

Navigate to http://localhost:3000.

For production:

```bash
npm run build
npm run start
```

## Before using for a real congregation

1. Confirm the **official ministry name**, spelling, logo, logo permissions, doctrinal identity and approved church copy.
2. Obtain verified service days and times, street address, contacts, leadership, actual ministries, published messages and videos, event dates, and images with usage permission.
3. Replace placeholders/illustrative data with authorized information; remove demonstration notices only after all factual content is verified.
4. If accepting prayer requests or donations, design an explicit, secure, consent-aware workflow and privacy policy before activating it. This demo deliberately avoids those flows.
5. Perform final cross-browser tests, real-device verification, accessibility checks and performance testing with approved media.

## QA targets

- Next.js production build and TypeScript must pass.
- All 28 route paths should return HTTP 200 with visible H1 and correct metadata.
- Desktop/tablet/mobile widths including 320px should have no horizontal overflow.
- Search and topic filters return expected sample reflections; mobile navigation works with the keyboard.
- OG preview URL returns an image.
- No broken external assets or console exceptions on tested pages.

## Licensing and credits

Images: [Unsplash](https://unsplash.com/license), used as clearly identified illustration only. Fonts: DM Sans and Cormorant Garamond via Google Fonts. Original visual concept and software: **Bespoke Technologies**.

For Honor and For Excellence.
