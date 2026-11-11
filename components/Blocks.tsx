import Link from "next/link";
import { IMG, PARTNERS, PHONE, TEL, STATS } from "@/lib/site";

/** Top of every inner page: a full-bleed photo with the navy fading in under the title. */
export function PageHero({
  title,
  intro,
  img,
  alt,
  pos = "50% 50%",
}: {
  title: string;
  intro: string;
  img: string;
  alt: string;
  pos?: string;
}) {
  return (
    <section className="page-hero on-dark relative overflow-hidden bg-navy text-white" aria-labelledby="page-title">
      <figure className="absolute inset-0 m-0" data-open>
        <img src={img} alt={alt} width={1200} height={1600} fetchPriority="high" className="photo drift absolute inset-0" style={{ objectPosition: pos }} />
      </figure>
      <div className="page-hero__fade pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="wrap relative flex min-h-[inherit] flex-col justify-end pb-[clamp(2.5rem,6vw,5rem)] pt-32">
        <h1 id="page-title" className="page-hero__title lines max-w-[16ch]">
          <span className="line">
            <span data-line>{title}</span>
          </span>
        </h1>
        <p className="statement mt-5 max-w-[40ch] text-white/85" data-load style={{ ["--d" as string]: "380ms" }}>
          {intro}
        </p>
      </div>
    </section>
  );
}

/** Four figures in big type on the navy field. Two by two on phones. */
export function StatsBand() {
  return (
    <section className="on-dark bg-navy py-[clamp(4rem,8vw,7rem)] text-white" aria-labelledby="stats-title">
      <div className="wrap">
        <h2 id="stats-title" className="sr-only">
          Our record
        </h2>
        <ul className="stats grid grid-cols-2 gap-x-[var(--gutter)] gap-y-10 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <li key={s.label} className="stat" data-reveal style={{ ["--i" as string]: i }}>
              <span className="stat__value">{s.value}</span>
              <span className="stat__label">{s.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/** Partner names running to the right. */
export function Marquee({ dark = true }: { dark?: boolean }) {
  return (
    <section className={`${dark ? "on-dark bg-navy text-white" : "bg-paper"} py-[clamp(3.5rem,7vw,6rem)]`} aria-labelledby="partners-title">
      <div className="wrap">
        <h2 id="partners-title" className={`statement ${dark ? "text-navy-soft" : "text-ink-soft"}`} data-reveal>
          Partners and industry recognition
        </h2>
      </div>
      <div className={`marquee mt-8${dark ? "" : " marquee--light"}`} data-reveal>
        <ul className="sr-only">
          {PARTNERS.map((n) => (
            <li key={n}>{n}</li>
          ))}
        </ul>
        <div className="marquee__track" aria-hidden="true">
          {[0, 1].map((copy) => (
            <ul key={copy} className="marquee__group">
              {[...PARTNERS, ...PARTNERS].map((n, i) => (
                <li key={`${n}-${i}`} className="marquee__item">
                  {n}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}

/** The two partner quotes. */
export function Quotes() {
  return (
    <section className="on-dark bg-navy py-[var(--section)] text-white" aria-labelledby="voices-title">
      <div className="wrap">
        <h2 id="voices-title" className="head max-w-[18ch]" data-reveal>
          Trusted by partners across the value chain
        </h2>
        <div className="grid12 mt-[clamp(3rem,6vw,6rem)] gap-y-12">
          {[
            {
              q: "Reliable, professional and consistently on schedule — a true logistics partner for our mining operations.",
              who: "Procurement Director",
              org: "Coal Offtake Partner",
              cls: "md:col-span-6 lg:col-span-5",
            },
            {
              q: "Mgabhi’s commitment to safety and compliance sets the benchmark for sub-contractors in our region.",
              who: "Operations Lead",
              org: "Chrome Mining Group",
              cls: "md:col-span-6 lg:col-span-5 lg:col-start-8",
            },
          ].map((t, i) => (
            <figure key={t.who} className={`quote col-span-12 m-0 ${t.cls}`} data-reveal style={{ ["--i" as string]: i + 1 }}>
              <blockquote className="statement">&ldquo;{t.q}&rdquo;</blockquote>
              <figcaption className="mt-6 text-navy-soft">
                <span className="block font-medium text-white">{t.who}</span>
                {t.org}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Closing call to action used at the foot of every page. */
export function CtaBand() {
  return (
    <section className="on-dark bg-char py-[var(--section)] text-white" aria-labelledby="cta-title">
      <div className="wrap grid12 items-end gap-y-10">
        <div className="col-span-12 lg:col-span-7">
          <h2 id="cta-title" className="head max-w-[18ch]" data-reveal>
            Partner with an African industry leader
          </h2>
          <p className="statement mt-6 max-w-[38ch] text-char-soft" data-reveal style={{ ["--i" as string]: 1 }}>
            Whether you&rsquo;re sourcing commodities, hiring plant, or planning a mining operation — we&rsquo;re ready to
            engage.
          </p>
        </div>
        <div className="col-span-12 flex flex-wrap gap-3 lg:col-span-4 lg:col-start-9 lg:justify-end" data-reveal style={{ ["--i" as string]: 2 }}>
          <Link href="/contact/" className="btn btn--light">
            Start a Conversation <span className="arrow" aria-hidden="true">→</span>
          </Link>
          <a href={TEL} className="btn btn--ghost">
            Call {PHONE}
          </a>
        </div>
      </div>
    </section>
  );
}

/** Melvin. */
export function Founder({ withLink = false }: { withLink?: boolean }) {
  return (
    <section id="founder" className="bg-paper-2 py-[var(--section)]" aria-labelledby="founder-title">
      <div className="wrap grid12 items-end gap-y-10">
        <figure className="col-span-12 m-0 md:col-span-6" data-reveal>
          <div className="frame aspect-[4/5]">
            <img
              src={IMG.founderChair}
              alt="Melvin, founder of Mgabhi & Famaly Construction, on a phone call in a blue armchair in an office lobby."
              width={1200}
              height={1600}
              loading="lazy"
              className="photo object-[60%_35%]"
            />
          </div>
        </figure>
        <div className="col-span-12 md:col-span-6 lg:col-span-5 lg:col-start-8">
          <h2 id="founder-title" className="head" data-reveal>
            Meet our founder
          </h2>
          <p className="statement mt-6" data-reveal style={{ ["--i" as string]: 1 }}>
            Mgabhi &amp; Famaly Construction was founded in 2022 by Melvin, who still leads the company from our head
            office in Midrand.
          </p>
          <p className="mt-5 max-w-[46ch] text-ink-soft" data-reveal style={{ ["--i" as string]: 2 }}>
            Partners deal directly with Melvin: the calls, the site visits and the negotiations at the table.
          </p>
          {withLink ? (
            <Link href="/about/" className="link mt-8 inline-block" data-reveal style={{ ["--i" as string]: 3 }}>
              More about us <span aria-hidden="true">→</span>
            </Link>
          ) : (
            <figure className="m-0 mt-10 w-40" data-reveal style={{ ["--i" as string]: 3 }}>
              <div className="frame aspect-[4/5]">
                <img
                  src={IMG.founderBoardroom}
                  alt="Melvin standing at the head of a long boardroom table."
                  width={1200}
                  height={1600}
                  loading="lazy"
                  className="photo object-[55%_30%]"
                />
              </div>
            </figure>
          )}
        </div>
      </div>
    </section>
  );
}

/** Three equal site photos. On phones they swipe sideways. */
export function SitePhotos() {
  return (
    <div className="swipe swipe--sm mt-[clamp(3rem,6vw,5rem)] sm:grid sm:grid-cols-3 sm:gap-[var(--gutter)]">
      {[
        { src: IMG.heroPlant, alt: "A spiral concentrator plant in yellow and black steel framing above a fresh heap of wet concentrate.", w: 960, h: 1280, pos: "50% 45%" },
        { src: IMG.engineer, alt: "A site engineer in a hard hat and reflective vest in front of a coal stockpile.", w: 720, h: 808, pos: "50% 40%" },
        { src: IMG.wash, alt: "A wash plant with its conveyor and spiral tower beside fresh stockpiles.", w: 720, h: 699, pos: "65% 50%" },
      ].map((p, i) => (
        <figure key={p.src} className="swipe__item m-0" data-reveal style={{ ["--i" as string]: i }}>
          <div className="frame aspect-[4/5]">
            <img src={p.src} alt={p.alt} width={p.w} height={p.h} loading="lazy" className="photo" style={{ objectPosition: p.pos }} />
          </div>
        </figure>
      ))}
    </div>
  );
}
