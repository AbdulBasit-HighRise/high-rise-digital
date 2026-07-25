import { siteMetadata } from "@/app/constants/metadata";

const meta = siteMetadata.blog as any;
const imageUrl = `https://highrisedigital.io${meta?.image || '/about-preview.png'}`;

export const metadata = {
  title: meta?.title,
  description: meta?.description,
  openGraph: {
    title: meta?.title,
    description: meta?.description,
    url: 'https://highrisedigital.io/blog',
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

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}