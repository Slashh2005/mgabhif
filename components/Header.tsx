"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#experience", label: "Experience" },
  { href: "#operations", label: "Operations" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 bg-paper">
      <div className="wrap flex h-[4.75rem] items-center justify-between gap-6">
        <a href="#top" className="flex items-center gap-3 no-underline" aria-label="Mgabhi & Famaly Construction, back to top">
          <img src="/brand/mark-charcoal.png" alt="" width={600} height={520} className="h-11 w-auto" />
          <span className="small leading-[1.15] max-[379px]:sr-only">
            <span className="block whitespace-nowrap font-medium">Mgabhi &amp; Famaly</span>
            <span className="hidden text-ink-soft sm:block">Construction Pty Ltd</span>
          </span>
        </a>

        <nav aria-label="Main" className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="navlink">
              {l.label}
            </a>
          ))}
          <a href="#contact" className="btn btn--small">
            Partnership
          </a>
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <a href="#contact" className="btn btn--small">
            Partnership
          </a>
          <button
            type="button"
            className={`burger${open ? " is-open" : ""}`}
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

      {open && (
        <nav id="mobile-menu" aria-label="Main" className="menu-panel absolute inset-x-0 top-full bg-paper lg:hidden">
          <ul className="wrap flex flex-col pb-6">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-[1.75rem] font-medium tracking-[-0.03em] no-underline"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
