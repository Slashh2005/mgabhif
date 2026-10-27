---
name: Mgabhi & Famaly Construction
description: The assay certificate. A mining and logistics company's site issued like a commodity spec sheet.
colors:
  paper: "#ffffff"
  paper-2: "#f2f3f3"
  paper-3: "#e4e6e7"
  ink: "#2a2b2b"
  ink-soft: "#565a5b"
  navy: "#0c3054"
  navy-deep: "#0a2744"
  navy-soft: "#b9c6d6"
  char: "#262727"
  char-soft: "#b3b6b7"
  rule: "#cfd3d5"
  error: "#a1261d"
typography:
  display:
    fontFamily: "Hanken Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.05rem, -0.2rem + 8vw, 8.25rem)"
    fontWeight: 500
    lineHeight: 0.95
    letterSpacing: "-0.045em"
  headline:
    fontFamily: "Hanken Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2rem, 1rem + 3.9vw, 4.75rem)"
    fontWeight: 500
    lineHeight: 0.98
    letterSpacing: "-0.04em"
  statement:
    fontFamily: "Hanken Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.3125rem, 1rem + 1.1vw, 2rem)"
    fontWeight: 400
    lineHeight: 1.22
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Hanken Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.0625rem, 1rem + 0.25vw, 1.1875rem)"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "-0.005em"
    fontFeature: "\"tnum\" 1, \"lnum\" 1"
  label:
    fontFamily: "Hanken Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(0.875rem, 0.85rem + 0.1vw, 0.9375rem)"
    fontWeight: 400
    lineHeight: 1.45
rounded:
  none: "0px"
spacing:
  margin: "clamp(1rem, 0.4rem + 2.4vw, 2rem)"
  gutter: "clamp(1rem, 0.6rem + 1.4vw, 2rem)"
  section: "clamp(6.5rem, 4rem + 9vw, 13rem)"
components:
  button-primary:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.paper}"
    rounded: "{rounded.none}"
    padding: "0.8rem 1.5rem"
    height: "3.25rem"
  button-primary-hover:
    backgroundColor: "{colors.navy-deep}"
  button-quiet:
    backgroundColor: "{colors.paper-2}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
  chip:
    backgroundColor: "{colors.paper-2}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    height: "2.75rem"
  chip-selected:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.paper}"
---

## Overview

**The assay certificate.** Every claim the company makes is set the way a commodity certificate sets
it: a ruled particulars table. White certificate paper, charcoal
ink, and navy issuer ink, all taken from the Mgabhi logo (the tunnel-and-cart mark). Big medium-weight
grotesk statements carry the page; tables and the company's own site photographs carry the proof. The hero is a split screen: a navy field with the headline beside a full-height site photograph.

## Colors

- **Paper** (`#ffffff`) is the ground. **Paper-2** and **paper-3** are tone steps for sections, chips
  and image placeholders; surfaces are separated by tone, never by lines or shadows.
- **Ink** (`#2a2b2b`, the logo's charcoal) for all running text, at full strength. **Ink-soft** only for
  secondary lines and table keys.
- **Navy** (`#0c3054`, sampled from the logo wordmark) is the issuer's ink: the hero field, the primary action, the
  selected state, the figures in the experience sentence. It also owns one whole field
  (references).
- **Char** (`#262727`) owns the closing field (contact). On dark fields, text is white with
  **navy-soft** / **char-soft** for secondary lines.
- **Rule** (`#cfd3d5`) is only for the lines between table rows. **Error** (`#a1261d`) is only for form
  validation messages.

## Typography

One family, Hanken Grotesk, at weights 400 and 500, with tabular lining figures everywhere. Five steps
only: display (hero and the inspection halves), headline (section titles, two lines maximum),
statement (large paragraphs, three or four lines, 32px maximum), body, and label. No bold, no italic,
capitals only in the small region tags.

## Layout

A 12-column grid inside equal outer margins (`--margin`), max width 1680px. Sections are separated by
`--section` (104–208px). Statements sit left; their proof (photo, table, map, slip) closes the right.
Phone layouts stack in reading order; the hero headline keeps two lines at every width.

## Elevation & Depth

Flat. Depth comes from tone steps and from photographs. The only shadow is on the mobile menu, which
genuinely floats.

## Shapes

Square corners everywhere: buttons, chips, photographs, the slip.

## Components

- **Particulars table**: real `<table>`, 2px ink rule on top, 1px `rule` lines between rows; keys in
  ink-soft at 40% width, values in ink at weight 500. On dark fields the rules turn translucent white.
- **Buttons**: navy fill, white text, square; hover darkens, press scales to 0.97, trailing arrow
  nudges 4px.
- **Chips**: radio inputs styled as square tone blocks; selected chips turn navy.
- **Enquiry slip**: white form on the charcoal field with a reference number; fields are underlined,
  not boxed. Submitting composes a `mailto:` with every choice filled in.
- **Region list**: numbered rows (01–05) with a title, a coloured tag (HQ amber `#b7791f`, Logistics green
  `#2f7d5b`, Beneficiation rose `#c2416a`, Mining navy) and a one-line description; a 3px left edge, navy and
  a lavender `#c9d1e2` fill on the selected row. Requested by the client from a reference screenshot.
- **Operations map**: Natural Earth province outlines, three operating provinces in a darker tone, the
  selected one in navy-soft; pins pulse when selected and stay in sync with the region list.

## Do's and Don'ts

- Do put every factual claim in a particulars table.
- Do use the company's own photographs, square-cropped, with a plain caption saying what is shown.
- Don't add stamps or badges, eyebrows above headings, icon cards, gradients, glass, or shadows at rest.
- Don't spell the company "Family": it is **Famaly**, as on the logo.
- Don't invent figures, clients or quotes. The only stats are 10+ years industry experience, 100%
  safety compliance, 5 regions and 4 verticals.
