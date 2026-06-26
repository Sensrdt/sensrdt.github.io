# Sridip Dutta — Portfolio

A fast, single-page personal portfolio built with plain **HTML, CSS & JavaScript** —
no build step, no framework, no dependencies. Designed to be hosted for free on **GitHub Pages**.

## ✨ Features

- Modern 2026-style UI: aurora gradient background, glassmorphism, smooth scroll reveals
- **Light / dark theme** toggle (remembers your choice, respects system preference)
- Fully **responsive** with a mobile menu
- Animated impact-stat counters, scroll progress bar, active-section nav highlighting
- Accessible: semantic HTML, keyboard focus styles, `prefers-reduced-motion` support
- Single page, loads instantly (only Google Fonts fetched over the network)

## 📁 Structure

```
portfolio/
├── index.html      # all content/markup
├── styles.css      # design tokens, layout, components, responsive rules
├── script.js       # theme, scroll reveal, counters, nav interactions
├── .nojekyll        # tells GitHub Pages to serve files as-is
└── README.md
```

## 🖥️ Preview locally

From this folder:

```bash
python3 -m http.server 8080
# then open http://localhost:8080
```

(or just double-click `index.html`)

## 🚀 Deploy to GitHub Pages

See the step-by-step guide in the chat, or in short:

1. Create a repo named **`sensrdt.github.io`** under your personal account (`Sensrdt`).
2. Push these files to the `main` branch.
3. In the repo: **Settings → Pages → Build and deployment → Source: Deploy from a branch → `main` / `root`**.
4. Wait ~1 minute, then visit **https://sensrdt.github.io**.

## 📝 Editing your content

- Text lives in `index.html` (each section is clearly commented).
- The site uses the **minimal** design with a **dark/light toggle** (top-right, saved in the browser). The two palettes are at the top of `styles.css` (`[data-theme="light"]` / `[data-theme="dark"]`).
- All 10 alternate designs are retained in the STYLES section of `styles.css` (`[data-style="…"]`). To bring back the live style switcher, restore the `.theme-picker` markup in `index.html` and its JS block in `script.js`.
- To enable the **Resume** button, drop your compiled `Sridip_Dutta_Resume.pdf` into this folder.
