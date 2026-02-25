## Cursor Cloud specific instructions

This is a static HTML/CSS/JS website (Akatsuki fan site from Naruto, in Brazilian Portuguese). There is no build step, no package manager, and no framework.

### Running the site

Serve files with any static HTTP server. The simplest approach:

```
python3 -m http.server 8080
```

Then open `http://localhost:8080` in a browser.

### Project structure

- `index.html` — home page
- `akatsuki.html` — characters gallery page
- `sobre.html` — about page
- `*.html` (pain, obito, itachi, etc.) — individual character detail pages
- `style.css` — shared stylesheet
- `script.js` — dropdown submenu interactivity
- `img/` — image assets
- `music/` — audio assets

### Notes

- No linting, testing frameworks, or CI/CD pipelines are configured.
- No dependencies to install; `python3 -m http.server` (available by default) is sufficient for local development.
- The submenu dropdown on "Personagens" link is driven by vanilla JS mouseover events in `script.js`.
