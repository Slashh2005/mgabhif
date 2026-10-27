import Header from "@/components/Header";
import Motion from "@/components/Motion";
import Seal from "@/components/Seal";
import OperationsMap from "@/components/OperationsMap";
import EnquirySlip from "@/components/EnquirySlip";

const IMG = {
  chrome: "/images/photo-chrome-workers-CyUcFmoo.jpg",
  engineer: "/images/photo-site-engineer-Bs-M25aG.jpg",
  partnership: "/images/photo-partnership-rx0hhlJI.jpg",
  spiral: "/images/photo-spiral-plant-Dsh5nphL.jpg",
  wash: "/images/photo-wash-plant-C1UBEhI5.jpg",
  export: "/images/service-export-DzktsE46.jpg",
  petroleum: "/images/service-petroleum-BLTszwTT.jpg",
};

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
    img: IMG.wash,
    alt: "A wash plant with its conveyor and spiral tower beside fresh stockpiles on a muddy site.",
    caption: "Wash plant on site",
    w: 720,
    h: 699,
    box: "w-full aspect-[4/5]",
    pos: "70% 50%",
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
    box: "w-[62%] aspect-square",
    pos: "45% 50%",
  },
  {
    id: "mining-services",
    name: "Mining Services",
    need: "Mining services",
    text: "Operations, exploration, extraction and consultancy, from the first survey to a working pit.",
    supplied: "Operations, exploration, extraction, consultancy",
    for: "Mine owners and operators across our five regions",
    img: IMG.spiral,
    alt: "A tall spiral concentrator plant in steel framing above a heap of black concentrate.",
    caption: "Spiral concentrator plant",
    w: 720,
    h: 949,
    box: "w-[78%] aspect-[4/5] ml-auto",
    pos: "50% 30%",
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
        {/* ------------------------------------------------ Hero / certificate cover */}
        <section id="top" className="wrap relative pb-[clamp(4rem,6vw,7rem)] pt-[clamp(1.75rem,3vw,3rem)]" aria-labelledby="hero-title">
          <div className="absolute right-[var(--margin)] top-[clamp(1.75rem,3vw,3rem)] hidden xl:block">
            <Seal ring="MGABHI & FAMALY · EST. 2022 · MIDRAND · " centre={["Safety", "first"]} size={212} delay={900} />
          </div>
          <h1 id="hero-title" className="display lines max-w-[17ch] lg:max-w-none">
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

          <div className="grid12 mt-[clamp(1.75rem,3vw,3rem)] gap-y-10 md:grid-rows-[auto_1fr]">
            <div className="col-span-12 md:col-span-6 md:col-start-1 md:row-start-1 lg:col-span-5">
              <p className="statement max-w-[36ch]" data-load style={{ ["--d" as string]: "380ms" }}>
                Specialists in commodity export, mining services, petroleum supply, and plant hire across Southern
                Africa&rsquo;s industrial heartlands.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4" data-load style={{ ["--d" as string]: "460ms" }}>
                <a href="#contact" className="btn">
                  Request Partnership <span className="arrow" aria-hidden="true">→</span>
                </a>
                <a href="#services" className="link">
                  View Services
                </a>
              </div>
            </div>

            <div className="col-span-12 md:col-span-6 md:col-start-1 md:row-start-2 lg:col-span-5">
              <table className="particulars md:mt-2" data-load style={{ ["--d" as string]: "560ms" }}>
                <caption className="sr-only">Company particulars</caption>
                <tbody>
                  <tr>
                    <th scope="row">Established</th>
                    <td>2022, South Africa</td>
                  </tr>
                  <tr>
                    <th scope="row">Head office</th>
                    <td>Waterfall, Midrand</td>
                  </tr>
                  <tr>
                    <th scope="row">Mining experience</th>
                    <td>10+ years in the industry</td>
                  </tr>
                  <tr>
                    <th scope="row">Commodity export</th>
                    <td>Coal, chrome, copper</td>
                  </tr>
                  <tr>
                    <th scope="row">South African ops</th>
                    <td>Five operating regions</td>
                  </tr>
                  <tr>
                    <th scope="row">Safety</th>
                    <td>Compliant</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <figure className="relative col-span-12 row-start-2 m-0 md:col-span-6 md:col-start-7 md:row-span-2 md:row-start-1 lg:col-span-7 lg:col-start-6">
              <div className="overflow-hidden bg-[#3a4352]" data-open>
                <img
                  src={IMG.chrome}
                  alt="Two workers in reflective gear bag samples from a chrome ore stockpile under a dark sky."
                  width={720}
                  height={708}
                  fetchPriority="high"
                  className="drift aspect-[4/5] w-full object-cover sm:aspect-[5/4] md:aspect-[1/2] lg:aspect-[6/5]"
                />
              </div>
              <figcaption className="small mt-3 flex justify-between gap-4 text-ink-soft">
                <span>Sampling a chrome stockpile</span>
                <span>On site, South Africa</span>
              </figcaption>
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
                <img
                  src={IMG.engineer}
                  alt="A Mgabhi site engineer in a hard hat and reflective vest in front of a coal stockpile."
                  width={720}
                  height={808}
                  loading="lazy"
                  className="float-left mr-[0.5em] mt-[0.2em] aspect-square w-[4.6em] object-cover object-[50%_25%] sm:w-[3.7em]"
                />
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

        {/* ------------------------------------------------ Experience in figures */}
        <section id="experience" className="bg-paper-2 py-[var(--section)]" aria-labelledby="experience-title">
          <div className="wrap grid12 items-center gap-y-12">
            <div className="col-span-12 lg:col-span-8">
              <h2 id="experience-title" className="head" data-reveal>
                Experience on the ground
              </h2>
              <p className="statement mt-10 max-w-[34ch] text-ink-soft" data-reveal style={{ ["--i" as string]: 1 }}>
                Our team brings{" "}
                <span className="font-medium text-navy">
                  <span className="whitespace-nowrap">
                    <span data-roll>10</span>+&nbsp;years
                  </span>
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
                    <span data-roll>5</span>&nbsp;operating
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
            <div className="col-span-12 flex justify-start lg:col-span-4 lg:justify-end">
              <Seal ring="SAFETY COMPLIANCE · B-BBEE LEVEL 1 · " centre={["100%", "safe"]} size={260} className="w-[min(260px,60vw)]" />
            </div>
          </div>
        </section>

        {/* ------------------------------------------------ Inspection: one frame, three distances */}
        <section className="inspect" data-inspect aria-labelledby="inspect-title">
          <div className="inspect__stage" data-stage="1">
            <div className="wrap grid12 w-full items-center gap-y-6">
              <h2 id="inspect-title" className="display col-span-12 text-center md:col-span-12">
                <span className="block">From ore</span>
                <span className="sr-only"> to export grade</span>
              </h2>
              <div className="col-span-12 hidden md:col-span-3 md:block md:self-center">
                <p className="inspect__note is-on max-w-[26ch]" data-note="1">
                  <span className="font-medium">At a distance.</span> A spiral concentrator plant on site, seen whole.
                </p>
              </div>
              <div className="col-span-12 flex justify-center md:col-span-6">
                <div className="inspect__frame aspect-[4/5] w-[62vw] md:w-[min(28vw,52svh)]">
                  <img src={IMG.spiral} alt="A spiral concentrator plant above a heap of black concentrate." width={720} height={949} loading="lazy" />
                </div>
              </div>
              <div className="col-span-12 max-w-[34ch] md:col-span-3 md:self-center">
                <p className="inspect__note" data-note="2">
                  <span className="font-medium">Up close.</span> The spirals separate heavy mineral from lighter
                  material, using water and gravity.
                </p>
                <p className="inspect__note mt-5" data-note="3">
                  <span className="font-medium">At the base.</span> Concentrate is stockpiled, sampled and readied
                  for offtake.
                </p>
              </div>
              <p className="display col-span-12 text-center" aria-hidden="true">
                to export grade
              </p>
            </div>
          </div>
          <div className="pointer-events-none absolute inset-0" aria-hidden="true">
            <div data-marker="1" className="absolute top-[0%] h-[33%] w-0" />
            <div data-marker="2" className="absolute top-[36%] h-[28%] w-0" />
            <div data-marker="3" className="absolute top-[66%] h-[34%] w-0" />
          </div>
        </section>

        {/* ------------------------------------------------ Services: the specification */}
        <section id="services" className="wrap py-[var(--section)]" aria-labelledby="services-title">
          <div className="grid12 gap-y-8">
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
        <section id="operations" className="bg-paper-2 py-[var(--section)]" aria-labelledby="operations-title">
          <div className="wrap">
            <div className="grid12 gap-y-8">
              <h2 id="operations-title" className="head col-span-12 lg:col-span-10" data-reveal>
                Strategic operations across five key regions
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

            <div className="mt-[clamp(5rem,9vw,9rem)]" data-names data-reveal>
              <h3 className="statement text-navy-soft">Partners and industry recognition</h3>
              <ul className="names head mt-5 flex flex-wrap gap-y-2 !leading-[1.05]">
                {["Exxaro", "Black Wattle", "Mooinooi", "Mining Indaba", "Mpumalanga DMR"].map((n) => (
                  <li key={n} className="mr-[0.35em] whitespace-nowrap">
                    <span className="name">{n}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ------------------------------------------------ Contact: the enquiry slip */}
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
                    src={IMG.partnership}
                    alt="A Mgabhi representative with a partner in an office lobby."
                    width={1080}
                    height={1080}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover object-[50%_30%]"
                  />
                  <figcaption className="small mt-3 text-char-soft">Meeting partners in person</figcaption>
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
                {["Mpumalanga Hub", "Middelburg Logistics", "Rustenburg Operations", "Mooinooi Extraction", "Gauteng Midrand"].map((o) => (
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

          <div className="mt-[clamp(4rem,7vw,7rem)] flex flex-wrap items-center justify-between gap-x-10 gap-y-6">
            <div className="flex items-center gap-4">
              <Seal ring="B-BBEE LEVEL 1 · CONTRIBUTOR · " centre={["Level", "1"]} size={96} />
              <Seal ring="SAFETY FIRST POLICY · ON EVERY SITE · " centre={["Safety", "first"]} size={96} delay={400} />
            </div>
            <p className="small text-ink-soft">
              © 2026 Mgabhi and Famaly Construction Pty Ltd. All Rights Reserved. B-BBEE Level 1 · Safety First Policy.
            </p>
          </div>
        </div>

        <p className="bigname mt-6 select-none px-[var(--margin)]" aria-hidden="true">
          Mgabhi
        </p>
      </footer>
    </>
  );
}
