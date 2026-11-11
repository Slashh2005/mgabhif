import Link from "next/link";
import { IMG, verticals } from "@/lib/site";
import { CtaBand, Marquee, StatsBand } from "@/components/Blocks";
import { regions } from "@/lib/regions";

export default function Home() {
  return (
    <>
      {/* ------------------------------------------------ Hero */}
      <section id="top" className="on-dark relative overflow-hidden bg-navy text-white" aria-labelledby="hero-title">
        <figure className="hero-photo absolute inset-y-0 right-0 m-0 overflow-hidden bg-[#7aa3cf]" data-open>
          <img
            src={IMG.heroPlant}
            alt="A spiral concentrator plant in yellow and black steel framing above a fresh heap of wet concentrate."
            width={960}
            height={1280}
            fetchPriority="high"
            className="photo drift absolute inset-0 object-[50%_40%]"
          />
        </figure>
        <div className="hero-fade pointer-events-none absolute inset-0" aria-hidden="true" />

        <div className="hero relative grid grid-cols-1 sm:grid-cols-[minmax(0,1fr)_40%] lg:min-h-[calc(100svh-4.75rem)] lg:grid-cols-12">
          <div className="flex flex-col justify-between gap-10 px-[var(--margin)] pb-8 pt-8 max-sm:min-h-[calc(100svh-4.75rem)] max-sm:justify-end max-sm:gap-8 sm:gap-14 sm:pb-12 sm:pr-4 sm:pt-[clamp(2.5rem,6vw,6rem)] lg:col-span-8 lg:pb-[var(--margin)]">
            <div>
              <p className="hero-kicker" data-load style={{ ["--d" as string]: "200ms" }}>
                Est. 2022 · Midrand, South Africa
              </p>
              <h1 id="hero-title" className="hero-title lines mt-4">
                <span className="line">
                  <span data-line style={{ ["--i" as string]: 0 }}>
                    Driving Africa&rsquo;s mining
                  </span>
                </span>{" "}
                <span className="line">
                  <span data-line style={{ ["--i" as string]: 1 }}>
                    &amp; logistics future
                  </span>
                </span>
              </h1>
              <p className="hero-sub statement mt-5 max-w-[36ch] text-white/85 sm:mt-8" data-load style={{ ["--d" as string]: "420ms" }}>
                Specialists in commodity export, mining services, petroleum supply, and plant hire across Southern
                Africa&rsquo;s industrial heartlands.
              </p>
              <div className="hero-actions mt-7 flex flex-wrap items-center gap-x-8 gap-y-3 sm:mt-10 sm:gap-y-4" data-load style={{ ["--d" as string]: "520ms" }}>
                <Link href="/contact/" className="btn btn--light">
                  Request Partnership <span className="arrow" aria-hidden="true">→</span>
                </Link>
                <Link href="/services/" className="link">
                  View Services
                </Link>
              </div>
            </div>

            <ul className="hero-tags grid grid-cols-2 gap-x-6 gap-y-4 sm:gap-y-6 xl:grid-cols-4" data-load style={{ ["--d" as string]: "640ms" }}>
              {[
                ["Mining", "Experience"],
                ["Commodity", "Export"],
                ["South African", "Ops"],
                ["Safety", "Compliant"],
              ].map(([a, b]) => (
                <li key={a} className="hero-tag">
                  <span className="block font-medium">{a}</span>
                  <span className="block text-navy-soft">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ Intro + founder */}
      <section className="wrap py-[var(--section)]" aria-labelledby="intro-title">
        <h2 id="intro-title" className="head max-w-[20ch]" data-reveal>
          South African roots, continental vision
        </h2>
        <div className="grid12 mt-[clamp(2rem,4vw,3.5rem)] items-center gap-y-12">
          <div className="col-span-12 lg:col-span-6">
            <p className="statement text-ink-soft" data-reveal style={{ ["--i" as string]: 1 }}>
              Headquartered in Waterfall, Midrand, we operate at the intersection of heavy infrastructure and
              high-volume commodity trading.
            </p>
            <Link href="/about/" className="btn mt-9" data-reveal style={{ ["--i" as string]: 2 }}>
              About us <span className="arrow" aria-hidden="true">→</span>
            </Link>
          </div>
          <Link href="/about/#founder" className="founder-card col-span-12 lg:col-span-5 lg:col-start-8" data-reveal style={{ ["--i" as string]: 1 }}>
            <div className="frame aspect-[4/5]">
              <img
                src={IMG.founderChair}
                alt="Melvin, founder of Mgabhi & Famaly Construction, on a phone call in a blue armchair."
                width={1200}
                height={1600}
                loading="lazy"
                className="photo object-[60%_35%]"
              />
            </div>
            <span className="founder-card__label">
              <span className="block text-white/75">Meet our founder</span>
              <span className="card-title block text-white">Melvin</span>
            </span>
          </Link>
        </div>
      </section>

      <StatsBand />

      {/* ------------------------------------------------ Services preview */}
      <section className="py-[var(--section)]" aria-labelledby="services-title">
        <div className="wrap flex flex-wrap items-end justify-between gap-6">
          <div>
            <h2 id="services-title" className="head" data-reveal>
              Operational verticals
            </h2>
            <p className="statement mt-5 max-w-[38ch] text-ink-soft" data-reveal style={{ ["--i" as string]: 1 }}>
              End-to-end services from extraction and processing through to international commodity markets.
            </p>
          </div>
          <Link href="/services/" className="link hidden sm:inline-block" data-reveal style={{ ["--i" as string]: 2 }}>
            All services <span aria-hidden="true">→</span>
          </Link>
        </div>

        <ul className="swipe wrap mt-[clamp(2.5rem,5vw,4.5rem)] lg:grid lg:grid-cols-4 lg:gap-[var(--gutter)]">
          {verticals.map((v, i) => (
            <li key={v.id} className="swipe__item" data-reveal style={{ ["--i" as string]: i }}>
              <Link href={`/services/#${v.id}`} className="service-card">
                <div className="frame aspect-[4/5]">
                  <img src={v.img} alt={v.alt} width={v.w} height={v.h} loading="lazy" className="photo" style={{ objectPosition: v.pos }} />
                </div>
                <span className="service-card__body">
                  <span className="card-title block">{v.name}</span>
                  <span className="mt-2 block text-ink-soft">{v.short}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="wrap mt-8 sm:hidden">
          <Link href="/services/" className="btn w-full">
            All services <span className="arrow" aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      {/* ------------------------------------------------ Operations preview */}
      <section className="bg-paper-2 py-[var(--section)]" aria-labelledby="ops-title">
        <div className="wrap grid12 gap-y-10">
          <div className="col-span-12 lg:col-span-5">
            <h2 id="ops-title" className="head" data-reveal>
              Six key regions
            </h2>
            <p className="statement mt-6 text-ink-soft" data-reveal style={{ ["--i" as string]: 1 }}>
              From the chrome belt of the North West to the coal heartland of Mpumalanga.
            </p>
            <Link href="/operations/" className="btn mt-9" data-reveal style={{ ["--i" as string]: 2 }}>
              See the map <span className="arrow" aria-hidden="true">→</span>
            </Link>
          </div>
          <ul className="region-pills col-span-12 lg:col-span-6 lg:col-start-7">
            {regions.map((r, i) => (
              <li key={r.id} data-reveal style={{ ["--i" as string]: i }}>
                <span className="region-pills__name">{r.place}</span>
                <span className={`region__tag ${r.tagClass}`}>{r.tag}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Marquee />
      <CtaBand />
    </>
  );
}
