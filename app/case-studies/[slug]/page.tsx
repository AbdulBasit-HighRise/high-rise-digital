import { notFound } from "next/navigation";
import { Metadata } from "next";
import { caseStudiesData } from "@/lib/caseStudiesData";
import CaseStudyClientContent from "./CaseStudyClientContent";

interface Params {
  slug: string;
}

// ========================================================
// 🔍 DYNAMIC METADATA GENERATION (With Debugging)
// ========================================================
export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const resolvedParams = await params;
  const targetSlug = decodeURIComponent(resolvedParams.slug);

  // Exact match ya case-insensitive match check kar rahe hain
  const project = caseStudiesData.find(
    (p) => p.slug?.toLowerCase() === targetSlug.toLowerCase()
  );

  if (!project) {
    console.log("❌ Meta Project Not Found for Slug:", targetSlug);
    return {
      title: "Case Study Not Found | High Rise Digital",
      description: "Explore our successful digital marketing and SEO case studies.",
    };
  }

  console.log("✅ Meta Found for Project:", project.title);

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [{ url: project.image || "/about-preview.png" }],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.description,
      images: [project.image || "/about-preview.png"],
    },
  };
}

// ========================================================
// ⚡ STATIC CHUNKS GENERATION
// ========================================================
export async function generateStaticParams() {
  return caseStudiesData.map((project) => ({
    slug: project.slug,
  }));
}

// ========================================================
// 🖥️ SERVER COMPONENT ENTRY POINT
// ========================================================
export default async function CaseStudyDetailPage({ params }: { params: Promise<Params> }) {
  const resolvedParams = await params;
  const targetSlug = decodeURIComponent(resolvedParams.slug);

  const project = caseStudiesData.find(
    (p) => p.slug?.toLowerCase() === targetSlug.toLowerCase()
  );

  if (!project) {
    return notFound();
  }

  return <CaseStudyClientContent project={project} />;
}