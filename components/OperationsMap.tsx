"use client";

import { useState } from "react";
import za from "@/lib/za-map.json";

type Region = {
  id: string;
  place: string;
  province: string;
  tag: string;
  tagClass: string;
  desc: string;
  pin?: [number, number];
  pinLabel?: string;
  labelAnchor?: "start" | "end";
  highlight: string;
};

const regions: Region[] = [
  {
    id: "gauteng",
    place: "Gauteng — Midrand",
    province: "Gauteng",
    tag: "HQ",
    tagClass: "tag-hq",
    desc: "Corporate headquarters and commercial operations.",
    pin: za.towns.Midrand as [number, number],
    pinLabel: "Midrand",
    labelAnchor: "start",
    highlight: "Gauteng",
  },
  {
    id: "mpumalanga",
    place: "Mpumalanga",
    province: "Mpumalanga",
    tag: "Logistics",
    tagClass: "tag-logistics",
    desc: "Coal heartland — primary export aggregation hub.",
    highlight: "Mpumalanga",
  },
  {
    id: "middelburg",
    place: "Middelburg",
    province: "Mpumalanga",
    tag: "Beneficiation",
    tagClass: "tag-beneficiation",
    desc: "Strategic logistics & coal beneficiation node.",
    pin: za.towns.Middelburg as [number, number],
    pinLabel: "Middelburg",
    labelAnchor: "start",
    highlight: "Mpumalanga",
  },
  {
    id: "rustenburg",
    place: "Rustenburg",
    province: "North West",
    tag: "Mining",
    tagClass: "tag-mining",
    desc: "Platinum & chrome region operations.",
    pin: za.towns.Rustenburg as [number, number],
    pinLabel: "Rustenburg",
    labelAnchor: "end",
    highlight: "North West",
  },
  {
    id: "mooinooi",
    place: "Mooinooi",
    province: "North West",
    tag: "Mining",
    tagClass: "tag-mining",
    desc: "Active chrome mining operations.",
    pin: za.towns.Mooinooi as [number, number],
    pinLabel: "Mooinooi",
    labelAnchor: "start",
    highlight: "North West",
  },
  {
    id: "burgersfort",
    place: "Burgersfort — Limpopo",
    province: "Limpopo",
    tag: "Mining",
    tagClass: "tag-mining",
    desc: "Chrome ROM (Run-of-Mine) production on the Eastern Limb of the Bushveld Complex.",
    pin: za.towns.Burgersfort as [number, number],
    pinLabel: "Burgersfort",
    labelAnchor: "end",
    highlight: "Limpopo",
  },
];

const provinceLabels: Array<[string, number, number]> = [
  ["Limpopo", 2150, 600],
  ["North West", 1850, 905],
  ["Gauteng", 2085, 925],
  ["Mpumalanga", 2380, 880],
  ["Free State", 1960, 1005],
];

const regionProvinces = new Set(["Mpumalanga", "North West", "Gauteng", "Limpopo"]);
const provinces = za.provinces as Record<string, string>;

export default function OperationsMap() {
  const [active, setActive] = useState("gauteng");
  const on = regions.find((r) => r.id === active)!;

  return (
    <div className="grid12 gap-y-12">
      <figure className="col-span-12 m-0 lg:sticky lg:top-28 lg:col-span-6 lg:col-start-7 lg:row-start-1 lg:self-start" data-reveal style={{ ["--i" as string]: 1 }}>
        <div className="relative overflow-hidden rounded-[var(--radius)] bg-paper-2">
          <svg
            viewBox="1760 470 880 545"
            className="block h-auto w-full"
            role="img"
            aria-label={`Map of the operating corridor across North West, Gauteng, Mpumalanga and Limpopo. Selected: ${on.place}, ${on.province}.`}
          >
            {Object.entries(provinces).map(([name, d]) => (
              <path
                key={name}
                d={d}
                className={`map-province${regionProvinces.has(name) ? " is-region" : ""}${on.highlight === name ? " is-on" : ""}`}
              />
            ))}
            {provinceLabels.map(([name, x, y]) => (
              <text
                key={name}
                x={x}
                y={y}
                textAnchor="middle"
                className={`map-plabel${regionProvinces.has(name) ? "" : " is-minor"}`}
                fill={regionProvinces.has(name) ? "#2a2b2b" : "#565a5b"}
                fontWeight={regionProvinces.has(name) ? 500 : 400}
              >
                {name}
              </text>
            ))}
            {regions
              .filter((r) => r.pin)
              .map((r) => {
                const [x, y] = r.pin!;
                const isOn = r.id === active;
                const dx = r.labelAnchor === "end" ? -16 : 16;
                return (
                  <g
                    key={r.id}
                    className={`map-pin${isOn ? " is-on" : ""}`}
                    onClick={() => setActive(r.id)}
                    style={{ cursor: "pointer" }}
                  >
                    <circle className="halo" cx={x} cy={y} r="14" />
                    <circle className="core" cx={x} cy={y} r={isOn ? 9 : 7} />
                    <text
                      x={x + dx}
                      y={r.id === "gauteng" ? y + 38 : y - 16}
                      textAnchor={r.labelAnchor}
                      className="map-label"
                      fontWeight={500}
                      fill={isOn ? "#0c3054" : "#2a2b2b"}
                    >
                      {r.pinLabel}
                    </text>
                  </g>
                );
              })}
          </svg>

          {/* Locator: where the corridor sits in South Africa */}
          <svg
            viewBox="0 0 3000 2660"
            className="absolute bottom-3 right-3 h-auto w-[18%] min-w-[64px] max-w-[150px]"
            aria-hidden="true"
          >
            {Object.entries(provinces).map(([name, d]) => (
              <path key={name} d={d} fill={regionProvinces.has(name) ? "#0c3054" : "#cfd3d5"} stroke="#f2f3f3" strokeWidth="14" />
            ))}
          </svg>
        </div>
        <figcaption className="small mt-3 text-ink-soft">
          Province boundaries: Natural Earth (public domain). Select a region to see it on the map.
        </figcaption>
      </figure>

      <ol className="col-span-12 space-y-1 lg:col-span-6 lg:col-start-1 lg:row-start-1" data-reveal style={{ ["--i" as string]: 2 }}>
        {regions.map((r, i) => (
          <li key={r.id}>
            <button
              type="button"
              className={`region${r.id === active ? " is-on" : ""}`}
              aria-pressed={r.id === active}
              onClick={() => setActive(r.id)}
            >
              <span className="region__num" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span>
                <span className="region__title">{r.place}</span>
                <span className={`region__tag ${r.tagClass}`}>· {r.tag}</span>
                <span className="region__desc block">{r.desc}</span>
              </span>
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}
