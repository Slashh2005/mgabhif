"use client";

import { useEffect, useMemo, useState } from "react";

const needs = ["Plant hire", "Commodity export", "Petroleum supply", "Mining services"] as const;
const regions = ["Mpumalanga", "Middelburg", "Rustenburg", "Mooinooi", "Gauteng", "Outside South Africa"] as const;

const EMAIL = "info@mgabhi.co.za";

function makeRef() {
  const d = new Date();
  const ymd = `${String(d.getFullYear()).slice(2)}${String(d.getMonth() + 1).padStart(2, "0")}${String(d.getDate()).padStart(2, "0")}`; // taste-skill-ignore: a date, not an index
  return `MFC-${ymd}-${Math.floor(1000 + Math.random() * 9000)}`;
}

/** The enquiry slip: the visitor fills it in, it composes a referenced email. */
export default function EnquirySlip() {
  const [ref, setRef] = useState("MFC-…");
  const [need, setNeed] = useState<string>("Commodity export");
  const [region, setRegion] = useState<string>("Mpumalanga");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [details, setDetails] = useState("");
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => setRef(makeRef()), []);

  // "Enquire about …" links elsewhere on the page preselect the need.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest<HTMLElement>("[data-need]");
      if (a?.dataset.need) {
        setNeed(a.dataset.need);
        setSent(false);
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  const subject = useMemo(() => `${need} enquiry, ${region} (${ref})`, [need, region, ref]);

  const body = useMemo(
    () =>
      [
        `Reference: ${ref}`,
        `Service: ${need}`,
        `Region: ${region}`,
        `Name: ${name}`,
        `Company: ${company || "-"}`,
        "",
        details || "(Please add volumes, dates or the site you have in mind.)",
      ].join("\n"),
    [ref, need, region, name, company, details],
  );

  const href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError("Add your name so we know who to reply to.");
      document.getElementById("slip-name")?.focus();
      return;
    }
    setError("");
    setSent(true);
    window.location.href = href;
  };

  return (
    <form onSubmit={onSubmit} className="slip relative p-6 sm:p-10" aria-labelledby="slip-title" noValidate>
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
        <h3 id="slip-title" className="text-[1.75rem] font-medium leading-tight tracking-[-0.03em]">
          Enquiry slip
        </h3>
        <p className="small text-ink-soft">
          Reference <span className="font-medium text-ink">{ref}</span>
        </p>
      </div>

      <fieldset className="mt-8">
        <legend className="mb-3">What do you need?</legend>
        <div className="flex flex-wrap gap-2">
          {needs.map((n) => (
            <label key={n} className="relative">
              <input
                type="radio"
                name="need"
                value={n}
                checked={need === n}
                onChange={() => {
                  setNeed(n);
                  setSent(false);
                }}
                className="chip-input"
              />
              <span className="chip">{n}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset className="mt-7">
        <legend className="mb-3">Where?</legend>
        <div className="flex flex-wrap gap-2">
          {regions.map((r) => (
            <label key={r} className="relative">
              <input
                type="radio"
                name="region"
                value={r}
                checked={region === r}
                onChange={() => {
                  setRegion(r);
                  setSent(false);
                }}
                className="chip-input"
              />
              <span className="chip">{r}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="mt-7 grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="slip-name">Your name</label>
          <input
            id="slip-name"
            className="field"
            autoComplete="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              if (error && e.target.value.trim()) setError("");
            }}
            aria-invalid={!!error}
            aria-describedby={error ? "slip-error" : undefined}
          />
          {error && (
            <p id="slip-error" className="small mt-2 font-medium text-error" role="alert">
              {error}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="slip-company">Company</label>
          <input
            id="slip-company"
            className="field"
            autoComplete="organization"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </div>
      </div>

      <div className="mt-6">
        <label htmlFor="slip-details">Details</label>
        <textarea
          id="slip-details"
          className="field"
          rows={3}
          placeholder="Volumes, dates, the site you have in mind"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        />
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
        <button type="submit" className="btn">
          Start a Conversation <span className="arrow" aria-hidden="true">→</span>
        </button>
        <p className="small text-ink-soft" aria-live="polite">
          {sent ? (
            <>
              Your email app should open with this slip filled in. If it didn&rsquo;t,{" "}
              <a className="link text-ink" href={href}>
                open it here
              </a>{" "}
              or write to {EMAIL}.
            </>
          ) : (
            <>Opens an email to {EMAIL} with this slip filled in.</>
          )}
        </p>
      </div>
    </form>
  );
}
