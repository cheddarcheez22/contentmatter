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
| `contact.html` | Contact page with the embedded Airtable lead form (`/contact?source=...`) |
| `404.html` | Not found page |
| `assets/styles.css` | All styles |
| `assets/site.js` | Header on scroll, back to top, sample work arrows, example result pop up |
| `assets/lead-form.js` | Airtable lead form embed: form URL, allowed CTA Source values, prefill mapping |
| `assets/img/` | Photos and favicon |
| `robots.txt`, `sitemap.xml`, `_headers` | Search, AI crawler access, caching |

## Before going live

- [ ] Free tools: the tool cards are design only until the tool code is added.
- [ ] Confirm "Founded 2023" in the footer.
- [ ] The point of sale tablet photo (`assets/img/r-pos.jpg`) shows a vendor name on screen; swap it if you prefer.
- [ ] After launch, submit `sitemap.xml` in Google Search Console and Bing Webmaster Tools.

Every page has a unique title, meta description, canonical URL, Open Graph tags, one H1, and alt text on images. Posts include Article structured data; pages with FAQs include FAQPage structured data.

## Lead capture (Airtable)

All leads go to the Airtable form `https://airtable.com/app7AlitwP4HVxVhx/pageQiYehskUypweJ/form` ("Website Leads" table). Every CTA passes a hidden, prefilled **CTA Source**.

| CTA Source | Where |
| --- | --- |
| Header Button | "Get a free audit" button and "Contact" link in every header |
| Footer | "Free audit" and "Contact" links in every footer |
| Homepage Hero | Home page hero form, plan cards, and the embedded form on the home page |
| Services Page | `services/*` and `plans` body buttons |
| Blog | `matters`, category pages, posts (buttons, sticky bar, embedded post form) |
| Newsletter | theMATTERS subscribe boxes (send the email to `/contact` prefilled) |
| Other | `how-it-works`, `campaign-record`, `free-tools`, `sample-work`, `404` |
| Contact Page | `/contact` opened directly, or with a missing/unknown `?source=` |

To add the form anywhere, copy one of the `<div class="lead-embed">` blocks (for example from a post) and change the `CTA Source` value in both URLs and `data-source`. To change the form URL, allowed sources, or prefilled fields, edit `assets/lead-form.js` (and the static embed URLs in `index.html` and `matters/*-*.html`). No API keys are used; the form link is public.
