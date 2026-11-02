"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { PHONE, TEL } from "@/lib/site";

/** Phones only: a fixed bar with the two things a visitor most wants to do. */
export default function MobileBar() {
  const pathname = usePathname();
  const onContact = pathname.startsWith("/contact");
  return (
    <div className="mobile-bar sm:hidden" role="region" aria-label="Quick contact">
      <a href={TEL} className="btn btn--ghost-dark" aria-label={`Call ${PHONE}`}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.6a1 1 0 0 1-.25 1z"
            fill="currentColor"
          />
        </svg>
        Call
      </a>
      {onContact ? (
        <a href="#enquiry" className="btn">
          Fill in the enquiry
        </a>
      ) : (
        <Link href="/contact/" className="btn">
          Enquire now <span className="arrow" aria-hidden="true">→</span>
        </Link>
      )}
    </div>
  );
}
