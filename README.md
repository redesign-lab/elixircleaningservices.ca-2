# Elixir Cleaning Services — Premium Homepage (Redesign)

A custom-designed, conversion-focused homepage for **Elixir Cleaning Services**, Wellington County's short-term rental turnover specialists (Elora · Fergus · Guelph · Kitchener–Waterloo).

Built as a plain static site — **GitHub Pages ready**, no build step, no backend.

## Stack

- HTML5 (semantic, SEO & accessibility-minded, noindex demo directive)
- CSS3 (mobile-first, CSS custom properties, no framework)
- Vanilla JavaScript (mobile nav, FAQ accordion, mailto-composed quote form)
- Fonts: Oswald (display) + Inter (body)
- Icons: inline SVG (Lucide-style stroke icons)
- Images: AI-generated brand-consistent photography (hero, services, staging) — no original client photography could be downloaded in this environment, so custom photorealistic assets were generated in the brand palette (deep evergreen + champagne gold). Photos depicting staff show the Elixir droplet logo on the uniform, per brand guidelines.

## Structure

```
├── index.html            # Homepage
├── css/style.css         # All styles (mobile-first)
├── js/script.js          # Interactions
├── assets/
│   ├── images/           # WebP-quality JPGs (generated)
│   └── logo/             # SVG logo lockups (mark, dark, light)
├── .nojekyll             # GitHub Pages: bypass Jekyll
└── README.md
```

## Notes

- The original site (elixircleaningservices.ca) is a WordPress.com site. Its contact details (226-337-1945, elixircleaning519@gmail.com, info@elixircleaningservices.ca, Fergus ON), service list, pricing note (turnovers from $50), testimonial (Nicole, Airbnb Owner) and 24/7/365 availability were carried over verbatim.
- The original logo file could not be downloaded (network restrictions), so the droplet + sparkle mark and wordmark were recreated as modern inline SVG in the same evergreen/gold spirit — ready to swap with the master logo artwork if supplied.
- The quote form intentionally uses `mailto:` composition (static site, no backend) instead of faking a server submission.
- `<meta name="robots" content="noindex, nofollow">` is set so this demo does not compete with the live site in search results.

## Deploy

Enable GitHub Pages → Source: `main` / root (or this branch root). The site loads from `index.html` with relative paths, so it works on project subpaths too.

## Local preview

```bash
python3 -m http.server 8080
# open http://localhost:8080
```
