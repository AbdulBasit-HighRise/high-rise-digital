import { siteMetadata } from "@/app/constants/metadata";

const serviceMeta = siteMetadata.services as any;
const meta = serviceMeta?.["e-commerce-management"] || serviceMeta?.["ecommerce"];
const rawImage = meta?.image || '/ecommerce.webp';
const imageUrl = `https://highrisedigital.io${rawImage.startsWith('/') ? '' : '/'}${rawImage}`;

export const metadata = {
  title: meta?.title || "Ecommerce Management Agency | Store Optimization & Growth",
  description: meta?.description || "Maximize your online store performance with our ecommerce management agency. We handle product listings, inventory management, marketing, and conversion optimization.",
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
    url: 'https://highrisedigital.io/services/e-commerce-management',
    siteName: 'High Rise Digital',
    images: [
      {
        url: imageUrl,
        width: 1200,
        height: 630,
        alt: meta?.title,
        type: 'image/webp',
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

export default function EcommerceLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}