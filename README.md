# mgabhi.co.za

Website for **Mgabhi & Famaly Construction Pty Ltd**: mining, logistics and commodity trading, Est. 2022, Midrand.

Built with Next.js and Tailwind CSS, exported as a static site that can be hosted anywhere
(cPanel, Netlify, Vercel, S3).

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # writes the static site to out/
```

Upload the contents of `out/` to any web host.

## Where things live

| Path | What |
| --- | --- |
| `app/page.tsx` | The whole page: hero, about, experience, services, operations, references, contact, footer |
| `app/globals.css` | Colour and type tokens (from the logo), motion, component styles |
| `components/EnquirySlip.tsx` | The enquiry slip: composes a referenced email to info@mgabhi.co.za |
| `components/OperationsMap.tsx` | The interactive map of the five operating regions |
| `components/Seal.tsx` | The round navy stamp |
| `lib/za-map.json` | Province outlines (Natural Earth, public domain), simplified |
| `public/images/` | The company's own photographs |
| `public/brand/` | The logo's tunnel-and-cart mark, cut out from the logo with a transparent background |

## Before launch

- The enquiry slip opens the visitor's email app (`mailto:`). To receive enquiries without that step,
  connect the form to a form service (Formspree, Netlify Forms) or an API route.
- Replace the photographs in `public/images/` with higher-resolution originals when available. The
  current files are 720px wide and soften on large screens.
