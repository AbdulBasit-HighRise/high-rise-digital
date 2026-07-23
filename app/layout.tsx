import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/CustomCursor";
import { Instrument_Sans, Inter } from "next/font/google";
import { siteMetadata } from "@/app/constants/metadata";
import Script from "next/script";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL('https://highrisedigital.io'),
  title: siteMetadata.home.title,
  description: siteMetadata.home.description,
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    title: siteMetadata.home.title,
    description: siteMetadata.home.description,
    url: 'https://highrisedigital.io',
    siteName: 'High Rise Digital',
    images: [
      {
        url: 'https://highrisedigital.io/about-preview.png',
        width: 1200,
        height: 630,
        alt: siteMetadata.home.title,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteMetadata.home.title,
    description: siteMetadata.home.description,
images: ['https://highrisedigital.io/about-preview.png'],  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#111827",
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`scroll-smooth ${inter.variable} ${instrumentSans.variable}`}
    >
      <head>
        {/* Google Site Verification Code */}
        <meta name="google-site-verification" content="PXrBiu2VA4D2pHIyKKw6TA9d_Qkn2CJ1pCPyFYH5UAQ" />

        {/* Google Analytics Scripts */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-GC1MBVHBW7"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-GC1MBVHBW7');
          `}
        </Script>
      </head>
      <body
        className="bg-[#111827] text-white antialiased overflow-x-hidden selection:bg-blue-600/30"
        suppressHydrationWarning
      >
        <CustomCursor />
        <Navbar />
        <main className="relative z-10 min-h-screen w-full max-w-[2560px] mx-auto">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}