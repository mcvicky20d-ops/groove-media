# The Groove Media — Production House Website

A professional, fully animated and responsive marketing site for **The Groove Media**, a Chennai-based production house offering:

- 🎬 **Wedding films & photography**
- 🏢 **Corporate & ad film production**
- 🎤 **Event & program coverage**

Built with **Next.js 14 (App Router)**, **Tailwind CSS**, and **Framer Motion** — optimised for conversions with a lead funnel, WhatsApp enquiries, testimonials and trust sections.

---

## ✨ Features

- Cinematic animated hero with rotating word reel
- Dedicated service pages: Weddings, Corporate & Ads, Events
- Lead-funnel enquiry form (submits straight to WhatsApp — no backend needed)
- Floating WhatsApp button + click-to-call everywhere
- Testimonial carousel & trust / "why us" sections
- About page, Google Maps embed, Instagram & Google Business links
- SEO: metadata, `sitemap.xml`, `robots.txt`, LocalBusiness schema.org
- 100% responsive, accessible, `prefers-reduced-motion` aware

## 🛠️ Local development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## ✏️ Before going live — edit these

Everything lives in **one file**: `src/lib/site.ts`

- `email`, `phoneDisplay`, `phoneE164`, `whatsapp` → currently **placeholders**, replace with real values
- `address` → exact studio address
- Instagram & Google Business links are already wired in

Replace the favicon at `src/app/icon.svg` and add your real logo to `public/`
if you want to swap the SVG mark in `src/components/Logo.tsx`.

## 🚀 Deploy to Vercel (≈ 2 minutes)

1. Go to **https://vercel.com/new**
2. Sign in with the GitHub account that owns this repo
3. Click **Import** next to `groove-media`
4. Framework preset auto-detects **Next.js** — leave all defaults
5. Click **Deploy**
6. Vercel gives you a live URL like `https://groove-media.vercel.app`

No environment variables are required. Every push to the branch
auto-deploys a fresh preview; merging to the main branch updates production.

---

© The Groove Media Production House · Chennai
