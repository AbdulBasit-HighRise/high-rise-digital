import { siteMetadata } from "@/app/constants/metadata";

const serviceMeta = siteMetadata.services as any;
const meta = serviceMeta?.["website-development"];
const rawImage = meta?.image || '/web.png';
const imageUrl = `https://highrisedigital.io${rawImage.startsWith('/') ? '' : '/'}${rawImage}`;

export const metadata = {
  title: meta?.title || "Website Development Agency | WordPress & Shopify Experts",
  description: meta?.description || "Build a powerful online presence with our website development agency. We create responsive, user-friendly, and SEO-optimized websites for your business.",
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
    url: 'https://highrisedigital.io/services/website-development',
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

export default function WebDevLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}