# personal site (static)

Plain **html**, **css**, and a small **main.js** — no build step. Open `index.html` in a browser from a local static server (recommended) or deploy the repo root as static files.

## local preview

From this directory:

```bash
npx serve .
```

Or with Python:

```bash
python -m http.server 8080
```

Then open the URL shown (e.g. `http://localhost:3000`).

## resume

Set the PDF path in `[main.js](main.js)` as `RESUME_HREF` (default: `public/resume.pdf`). Add your file at that path, e.g. `[public/resume.pdf](public/resume.pdf)`.

## future background animation

The wrapper `[#bg.page-shell](index.html)` in `[index.html](index.html)` is reserved for a lightweight animated layer (css or canvas) without changing the centered column layout in `[.page](styles.css)`.