import type { Metadata } from "next";
import Link from "next/link";
import { IMG, verticals } from "@/lib/site";
import { CtaBand, PageHero } from "@/components/Blocks";

export const metadata: Metadata = {
  title: "Services",
  description: "Plant hire, commodity export, petroleum supply and mining services across Southern Africa.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Operational verticals"
        intro="End-to-end services from extraction and processing through to international commodity markets."
        img={IMG.loader}
        alt="A yellow front-end loader with a full bucket working on a sandy site."
        pos="45% 55%"
      />

      <nav aria-label="Services on this page" className="service-tabs">
        <ul className="wrap">
          {verticals.map((v) => (
            <li key={v.id}>
              <a href={`#${v.id}`}>{v.name}</a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="py-[var(--section)]">
        {verticals.map((v, i) => (
          <article
            key={v.id}
            id={v.id}
            className={`service-row wrap grid12 scroll-mt-32 items-center gap-y-8 ${i ? "mt-[var(--section)]" : ""}`}
            aria-labelledby={`${v.id}-title`}
          >
            <div className={`col-span-12 max-sm:-mx-[var(--margin)] lg:col-span-7 ${i % 2 ? "lg:order-2 lg:col-start-6" : ""}`} data-reveal>
              <div className="frame aspect-[4/3] max-sm:rounded-none">
                <img src={v.img} alt={v.alt} width={v.w} height={v.h} loading="lazy" className="photo" style={{ objectPosition: v.pos }} />
              </div>
            </div>
            <div className={`col-span-12 lg:col-span-4 ${i % 2 ? "lg:order-1 lg:col-start-1" : "lg:col-start-9"}`}>
              <p className="service-row__count" data-reveal>
                {String(i + 1).padStart(2, "0")} / {String(verticals.length).padStart(2, "0")}
              </p>
              <h2 id={`${v.id}-title`} className="head mt-3" data-reveal style={{ ["--i" as string]: 1 }}>
                {v.name}
              </h2>
              <p className="statement mt-5 text-ink-soft" data-reveal style={{ ["--i" as string]: 2 }}>
                {v.text}
              </p>
              <table className="particulars mt-7" data-reveal style={{ ["--i" as string]: 3 }}>
                <caption className="sr-only">{v.name} particulars</caption>
                <tbody>
                  <tr>
                    <th scope="row">Supplied</th>
                    <td>{v.supplied}</td>
                  </tr>
                  <tr>
                    <th scope="row">For</th>
                    <td>{v.for}</td>
                  </tr>
                </tbody>
              </table>
              <Link href={`/contact/?need=${encodeURIComponent(v.need)}`} className="btn mt-8 max-sm:w-full" data-reveal style={{ ["--i" as string]: 4 }}>
                Enquire about {v.name.toLowerCase()} <span className="arrow" aria-hidden="true">→</span>
              </Link>
            </div>
          </article>
        ))}
      </div>

      <CtaBand />
    </>
  );
}
