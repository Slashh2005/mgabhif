export const IMG = {
  heroPlant: "/images/spiral-plant-hq.jpg",
  founderChair: "/images/founder-chair.jpg",
  founderBoardroom: "/images/founder-boardroom.jpg",
  boardroom: "/images/boardroom.jpg",
  loader: "/images/loader.jpg",
  plantSite: "/images/plant-site.jpg",
  stockpiles: "/images/stockpiles-hills.jpg",
  engineer: "/images/photo-site-engineer-Bs-M25aG.jpg",
  wash: "/images/photo-wash-plant-C1UBEhI5.jpg",
  petroleum: "/images/service-petroleum-BLTszwTT.jpg",
  chrome: "/images/photo-chrome-workers-CyUcFmoo.jpg",
};

export const PHONE = "079 581 3927";
export const TEL = "tel:+27795813927";
export const EMAIL = "info@mgabhi.co.za";
export const ADDRESS = "22 Magwa Crescent, Waterfall, Midrand, Gauteng, South Africa";

export const PARTNERS = ["Exxaro", "Black Wattle", "Mooinooi", "Mining Indaba", "Mpumalanga DMR"];

export const NAV = [
  { href: "/", label: "Home" },
  { href: "/about/", label: "About" },
  { href: "/services/", label: "Services" },
  { href: "/operations/", label: "Operations" },
  { href: "/contact/", label: "Contact" },
];

export const STATS = [
  { value: "10+", label: "Years industry experience" },
  { value: "4", label: "Commodity verticals" },
  { value: "6", label: "Operating regions" },
  { value: "100%", label: "Safety compliance" },
];

export const verticals = [
  {
    id: "plant-hire",
    name: "Plant Hire",
    need: "Plant hire",
    short: "Earthmoving, drilling and on-site support.",
    text: "Fleet of specialized earthmoving equipment, drilling machinery, and on-site support units.",
    supplied: "Earthmoving and drilling machinery, on-site support units",
    for: "Complex mining and infrastructure projects",
    img: IMG.loader,
    alt: "A yellow front-end loader with a full bucket working on a sandy site under a blue sky.",
    w: 960,
    h: 1280,
    pos: "45% 55%",
  },
  {
    id: "commodity-export",
    name: "Commodity Export",
    need: "Commodity export",
    short: "Coal, chrome and copper to international markets.",
    text: "Strategic offtake agreements and global trade for bulk minerals and metallurgical coal.",
    supplied: "Coal, chrome and copper",
    for: "International markets, through offtake agreements",
    img: IMG.stockpiles,
    alt: "Stockpiles of processed material on a site below green, rocky hills.",
    w: 960,
    h: 1280,
    pos: "50% 52%",
  },
  {
    id: "petroleum-supply",
    name: "Petroleum Supply",
    need: "Petroleum supply",
    short: "Industrial diesel and fuel logistics.",
    text: "Reliable industrial diesel logistics and fuel supply chains for remote operations.",
    supplied: "Industrial diesel and fuel logistics",
    for: "Remote operations and mine sites",
    img: IMG.petroleum,
    alt: "Bulk diesel tanks being installed on a site, with a fuel tanker and light vehicles alongside.",
    w: 720,
    h: 704,
    pos: "50% 55%",
  },
  {
    id: "mining-services",
    name: "Mining Services",
    need: "Mining services",
    short: "Operations, exploration, extraction, consultancy.",
    text: "Operations, exploration, extraction and consultancy, from the first survey to a working pit.",
    supplied: "Operations, exploration, extraction, consultancy",
    for: "Mine owners and operators across our six regions",
    img: IMG.plantSite,
    alt: "A processing site with spiral concentrators, a pump and a dewatering screen among eucalyptus trees.",
    w: 960,
    h: 1280,
    pos: "50% 40%",
  },
];
