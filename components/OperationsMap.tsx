"use client";

import { useState } from "react";
import za from "@/lib/za-map.json";

type Region = {
  id: string;
  place: string;
  province: string;
  focus: string;
  pin?: [number, number];
  pinLabel?: string;
  labelAnchor?: "start" | "end";
  highlight: string;
};

const regions: Region[] = [
  { id: "mpumalanga", place: "Mpumalanga", province: "Mpumalanga", focus: "Hub, coal heartland", highlight: "Mpumalanga" },
  {
    id: "middelburg",
    place: "Middelburg",
    province: "Mpumalanga",
    focus: "Logistics",
    pin: za.towns.Middelburg as [number, number],
    pinLabel: "Middelburg",
    labelAnchor: "start",
    highlight: "Mpumalanga",
  },
  {
    id: "rustenburg",
    place: "Rustenburg",
    province: "North West",
    focus: "Operations, chrome belt",
    pin: za.towns.Rustenburg as [number, number],
    pinLabel: "Rustenburg",
    labelAnchor: "end",
    highlight: "North West",
  },
  {
    id: "mooinooi",
    place: "Mooinooi",
    province: "North West",
    focus: "Extraction, chrome belt",
    pin: za.towns.Mooinooi as [number, number],
    pinLabel: "Mooinooi",
    labelAnchor: "start",
    highlight: "North West",
  },
  {
    id: "gauteng",
    place: "Gauteng",
    province: "Gauteng",
    focus: "Midrand, head office",
    pin: za.towns.Midrand as [number, number],
    pinLabel: "Midrand",
    labelAnchor: "start",
    highlight: "Gauteng",
  },
];

const provinceLabels: Array<[string, number, number]> = [
  ["Limpopo", 2230, 615],
  ["North West", 1850, 905],
  ["Gauteng", 2085, 925],
  ["Mpumalanga", 2440, 905],
  ["Free State", 1960, 1005],
];

const regionProvinces = new Set(["Mpumalanga", "North West", "Gauteng"]);
const provinces = za.provinces as Record<string, string>;

export default function OperationsMap() {
  const [active, setActive] = useState("gauteng");
  const on = regions.find((r) => r.id === active)!;

  return (
    <div className="grid12 gap-y-12">
      <figure className="col-span-12 m-0 lg:col-span-7 lg:row-start-1" data-reveal style={{ ["--i" as string]: 1 }}>
        <div className="relative bg-paper-2">
          <svg
            viewBox="1760 545 860 470"
            className="block h-auto w-full"
            role="img"
            aria-label={`Map of the operating corridor across North West, Gauteng and Mpumalanga. Selected: ${on.place}, ${on.province}.`}
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
            className="absolute right-3 top-3 h-auto w-[18%] min-w-[64px] max-w-[150px]"
            aria-hidden="true"
          >
            {Object.entries(provinces).map(([name, d]) => (
              <path key={name} d={d} fill={regionProvinces.has(name) ? "#0c3054" : "#cfd3d5"} stroke="#f2f3f3" strokeWidth="14" />
            ))}
          </svg>
        </div>
        <figcaption className="small mt-3 text-ink-soft">
          Province boundaries: Natural Earth (public domain). Tap a place or a row to see it on the map.
        </figcaption>
      </figure>

      <div className="col-span-12 lg:col-span-5 lg:col-start-8 lg:row-start-1" data-reveal style={{ ["--i" as string]: 2 }}>
        <table className="particulars">
          <caption className="sr-only">Operating regions</caption>
          <thead className="sr-only">
            <tr>
              <th scope="col">Region</th>
              <th scope="col">Province and focus</th>
            </tr>
          </thead>
          <tbody>
            {regions.map((r) => (
              <tr key={r.id} className={`loc-row${r.id === active ? " is-on" : ""}`} onClick={() => setActive(r.id)}>
                <th scope="row" className="!pl-3">
                  <button type="button" aria-pressed={r.id === active} onClick={() => setActive(r.id)}>
                    <span className="block text-[1.5rem] font-medium leading-tight tracking-[-0.02em] text-current">{r.place}</span>
                  </button>
                </th>
                <td className="!pr-3">
                  <span className="block">{r.focus}</span>
                  <span className="small block opacity-80">{r.province}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
