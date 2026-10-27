import Header from "@/components/Header";
import Motion from "@/components/Motion";
import OperationsMap from "@/components/OperationsMap";
import EnquirySlip from "@/components/EnquirySlip";

const IMG = {
  heroPlant: "/images/spiral-plant-hq.jpg",
  founderChair: "/images/founder-chair.jpg",
  founderBoardroom: "/images/founder-boardroom.jpg",
  boardroom: "/images/boardroom.jpg",
  loader: "/images/loader.jpg",
  plantSite: "/images/plant-site.jpg",
  stockpiles: "/images/stockpiles-hills.jpg",
  engineer: "/images/photo-site-engineer-Bs-M25aG.jpg",
  export: "/images/service-export-DzktsE46.jpg",
  petroleum: "/images/service-petroleum-BLTszwTT.jpg",
  chrome: "/images/photo-chrome-workers-CyUcFmoo.jpg",
};

const PARTNERS = ["Exxaro", "Black Wattle", "Mooinooi", "Mining Indaba", "Mpumalanga DMR"];

const PHONE = "079 581 3927";
const TEL = "tel:+27795813927";
const EMAIL = "info@mgabhi.co.za";

const verticals = [
  {
    id: "plant-hire",
    name: "Plant Hire",
    need: "Plant hire",
    text: "Fleet of specialized earthmoving equipment, drilling machinery, and on-site support units.",
    supplied: "Earthmoving and drilling machinery, on-site support units",
    for: "Complex mining and infrastructure projects",
    img: IMG.loader,
    alt: "A yellow front-end loader with a full bucket working on a sandy site under a blue sky.",
    caption: "Front-end loader on site",
    w: 960,
    h: 1280,
    box: "w-full aspect-[4/5]",
    pos: "40% 60%",
  },
  {
    id: "commodity-export",
    name: "Commodity Export",
    need: "Commodity export",
    text: "Strategic offtake agreements and global trade for bulk minerals and metallurgical coal.",
    supplied: "Coal, chrome and copper",
    for: "International markets, through offtake agreements",
    img: IMG.export,
    alt: "A long train of loaded ore wagons at a rail siding, stockpiles of coal in the foreground.",
    caption: "Loaded wagons at a rail siding",
    w: 720,
    h: 527,
    box: "w-[85%] aspect-[3/2] ml-auto",
    pos: "60% 50%",
  },
  {
    id: "petroleum-supply",
    name: "Petroleum Supply",
    need: "Petroleum supply",
    text: "Reliable industrial diesel logistics and fuel supply chains for remote operations.",
    supplied: "Industrial diesel and fuel logistics",
    for: "Remote operations and mine sites",
    img: IMG.petroleum,
    alt: "Bulk diesel tanks being installed on a site, with a fuel tanker and light vehicles alongside.",
    caption: "Bulk diesel tanks and tanker",
    w: 720,
    h: 704,
    box: "w-[70%] aspect-square",
    pos: "45% 50%",
  },
  {
    id: "mining-services",
    name: "Mining Services",
    need: "Mining services",
    text: "Operations, exploration, extraction and consultancy, from the first survey to a working pit.",
    supplied: "Operations, exploration, extraction, consultancy",
    for: "Mine owners and operators across our six regions",
    img: IMG.plantSite,
    alt: "A processing site with spiral concentrators, a pump and a dewatering screen among eucalyptus trees.",
    caption: "Processing plant on site",
    w: 960,
    h: 1280,
    box: "w-[85%] aspect-[4/5] ml-auto",
    pos: "50% 45%",
  },
];

export default function Home() {
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-paper focus:p-3">
        Skip to content
      </a>
      <Header />
      <Motion />

      <main id="main">
        {/* ------------------------------------------------ Hero */}
        <section id="top" className="on-dark bg-navy text-white" aria-labelledby="hero-title">
          <div className="grid lg:min-h-[calc(100svh-4.75rem)] lg:grid-cols-12">
            <div className="flex flex-col justify-between gap-14 px-[var(--margin)] pb-12 pt-[clamp(2.5rem,6vw,6rem)] lg:col-span-8 lg:pb-[var(--margin)]">
              <div>
                <h1 id="hero-title" className="hero-title lines">
                  <span className="line">
                    <span data-line style={{ ["--i" as string]: 0 }}>
                      Driving Africa&rsquo;s mining
                    </span>
                  </span>
                  <span className="line">
                    <span data-line style={{ ["--i" as string]: 1 }}>
                      &amp; logistics future
                    </span>
                  </span>
                </h1>
                <p className="statement mt-8 max-w-[36ch] text-white/85" data-load style={{ ["--d" as string]: "420ms" }}>
                  Specialists in commodity export, mining services, petroleum supply, and plant hire across Southern
                  Africa&rsquo;s industrial heartlands.
                </p>
                <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4" data-load style={{ ["--d" as string]: "520ms" }}>
                  <a href="#contact" className="btn btn--light">
                    Request Partnership <span className="arrow" aria-hidden="true">→</span>
                  </a>
                  <a href="#services" className="link">
                    View Services
                  </a>
                </div>
              </div>

              <ul className="grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-4" data-load style={{ ["--d" as string]: "640ms" }}>
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

            <figure className="relative m-0 min-h-[70svh] overflow-hidden bg-[#7aa3cf] lg:col-span-4 lg:min-h-0" data-open>
              <img
                src={IMG.heroPlant}
                alt="A spiral concentrator plant in yellow and black steel framing above a fresh heap of wet concentrate."
                width={960}
                height={1280}
                fetchPriority="high"
                className="drift absolute inset-0 h-full w-full object-cover object-[50%_40%]"
              />
            </figure>
          </div>
        </section>

        {/* ------------------------------------------------ About */}
        <section id="about" className="wrap py-[var(--section)]" aria-labelledby="about-title">
          <div className="grid12 gap-y-10">
            <h2 id="about-title" className="head col-span-12 lg:col-span-9 lg:col-start-4" data-reveal>
              South African roots, continental vision
            </h2>

            <dl className="small order-last col-span-12 grid grid-cols-3 gap-4 lg:order-none lg:col-span-2 lg:mt-3 lg:grid-cols-1 lg:gap-6">
              <div data-reveal style={{ ["--i" as string]: 1 }}>
                <dt className="text-ink-soft">Head office</dt>
                <dd className="font-medium">Waterfall, Midrand</dd>
              </div>
              <div data-reveal style={{ ["--i" as string]: 2 }}>
                <dt className="text-ink-soft">Established</dt>
                <dd className="font-medium">2022</dd>
              </div>
              <div data-reveal style={{ ["--i" as string]: 3 }}>
                <dt className="text-ink-soft">Call</dt>
                <dd>
                  <a href={TEL} className="link">
                    {PHONE}
                  </a>
                </dd>
              </div>
            </dl>

            <div className="col-span-12 lg:col-span-9 lg:col-start-4" data-reveal style={{ ["--i" as string]: 1 }}>
              <p className="statement">
                Headquartered at 22 Magwa Crescent, Waterfall, Midrand, Mgabhi and Famaly Construction Pty Ltd is a
                diversified company operating at the intersection of heavy infrastructure and high-volume commodity
                trading.
              </p>
              <p className="statement mt-[1.2em] text-ink-soft">
                We hire out earthmoving and drilling machinery, export coal, chrome and copper to international
                markets, move industrial diesel to where it is needed, and run mining operations from exploration to
                extraction.
              </p>
            </div>
          </div>
        </section>

        {/* ------------------------------------------------ Founder */}
        <section id="founder" className="bg-paper-2 py-[var(--section)]" aria-labelledby="founder-title">
          <div className="wrap grid12 items-end gap-y-12">
            <figure className="col-span-12 m-0 md:col-span-6 lg:col-span-6" data-reveal>
              <div className="overflow-hidden bg-paper-3">
                <img
                  src={IMG.founderChair}
                  alt="Melvin, founder of Mgabhi & Famaly Construction, on a phone call in a blue armchair in an office lobby."
                  width={1200}
                  height={1600}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover object-[60%_35%]"
                />
              </div>
            </figure>

            <div className="col-span-12 md:col-span-6 lg:col-span-5 lg:col-start-8">
              <h2 id="founder-title" className="head" data-reveal>
                Meet our founder
              </h2>
              <p className="statement mt-8" data-reveal style={{ ["--i" as string]: 1 }}>
                Mgabhi &amp; Famaly Construction was founded in 2022 by Melvin, who still leads the company from our
                head office in Midrand.
              </p>
              <p className="mt-6 max-w-[46ch] text-ink-soft" data-reveal style={{ ["--i" as string]: 2 }}>
                Partners deal directly with Melvin: the calls, the site visits and the
                negotiations at the table.
              </p>
              <figure className="m-0 mt-10 grid grid-cols-[minmax(0,9rem)_1fr] items-end gap-5" data-reveal style={{ ["--i" as string]: 3 }}>
                <img
                  src={IMG.founderBoardroom}
                  alt="Melvin standing at the head of a long boardroom table."
                  width={1200}
                  height={1600}
                  loading="lazy"
                  className="aspect-[3/4] w-full object-cover object-[55%_30%]"
                />
                <figcaption className="small text-ink-soft">Melvin in the boardroom.</figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* ------------------------------------------------ Experience */}
        <section id="experience" className="py-[var(--section)]" aria-labelledby="experience-title">
          <div className="wrap">
            <div className="grid12 gap-y-10">
              <h2 id="experience-title" className="head col-span-12 lg:col-span-6" data-reveal>
                Experience on the ground
              </h2>
              <p className="statement col-span-12 text-ink-soft lg:col-span-6" data-reveal style={{ ["--i" as string]: 1 }}>
                Our team brings{" "}
                <span className="whitespace-nowrap font-medium text-navy">
                  <span data-roll>10</span>+&nbsp;years
                </span>{" "}
                of industry experience to{" "}
                <span className="font-medium text-navy">
                  <span className="whitespace-nowrap">
                    <span data-roll>4</span>&nbsp;commodity
                  </span>{" "}
                  verticals
                </span>{" "}
                across{" "}
                <span className="font-medium text-navy">
                  <span className="whitespace-nowrap">
                    <span data-roll>6</span>&nbsp;operating
                  </span>{" "}
                  regions
                </span>
                , with{" "}
                <span className="font-medium text-navy">
                  <span className="whitespace-nowrap">
                    <span data-roll>100</span>%&nbsp;safety
                  </span>{" "}
                  compliance
                </span>{" "}
                on every site.
              </p>
            </div>

            <div className="mt-[clamp(3rem,6vw,6rem)] grid grid-cols-12 gap-[var(--gutter)]">
              {[
                { src: IMG.stockpiles, alt: "Stockpiles of processed material below green, rocky hills.", cap: "Stockpiles below the hills", span: "col-span-12 md:col-span-5", ratio: "aspect-[4/5]", w: 960, h: 1280 },
                { src: IMG.chrome, alt: "Two workers in reflective gear bag samples from a chrome ore stockpile.", cap: "Sampling a chrome stockpile", span: "col-span-6 md:col-span-4 md:mt-24", ratio: "aspect-[4/5]", w: 720, h: 708 },
                { src: IMG.engineer, alt: "A site engineer in a hard hat and reflective vest in front of a coal stockpile.", cap: "Site engineer at a coal stockpile", span: "col-span-6 md:col-span-3 md:mt-48", ratio: "aspect-[3/4]", w: 720, h: 808 },
              ].map((p, i) => (
                <figure key={p.src} className={`m-0 ${p.span}`} data-reveal style={{ ["--i" as string]: i }}>
                  <div className="overflow-hidden bg-paper-3">
                    <img src={p.src} alt={p.alt} width={p.w} height={p.h} loading="lazy" className={`${p.ratio} w-full object-cover`} />
                  </div>
                  <figcaption className="small mt-2 text-ink-soft">{p.cap}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* ------------------------------------------------ Services */}
        <section id="services" className="bg-paper-2 py-[var(--section)]" aria-labelledby="services-title">
          <div className="wrap grid12 gap-y-8">
            <div className="col-span-12 lg:col-span-8 lg:col-start-5">
              <h2 id="services-title" className="head" data-reveal>
                Operational verticals
              </h2>
              <p className="statement mt-6 max-w-[34ch] text-ink-soft" data-reveal style={{ ["--i" as string]: 1 }}>
                End-to-end services from extraction and processing through to international commodity markets.
              </p>
            </div>

            <nav aria-label="Verticals" className="col-span-3 row-span-5 hidden lg:block">
              <ul className="sticky top-32 space-y-2">
                {verticals.map((v) => (
                  <li key={v.id}>
                    <a href={`#${v.id}`} className="navlink">
                      {v.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {verticals.map((v) => (
              <article
                key={v.id}
                id={v.id}
                className="col-span-12 mt-[clamp(4rem,7vw,7.5rem)] grid grid-cols-12 gap-x-[var(--gutter)] gap-y-8 lg:col-span-8 lg:col-start-5"
                aria-labelledby={`${v.id}-title`}
              >
                <div className="col-span-12 sm:col-span-6">
                  <h3 id={`${v.id}-title`} className="statement font-medium tracking-[-0.03em] text-ink" data-reveal>
                    {v.name}
                  </h3>
                  <p className="mt-4 max-w-[38ch]" data-reveal style={{ ["--i" as string]: 1 }}>
                    {v.text}
                  </p>
                  <table className="particulars mt-7" data-reveal style={{ ["--i" as string]: 2 }}>
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
                  <a href="#contact" data-need={v.need} className="link mt-6 inline-block" data-reveal style={{ ["--i" as string]: 3 }}>
                    Enquire about {v.name.toLowerCase()} <span aria-hidden="true">→</span>
                  </a>
                </div>
                <figure className="col-span-12 m-0 sm:col-span-6" data-reveal style={{ ["--i" as string]: 2 }}>
                  <div className={`overflow-hidden bg-paper-3 ${v.box}`}>
                    <img
                      src={v.img}
                      alt={v.alt}
                      width={v.w}
                      height={v.h}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[900ms] ease-[var(--ease-soft)] hover:scale-[1.04]"
                      style={{ objectPosition: v.pos }}
                    />
                  </div>
                  <figcaption className={`small mt-2 text-ink-soft ${v.box.includes("ml-auto") ? "text-right" : ""}`}>{v.caption}</figcaption>
                </figure>
              </article>
            ))}
          </div>
        </section>

        {/* ------------------------------------------------ Operations */}
        <section id="operations" className="py-[var(--section)]" aria-labelledby="operations-title">
          <div className="wrap">
            <div className="grid12 gap-y-8">
              <h2 id="operations-title" className="head col-span-12 lg:col-span-10" data-reveal>
                Strategic operations across six key regions
              </h2>
              <p className="statement col-span-12 max-w-[40ch] text-ink-soft lg:col-span-7" data-reveal style={{ ["--i" as string]: 1 }}>
                From the chrome belt of the North West to the coal heartland of Mpumalanga, our operations span
                Africa&rsquo;s most resource-rich corridors.
              </p>
            </div>
            <div className="mt-[clamp(3rem,5vw,5rem)]">
              <OperationsMap />
            </div>
          </div>
        </section>

        {/* ------------------------------------------------ References */}
        <section className="on-dark bg-navy py-[var(--section)] text-white" aria-labelledby="voices-title">
          <div className="wrap">
            <h2 id="voices-title" className="head max-w-[18ch]" data-reveal>
              Trusted by partners across the value chain
            </h2>
            <div className="grid12 mt-[clamp(3rem,6vw,6rem)] gap-y-14">
              <figure className="col-span-12 m-0 md:col-span-6 lg:col-span-5" data-reveal style={{ ["--i" as string]: 1 }}>
                <blockquote className="statement">
                  &ldquo;Reliable, professional and consistently on schedule — a true logistics partner for our mining
                  operations.&rdquo;
                </blockquote>
                <figcaption className="mt-6 text-navy-soft">
                  <span className="block font-medium text-white">Procurement Director</span>
                  Coal Offtake Partner
                </figcaption>
              </figure>
              <figure className="col-span-12 m-0 md:col-span-6 lg:col-span-5 lg:col-start-8" data-reveal style={{ ["--i" as string]: 2 }}>
                <blockquote className="statement">
                  &ldquo;Mgabhi&rsquo;s commitment to safety and compliance sets the benchmark for sub-contractors in our
                  region.&rdquo;
                </blockquote>
                <figcaption className="mt-6 text-navy-soft">
                  <span className="block font-medium text-white">Operations Lead</span>
                  Chrome Mining Group
                </figcaption>
              </figure>
            </div>

            <h3 className="statement mt-[clamp(5rem,9vw,9rem)] text-navy-soft" data-reveal>
              Partners and industry recognition
            </h3>
          </div>

          <div className="marquee mt-8" data-reveal>
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

        {/* ------------------------------------------------ Contact */}
        <section id="contact" className="on-dark bg-char py-[var(--section)] text-white" aria-labelledby="contact-title">
          <div className="wrap">
            <h2 id="contact-title" className="head max-w-[20ch]" data-reveal>
              Partner with an African industry leader
            </h2>
            <div className="grid12 mt-[clamp(2.5rem,5vw,5rem)] gap-y-12">
              <div className="col-span-12 lg:col-span-5">
                <p className="statement max-w-[30ch] text-char-soft" data-reveal style={{ ["--i" as string]: 1 }}>
                  Whether you&rsquo;re sourcing commodities, hiring plant, or planning a mining operation — we&rsquo;re
                  ready to engage.
                </p>
                <div className="mt-10" data-reveal style={{ ["--i" as string]: 2 }}>
                  <table className="particulars">
                    <caption className="sr-only">Contact details</caption>
                    <tbody>
                      <tr>
                        <th scope="row">Phone</th>
                        <td>
                          <a className="link" href={TEL}>
                            {PHONE}
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">Email</th>
                        <td>
                          <a className="link break-all" href={`mailto:${EMAIL}`}>
                            {EMAIL}
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">Office</th>
                        <td className="font-normal">22 Magwa Crescent, Waterfall, Midrand, Gauteng</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <figure className="m-0 mt-10 hidden lg:block" data-reveal style={{ ["--i" as string]: 3 }}>
                  <img
                    src={IMG.boardroom}
                    alt="A boardroom with a long table under pendant lights."
                    width={1200}
                    height={1600}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover object-[50%_55%]"
                  />
                  <figcaption className="small mt-3 text-char-soft">Where we meet our partners</figcaption>
                </figure>
              </div>
              <div className="col-span-12 lg:col-span-7" data-reveal style={{ ["--i" as string]: 2 }}>
                <EnquirySlip />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ------------------------------------------------ Footer */}
      <footer className="relative overflow-hidden bg-paper pt-[var(--section)]" aria-labelledby="footer-title">
        <div className="wrap">
          <div className="grid12 gap-y-12">
            <div className="col-span-12 lg:col-span-5">
              <h2 id="footer-title" className="statement font-medium tracking-[-0.03em]">
                Mgabhi &amp; Famaly Construction Pty Ltd
              </h2>
              <p className="mt-4 max-w-[40ch] text-ink-soft">
                Powering the industrial backbone of Southern Africa through precision logistics and sustainable mining
                practices.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#contact" className="btn btn--small">
                  Contact
                </a>
                <a href="#operations" className="btn btn--small !bg-paper-2 !text-ink hover:!bg-paper-3">
                  Operations
                </a>
              </div>
            </div>

            <nav aria-label="Footer" className="col-span-6 sm:col-span-4 lg:col-span-2 lg:col-start-7">
              <h3 className="small text-ink-soft">Navigate</h3>
              <ul className="mt-4 space-y-2">
                {[
                  ["#top", "Home"],
                  ["#about", "About"],
                  ["#services", "Services"],
                  ["#experience", "Experience"],
                  ["#operations", "Operations"],
                  ["#contact", "Contact"],
                ].map(([href, label]) => (
                  <li key={href}>
                    <a href={href} className="navlink">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="col-span-6 sm:col-span-4 lg:col-span-2">
              <h3 className="small text-ink-soft">Operations</h3>
              <ul className="mt-4 space-y-2">
                {["Mpumalanga Hub", "Middelburg Logistics", "Rustenburg Operations", "Mooinooi Extraction", "Burgersfort Mining", "Gauteng Midrand"].map((o) => (
                  <li key={o} className="py-[0.6rem] leading-none">
                    {o}
                  </li>
                ))}
              </ul>
            </div>
            <address className="col-span-12 not-italic sm:col-span-4 lg:col-span-2">
              <h3 className="small text-ink-soft">Office &amp; contact</h3>
              <p className="mt-4">22 Magwa Crescent, Waterfall, Midrand, Gauteng, South Africa</p>
              <p className="mt-3">
                <a href={TEL} className="link">
                  {PHONE}
                </a>
              </p>
              <p className="mt-1">
                <a href={`mailto:${EMAIL}`} className="link">
                  {EMAIL}
                </a>
              </p>
            </address>
          </div>

          <div className="mt-[clamp(4rem,7vw,7rem)] flex flex-wrap items-center justify-between gap-x-10 gap-y-3">
            <p className="small font-medium">B-BBEE Level 1 · Safety First Policy</p>
            <p className="small text-ink-soft">© 2026 Mgabhi and Famaly Construction Pty Ltd. All Rights Reserved.</p>
          </div>
        </div>

        <p className="bigname mt-6 select-none px-[var(--margin)]" aria-hidden="true">
          Mgabhi
        </p>
      </footer>
    </>
  );
}
