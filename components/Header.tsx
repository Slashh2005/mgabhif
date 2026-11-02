"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV, PHONE, TEL, EMAIL } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href.replace(/\/$/, "")));

  // Close the menu on navigation and with Escape; stop the page scrolling behind it.
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.documentElement.classList.toggle("menu-open", open);
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className={`site-header sticky top-0 z-50 ${open ? "is-open" : ""}`}>
      <div className="wrap flex h-[4.75rem] items-center justify-between gap-6">
        <Link href="/" className="brand flex items-center gap-3 no-underline" aria-label="Mgabhi & Famaly Construction, home">
          <img src="/brand/mark-charcoal.png" alt="" width={600} height={520} className="brand__mark brand__mark--dark h-11 w-auto" />
          <img src="/brand/mark-white.png" alt="" width={600} height={520} className="brand__mark brand__mark--light h-11 w-auto" />
          <span className="small leading-[1.15] max-[379px]:sr-only">
            <span className="block whitespace-nowrap font-medium">Mgabhi &amp; Famaly</span>
            <span className="brand__sub hidden sm:block">Construction Pty Ltd</span>
          </span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-8 lg:flex">
          {NAV.slice(1).map((l) => (
            <Link key={l.href} href={l.href} className={`navlink${isActive(l.href) ? " is-active" : ""}`} aria-current={isActive(l.href) ? "page" : undefined}>
              {l.label}
            </Link>
          ))}
          <Link href="/contact/" className="btn btn--small">
            Partnership
          </Link>
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <Link href="/contact/" className="btn btn--small header-cta">
            Enquire now
          </Link>
        <button
          type="button"
          className={`burger ${open ? "is-open" : ""}`}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
        </div>
      </div>

      <div id="mobile-menu" className="mobile-menu lg:hidden" hidden={!open}>
        <nav aria-label="Main" className="wrap">
          <ul>
            {NAV.map((l, i) => (
              <li key={l.href} style={{ ["--i" as string]: i }}>
                <Link href={l.href} className={`mobile-menu__link${isActive(l.href) ? " is-active" : ""}`} aria-current={isActive(l.href) ? "page" : undefined}>
                  {l.label}
                  <span aria-hidden="true">→</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="wrap mobile-menu__foot">
          <Link href="/contact/" className="btn btn--light w-full">
            Request Partnership
          </Link>
          <p className="mt-6">
            <a href={TEL} className="link">
              {PHONE}
            </a>
          </p>
          <p className="mt-1">
            <a href={`mailto:${EMAIL}`} className="link">
              {EMAIL}
            </a>
          </p>
        </div>
      </div>
    </header>
  );
}
