"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

 const seoProjects = [
    {
      id: "01",
      slug: "11-total-sales-revenue-increased-for-fastion-brand",
      title: "nordic-socks 28% Organic Traffic.",
      category: "seo",
      image: "/nordic-socks.png",
    },
    {
      id: "02",
      slug: "6.69K-clicks-in-just-3-months-for-real-estate",
      title: "Real Estate Company Achieved 1,000+ Leads In 3 Months With SEO",
      category: "seo",
      image: "/real-estate.png",
    },
    {
      id: "03",
      slug: "170-leads-increased-for-marketing-agency",
      title: "Marketing Agency Generated 1.76K Leads In 3 Months",
      category: "seo",
      image: "/social-status.png",
    },
    {
      id: "04",
      slug: "28-organic-traffic-increase-for-fittness-brand",
      title: "Fitness Brand SEO Case Study: 1,000+ Leads in 3 Months",
      category: "seo",
      image: "/fitness-brand.png",
    },
  ];

export default function PortfolioStylishSlider() {
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate array for seamless infinite marquee loop effect
  const duplicatedProjects = [...seoProjects, ...seoProjects];

  return (
   <section className="relative py-16 md:py-20 2xl:py-32 bg-[#111827] text-white overflow-hidden select-none border-t border-white/5">
         <div className="absolute top-1/3 left-1/4 w-[600px] 2xl:w-[1000px] h-[600px] bg-blue-600/[0.02] blur-[150px] pointer-events-none" />
 
         <div className="relative z-10 w-full px-6 max-w-[1800px] 2xl:max-w-[2100px] mx-auto mb-10">
           <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/5 pb-6">
             <motion.div
               initial={{ opacity: 0, y: 15 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5 }}
               className="text-left max-w-2xl"
             >
               <h3 className="text-[1.8rem] md:text-[2.5rem] lg:text-[2.5rem] 2xl:text-[3.2rem] font-black tracking-tight leading-[1.1] lg:leading-none text-white mb-4">
                 Our{" "}
                 <span className="sm:inline bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                   Recent Projects
                 </span>
               </h3>
               <p className="mt-2 text-white text-[16px] md:text-base lg:text-[17px] 2xl:text-xl font-medium leading-relaxed opacity-80">
                 We deliver clear, measurable growth by boosting your Google rankings, increasing organic traffic, and driving real revenue to your business.
               </p>
             </motion.div>
 
             <Link
               href="/case-studies"
               className="hidden sm:flex items-center gap-3 text-[10px] md:text-xs 2xl:text-[13px] uppercase tracking-[0.25em] font-black text-white hover:text-cyan-400 transition-all duration-300 group"
             >
               <span className="relative pb-1">
                 View All Projects
                 <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-300 group-hover:w-full" />
               </span>
             </Link>
           </div>
         </div>
 
         {/* INFINITE MARQUEE SLIDER CONTAINER */}
         <div 
           className="w-full overflow-hidden relative flex py-4"
           onMouseEnter={() => setIsPaused(true)}
           onMouseLeave={() => setIsPaused(false)}
         >
           {/* Left & Right Gradient Shadows */}
           <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 lg:w-48 bg-gradient-to-r from-[#111827] to-transparent z-20 pointer-events-none" />
           <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 lg:w-48 bg-gradient-to-l from-[#111827] to-transparent z-20 pointer-events-none" />
 
           {/* Marquee Track */}
           <div
             className="flex gap-5 md:gap-6 shrink-0 w-max"
             style={{
               animation: "marquee 42s linear infinite",
               animationPlayState: isPaused ? "paused" : "running",
             }}
           >
             {duplicatedProjects.map((project, i) => (
               <div
                 key={`${project.id}-${i}`}
                 // Mobile se le kar 2K/4K tak completely optimized widths
                 className="w-[320px] sm:w-[360px] md:w-[420px] lg:w-[460px] 2xl:w-[650px] shrink-0 px-1"
               >
                 <Link href={`/case-studies/${project.slug}`} className="block w-full">
                   className="w-full h-[210px] sm:h-[240px] md:h-[300px] lg:h-[360px] 2xl:h-[450px] group relative rounded-[2rem] md:rounded-[2.5rem] overflow-hidden bg-transparent cursor-pointer flex flex-col justify-end p-5 md:p-8"
                     {/* Background Image */}
                     <div className="absolute inset-0 w-full h-full">
                       <Image
                         src={project.image || "/placeholder.png"}
                         alt={project.title}
                         fill
                         sizes="(max-width: 1024px) 100vw, 50vw"
                         className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                       />
                       {/* Subtle dark gradient overlay */}
                       <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                     </div>
 
                     {/* Title & Arrow Box */}
                     <div className="relative z-20">
                       <div className="bg-black/75 backdrop-blur-xl px-5 py-3.5 md:px-8 md:py-6 rounded-2xl border border-white/10 shadow-2xl flex items-center justify-between gap-4 transition-all duration-500 ease-out group-hover:border-cyan-500/40 group-hover:bg-black/90 transform translate-y-16 group-hover:translate-y-0 opacity-0 group-hover:opacity-100">
                         <span className="text-xs sm:text-sm md:text-base lg:text-lg 2xl:text-2xl font-bold tracking-tight text-white line-clamp-2">
                           {project.title}
                         </span>
 
                         <div className="w-9 h-9 sm:w-10 sm:h-10 lg:w-12 lg:h-12 2xl:w-16 2xl:h-16 rounded-full bg-white/[0.05] border border-white/10 flex items-center justify-center text-zinc-300 group-hover:text-cyan-400 group-hover:bg-cyan-500/20 group-hover:border-cyan-500/50 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 shrink-0">
                           <ArrowUpRight className="w-4 h-4 lg:w-6 lg:h-6 2xl:w-7 2xl:h-7" />
                         </div>
                       </div>
                     </div>
                   </div>
                 </Link>
               </div>
             ))}
           </div>
         </div>
 
         {/* CSS Keyframes for Infinite Marquee */}
         <style jsx global>{`
           @keyframes marquee {
             0% {
               transform: translateX(0%);
             }
             100% {
               transform: translateX(-50%);
             }
           }
         `}</style>
    </section>
  );
}
