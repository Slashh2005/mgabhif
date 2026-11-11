import za from "@/lib/za-map.json";

export type Region = {
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

export const regions: Region[] = [
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
