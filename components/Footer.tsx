import Link from "next/link";
import { NAV, PHONE, TEL, EMAIL, ADDRESS } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-paper pt-[var(--section)]" aria-labelledby="footer-title">
      <div className="wrap">
        <div className="grid12 gap-y-12">
          <div className="col-span-12 lg:col-span-5">
            <h2 id="footer-title" className="card-title">
              Mgabhi &amp; Famaly Construction Pty Ltd
            </h2>
            <p className="mt-4 max-w-[40ch] text-ink-soft">
              Powering the industrial backbone of Southern Africa through precision logistics and sustainable mining
              practices.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact/" className="btn btn--small">
                Contact
              </Link>
              <Link href="/operations/" className="btn btn--small !bg-paper-2 !text-ink hover:!bg-paper-3">
                Operations
              </Link>
            </div>
          </div>

          <nav aria-label="Footer" className="col-span-6 sm:col-span-4 lg:col-span-2 lg:col-start-7">
            <h3 className="small text-ink-soft">Navigate</h3>
            <ul className="mt-4 space-y-2">
              {NAV.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="navlink">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="col-span-6 sm:col-span-4 lg:col-span-2">
            <h3 className="small text-ink-soft">Operations</h3>
            <ul className="mt-4 space-y-2">
              {["Gauteng Midrand", "Mpumalanga Hub", "Middelburg Logistics", "Rustenburg Operations", "Mooinooi Extraction", "Burgersfort Mining"].map((o) => (
                <li key={o} className="py-[0.6rem] leading-none">
                  {o}
                </li>
              ))}
            </ul>
          </div>
          <address className="col-span-12 not-italic sm:col-span-4 lg:col-span-2">
            <h3 className="small text-ink-soft">Office &amp; contact</h3>
            <p className="mt-4">{ADDRESS}</p>
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
  );
}
