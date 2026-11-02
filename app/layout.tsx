import type { Metadata, Viewport } from "next";
import { Sora, Figtree } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBar from "@/components/MobileBar";
import Motion from "@/components/Motion";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-display",
  display: "swap",
});

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-text",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mgabhi.co.za"),
  title: {
    default: "Mgabhi & Famaly Construction — Mining, Logistics & Commodity Trading",
    template: "%s — Mgabhi & Famaly Construction",
  },
  description:
    "Specialists in commodity export, mining services, petroleum supply and plant hire across Southern Africa's industrial heartlands. Est. 2022, Midrand.",
  icons: { icon: "/brand/mark-charcoal.png" },
  openGraph: {
    title: "Mgabhi & Famaly Construction",
    description: "Driving Africa's mining & logistics future.",
    images: ["/images/spiral-plant-hq.jpg"],
    locale: "en_ZA",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0c3054",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-ZA" className={`${sora.variable} ${figtree.variable}`}>
      <head>
        {/* Hidden entrance states only apply when scripting works. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-paper focus:p-3">
          Skip to content
        </a>
        <Header />
        <Motion />
        <main id="main">{children}</main>
        <Footer />
        <MobileBar />
      </body>
    </html>
  );
}
