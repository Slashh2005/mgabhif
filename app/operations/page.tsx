import type { Metadata } from "next";
import { IMG } from "@/lib/site";
import OperationsMap from "@/components/OperationsMap";
import { CtaBand, Marquee, PageHero, SitePhotos } from "@/components/Blocks";

export const metadata: Metadata = {
  title: "Operations",
  description: "Operations across six regions: Gauteng, Mpumalanga, Middelburg, Rustenburg, Mooinooi and Burgersfort.",
};

export default function OperationsPage() {
  return (
    <>
      <PageHero
        title="Strategic operations across six key regions"
        intro="From the chrome belt of the North West to the coal heartland of Mpumalanga, our operations span Africa’s most resource-rich corridors."
        img={IMG.plantSite}
        alt="A processing site with spiral concentrators and a dewatering screen among eucalyptus trees."
        pos="50% 45%"
      />

      <section className="wrap py-[var(--section)]" aria-labelledby="regions-title">
        <h2 id="regions-title" className="head max-w-[16ch]" data-reveal>
          Where we work
        </h2>
        <p className="statement mt-5 max-w-[40ch] text-ink-soft" data-reveal style={{ ["--i" as string]: 1 }}>
          Select a region to see it on the map.
        </p>
        <div className="mt-[clamp(2.5rem,5vw,4.5rem)]">
          <OperationsMap />
        </div>
      </section>

      <section className="bg-paper-2 py-[var(--section)]" aria-labelledby="site-title">
        <div className="wrap">
          <h2 id="site-title" className="head" data-reveal>
            On site
          </h2>
        </div>
        <div className="wrap max-sm:px-0">
          <SitePhotos />
        </div>
      </section>

      <Marquee />
      <CtaBand />
    </>
  );
}
