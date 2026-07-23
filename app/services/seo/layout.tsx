import { siteMetadata } from "@/app/constants/metadata";

const serviceMeta = siteMetadata.services as any;
const meta = serviceMeta?.seo;
const rawImage = meta?.image || '/seo.png';
const imageUrl = `https://www.highrisedigital.io${rawImage.startsWith('/') ? '' : '/'}${rawImage}`;

export const metadata = {
  title: meta?.title || "SEO Agency | Improve Rankings, Traffic & Online Visibility",
  description: meta?.description || "Boost your rankings and organic traffic with our professional SEO agency. We provide on-page SEO, technical SEO, link building, and local SEO services.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: meta?.title,
    description: meta?.description,
    url: 'https://www.highrisedigital.io/services/seo',
    siteName: 'High Rise Digital',
    images: [
      {
        url: imageUrl,
        width: 1200,
        height: 630,
        alt: meta?.title,
        type: 'image/png',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: meta?.title,
    description: meta?.description,
    images: [imageUrl],
  },
};

export default function SeoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}