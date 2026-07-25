"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
// 🎯 FIXED: Missing icons (ArrowUpRight, ExternalLink) successfully imported here
import { ArrowUpRight, Flame, ExternalLink } from "lucide-react";

// ========================================================
// 📦 CENTRALISED PROJECTS ACQUISITION Blueprints Array
// ========================================================
export const projects = [
  // --- WEBSITE DEVELOPMENT (10 Unique Projects) ---

  {
    slug: "femme-propre",
    title: " Femme Propre",
    category: "web",
    image: "/home-cleaning.png",
    liveUrl: "https://www.femmepropre.co.uk/"
  },
  {
    slug: "the-beauty-station",
    title: "The Beauty Station",
    category: "web",
    image: "/beauti-station.png",
    liveUrl: "https://thebeautystation.com/"
  },
  {
    slug: "insaneperfumes",
    title: "Insane Perfumes",
    category: "web",
    image: "/imsamme-perfume.png",
    liveUrl: "https://insaneperfumes.com/"
  },
  {
    slug: "toddler",
    title: "Toddlert",
    category: "web",
    image: "/toddlert.png",
    liveUrl: "https://toddlertown.ae/"
  },


  {
    slug: "car-recovery",
    title: "Car Recovery London",
    category: "web",
    image: "/car-recovery.png",
    liveUrl: "https://carsrecoverylondon.com/"
  },
  {
    slug: "crese",
    title: "Cresa",
    category: "web",
    image: "/core.png",
    liveUrl: "https://www.cresa.com/"
  },
  {
    slug: "zaiqah-royal",
    title: "Zaiqah Royale",
    category: "web",
    image: "/zaiqa.png",
    liveUrl: "https://zaiqahroyale.com/"
  },
  // {
  //   slug: "nordic-socks",
  //   title: "Nordic Socks",
  //   category: "web",
  //   image: "/nordic-socks.png",
  //   liveUrl: "https://www.nordicsocks.com/"
  // },
  {
    slug: "rugs-and-carpets",
    title: "Rugs and Carpets",
    category: "web",
    image: "/rugs-carpet.png",
    liveUrl: "https://rugsandcarpets.ae/"
  },
  {
    slug: "vilabarbaut",
    title: "Vila Barbaut",
    category: "web",
    image: "/villabarbout.png",
    liveUrl: "https://vilabarbaut.com/"
  },


  // --- SEO PERFORMANCE CAMPAIGNS (6 Projects) ---
  {
    slug: "170-leads-increased-for-roofing-company",
    title: "nordic-socks 28% Organic Traffic.",
    category: "seo",
    image: "/nordic-socks.png"
  },
  {
    slug: "11-total-sales-revenue-increased-for-oral-care-brand",
    title: "Real Estate Company Achieved 1,000+ Leads In 3 Months With SEO",
    category: "seo",
    image: "/real-estate.png"
  },
  {
    slug: "28-organic-traffic-increase-for-local-cleaning-company",
    title: "Marketing Agency Generated 1.76K Leads In 3 Months",
    category: "seo",
    image: "/social-status.png"
  },
  {
    slug: "6.69K-clicks-in-just-3-months-for-local-restaurant",
    title: "Fitness Brand SEO Case Study: 1,000+ Leads in 3 Months",
    category: "seo",
    image: "/fitness-brand.png"
  },

  // --- SOCIAL MEDIA MARKETING PERFORMANCE ---
  {
    slug: "31-increase-in-qualified-property-leads-via-high-intent-social-funnels",
    title: "31% Increase In Qualified Property Leads Via High-Intent Social Funnels",
    category: "social",
    image: "/s-property.png"
  },
  {
    slug: "598541-in-sales-at-22x-roas-for-private-label-fitness-brand",
    title: "$598,541 In Sales At 22x ROAS For Private Label Fitness Brand Via High-Converting Funnels",
    category: "social",
    image: "/s-gym.png"
  },
  {
    slug: "1044-website-purchases-for-fashion-brand",
    title: "1,044 Website Purchases For Fashion Brand In 2 Months At 23.85x ROAS Via Direct-Response Funnels",
    category: "social",
    image: "/s-fastion.png"
  },
  {
    slug: "25-10x-roas-for-home-living-brand",
    title: "25.10x ROAS For Home & Living Brand Via High-Converting Paid Social Funnels",
    category: "social",
    image: "/s-home-living.png"
  }
];

const filters = [
  { id: "all", label: "All Cases" },
  { id: "web", label: "Web Development" },
  { id: "seo", label: "SEO " },
  { id: "social", label: "Social Media Marketing" }
];

export default function PortfolioPage() {
  const [active, setActive] = useState("all");

  const filtered = active === "all" ? projects : projects.filter(p => p.category === active);

  return (
    <main className="bg-[#111827] text-zinc-100 selection:bg-blue-600 overflow-x-hidden min-h-screen antialiased pb-24">

      {/* 1. HERO SECTION */}
      <section className="relative w-full overflow-hidden bg-[#030712]">
        <div className="w-full">
          {/* Background Image Container */}
          <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
            <Image
              src="/home-hero.jpg"
              alt="Mesh Grid"
              fill
              sizes="100vw"
              priority
              className="object-cover object-top opacity-35"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030712]/40 to-[#030712]" />
          </div>

          {/* Ambient Blur Dot */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/[0.05] blur-[120px] pointer-events-none" />

          {/* Full Sized Content Wrapper */}
          <div className="relative z-10 w-full mx-auto text-center lg:text-left px-6 pt-32 pb-16 md:pt-20 md:pb-24 lg:max-w-full lg:pt-40 lg:pb-16 lg:pl-40 2xl:mx-0 2xl:max-w-[1500px] 2xl:pt-48 2xl:pl-80">
            <div className="max-w-5xl">
              {/* Glassmorphism Badge Container */}
              <div className="flex items-center gap-2.5 mb-8 w-fit px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-md mx-auto lg:mx-0">
                <Flame size={12} className="text-blue-400 animate-pulse" />
                <span className="text-[10px] font-black tracking-[4px] text-blue-300 uppercase">Our Work</span>
              </div>

              {/* Main Typography Block */}
              <h1 className="text-[2rem] md:text-[3.2rem] lg:text-[3.8rem] 2xl:text-[5rem] font-black tracking-tighter leading-none text-white mb-8">
                CASE{" "}
                <span className="bg-gradient-to-r from-[#00f2ff] via-[#0070ff] to-[#00f2ff] bg-[length:200%_auto] animate-gradient text-transparent bg-clip-text">
                  STUDIES.
                </span>
              </h1>

              {/* Description Paragraph */}
              <p className="text-white text-[16px] md:text-base lg:text-[17px] 2xl:text-xl font-medium leading-relaxed max-w-xl 2xl:max-w-3xl mx-auto lg:mx-0">
                Explore expert insights, digital marketing tips, and strategies to grow your business with our latest
                blogs and industry updates.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* 🎯 FIXED: Pure Clean Layout - Desktop par center line aur Mobile par auto wrap into 2 lines */}
      <section className="w-full px-4 py-6 md:py-8 relative z-30 flex justify-center">
        <div className="w-full max-w-4xl flex justify-center">

          {/* Main Container: Mobile par grid/wrap layout aur desktop par normal flex container */}
          <div className="bg-zinc-900/60 p-1.5 rounded-xl border border-white/5 backdrop-blur-xl shadow-2xl flex flex-wrap justify-center gap-1.5 items-center w-full sm:w-auto">

            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setActive(f.id)}
                className={`px-3 py-2 md:px-5 md:py-2 rounded-lg text-[10px] md:text-xs font-mono uppercase tracking-wider font-bold transition-all duration-300 text-center
            /* Mobile controls: takay text barabar fit ho 2 lines me */
            flex-grow sm:flex-grow-0 min-w-[calc(50%-6px)] sm:min-w-0 ${active === f.id
                    ? "bg-[#0971A6] text-white shadow-lg shadow-blue-600/10"
                    : "text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.02]"
                  }`}
              >
                {f.label}
              </button>
            ))}

          </div>

        </div>
      </section>

      {/* 🎯 PREMIUM 3-COLUMN LUXURY BENTO GRID (WIDE SCALE) */}
      {/* 🎯 FIXED: Max-width ko 1920px kiya hai taake container bada ho, aur padding horizontal adjust ki hai */}
      <section className="w-full px-4 sm:px-6 md:px-12 2xl:px-16 max-w-[1400px] 2xl:max-w-[1950px] 3xl:max-w-[1920px] mx-auto relative z-20 py-12">
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 2xl:gap-12 w-full"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => {
              const isWeb = item.category === "web";

              const CardContent = (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                  className="w-full flex flex-col group cursor-pointer relative"
                >
                  {/* BIG IMAGE CONTAINER (No Card Box, Pure Picture Focus) */}
                  <div className="w-full aspect-[16/10] sm:aspect-[16/9.5] rounded-3xl overflow-hidden relative mb-4 bg-transparent">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-125 scale-110"
                      priority
                    />

                    {/* LUXURY CATEGORY BADGE */}
                    <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md border border-white/10 rounded-full px-3.5 py-1.5 flex items-center gap-2 z-10">
                      <span
                        className={`w-2 h-2 rounded-full animate-pulse ${item.category === "web"
                          ? "bg-cyan-400 shadow-[0_0_8px_#22d3ee]"
                          : item.category === "seo"
                            ? "bg-blue-400 shadow-[0_0_8px_#60a5fa]"
                            : "bg-purple-400 shadow-[0_0_8px_#c084fc]"
                          }`}
                      />
                      <span className="text-[10px] uppercase tracking-widest font-black text-white/90">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  {/* TITLE & ACTION BELOW THE IMAGE */}
{/* TITLE & ACTION CONTAINER (Centered inside the card) */}
<div className="px-1 w-full flex items-center justify-center gap-3">
  <h3 className="text-base sm:text-lg 2xl:text-xl font-bold tracking-normal text-white group-hover:text-cyan-400 transition-colors duration-300 leading-snug text-center">
    {item.title}
  </h3>

  <div className="w-8 h-8 2xl:w-10 2xl:h-10 rounded-full bg-white/[0.05] border border-white/10 flex items-center justify-center text-zinc-400 group-hover:text-cyan-400 group-hover:bg-cyan-500/10 group-hover:border-cyan-500/40 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 shrink-0">
    {isWeb && item.liveUrl ? (
      <ExternalLink className="w-3.5 h-3.5 2xl:w-4 2xl:h-4" />
    ) : (
      <ArrowUpRight className="w-3.5 h-3.5 2xl:w-4 2xl:h-4" />
    )}
  </div>
</div>
                </motion.div>
              );

              if (isWeb && item.liveUrl) {
                return (
                  <a href={item.liveUrl} key={item.slug} target="_blank" rel="noopener noreferrer" className="block h-full">
                    {CardContent}
                  </a>
                );
              }

              return (
                <Link href={`/case-studies/${item.slug}`} key={item.slug} className="block h-full">
                  {CardContent}
                </Link>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </section>

    </main>
  );
}