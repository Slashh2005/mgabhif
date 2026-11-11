import type { Metadata } from "next";
import { IMG, PHONE, TEL, EMAIL, ADDRESS } from "@/lib/site";
import EnquirySlip from "@/components/EnquirySlip";
import { PageHero } from "@/components/Blocks";

export const metadata: Metadata = {
  title: "Contact",
  description: "Start a partnership conversation with Mgabhi & Famaly Construction. Call 079 581 3927 or email info@mgabhi.co.za.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Partner with an African industry leader"
        intro="Whether you’re sourcing commodities, hiring plant, or planning a mining operation — we’re ready to engage."
        img={IMG.boardroom}
        alt="A boardroom with a long table under pendant lights."
        pos="50% 55%"
      />

      <section className="on-dark bg-char py-[var(--section)] text-white" aria-labelledby="contact-title">
        <div className="wrap grid12 gap-y-12">
          <div className="col-span-12 lg:col-span-4">
            <h2 id="contact-title" className="head" data-reveal>
              Talk to us
            </h2>
            <ul className="contact-tiles mt-8">
              <li data-reveal style={{ ["--i" as string]: 1 }}>
                <a href={TEL}>
                  <span className="contact-tiles__label">Call</span>
                  <span className="contact-tiles__value">{PHONE}</span>
                </a>
              </li>
              <li data-reveal style={{ ["--i" as string]: 2 }}>
                <a href={`mailto:${EMAIL}`}>
                  <span className="contact-tiles__label">Email</span>
                  <span className="contact-tiles__value">{EMAIL}</span>
                </a>
              </li>
              <li data-reveal style={{ ["--i" as string]: 3 }}>
                <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`} target="_blank" rel="noopener noreferrer">
                  <span className="contact-tiles__label">Visit</span>
                  <span className="contact-tiles__value">22 Magwa Crescent, Waterfall, Midrand</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-span-12 lg:col-span-7 lg:col-start-6" data-reveal style={{ ["--i" as string]: 2 }}>
            <EnquirySlip />
          </div>
        </div>
      </section>
    </>
  );
}
