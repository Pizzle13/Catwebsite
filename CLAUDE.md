# Four Tashkent Cats — Project Documentation

## What this is

A cat adoption website for Teddy Bear, Meatball, Nuts, and Bolts — four male cats in Tashkent, Uzbekistan. The site showcases each cat with photos, videos, and stories to help them find homes internationally.

Live at: **https://pinspots.co**
GitHub: **Pizzle13/pinspots.co**

---

## Tech stack

| Thing | What | Why |
|---|---|---|
| Framework | Next.js 14 (App Router) | Vercel-native, static generation |
| Styling | Tailwind CSS + custom CSS in `globals.css` | Editorial design system from Claude Design |
| Fonts | Instrument Serif, DM Sans, JetBrains Mono (Google Fonts) | Warm, editorial typography |
| CMS | Decap CMS at `/admin` | Non-technical content editing via browser |
| i18n | Custom React context | English + Russian toggle |
| Images | Stored in `/public/cats/` in this repo | No third-party needed |
| Videos | YouTube / Google Drive embed links | No large file hosting |
| Deploy | Vercel | Continuous deploy from `main` branch |

---

## How to run locally

```bash
npm install
npm run dev
# Opens at http://localhost:3000
```

---

## How to deploy

Push to the `main` branch on GitHub. Vercel auto-deploys on every push.

---

## Environment variables

Set these in Vercel → Project → Settings → Environment Variables:

| Variable | Value |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | `https://pinspots.co` |
| `GITHUB_CLIENT_ID` | From your GitHub OAuth App |
| `GITHUB_CLIENT_SECRET` | From your GitHub OAuth App |

For local development, copy `.env.example` to `.env.local` and fill in values.

---

## How to set up the CMS (one-time setup)

1. Go to **github.com/settings/applications/new**
2. Fill in:
   - Application name: `Pinspots CMS`
   - Homepage URL: `https://pinspots.co`
   - Authorization callback URL: `https://pinspots.co/api/callback`
3. Click **Register application**
4. Copy the **Client ID** → add to Vercel as `GITHUB_CLIENT_ID`
5. Generate a **Client secret** → add to Vercel as `GITHUB_CLIENT_SECRET`
6. Deploy once → go to `https://pinspots.co/admin` → login with your GitHub account

---

## How to add/edit cat content (non-technical guide)

1. Go to **https://pinspots.co/admin**
2. Log in with your GitHub account (Pizzle13)
3. Click **Cats** in the left sidebar
4. Click a cat to edit, or **New Cat** to add one
5. Fill in the fields — all bilingual (English + Russian)
6. To add photos: click the photo field → upload from your computer
7. Click **Save** — changes go live in ~1 minute after Vercel rebuilds

**To mark a cat as adopted:** Open the cat → tick **"Mark as Adopted"** → Save. The cat stays on the site but shows as adopted.

---

## File structure

```
content/cats/          ← Cat data (JSON, edited via CMS)
  teddy-bear.json
  meatball.json
  nuts.json
  bolts.json

public/
  cats/                ← Cat photos (uploaded via CMS)
  admin/
    index.html         ← Decap CMS entrypoint
    config.yml         ← CMS field definitions

src/
  app/
    layout.tsx         ← Root layout, fonts, metadata
    page.tsx           ← Homepage (reads cat data server-side)
    api/
      auth/route.ts    ← GitHub OAuth start
      callback/route.ts ← GitHub OAuth callback
  components/
    Header.tsx         ← Sticky nav with language toggle
    Footer.tsx
    HomeContent.tsx    ← Full homepage (client component)
    CatCard.tsx        ← Editorial cat card
    CatModal.tsx       ← Cat profile modal overlay
    CatGallery.tsx     ← Photo carousel
  lib/
    cats.ts            ← Read cat JSON files, format age
    i18n.tsx           ← Language context + useI18n hook
  messages/
    en.ts              ← English UI strings
    ru.ts              ← Russian UI strings
```

---

## Color palette

Default theme: **Cream + Terracotta**

| Token | Hex | Used for |
|---|---|---|
| `#f6f0e6` | Warm cream | Page background |
| `#fdf9f2` | Light cream | Cards |
| `#efe6d6` | Warm beige | Story section, tints |
| `#2a221b` | Deep brown | Primary text |
| `#5a4f43` | Mid brown | Secondary text |
| `#8a7d6e` | Muted brown | Labels, metadata |
| `#b8543c` | Terracotta | Accent, buttons |
| `#d9cdb8` | Warm tan | Borders |

---

## Contact info (hardcoded in components)

- Email: jpbhikarry@gmail.com
- WhatsApp: +998 90 063 5726
- Telegram: @MrBhikarry

To change these, search for them in `src/messages/en.ts` and `src/messages/ru.ts` (contact.channels) and `src/components/CatModal.tsx`.

---

## Adding a new cat

1. Via CMS: go to `/admin` → Cats → New Cat → fill all fields → Save
2. Or manually: create `content/cats/[slug].json` following the same structure as existing files

---

## How the i18n works

- Language state lives in `I18nProvider` (React context, client-side)
- `useI18n()` returns `{ lang, t, setLang }`
- All UI strings are in `src/messages/en.ts` and `src/messages/ru.ts`
- Cat content is bilingual in the JSON: `{ "en": "...", "ru": "..." }`
- Language toggle is in the Header component
- No URL routing — language switches in-place
