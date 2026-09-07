import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import { SITE_URL } from "@/data/site";
import { JsonLd } from "@/components/ui/JsonLd";
import { healthClubSchema } from "@/lib/schema";
import "./globals.css";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin", "latin-ext"],
  variable: "--font-bebas",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: "/" },
  title: {
    default: "PULSE Athletic Club — Kadıköy Spor Salonu & Fitness Club",
    template: "%s | PULSE Athletic Club",
  },
  description:
    "Kadıköy Bağdat Caddesi'nde 1.800 m² premium fitness kulübü. Kuvvet, fonksiyonel antrenman, personal training ve 45+ haftalık grup dersi. Hedefin ne olursa olsun, daha güçlü bir versiyonun burada başlar.",
  applicationName: "PULSE Athletic Club",
  authors: [{ name: "PULSE Athletic Club" }],
  creator: "PULSE Athletic Club",
  publisher: "PULSE Athletic Club",
  formatDetection: { telephone: true, address: true, email: true },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "/",
    siteName: "PULSE Athletic Club",
    title: "PULSE Athletic Club — Train With Purpose.",
    description:
      "Modern antrenman, uzman eğitmen kadrosu ve ilerlemeni merkeze alan bir ortam. Kadıköy / İstanbul.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "PULSE Athletic Club — Kadıköy'de premium fitness kulübü",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PULSE Athletic Club — Train With Purpose.",
    description:
      "Modern antrenman, uzman eğitmen kadrosu ve ilerlemeni merkeze alan bir ortam. Kadıköy / İstanbul.",
    images: ["/images/og-image.jpg"],
  },
};

export const viewport = {
  themeColor: "#0a0a0a",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${bebas.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-carbon font-sans text-ink antialiased">
        <a
          href="#icerik"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-lime focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:uppercase focus:tracking-[0.14em] focus:text-carbon"
        >
          İçeriğe geç
        </a>
        {children}
        <JsonLd data={healthClubSchema()} />
      </body>
    </html>
  );
}
