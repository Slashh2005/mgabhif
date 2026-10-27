import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-geist",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mgabhi.co.za"),
  title: "Mgabhi & Famaly Construction — Mining, Logistics & Commodity Trading",
  description:
    "Specialists in commodity export, mining services, petroleum supply and plant hire across Southern Africa's industrial heartlands. Est. 2022, Midrand.",
  icons: { icon: "/brand/mark-charcoal.png" },
  openGraph: {
    title: "Mgabhi & Famaly Construction",
    description: "Driving Africa's mining & logistics future.",
    images: ["/images/photo-chrome-workers-CyUcFmoo.jpg"],
    locale: "en_ZA",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-ZA" className={geist.variable}>
      <head>
        {/* Hidden entrance states only apply when scripting works. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
