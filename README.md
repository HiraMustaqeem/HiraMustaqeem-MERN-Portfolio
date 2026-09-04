# Hira Mustaqeem — Portfolio

A React + Framer Motion portfolio, built with Vite.

## Run it locally

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
```

This outputs a static site to `dist/`, which you can deploy anywhere
(Vercel, Netlify, GitHub Pages, etc.). To preview the production build
locally:

```bash
npm run preview
```

## Project structure

```
src/
  main.jsx           entry point
  App.jsx            page layout / section order
  data.js            your content (name, projects, skills, contact info)
  index.css          design tokens, resets, shared utility classes
  components/
    Nav.jsx
    Hero.jsx
    About.jsx
    Skills.jsx
    Projects.jsx      includes the "Project of the Month" badge
    Education.jsx
    Contact.jsx
    Footer.jsx
    Ambient.jsx        background blobs / grid
    Effects.jsx        cursor glow + scroll progress bar
    Shared.jsx          small reusable pieces (buttons, reveal animation, counter)
```

## Editing content

Almost everything you'd want to change day-to-day lives in `src/data.js`
(email, phone, LinkedIn, skills, projects, education). Update it there and
the whole site updates automatically.

**Things to fill in before you publish:**
- `CV_URL` in `src/data.js` — point this at your real CV (Google Drive share
  link, Dropbox, or a hosted PDF). The "Check CV" button in the nav uses it.
- Each project's `github`, `live`, and `readme` fields in `src/data.js` —
  currently `"#"` placeholders, swap in your real links.
- Each project's `image` field — currently points at the placeholder SVGs in
  `public/projects/`. Drop a real screenshot (16:9 works best, e.g.
  1200×675) into `public/projects/` and update the path, e.g.
  `image: "/projects/bookies.png"`.

To change colors/fonts, edit the CSS variables at the top of
`src/index.css`.

## Notable UX details

- **Section dot navigation** (right edge, desktop only): tracks scroll
  position and lets you jump to any section; the rail fill shows overall
  page progress.
- **Phone number**: clicking it both triggers a normal `tel:` call link and
  copies the number to the clipboard with a brief confirmation — handy on
  desktop where `tel:` can't dial.
- **Mobile nav**: tap the menu icon for a full slide-down panel with all
  section links plus Check CV / Email actions.
