# 📺 Nostalgia TV

**Turn on the TV. Pick a channel. Go back to 2012.**

A nostalgic, single-page "live television" experience for the browser — built to recreate the specific feeling of coming home and turning on the TV to watch cartoons, rather than browsing a video library. No account, no on-demand menus-first UX, no scrubbing — just channels, a CRT glow, and whatever's "on right now."

![Nostalgia TV screenshot](NostalgiaTV.png)
*(add a screenshot or short GIF here once deployed — it'll do more for this repo than anything in this file)*

---

## ✨ Features

- **Cold-open intro** — a black screen with a typing "Welcome, it's 2012 again....." line, before the CRT splash and power-on sequence
- **Live-simulated channels** — each channel maps to the real time of day, so refreshing or returning later drops you into "whatever's on now" instead of restarting from episode one, like a real broadcast
- **Channel surfing** — CH+/CH−, arrow keys, and swipe gestures on mobile
- **TV Guide** — a simulated now/next schedule per channel, accessible from the Menu
- **CRT mode** — scanlines, vignette, subtle RGB separation and flicker; on by default, toggle with the CRT button
- **CRT-styled screen casing** — the video sits inside a compact TV-bezel frame rather than a bare rectangle
- **Auto-hiding on-screen info** — channel badge, clock, and now-playing pill fade out after a few seconds of inactivity; the small "Nostalgia TV" watermark in the bottom-left always stays
- **No timeline scrubbing** — playback behaves like a live feed, not an on-demand video, and captions are forced off
- **Minimal controls** — CH−, Menu, Mute, CRT, Settings, CH+. Nothing else.
- **Fully responsive**, no page scrolling — the whole interface fits the viewport like an actual screen

---

## 🛠 Tech

Two files, no build step, no framework, no dependencies to install:

- **`index.html`** — markup, styles, and all logic
- **`channels.js`** — the channel lineup, kept separate so it's easy to edit without touching any code

Under the hood:
- Vanilla HTML / CSS / JavaScript
- YouTube IFrame Player API for video playback
- Web Audio API for synthesized UI sound effects (channel change, clicks, static) — no external audio files
- Google Fonts (Fraunces, IBM Plex Sans/Mono, Noto Sans Devanagari) loaded via CDN

---

## 📺 Editing the channel lineup

Open **`channels.js`**. Each channel is one object with `id`, `number`, `name`, `hindi`, `category`, `colorTheme`, `provider`, and `playlistId`.

- **To add a channel**, copy a block, change the values, and pick a channel number that isn't already used.
- **To remove one**, delete its block.
- **`playlistId`** must come from an official YouTube playlist with embedding enabled by its uploader — never a downloaded, reuploaded, or otherwise unofficial source. See the copyright note below.

No other file needs to change — `index.html` reads this array directly.

---

## 🚀 Running locally

The YouTube IFrame API needs to be served over `http://`, not opened directly as a file.

```bash
git clone https://github.com/your-username/nostalgia-tv.git
cd nostalgia-tv
python3 -m http.server 8000
```

Open **`http://localhost:8000`** — use `localhost`, not `127.0.0.1` (the YouTube API's internal messaging has a known quirk with raw IP addresses that blocks playback).

---

## ☁️ Deploying

Two static files, so any static host works:

- **Vercel** — import the repo, deploy, done. Free HTTPS included.
- **Netlify Drop** — drag the folder onto the page for an instant live URL.
- **GitHub Pages** — enable Pages on this repo (Settings → Pages → Deploy from branch), served from the root.

To use a custom domain, add it in your host's dashboard (e.g. Vercel → Settings → Domains) and point your registrar's DNS at the records it gives you.

---

## 📂 Project structure

```
nostalgia-tv/
├── index.html      # markup, styles, and all logic
├── channels.js     # the channel lineup — edit this to add/remove/update channels
└── README.md
```

---

## ⚠️ Content & copyright notice

This project only **embeds** video through YouTube's official IFrame API, pointing at existing public YouTube playlists. It does **not** download, scrape, proxy, re-host, or redistribute any video, and it does not use any studio's or broadcaster's logos or brand identity.

Whether a given playlist is safe to use depends entirely on **who uploaded it** — an official studio/distributor channel is on solid ground; a fan or aggregator reupload is not, regardless of whether YouTube technically allows embedding it. Check the uploader of each playlist in `channels.js` before relying on this publicly, and swap out anything that isn't from an official source.

If a playlist's owner disables embedding or a video becomes unavailable, that channel will simply show a "channel unavailable" state — nothing breaks elsewhere.

This is a personal/portfolio project exploring UI and nostalgia, not an official product of, or affiliated with, any broadcaster, studio, or platform referenced in the show titles.

---

## 📄 License

Choose a license for your own code (MIT is a common default for a project like this) and add a `LICENSE` file to the repo root. That license covers this codebase only — it does not grant any rights to the third-party video content played through the embedded player.
