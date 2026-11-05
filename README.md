# ContentMatter website

Static site for contentmatter.co. Plain HTML, CSS, and JavaScript, no build step.

## Upload to GitHub

1. Create a repository (for example `contentmatter-site`).
2. Unzip this folder. Upload everything inside `contentmatter-site/` so that `index.html` sits at the top of the repository, not inside a subfolder.
3. Commit to `main`.

## Deploy (Cloudflare Pages)

Workers & Pages > Create > Pages > Connect to Git > pick the repository.
Framework preset: None. Build command: leave empty. Build output directory: `/`.
Add the custom domain `contentmatter.co` (and `www`) under Custom domains.

Links use clean URLs (`/plans`, `/services/beauty`), which Cloudflare Pages, Netlify, and Vercel serve automatically from `plans.html` and so on. On GitHub Pages they also work.

## Folder map

| Path | Page |
| --- | --- |
| `index.html` | Home |
| `services/index.html` | All services |
| `services/food-beverage.html` | Food & Beverage |
| `services/retail.html` | Retail |
| `services/beauty.html` | Beauty |
| `services/health-wellness.html` | Health & Wellness |
| `services/home-commercial.html` | Home & Commercial |
| `plans.html`, `how-it-works.html`, `campaign-record.html`, `sample-work.html`, `free-tools.html` | Company pages |
| `matters.html` | theMATTERS blog home |
| `matters/<category>.html` | Blog category pages (beauty, food-beverage, home-commercial, retail) |
| `matters/<category>-<why\|what\|where\|when\|who\|how>.html` | The 24 posts |
| `404.html` | Not found page |
| `assets/styles.css` | All styles |
| `assets/site.js` | Header on scroll, back to top, sample work arrows, example result pop up |
| `assets/img/` | Photos and favicon |
| `robots.txt`, `sitemap.xml`, `_headers` | Search, AI crawler access, caching |

## Before going live

- [x] Forms: all forms post to Formspree (`https://formspree.io/f/xvkkllry`). Each sends a hidden `cta_source` (Homepage Hero, Homepage Contact Form, Blog, Newsletter), an email `_subject`, and a `_gotcha` spam honeypot; blog and newsletter forms also send the `page` path.
- [ ] Free tools: the tool cards are design only until the tool code is added.
- [ ] Confirm "Founded 2023" in the footer.
- [ ] The point of sale tablet photo (`assets/img/r-pos.jpg`) shows a vendor name on screen; swap it if you prefer.
- [ ] After launch, submit `sitemap.xml` in Google Search Console and Bing Webmaster Tools.

Every page has a unique title, meta description, canonical URL, Open Graph tags, one H1, and alt text on images. Posts include Article structured data; pages with FAQs include FAQPage structured data.
