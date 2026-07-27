import { siteMetadata } from "@/app/constants/metadata";

const serviceMeta = siteMetadata.services as any;
const meta = serviceMeta?.["ai-automation"];
const rawImage = meta?.image || '/ai.webp';
const imageUrl = `https://highrisedigital.io${rawImage.startsWith('/') ? '' : '/'}${rawImage}`;

export const metadata = {
  title: meta?.title || "AI Automation Agency | Smart Business Automation Solutions",
  description: meta?.description || "Boost efficiency with AI automation, chatbots, and smart workflows that streamline operations and accelerate business growth.",
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
    url: 'https://highrisedigital.io/services/ai-automation',
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

export default function AutomationLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}