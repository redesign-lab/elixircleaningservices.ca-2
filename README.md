# Elixir Cleaning Services — Premium Homepage (Redesign)

A custom-designed, conversion-focused homepage for **Elixir Cleaning Services**, Wellington County's short-term rental turnover specialists (Elora · Fergus · Guelph · Kitchener–Waterloo).

Built as a plain static site — **GitHub Pages ready**, no build step, no backend.

## Stack

- HTML5 (semantic, SEO & accessibility-minded, noindex demo directive)
- CSS3 (mobile-first, CSS custom properties, no framework)
- Vanilla JavaScript (mobile nav, FAQ accordion, mailto-composed quote form)
- Fonts: Oswald (display) + Inter (body)
- Icons: inline SVG (Lucide-style stroke icons)
- Header is fixed (top: 0) at all scroll positions; slim topbar persists on desktop. Hero kicker copy uses #6e5620 bronze for WCAG-friendly contrast.
- Logo: original Elixir Cleaning Services mark recolored to the brand palette (deep evergreen + champagne gold) with background removed — `assets/logo/logo-color.png` (for light surfaces), `logo-light.png` (for dark surfaces), `favicon.png`.
- Images: AI-generated brand-consistent photography (hero, services, staging) — original site photography could not be downloaded in this environment, so custom photorealistic assets were generated in the brand palette. Photos depicting staff were regenerated with the recolored original Elixir wordmark (ivory figure + gold arch) screen-printed on the polos, per brand guidelines.

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
- Logo supplied by the client (`image-1.png`) was background-removed via luminance-keyed alpha and recolored: deep evergreen wordmark/figure + champagne gold arch (light surfaces), ivory figure + gold arch (dark surfaces). Original geometry untouched — no redrawing, no font replacement.
- The quote form intentionally uses `mailto:` composition (static site, no backend) instead of faking a server submission.
- `<meta name="robots" content="noindex, nofollow">` is set so this demo does not compete with the live site in search results.

## Deploy

Enable GitHub Pages → Source: `main` / root (or this branch root). The site loads from `index.html` with relative paths, so it works on project subpaths too.

## Local preview

```bash
python3 -m http.server 8080
# open http://localhost:8080
```
