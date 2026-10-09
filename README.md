# GearCraft website

The website for **GearCraft: Mechanical Puzzle**: an intro page, the privacy policy and the
support page that Google Play and the App Store ask for. React + TypeScript + Vite, no other
dependencies, and no cookies, analytics, or third-party scripts or fonts.

| URL | Page | Source |
|---|---|---|
| `/` | Intro | `src/pages/Home.tsx` |
| `/privacy-policy/` | Privacy policy (store "Privacy policy URL") | `src/pages/PrivacyPolicy.tsx` |
| `/support/` | Support and contact (App Store "Support URL") | `src/pages/Support.tsx` |
| `/app-ads.txt` | AdMob authorised sellers | `public/app-ads.txt` |

Each page is its own HTML file (`index.html`, `privacy-policy/index.html`,
`support/index.html`), so every URL works on any static host without rewrite rules.

## Run

```sh
npm install
npm run dev       # http://localhost:5173
npm run build     # type-check, then build into dist/
npm run preview   # serve dist/
npm run lint
```

## Before publishing

1. In `src/site.ts`, set `contactEmail`. It is shown on every page, so use an address you
   are happy to see published.
2. When a store listing goes live, put its URL in `googlePlayUrl` / `appStoreUrl`. Until then
   the buttons say "Coming soon".
3. Keep the privacy policy in line with the app, the Play Data safety form and the App Store
   privacy answers. When "Remove ads" purchases ship, add a Purchases section and change the
   "Last updated" date.

## Deploy

Upload the `dist/` folder to any static host (Netlify, Cloudflare Pages, GitHub Pages...).

* **At a domain root** (`https://gearcraft.example/`): `npm run build`.
* **In a sub-folder**, such as a GitHub Pages project site
  (`https://<user>.github.io/gearcraft-site/`):
  `BASE_PATH=/gearcraft-site/ npm run build`.

Then enter `<site>/privacy-policy/` as the privacy policy URL in both store consoles, and
`<site>/support/` as the App Store support URL. Also build the app with
`--dart-define=PRIVACY_POLICY_URL=<site>/privacy-policy/` so Settings › About links to it.

`app-ads.txt` only counts at the **root of the domain** that is entered as the developer
website in the store listings (`https://<domain>/app-ads.txt`). A GitHub Pages project site
can't serve it there, but a custom domain or a `<user>.github.io` user site can.

## Images

The screenshots (`src/assets/screens/`) and icons come from the game's store kit
(`GearCraft-Mechanical-puzzle/store/`). They were resized to 540 × 960 WebP. If you
regenerate the store art, regenerate these too.
