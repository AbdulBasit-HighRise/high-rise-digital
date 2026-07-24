"use client";
import Image from "next/image";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Cpu, BarChart3 } from "lucide-react";
  const seoProjects = [
    {
      id: "01",
      slug: "170-leads-increased-for-roofing-company",
      title: "nordic-socks 28% Organic Traffic.",
      category: "seo",
      image: "/nordic-socks.png",
    },
    {
      id: "02",
      slug: "11-total-sales-revenue-increased-for-oral-care-brand",
      title: "Real Estate Company Achieved 1,000+ Leads In 3 Months With SEO",
      category: "seo",
      image: "/real-estate.png",
    },
    {
      id: "03",
      slug: "28-organic-traffic-increase-for-local-cleaning-company",
      title: "Marketing Agency Generated 1.76K Leads In 3 Months",
      category: "seo",
      image: "/social-status.png",
    },
    {
      id: "04",
      slug: "6.69K-clicks-in-just-3-months-for-local-restaurant",
      title: "Fitness Brand SEO Case Study: 1,000+ Leads in 3 Months",
      category: "seo",
      image: "/fitness-brand.png",
    },
  ];

export default function PortfolioBento() {
  return (
     <section className="relative py-16 md:py-20 2xl:py-32 bg-[#111827] text-white overflow-hidden select-none border-t border-white/5">
        {/* Background Glows */}
        <div className="absolute top-1/3 left-1/4 w-[600px] 2xl:w-[1000px] h-[600px] bg-blue-600/[0.02] blur-[150px] pointer-events-none" />

        <div className="relative z-10 w-full px-6 max-w-[1400px] mx-auto">

          {/* HEADER BLOCK */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 md:mb-10 2xl:mb-16 border-b border-white/5 pb-4 pt-0">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-left"
            >
              <h3 className="text-[1.8rem] md:text-[2.5rem] lg:text-[2.5rem] 2xl:text-[3.2rem] font-black tracking-tight leading-[1.1] lg:leading-none text-white mb-4">
                Our{" "}
                <span className="sm:inline bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  SEO Results
                </span>
              </h3>
              <p className="mt-2 text-white text-[16px] md:text-base lg:text-[17px] 2xl:text-xl 3xl:text-2xl font-medium leading-relaxed opacity-80 w-full mx-auto lg:mx-0">
                We deliver clear, measurable growth by boosting your Google rankings, increasing organic traffic, and driving real revenue to your business.
              </p>
            </motion.div>

            {/* VIEW ALL LINK */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center shrink-0"
            >
              <Link
                href="/case-studies"
                className="flex items-center gap-3 md:gap-4 text-[10px] md:text-xs 2xl:text-[13px] uppercase tracking-[0.25em] font-black text-white hover:text-white transition-all duration-500 group"
              >
                <span className="relative pb-1 transition-colors duration-500 group-hover:text-white">
                  View All Projects
                  <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-500 group-hover:w-full" />
                </span>
                <div className="w-10 h-10 md:w-11 md:h-11 2xl:w-14 2xl:h-14 rounded-full border border-white/10 bg-white/[0.02] flex items-center justify-center relative overflow-hidden group-hover:border-blue-500/50 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.1)] transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <ArrowUpRight size={16} className="text-zinc-400 group-hover:text-white group-hover:rotate-45 group-hover:scale-110 transform transition-all duration-500 2xl:w-5 2xl:h-5" />
                </div>
              </Link>
            </motion.div>
          </div>

          {/* 2 CARDS PER ROW GRID (CLEAN & SHADOW-FREE) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 2xl:gap-8 relative z-10 w-full">
            {seoProjects.map((project, i) => {
              const CardWrapper = motion.div;

              return (
                <Link href={`/${project.slug}`} key={project.id} className="block w-full">
                  <CardWrapper
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="w-full h-[280px] md:h-[340px] 2xl:h-[420px] group relative rounded-[1.5rem] 2xl:rounded-[2.5rem] bg-transparent flex flex-col justify-between overflow-hidden transition-all duration-500 cursor-pointer"
                  >
                    <div className="absolute inset-0 w-full h-full">
                      {/* Next.js Image Element without any shadow overlay */}
                      <div className="absolute inset-0 w-full h-full transition-all duration-500">
                        <Image
                          src={project.image || "/placeholder.png"}
                          alt={project.title}
                          fill
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                          priority={i < 2}
                        />
                      </div>

                      {/* Project ID Tag */}
                      {/* <div className="absolute top-4 left-4 z-20">
                        <span className="px-2.5 py-1 rounded-full border border-white/10 bg-black/50 backdrop-blur-md text-[9px] 2xl:text-xs font-bold text-gray-300 uppercase tracking-widest">
                          {project.id}
                        </span>
                      </div> */}

                      {/* Project Title Display */}
                      <div className="absolute bottom-5 left-3 z-20 max-w-[85%] sm:max-w-[75%]">
                        <span className="text-xs md:text-sm lg:text-base font-bold tracking-tight block text-white bg-black/70 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/10 shadow-lg line-clamp-2">
                          {project.title}
                        </span>
                      </div>
                    </div>
                  </CardWrapper>
                </Link>
              );
            })}
          </div>

        </div>
      </section>
  );
}











