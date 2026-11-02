import type { Metadata } from "next";
import { IMG } from "@/lib/site";
import { CtaBand, Founder, PageHero, Quotes, SitePhotos, StatsBand } from "@/components/Blocks";

export const metadata: Metadata = {
  title: "About",
  description: "A diversified South African company working across heavy infrastructure and commodity trading, founded in 2022 by Melvin.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="South African roots, continental vision"
        intro="A diversified company operating at the intersection of heavy infrastructure and high-volume commodity trading."
        img={IMG.stockpiles}
        alt="Stockpiles of processed material on a site below green, rocky hills."
        pos="50% 60%"
      />

      <section className="wrap py-[var(--section)]" aria-labelledby="about-title">
        <div className="grid12 gap-y-10">
          <h2 id="about-title" className="head col-span-12 lg:col-span-5" data-reveal>
            Who we are
          </h2>
          <div className="col-span-12 lg:col-span-6 lg:col-start-7" data-reveal style={{ ["--i" as string]: 1 }}>
            <p className="statement">
              Headquartered at 22 Magwa Crescent, Waterfall, Midrand, Mgabhi and Famaly Construction Pty Ltd is a
              diversified company operating at the intersection of heavy infrastructure and high-volume commodity
              trading.
            </p>
            <p className="statement mt-[1.2em] text-ink-soft">
              We hire out earthmoving and drilling machinery, export coal, chrome and copper to international markets,
              move industrial diesel to where it is needed, and run mining operations from exploration to extraction.
            </p>
          </div>
        </div>
      </section>

      <Founder />
      <StatsBand />

      <section className="py-[var(--section)]" aria-labelledby="experience-title">
        <div className="wrap grid12 items-end gap-y-6">
          <h2 id="experience-title" className="head col-span-12 lg:col-span-6" data-reveal>
            Experience on the ground
          </h2>
          <p className="statement col-span-12 text-ink-soft lg:col-span-5 lg:col-start-8" data-reveal style={{ ["--i" as string]: 1 }}>
            Our people are on site: sampling stockpiles, running plant and keeping every operation safe.
          </p>
        </div>
        <div className="wrap max-sm:px-0">
          <SitePhotos />
        </div>
      </section>

      <Quotes />
      <CtaBand />
    </>
  );
}
