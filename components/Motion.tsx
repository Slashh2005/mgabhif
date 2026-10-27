"use client";

import { useEffect } from "react";

/**
 * The page's small motion layer: reveal-once and rolling figures. Content is visible without it.
 */
export default function Motion() {
  useEffect(() => {
    const cleanups: Array<() => void> = [];

    // Rolling figures: the real value stays readable for screen readers.
    document.querySelectorAll<HTMLElement>("[data-roll]").forEach((el) => {
      if (el.classList.contains("roll")) return;
      const value = el.textContent?.trim() ?? "";
      const said = Object.assign(document.createElement("span"), { className: "sr-only", textContent: value });
      const shown = Object.assign(document.createElement("span"), { className: "roll__digits" });
      shown.setAttribute("aria-hidden", "true");
      let i = 0;
      for (const ch of value) {
        if (!/\d/.test(ch)) {
          shown.append(ch);
          continue;
        }
        const col = Object.assign(document.createElement("span"), { className: "roll__col" });
        const strip = Object.assign(document.createElement("span"), { className: "roll__strip" });
        strip.style.setProperty("--n", ch);
        strip.style.setProperty("--i", String(i++));
        for (let n = 0; n < 10; n++) strip.append(Object.assign(document.createElement("span"), { textContent: String(n) }));
        col.append(strip);
        shown.append(col);
      }
      el.classList.add("roll");
      el.replaceChildren(said, shown);
    });

    // Reveal once: section parts and figures.
    const targets = document.querySelectorAll<HTMLElement>("[data-reveal], [data-roll]");
    if (!("IntersectionObserver" in window)) {
      targets.forEach((el) => el.classList.add("is-in"));
    } else {
      const io = new IntersectionObserver(
        (entries) => {
          for (const e of entries) {
            if (!e.isIntersecting) continue;
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        },
        { rootMargin: "0px 0px -12% 0px", threshold: 0.1 },
      );
      targets.forEach((el) => io.observe(el));
      cleanups.push(() => io.disconnect());
      // Safety net: anything on screen that the observer missed is shown.
      const t = window.setTimeout(() => {
        targets.forEach((el) => {
          const r = el.getBoundingClientRect();
          if (r.top < innerHeight && r.bottom > 0) el.classList.add("is-in");
        });
      }, 2500);
      cleanups.push(() => clearTimeout(t));
    }

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return null;
}
