import { siteMetadata } from "@/app/constants/metadata";

const serviceMeta = siteMetadata.services as any;
const meta = serviceMeta?.["social-media-marketing"];
const rawImage = meta?.image || '/social.png';
const imageUrl = `https://www.highrisedigital.io${rawImage.startsWith('/') ? '' : '/'}${rawImage}`;

export const metadata = {
  title: meta?.title || "Social Media Marketing Agency | Grow Your Brand Online",
  description: meta?.description || "Increase brand awareness, engagement, and sales with our social media marketing agency. We manage Facebook, Instagram, LinkedIn, TikTok, and other social media platforms.",
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
    url: 'https://www.highrisedigital.io/services/social-media-marketing',
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

export default function SmmLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}