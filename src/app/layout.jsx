import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import MainNav from "../components/MainNav";
import PressView from "../components/PressView";
import Footer from "../components/Footer"
import { Merriweather } from "next/font/google";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://www.fiscalfusion.org"),

  title: {
    default:
      "Fiscal Fusion – Real-Time News, Market Coverage & Global Reports",
    template: "%s | Fiscal Fusion"
  },

  description:
    "Fiscal Fusion is your source for fast, reliable news across business, finance, global affairs, US updates, politics, entertainment, and sports. Explore expert reporting, market data, and top stories shaping the world today.",

  keywords:
    "Fiscal Fusion, latest news, business updates, financial insights, global headlines, US news, political coverage, entertainment stories, sports updates, market trends, economic reports, breaking news platform",

  openGraph: {
    title: "Fiscal Fusion – Trusted Coverage on Business, Markets & Global News",
    description:
      "Experience comprehensive news coverage with Fiscal Fusion. From business and finance to world affairs, politics, entertainment, and sports—stay ahead with timely and credible reporting.",
    url: "https://www.fiscalfusion.org",
    siteName: "Fiscal Fusion",
    images: [
      {
        url: "https://www.fiscalfusion.org/images/fiscalfusion-logo.webp",
        width: 1200,
        height: 630,
        alt: "Fiscal Fusion – Reliable News & Market Intelligence"
      }
    ],
    locale: "en_US",
    type: "website"
  },

  twitter: {
    card: "summary_large_image",
    title: "Fiscal Fusion – Breaking News & Market Intelligence",
    description:
      "From breaking headlines to market trends, Fiscal Fusion keeps you connected to the news that matters across business, finance, global events, politics, entertainment, and sports.",
    images: "https://www.fiscalfusion.org/images/fiscalfusion-logo.webp",
    site: "@fiscalfusion"
  },

  alternates: {
    canonical: "https://www.fiscalfusion.org",
    languages: {
      en: "https://www.fiscalfusion.org",
      "x-default": "https://www.fiscalfusion.org"
    }
  },

  authors: [
    { name: "Marcus Bennett" }
  ],

  category: "News",

  icons: {
    icon: "/favicon.ico"
  }
};


const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-merriweather"
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${merriweather.variable} antialiased`}
      >
        <Header />
        <MainNav />
        <PressView />
        {children}
        <Footer />

      </body>
    </html>
  );
}
