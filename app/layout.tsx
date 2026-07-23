import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/CustomCursor";
import { Instrument_Sans, Inter } from "next/font/google";
import { siteMetadata } from "@/app/constants/metadata";
import Script from "next/script";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],                  // 🎯 Fix: nested array khatam kiya
  variable: "--font-heading",
  weight: ["600", "700"],             // 🎯 Fix: pure strings pass kiye
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],                  // 🎯 Fix: nested array khatam kiya
  variable: "--font-sans",
  weight: ["400", "500", "600"],      // 🎯 Fix: pure strings pass kiye
  display: "swap",
});

type Props = {
  params: Promise<{ slug?: string[] }>;
};

export async function generateMetadata({ params }: Props) {
  const resolvedParams = await params;
  const slugs = resolvedParams.slug || [];
  
  // Current route ke mutabiq metadata nikalna
  let currentMeta: any = siteMetadata.home;

  if (slugs.length === 1) {
    const key = slugs[0];
    if (siteMetadata[key]) {
      currentMeta = siteMetadata[key];
    } else if (siteMetadata.services && (siteMetadata.services as any)[key]) {
      currentMeta = (siteMetadata.services as any)[key];
    }
  } else if (slugs.length === 2 && slugs[0] === 'services') {
    const serviceKey = slugs[1];
    if (siteMetadata.services && (siteMetadata.services as any)[serviceKey]) {
      currentMeta = (siteMetadata.services as any)[serviceKey];
    }
  } else if (slugs.length === 2 && (slugs[0] === 'case-studies' || slugs[0] === ' case-studies ')) {
    const caseStudyKey = slugs[1];
    const caseStudiesObj = siteMetadata["case-studies"] || siteMetadata[" case-studies "];
    if (caseStudiesObj && (caseStudiesObj as any)[caseStudyKey]) {
      currentMeta = (caseStudiesObj as any)[caseStudyKey];
    }
  }

  const title = currentMeta?.title || siteMetadata.home.title;
  const description = currentMeta?.description || siteMetadata.home.description;
  const image = currentMeta?.image || '/about-preview.png';

  return {
    metadataBase: new URL('https://highrisedigital.io'),
    title: title,
    description: description,
    icons: {
      icon: "/icon.svg",
    },
    openGraph: {
      title: title,
      description: description,
      url: 'https://highrisedigital.io',
      siteName: 'High Rise Digital',
      images: [
        {
          url: image.startsWith('http') ? image : `https://highrisedigital.io${image}`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: title,
      description: description,
      images: [image.startsWith('http') ? image : `https://highrisedigital.io${image}`],
    },
  };
}

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