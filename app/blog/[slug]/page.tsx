import { posts } from "@/lib/blogData";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, User, Calendar, Flame, ArrowRight } from "lucide-react";
import { Metadata } from "next";

type Props = {
    params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const resolvedParams = await params;
    const post = posts.find((p) => p.slug === resolvedParams.slug);

    if (!post) return { title: "Post Not Found | Blog" };

    return {
        title: post.metaTitle || post.title,
        description: post.metaDescription || post.excerpt,
        openGraph: {
            title: post.metaTitle || post.title,
            description: post.metaDescription || post.excerpt,
            images: [{ url: post.image, width: 1200, height: 630, alt: post.title }],
        },
    };
}

export default async function BlogPostPage({ params }: Props) {
    const resolvedParams = await params;
    const post = posts.find((p) => p.slug === resolvedParams.slug);

    if (!post) {
        notFound();
    }

    const relatedPosts = posts.filter((p) => p.slug !== resolvedParams.slug).slice(0, 3);

    return (
        <main className="bg-[#111827] text-white min-h-screen selection:bg-blue-600 antialiased overflow-x-hidden">

            {/* 1. HERO SECTION (Fully Responsive for 2K/4K & Mobile) */}
            <section className="relative w-full overflow-hidden bg-[#030712] border-b border-white/5">
                <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
                    <Image
                        src="/home-hero.jpg"
                        alt="Mesh Grid"
                        fill
                        sizes="100vw"
                        priority
                        className="object-cover object-top opacity-35"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030712]/60 to-[#030712]" />
                </div>

                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] 2xl:w-[1000px] h-[500px] bg-blue-600/[0.06] blur-[150px] pointer-events-none" />

                <div className="relative z-10 w-full mx-auto px-6 pt-32 pb-16 md:pt-24 md:pb-20 lg:max-w-[1400px] 2xl:max-w-[1700px] 2xl:pt-40 2xl:pb-28">
                    <div className="max-w-4xl 2xl:max-w-5xl">
                        <Link
                            href="/blog"
                            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-6 text-xs md:text-sm font-bold uppercase tracking-wider transition-colors group"
                        >
                            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Insights
                        </Link>

                        <div className="flex items-center gap-2.5 mb-6 w-fit px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-md">
                            <Flame size={14} className="text-blue-400 animate-pulse" />
                            <span className="text-[10px] md:text-xs font-black tracking-[4px] text-blue-300 uppercase">{post.category}</span>
                        </div>

                        <h1 className="text-[2.2rem] md:text-[2.5rem] lg:text-[3rem] 2xl:text-[3.5rem] font-black tracking-tighter leading-[1.08] text-white mb-6">
                            {post.title}
                        </h1>

                        <p className="text-zinc-300 text-base md:text-lg lg:text-xl font-medium leading-relaxed opacity-90 max-w-3xl">
                            {post.excerpt}
                        </p>
                    </div>
                </div>
            </section>

            {/* 2. MAIN CONTENT & RIGHT SIDEBAR (Optimized Widths for 2K/4K) */}
            <section className="relative z-10 max-w-[1400px] 2xl:max-w-[1600px] mx-auto px-6 py-12 md:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">

                    {/* Left Side: Article Content (Col Span 8) */}
                    <div className="lg:col-span-8 space-y-8">
                        <div className="relative w-full h-[320px] md:h-[480px] 2xl:h-[540px] rounded-3xl overflow-hidden border border-white/10 bg-zinc-900 shadow-2xl">
                            <Image src={post.image} alt={post.title} fill className="object-cover" priority />
                        </div>

                        {/* Typography & Formatting */}
                        <div className="text-zinc-200 leading-relaxed text-base md:text-lg 2xl:text-xl space-y-8 bg-[#030712]/50 p-6 md:p-10 rounded-3xl border border-white/5">
                            {post.contentSections ? (
                                post.contentSections.map((section: any, idx: number) => {
                                    if (section.type === "paragraph") {
                                        return (
                                            <p
                                                key={idx}
                                                className="whitespace-pre-line text-zinc-300 leading-relaxed font-normal [&>a]:text-blue-400 [&>a]:font-semibold [&>a]:underline [&>a]:underline-offset-4 hover:[&>a]:text-cyan-300"
                                                dangerouslySetInnerHTML={{ __html: section.text }}
                                            />
                                        );
                                    }
                                    if (section.type === "heading") {
                                        return (
                                            <h2 key={idx} className="text-2xl md:text-3xl 2xl:text-4xl font-black text-white mt-10 mb-4 tracking-tight border-l-4 border-blue-500 pl-4">
                                                {section.text}
                                            </h2>
                                        );
                                    }
                                    if (section.type === "list") {
                                        return (
                                            <ul key={idx} className="space-y-3 my-6 pl-2">
                                                {section.items.map((item: string, i: number) => (
                                                    <li key={i} className="flex items-start gap-3 text-zinc-300">
                                                        <span className="w-2 h-2 rounded-full bg-blue-500 mt-2.5 shrink-0" />
                                                        <span className="leading-relaxed">{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        );
                                    }
                                    return null;
                                })
                            ) : (
                                <p className="text-zinc-300 leading-relaxed">{post.content}</p>
                            )}
                        </div>
                    </div>

                    {/* Right Side: Metadata Sidebar (Col Span 4) */}
                    <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
                        <div className="bg-[#030712] border border-white/10 p-6 md:p-8 rounded-3xl shadow-2xl space-y-6 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 blur-3xl pointer-events-none" />

                            <h3 className="text-xs md:text-sm font-black uppercase tracking-[0.2em] text-blue-400 border-b border-white/10 pb-4">
                                Article Metadata
                            </h3>

                            <div className="flex items-center gap-4 text-zinc-300">
                                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                                    <User size={20} />
                                </div>
                                <div>
                                    <p className="text-[11px] text-zinc-500 uppercase tracking-widest font-bold">Author</p>
                                    <p className="text-sm md:text-base font-bold text-white">{post.author}</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 text-zinc-300">
                                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                                    <Calendar size={20} />
                                </div>
                                <div>
                                    <p className="text-[11px] text-zinc-500 uppercase tracking-widest font-bold">Published On</p>
                                    <p className="text-sm md:text-base font-bold text-white">{post.date}</p>
                                </div>
                            </div>

                            <div className="pt-4 border-t border-white/10">
                                <p className="text-xs text-zinc-400 leading-relaxed">
                                    Engineered for maximum user engagement and search engine optimization visibility.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* 3. RELATED BLOGS SECTION */}
            {relatedPosts.length > 0 && (
                <section className="relative z-10 max-w-[1400px] 2xl:max-w-[1700px] mx-auto px-6 py-16 md:py-24 border-t border-white/5 mt-12">
                    <div className="flex items-center justify-between mb-10">
                        <h2 className="text-2xl md:text-3xl 2xl:text-4xl font-black tracking-tight text-white">
                            Related <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Insights</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                        {relatedPosts.map((related) => (
                            <Link
                                key={related.slug}
                                href={`/blog/${related.slug}`}
                                className="group flex flex-col justify-between bg-[#030712] border border-white/5 rounded-3xl overflow-hidden transition-all duration-500 hover:border-blue-500/30 hover:bg-zinc-950/60 shadow-xl"
                            >
                                <div>
                                    <div className="relative w-full h-52 md:h-60 overflow-hidden bg-zinc-900 rounded-t-3xl">
                                        <Image
                                            src={related.image}
                                            alt={related.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-75 group-hover:opacity-100"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-lg md:text-xl font-bold mb-3 tracking-tight text-white group-hover:text-blue-400 transition-colors line-clamp-2">
                                            {related.title}
                                        </h3>
                                        <p className="text-zinc-400 text-sm line-clamp-2 leading-relaxed">
                                            {related.excerpt}
                                        </p>
                                    </div>
                                </div>
                                <div className="px-6 pb-6 pt-0">
                                    <div className="pt-4 border-t border-white/5 flex items-center gap-2 text-xs font-bold uppercase tracking-[2px] text-blue-400">
                                        <span>READ MORE</span>
                                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>
            )}

        </main>
    );
}