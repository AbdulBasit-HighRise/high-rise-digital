// ========================================================
// 📦 GLOBAL CASE STUDIES DATA REPOSITORY ARRAY
// ========================================================
export interface MetricItem {
  value: string;
  label: string;
  highlight: boolean;
}

export interface SectionItem {
  id: string;
  tag: string;
  title: string;
  subtitle?: string;
  theme: "dark" | "variant";
  paragraphs: string[];
  featuresHeader?: string;
  features?: string[];
  conclusion?: string;
}

export interface ResultCard {
  badge: string;
  value: string;
  label: string;
  desc: string;
  isEmerald: boolean;
}

export interface ResultsData {
  id: string;
  tag: string;
  title: string;
  description: string;
  cards: ResultCard[];
  additionalHeader?: string;
  additionalImprovements?: string[];
  conclusionTitle: string;
  conclusionParagraphs: string[];
}

export interface ProofImage {
  src: string;
  alt: string;
  caption: string;
  // 🔥 Fixed & Added "pink" here so it compiles cleanly
  color: "blue" | "emerald" | "purple" | "pink"; 
}

export interface ProofData {
  header: string;
  subheader: string;
  images: ProofImage[];
}

export interface CaseStudy {
  slug: string;
  category: "seo" | "social" | "web";
  isSocial: boolean;
  title: string;
  description: string;
  primaryOutcome: string;
  image: string;
  metrics: MetricItem[];
  sections: SectionItem[];
  results: ResultsData;
  proof?: ProofData;
  displayCategory?: string;
  clientName?: string;
  location?: string;
  websiteName?: string;
}
export const caseStudiesData: CaseStudy[] = [
  // ========================================================
  // 🔥 1. RHINO ROOFING ORLANDO (SEO CASE STUDY) to social status
  // ========================================================
 {
    slug: "170-leads-increased-for-marketing-agency",
    category: "seo",
    isSocial: false,
    title: "Marketing Agency Generated 1.76K Leads In 3 Months",
    description: "See how we transformed Social Status's digital footprint, driving an 850% organic traffic surge and 1.76K+ qualified marketing agency leads.",
    primaryOutcome: "1.76K+ Leads",
    image: "/social-status.png",
    displayCategory: "Digital Marketing SEO",
    clientName: "Social Status",
    location: "Australia",
    websiteName: "WordPress",
    metrics: [
      { value: "1.76K+", label: "Qualified marketing leads generated in 3 months", highlight: true },
      { value: "+850%", label: "Organic traffic growth achieved", highlight: false },
      { value: "+12.5K", label: "Monthly organic visitors reached", highlight: false }
    ],
    sections: [
      {
        id: "01",
        tag: "Context",
        title: "THE CHALLENGE",
        theme: "dark",
        paragraphs: [
          "Social Status, a premier marketing agency operating in Australia, approached us to scale their organic online visibility, capture high-intent B2B inquiries, and drive a steady stream of qualified client leads through their website.",
          "Despite having an impressive portfolio and strong industry expertise, the agency's website was struggling to capture consistent organic search traffic due to a weak technical architecture, low keyword rankings for competitive agency terms, and an unoptimized conversion funnel.",
          "The challenge was not just to boost web traffic, but to attract high-intent business owners and marketing directors searching for top-tier agency services who would convert into long-term retainer clients.",
          "Operating in a fiercely competitive Australian digital landscape, the agency required a robust, performance-driven SEO blueprint capable of delivering compounding lead generation results."
        ]
      },
      {
        id: "02",
        tag: "Roadmap",
        title: "THE STRATEGY",
        subtitle: "Website Modernisation & Lead Generation Architecture",
        theme: "variant",
        paragraphs: [
          "To secure sustainable market dominance, we executed a comprehensive website refresh alongside an intensive 3-month SEO campaign targeted at search performance and conversion optimization.",
          "The initial focus was upgrading the digital platform with a sleek, user-focused design optimized to reduce bounce rates and maximize user conversion pathways."
        ],
        featuresHeader: "Key Improvements Included:",
        features: [
          "Modern, high-converting agency website redesign",
          "Advanced mobile usability and responsiveness enhancements",
          "Lightning-fast page loading speed optimization",
          "SEO-friendly site architecture and clear navigational hierarchy",
          "High-impact service landing pages tailored for B2B conversion",
          "Optimized lead capture forms and strategic call-to-actions (CTAs)",
          "Streamlined internal linking structure across service pillars"
        ],
        conclusion: "The redesign established a powerful visual standard while building a rock-solid technical framework for accelerated SEO growth."
      },
      {
        id: "03",
        tag: "Execution",
        title: "SEO Foundation & Technical Optimisation",
        theme: "dark",
        paragraphs: [
          "Following the launch of the optimized platform, we concentrated heavily on advanced technical SEO implementation to maximize search engine crawl efficiency and keyword indexing."
        ],
        featuresHeader: "SEO Improvements Included:",
        features: [
          "Comprehensive high-value marketing keyword research",
          "On-page SEO optimization for core agency offerings",
          "Targeted meta title and description optimization",
          "Critical technical SEO fixes and error resolution",
          "Advanced schema markup implementation for agency services",
          "URL structure refinement and clean canonical mapping",
          "Image compression and alt tag optimization",
          "Local and national Australian SEO authority enhancements"
        ],
        conclusion: "This structured technical optimization significantly improved search visibility for high-intent marketing and agency keywords across Australia."
      },
      {
        id: "04",
        tag: "Optimization",
        title: "Content & Local SEO Growth Strategy",
        theme: "variant",
        paragraphs: [
          "To expand authority within the Australian marketing sector, we rolled out a strategic content and authority-building roadmap designed to attract decision-makers."
        ],
        featuresHeader: "Growth Activities Included:",
        features: [
          "Strategic service-area and national audience targeting",
          "Location-based SEO landing pages across major Australian hubs",
          "Google Business Profile optimization and local signals tuning",
          "High-authority local citation building and profile consistency checks",
          "Content optimization targeting high-value marketing solutions",
          "Competitor SEO gap analysis within the Australian agency space",
          "Strategic acquisition of high-quality industry backlinks"
        ],
        conclusion: "The strategy successfully captured users actively searching for expert agency support while elevating the brand's local authority signals."
      },
      {
        id: "05",
        tag: "Monitoring",
        title: "Continuous SEO Optimisation",
        theme: "dark",
        paragraphs: [
          "Throughout the campaign execution, we maintained real-time tracking of rankings, traffic patterns, and user behavior metrics to continuously refine performance."
        ],
        featuresHeader: "Ongoing Optimisation Included:",
        features: [
          "Comprehensive monthly SEO audits",
          "Granular performance tracking and client reporting dashboards",
          "Continuous keyword ranking enhancements and expansions",
          "Rigorous conversion rate optimization (CRO)",
          "In-depth user behavior and session flow analysis",
          "Proactive technical performance monitoring"
        ],
        conclusion: "This agile, data-driven approach allowed us to adapt swiftly and scale the agency's inbound lead generation pipeline consistently."
      }
    ],
    results: {
      id: "06",
      tag: "Impact",
      title: "THE RESULTS",
      description: "The campaign drove phenomenal growth across organic search visibility, web traffic, and qualified lead generation within just 3 months.",
      cards: [
        {
          badge: "Lead Volume",
          value: "1.76K+",
          label: "Qualified Leads Generated",
          desc: "The optimized web architecture and SEO strategy successfully captured over 1,760 qualified client inquiries in 3 months.",
          isEmerald: true
        },
        {
          badge: "Traffic Expansion",
          value: "+850%",
          label: "Organic Traffic Growth",
          desc: "Monthly website traffic surged drastically, scaling inbound organic visitors up to 12.5K monthly active users.",
          isEmerald: false
        }
      ],
      additionalHeader: "Additional Performance Improvements:",
      additionalImprovements: [
        "Top-tier rankings for highly competitive Australian marketing keywords",
        "Significantly enhanced digital visibility across local and national search results",
        "Higher user engagement metrics and heavily reduced bounce rates",
        "Dramatically improved conversion performance across organic visitor channels",
        "Cemented brand authority and market leadership within the Australian agency sector"
      ],
      conclusionTitle: "TRANSFORMING SEO INTO A PREDICTABLE AGENCY GROWTH ENGINE",
      conclusionParagraphs: [
        "Social Status's rapid expansion highlights the exceptional impact of combining a high-performance, conversion-optimized website with an aggressive, highly targeted SEO roadmap.",
        "By upgrading technical execution, amplifying authority signals, and fine-tuning the user acquisition journey, we turned their digital presence into a consistent lead-generation powerhouse.",
        "The result translated into massive organic traffic gains, over 1,760 qualified marketing leads, and reinforced commercial dominance within a competitive industry.",
        "Armed with a bulletproof SEO infrastructure and continuous optimization, Social Status is positioned for sustained long-term market scaling and ongoing digital success."
      ]
    },
    proof: {
      header: "Verified Analytics & Execution Proof:",
      subheader: "Live platform snapshots capturing the exact transition loops and metric adjustments.",
      images: [
        {
          src: "/breez-care-result.jpg",
          alt: "Social Status Google Analytics and Traffic Growth Proof",
          caption: "Figure 4.1: Live metrics capture indicating massive organic scaling up to 1.76K+ qualified leads.",
          color: "blue"
        },
    
      ]
    }
  },
 
// ========================================================
  // 🔥 SMILECARE (PURE ECOMMERCE & SHOPIFY SEO CASE STUDY) nordic sock
  // ========================================================
{
    slug: "11-total-sales-revenue-increased-for-fastion-brand", 
    category: "seo",
    isSocial: false,
   title: "Nordic Socks | +28% Organic Traffic & Revenue Growth",
    description: "Discover how we scaled Nordic Socks' organic traffic by 28% and boosted overall eCommerce revenue through an advanced Shopify SEO framework.",
    primaryOutcome: "+28% Organic Traffic",
    image: "/nordic-socks.png", 
    displayCategory: "E-Commerce SEO",
    clientName: "Nordic Socks",
    location: "Global / USA",
    websiteName: "E-commerce",
    metrics: [
      { value: "+28%", label: "Increase in organic traffic", highlight: true },
      { value: "+24%", label: "Growth in total online revenue", highlight: false },
      { value: "+19%", label: "Increase in transactional orders", highlight: false },
      { value: "+15%", label: "Growth in average order value", highlight: false }
    ],
    sections: [
      {
        id: "01",
        tag: "Context",
        title: "THE CHALLENGE",
        theme: "dark",
        paragraphs: [
          "Our client, a popular premium apparel and Nordic socks brand, approached us to scale their organic visibility, capture high-intent search traffic, and boost online sales through their Shopify storefront.",
          "Despite offering top-tier quality products with an established brand aesthetic, the store faced a plateau in organic growth. They struggled with low keyword rankings for competitive apparel terms, structural technical bottlenecks, and a lack of optimized category pathways.",
          "The primary challenge was not just driving random clicks, but attracting high-intent shoppers looking for premium comfort wear who would seamlessly convert into paying customers.",
          "The brand required a specialized e-commerce SEO roadmap focused on technical health, collection architecture, and aggressive keyword expansion across commercial product categories."
        ]
      },
      {
        id: "02",
        tag: "Roadmap",
        title: "THE STRATEGY",
        subtitle: "E-Commerce SEO Architecture & Technical Optimisation",
        theme: "variant",
        paragraphs: [
          "To unlock exponential growth, we engineered a comprehensive Shopify SEO framework centered around technical health, site performance, deep keyword targeting, and conversion-focused user journeys.",
          "We began by running a deep technical audit to resolve crawling bottlenecks, clean up internal linking paths, and streamline site speed across both mobile and desktop versions."
        ],
        featuresHeader: "Key Improvements Included:",
        features: [
          "Comprehensive e-commerce technical SEO audit & fixes",
          "Core Web Vitals and site speed performance tuning",
          "Advanced mobile responsiveness enhancements",
          "Optimized collection and product taxonomy structure",
          "Product and organization schema markup deployment",
          "Strategic meta title and description optimization",
          "Internal linking structural improvements",
          "Resolution of duplicate content and indexing issues"
        ],
        conclusion: "These optimizations established a bulletproof technical foundation, paving the way for sustainable search engine growth."
      },
      {
        id: "03",
        tag: "Execution",
        title: "Keyword Strategy & Content Optimisation",
        theme: "dark",
        paragraphs: [
          "To capture high-intent commercial traffic, we mapped out a robust keyword and content strategy tailored specifically to consumer search patterns in the apparel niche."
        ],
        featuresHeader: "SEO Activities Included:",
        features: [
          "Deep commercial and transactional keyword research",
          "Core product page SEO optimization",
          "Parent and sub-collection page content expansion",
          "Search intent mapping for seasonal comfort wear",
          "Comprehensive competitor SEO gap analysis",
          "Optimized image alt tags and rich media descriptions"
        ],
        conclusion: "This targeted approach skyrocketed rankings for high-value apparel search terms and brought a steady stream of qualified buyers to the store."
      },
      {
        id: "04",
        tag: "Optimization",
        title: "Conversion-Focused SEO Growth",
        theme: "variant",
        paragraphs: [
          "Sustainable SEO goes beyond rankings; our strategy heavily integrated conversion rate optimization (CRO) principles to maximize revenue output from organic channels."
        ],
        featuresHeader: "Growth Optimisation Included:",
        features: [
          "Streamlined user experience (UX) refinements",
          "Enhanced category filtering and product discovery",
          "Optimized call-to-action touchpoints",
          "Shopify checkout and landing page alignment",
          "Improved customer browsing journey flow",
          "Continuous performance tracking and keyword adjustments"
        ],
        conclusion: "This holistic execution ensured that every surge in traffic efficiently converted into measurable business revenue."
      }
    ],
    results: {
      id: "05",
      tag: "Impact",
      title: "THE RESULTS",
      description: "The targeted SEO campaign delivered massive, compounding improvements across organic traffic, transactions, and overall brand revenue.",
      cards: [
        {
          badge: "Traffic Surge",
          value: "+28%",
          label: "Increase in Organic Traffic",
          desc: "Organic visitor sessions grew substantially, funneling thousands of high-intent shoppers directly to product listings.",
          isEmerald: true
        },
        {
          badge: "Revenue Expansion",
          value: "+24%",
          label: "Growth in Total Online Revenue",
          desc: "Total sales revenue scaled consistently month-over-month as targeted search traffic matched high purchase intent.",
          isEmerald: false
        }
      ],
      additionalHeader: "Additional Improvements:",
      additionalImprovements: [
        "First-page rankings for core commercial apparel keywords",
        "Massive boost in product visibility across major search engines",
        "Significantly enhanced user engagement and lower bounce rates",
        "Flawless mobile shopping experience and improved site speed",
        "A highly scalable, future-proof organic search architecture"
      ],
      conclusionTitle: "SCALING E-COMMERCE SUCCESS THROUGH TARGETED SEO",
      conclusionParagraphs: [
        "This case study highlights how a meticulous e-commerce SEO strategy can completely transform an apparel brand's digital footprint and revenue capabilities.",
        "By merging technical optimization, strategic keyword mapping, and user experience enhancements, we successfully positioned Nordic Socks as an authority in organic search.",
        "The resulting impact generated compounding gains in traffic, customer acquisition, order volume, and bottom-line revenue growth.",
        "Armed with a high-performing SEO infrastructure, the brand is fully primed for continuous global expansion and long-term digital dominance."
      ]
    },
    proof: {
      header: "Verified Analytics & Execution Proof:",
      subheader: "Live platform metrics highlighting the exact transition loops and traffic scaling performance.",
      images: [
        {
          src: "/breez-care-result.jpg", 
          alt: "Nordic Socks Google Analytics and Revenue Growth Proof",
          caption: "Figure 3.1: Live metrics reflecting the massive +28% organic traffic surge and consistent revenue scaling.",
          color: "blue"
        }
      ]
    }
  },
 // ========================================================
  // 🔥 WEST LONDON CLEANING COMPANY (WIX LOCAL SEO CASE STUDY) to fitness brand
  // ========================================================
 {
    slug: "28-organic-traffic-increase-for-fittness-brand",
    category: "seo",
    isSocial: false,
    title: "Fitness Brand SEO Case Study: 1,000+ Leads in 3 Months",
    description: "Explore our fitness SEO success story delivering 1,000+ targeted gym and supplement leads through rapid technical optimization and high-intent content.",
    primaryOutcome: "1,000+ Leads",
    image: "/fitness-brand.png", 
    displayCategory: "Fitness SEO",
    clientName: "FitCore Gyms & Nutrition",
    location: "Global / USA",
    websiteName: "WordPress / Custom",
    metrics: [
      { value: "1,000+", label: "Qualified fitness leads generated in 3 months", highlight: true },
      { value: "+6.69K", label: "Organic clicks in just 3 months", highlight: false },
      { value: "Top #1", label: "Positions for competitive workout keywords", highlight: false },
      { value: "+35%", label: "Increase in organic member sign-ups", highlight: false }
    ],
    sections: [
      {
        id: "01",
        tag: "Context",
        title: "THE CHALLENGE",
        theme: "dark",
        paragraphs: [
          "Our client, a growing fitness brand and supplement provider, approached us with the goal of scaling their organic visibility, driving heavy search traffic, and capturing thousands of high-intent fitness and gym membership leads.",
          "The health and fitness market is intensely saturated, making it difficult for brands to stand out against heavy industry giants. Our client's existing website was struggling to capture local and national search traffic due to slow page speeds, poor technical SEO architecture, and a lack of optimized content targeting high-intent workout queries.",
          "Additionally, their digital user journey was fragmented, leading to low conversion rates from the limited traffic they managed to attract. The business needed an aggressive, performance-driven fitness SEO roadmap.",
          "The challenge was to optimize their digital platform to not only rank for broad fitness terms, but completely dominate competitive commercial searches related to workout programs, fitness gear, and nutrition guides.",
          "The ultimate objective was to turn their organic search presence into a reliable engine for continuous customer acquisition and high-value lead generation within a short 3-month timeline."
        ]
      },
      {
        id: "02",
        tag: "Roadmap",
        title: "THE STRATEGY",
        subtitle: "Fitness SEO Foundation & Technical Optimisation",
        theme: "variant",
        paragraphs: [
          "To achieve rapid market authority and heavy lead generation, we designed and executed a comprehensive, performance-focused fitness SEO strategy centered around technical health, rapid loading speeds, and optimized user pathways.",
          "The primary focus was establishing a bulletproof search foundation that maximized site crawlability, indexing speed, and mobile responsiveness for fitness enthusiasts searching on the go."
        ],
        featuresHeader: "Key Activities Included:",
        features: [
          "Advanced technical SEO audit and core performance tuning",
          "Core Web Vitals and lightning-fast site speed optimization",
          "Comprehensive keyword research targeting high-volume fitness and workout queries",
          "Mobile-first design optimization for mobile fitness trackers and users",
          "Advanced image SEO for heavy fitness galleries and product shots",
          "In-depth competitor analysis mapping out top fitness ranking gaps",
          "Schema markup implementation for local gyms, products, and articles",
          "Structured internal linking hierarchy for maximum link equity flow"
        ],
        conclusion: "This solid technical roadmap ensured that the content execution was backed by a lightning-fast, highly optimized digital infrastructure."
      },
      {
        id: "03",
        tag: "Execution",
        title: "Content Strategy & User Experience Optimization",
        theme: "dark",
        paragraphs: [
          "Beyond backend improvements, we rolled out high-impact, targeted content optimized to satisfy search intent and convert casual readers into dedicated fitness subscribers and leads."
        ],
        featuresHeader: "SEO Activities Included:",
        features: [
          "Search intent mapping for high-converting fitness and training keywords",
          "Creation and optimization of high-intent landing pages for workout programs",
          "Authority-building fitness blog content targeting nutritional and training guides",
          "Integrated lead capture forms and optimized conversion funnels",
          "Strategic internal linking between educational content and core offers",
          "Local and niche fitness directory submissions for enhanced authority",
          "Consistent NAP and brand implementation across digital assets"
        ],
        conclusion: "This structured content approach established the brand as a trusted authority in the digital fitness space, driving steady, qualified traffic."
      },
      {
        id: "04",
        tag: "Optimization",
        title: "Performance Monitoring & Ongoing Conversion Refinements",
        theme: "variant",
        paragraphs: [
          "The final stage focused heavily on transforming traffic spikes into consistent, measurable business leads and sign-ups."
        ],
        featuresHeader: "Growth Optimisation Included:",
        features: [
          "Real-time SERP monitoring and keyword tracking dashboards",
          "Comprehensive user behavior analysis to eliminate conversion friction",
          "Continuous A/B testing of call-to-actions (CTAs) and lead generation forms",
          "Regular performance audits and strategic SEO refinements",
          "Mobile booking and workout program signup flow optimization"
        ],
        conclusion: "This ongoing fine-tuning ensured that every organic click was optimized for maximum conversion performance and revenue generation."
      }
    ],
    results: {
      id: "05",
      tag: "Impact",
      title: "THE RESULTS",
      description: "The fitness SEO campaign delivered incredible growth, generating over 1,000 qualified leads and massive organic traffic milestones in just 3 months.",
      cards: [
        {
          badge: "Lead Generation",
          value: "1,000+",
          label: "Qualified Leads in 3 Months",
          desc: "The website successfully captured over 1,000 high-intent fitness inquiries and client sign-ups within a compressed 90-day window.",
          isEmerald: true
        },
        {
          badge: "Traffic Velocity",
          value: "+6.69K",
          label: "Clicks in 3 Months",
          desc: "Organic search visibility surged, bringing in over 6,690 targeted clicks from users actively searching for fitness solutions.",
          isEmerald: false
        }
      ],
      additionalHeader: "Additional Improvements:",
      additionalImprovements: [
        "Top #1 rankings for multiple competitive fitness and workout keywords",
        "Massive expansion of brand awareness across the digital fitness community",
        "Significantly improved user engagement and lower bounce rates",
        "A streamlined, high-converting mobile experience for fitness enthusiasts",
        "A highly scalable, future-proof SEO foundation for nationwide brand expansion"
      ],
      conclusionTitle: "TRANSFORMING FITNESS SEO INTO PREDICTABLE GROWTH",
      conclusionParagraphs: [
        "This case study proves how a tailored, aggressive SEO strategy can completely transform a fitness brand's customer acquisition model.",
        "By fusing technical optimization, high-intent content creation, and conversion rate optimization, we successfully positioned the brand at the absolute forefront of organic fitness searches.",
        "The results generated over 1,000 qualified leads, thousands of organic clicks, and sustainable long-term digital growth.",
        "With an optimized digital infrastructure now fully in place, the brand is primed for continuous scaling, increased market authority, and massive industry success."
      ]
    },
    proof: {
      header: "Verified Analytics & Execution Proof:",
      subheader: "Live platform snapshots capturing the exact transition loops and traffic scaling performance.",
      images: [
        {
          src: "/breez-care-result.jpg", 
          alt: "Fitness Brand Analytics and Lead Generation Proof",
          caption: "Figure 3.1: Live metrics highlighting the explosive 6.69K click velocity and 1,000+ lead milestone achievement.",
          color: "blue"
        }
      ]
    }
  },
// ========================================================
  // 🔥 LOCAL RESTAURANT AUSTRALIA (LOCAL SEO CASE STUDY) to realestete
  // ========================================================
 {
    slug: "6.69K-clicks-in-just-3-months-for-real-estate",
    category: "seo",
    isSocial: false,
     title: "Real Estate Company Achieved 1,000+ Leads In 3 Months With SEO",
    description: "Learn how our targeted local real estate SEO strategy helped a property agency generate over 1,000 qualified buyer and vendor leads in 90 days.",
    primaryOutcome: "1,000+ Leads",
    image: "/real-estate.png", 
    displayCategory: "Local SEO",
    clientName: "Prime Horizon Real Estate",
    location: "Australia",
    websiteName: "WordPress",
    metrics: [
      { value: "1,000+", label: "Total Real Estate Leads generated", highlight: true },
      { value: "+320K", label: "Total Search Impressions achieved", highlight: false },
      { value: "#5", label: "Average SERP Position stabilized", highlight: false },
      { value: "3.1%", label: "Average Click-Through Rate (CTR)", highlight: false }
    ],
    sections: [
      {
        id: "01",
        tag: "Context",
        title: "THE CHALLENGE",
        theme: "dark",
        paragraphs: [
          "Our real estate client, a prominent property agency operating in Australia, approached us to improve their search visibility, capture high-intent property buyers and sellers, and drive more direct property valuation and listing inquiries through their website.",
          "Despite managing high-value residential and commercial listings, the agency's website was struggling to capture organic search traffic due to an outdated technical structure, zero ranking positions for high-value transactional keywords (like 'real estate agents near me' or specific suburb property searches), and a clunky online inquiry experience.",
          "The challenge was not simply to pull random web traffic, but to consistently attract serious local property investors, buyers, and vendors who would convert into qualified real estate leads and agency contracts.",
          "The business needed a specialized localized SEO strategy built for immediate search discoverability, strong suburb-level dominance, and sustainable long-term organic growth."
        ]
      },
      {
        id: "02",
        tag: "Roadmap",
        title: "THE STRATEGY",
        subtitle: "Technical Foundation & Local Real Estate SEO Optimisation",
        theme: "variant",
        paragraphs: [
          "To dramatically scale search performance, we implemented a comprehensive local SEO and conversion-focused optimization strategy to turn search impressions into high-value property clients.",
          "The first priority was fixing the backend technical foundation of the agency's website to maximize search engine crawlability and establish deep local geographic relevance."
        ],
        featuresHeader: "Key Improvements Included:",
        features: [
          "Website technical SEO audit and deep optimization",
          "Local Business and RealEstateAgent JSON-LD schema implementation",
          "Site speed and mobile responsiveness improvements (vital for property searchers on mobile)",
          "Google Business Profile (GBP) deep synchronization across target regions",
          "Property listing page structural optimization and readability tuning",
          "Meta title, description, and header tag optimization for target suburbs",
          "Clean internal linking architecture connecting listings to service hubs",
          "Image asset compression and alt tag optimization for property galleries"
        ],
        conclusion: "These fundamental upgrades paved the way for search engines to easily index the agency's office locations, active listings, and real estate services."
      },
      {
        id: "03",
        tag: "Execution",
        title: "Keyword Targeting & Suburb Content Optimisation",
        theme: "dark",
        paragraphs: [
          "To capture local home buyers and sellers at the exact moment they were researching the property market, we built out a hyper-targeted keyword and content blueprint."
        ],
        featuresHeader: "SEO Activities Included:",
        features: [
          "In-depth local real estate and property keyword research",
          "Dedicated landing page optimization for primary service areas and target suburbs",
          "Semantic property guide optimization (mapping housing trends to local search queries)",
          "Local competitor search gap analysis",
          "Geotargeted local citation building and agency directory cleanup",
          "Search intent mapping for property valuation queries vs. general browsing"
        ],
        conclusion: "This targeted approach positioned the real estate agency at the top of organic results for valuable local property and housing search terms."
      },
      {
        id: "04",
        tag: "Optimization",
        title: "Conversion-Focused Growth & Lead Flow",
        theme: "variant",
        paragraphs: [
          "Beyond scaling impressions and clicks, the campaign prioritized optimizing the website to maximize property valuation requests and buyer inquiries."
        ],
        featuresHeader: "Growth Optimisation Included:",
        features: [
          "User experience (UX) refinements for effortless mobile property browsing",
          "Frictionless online property valuation and contact form integration",
          "Prominent, high-visibility 'Book an Appraisal' and 'View Listings' call-to-actions (CTAs)",
          "Direct agent phone lines and click-to-email structural fixes",
          "Ongoing conversion rate optimization based on user navigation paths"
        ],
        conclusion: "This approach guaranteed that the steady climb in search clicks successfully translated into real-world business pipeline growth and client calls."
      }
    ],
    results: {
      id: "05",
      tag: "Impact",
      title: "THE RESULTS",
      description: "The real estate SEO campaign yielded exceptional results over the 3-month period, establishing a highly visible and reliable lead-generation pipeline.",
      cards: [
        {
          badge: "Lead Velocity",
          value: "1,000+",
          label: "Total Real Estate Leads",
          desc: "The website generated a massive stream of targeted organic traffic, capturing over a thousand high-intent property buyers and vendors.",
          isEmerald: true
        },
        {
          badge: "Brand Visibility",
          value: "+320K",
          label: "Total Search Impressions",
          desc: "Brand visibility exploded across search engines, appearing over 300,000 times in front of local users actively searching for real estate services.",
          isEmerald: false
        }
      ],
      additionalHeader: "Additional Improvements:",
      additionalImprovements: [
        "Dominant rankings for hyper-local 'real estate agent near me' searches",
        "Significantly higher visibility across local mapping results and suburb queries",
        "Upgraded and polished mobile-first property browsing UX",
        "Increased direct web inquiries, reducing reliance on expensive paid portals",
        "Scalable SEO architecture ready to support future property portfolio or branch expansions"
      ],
      conclusionTitle: "TURNING REAL ESTATE SEO INTO QUALIFIED CLIENT LEADS",
      conclusionParagraphs: [
        "This campaign proves how a targeted local SEO strategy can directly transform a real estate agency's digital presence into a highly profitable client acquisition tool.",
        "By pairing technical local optimizations, strict geo-targeted keyword strategies, and an intuitive user interface, we turned an underperforming website into a primary driver of property valuations and buyer inquiries.",
        "The result is a rock-solid online foundation that positions the brand for sustained regional market leadership and long-term business success."
      ]
    },
    proof: {
      header: "Verified Analytics & Console Performance Proof:",
      subheader: "Live platform snapshots capturing the exact metrics changes and search positioning parameters.",
      images: [
        {
          src: "/breez-care-result.jpg", 
          alt: "Google Search Console performance dashboard capturing organic real estate lead scaling parameters.",
          caption: "Figure 4.1: Verified tracking profile displaying average position improvements and 1,000+ lead milestone spikes.",
          color: "blue"
        }
      ]
    }
  },
// ========================================================
  // 🔥 AESTHETIC CLINIC USA (MEDICAL CLINICAL SEO CASE STUDY)
  // ========================================================
  {
    slug: "1-76k-leads-for-aesthetic-clinic",
    category: "seo",
    isSocial: false,
    title: "Aesthetic Clinic",
    description: "+1.76K Leads For Aesthetic Clinic",
    primaryOutcome: "+1.76K Leads",
    image: "/clinic.jpg", // 👈 Top Image Path
     displayCategory: "Local SEO",
    clientName: "Aesthetic Clinic",
    location: "USA",
    websiteName: "WordPress",
    metrics: [
      { value: "+1.76K", label: "Total Organic Clicks realized", highlight: false },
      { value: "+198K", label: "Total Search Impressions achieved", highlight: true },
      { value: "6.7", label: "Average SERP Position stabilized", highlight: false },
      { value: "0.9%", label: "Average Click-Through Rate (CTR)", highlight: false }
    ],
    sections: [
      {
        id: "01",
        tag: "Context",
        title: "THE CHALLENGE",
        theme: "dark",
        paragraphs: [
          "Our medical aesthetics client, an upscale aesthetic clinic operating in the USA, approached us to increase their local organic reach, capture high-intent medical spa searches, and drive more direct consultation bookings through their website.",
          "Operating in a premium, highly competitive market, the clinic was struggling to break through the local noise.",
          "While their practitioners were top-tier, their website suffered from poor search visibility, an unoptimized service page architecture, and zero prominent positions for lucrative treatments like Botox, dermal fillers, and advanced skin resurfacing. The site was losing potential patients to local med spas with stronger technical foundations.",
          "The challenge was not merely to boost broad traffic metrics, but to strategically capture localized, high-intent searches from users actively seeking clinical treatments. The business required an advanced aesthetic SEO and content strategy to establish regional authority and drive steady, long-term patient acquisition."
        ]
      },
      {
        id: "02",
        tag: "Roadmap",
        title: "THE STRATEGY",
        subtitle: "Technical Foundation & Local Clinical SEO",
        theme: "variant",
        paragraphs: [
          "To achieve competitive search positions and drive high-value patient leads, we implemented a precise, conversion-focused medical aesthetic SEO strategy.",
          "The immediate priority was overhauling the technical infrastructure of the clinic's website to ensure search engines could cleanly index their treatments and locations."
        ],
        featuresHeader: "Key Improvements Included:",
        features: [
          "Website technical SEO audit and architectural optimization",
          "MedicalBusiness and LocalBusiness JSON-LD schema implementation",
          "Site speed enhancements and mobile usability tuning (critical for local users)",
          "Google Business Profile (GBP) deep optimization and service mapping",
          "Core Web Vitals optimization to improve first-input delay and page response",
          "Meta title, description, and header structure optimization for target geographic regions",
          "Image file compression and precise alt-tag naming for treatment results",
          "Internal linking fixes to distribute authority to high-value service pages"
        ],
        conclusion: "These core technical adjustments established a highly crawlable, authoritative web presence recognized by search crawlers for local relevance."
      },
      {
        id: "03",
        tag: "Execution",
        title: "Treatment Pillar & High-Intent Content Optimisation",
        theme: "dark",
        paragraphs: [
          "To capture users searching for specific aesthetic treatments, we built a comprehensive content strategy centered around treatment authority and clear medical communication."
        ],
        featuresHeader: "SEO Activities Included:",
        features: [
          "Comprehensive local keyword research targeting premium aesthetic treatments",
          "Development of dedicated, high-converting landing pages for core services",
          "Alignment of content with medical search intent and local user expectations",
          "Deep competitor search gap analysis to reclaim lost local market share",
          "Local citation building and NAP (Name, Address, Phone) consistency tuning",
          "Strategic FAQ integration on service pages to capture voice search and long-tail queries"
        ],
        conclusion: "This targeted approach positioned the clinic's specialized treatments directly in front of localized audiences at the exact moment they were ready to book."
      },
      {
        id: "04",
        tag: "Optimization",
        title: "Conversion Rate Optimisation & Patient Lead Generation",
        theme: "variant",
        paragraphs: [
          "Beyond scaling impressions and clicks, the strategy focused heavily on refining the online user experience to convert cold traffic into scheduled appointments."
        ],
        featuresHeader: "Growth Optimisation Included:",
        features: [
          "Streamlining mobile navigation and treatment discovery paths",
          "High-visibility, prominent 'Book Consultation' call-to-actions (CTAs)",
          "Integration of a seamless, frictionless online scheduling system",
          "Compliance-conscious UX updates to build immediate clinical trust",
          "Ongoing user behavior monitoring to remove drop-off points in the booking funnel"
        ],
        conclusion: "This comprehensive setup ensured that the climbing search visibility successfully materialized as qualified consultations and increased clinic appointments."
      }
    ],
    results: {
      id: "05",
      tag: "Impact",
      title: "THE RESULTS",
      description: "The medical aesthetics SEO campaign delivered strong, measurable growth across all key search metrics, solidifying a predictable patient acquisition channel.",
      cards: [
        {
          badge: "Traffic Velocity",
          value: "1.76K",
          label: "Total Organic Clicks",
          desc: "The website generated a steady stream of highly targeted traffic, pulling in over 1,700 qualified visitors actively interested in aesthetic services.",
          isEmerald: true
        },
        {
          badge: "Brand Visibility",
          value: "198K",
          label: "Total Search Impressions",
          desc: "Brand visibility scaled significantly across search engines, displaying the clinic's services nearly 200,000 times to users browsing aesthetic treatments.",
          isEmerald: false
        }
      ],
      additionalHeader: "Additional Improvements:",
      additionalImprovements: [
        "Dominant rankings for competitive local medical spa and aesthetic keywords",
        "Elevated placement within localized search and map packs",
        "Significantly enhanced mobile user experience for seamless smartphone booking",
        "Higher lifetime value patient acquisition through target organic keyword streams",
        "A rock-solid digital asset poised to support future clinic expansions or new treatments"
      ],
      conclusionTitle: "TURNING AESTHETIC SEO INTO CLINIC GROWTH",
      conclusionParagraphs: [
        "This campaign demonstrates how a carefully tailored clinical SEO strategy can completely transform an aesthetic clinic's digital presence into a premium, lead-generating asset.",
        "By combining rigorous technical local optimization, strict high-intent keyword alignment, and a friction-free user journey, we transformed a quiet website into a primary engine for patient acquisition.",
        "The clinic now possesses a scalable, authoritative digital foundation built to secure continuous organic growth, fill practitioner schedules, and maintain long-term market leadership."
      ]
    },
    proof: {
      header: "Verified Analytics & Console Performance Proof:",
      subheader: "Live platform snapshots capturing the exact metrics changes and search positioning parameters.",
      images: [
        {
          src: "/clinic-results.jpg", // 👈 Bottom Image Path
          alt: "Google Search Console dashboard showing organic traffic spikes and lead generation patterns for the aesthetic clinic.",
          caption: "Figure 5.1: Verified performance index showcasing single-digit average position scale and traffic acquisition loops.",
          color: "blue"
        }
      ]
    }
  },
// ========================================================
  // 🔥 HOLISTIC DOCTOR CLINIC (INTEGRATIVE HEALTH SEO CASE STUDY)
  // ========================================================
  {
    slug: "#1-position-in-serp-for-holistic-doctor-clinic",
    category: "seo",
    isSocial: false,
    title: "Holistic Doctor Clinic",
    description: "#1 Position in SERP For Holistic Doctor Clinic",
    primaryOutcome: "#1 SERP Position",
    image: "/dr.jpg", // 👈 Top Image Path
     displayCategory: "Local SEO",
    clientName: "Dr. Anjana",
    location: "USA",
    websiteName: "WordPress",
    metrics: [
      { value: "+2.51K", label: "Total Organic Clicks realized", highlight: false },
      { value: "+145K", label: "Total Search Impressions achieved", highlight: true },
      { value: "14.2", label: "Average SERP Position stabilized", highlight: false },
      { value: "1.7%", label: "Average Click-Through Rate (CTR)", highlight: false }
    ],
    sections: [
      {
        id: "01",
        tag: "Context",
        title: "THE CHALLENGE",
        theme: "dark",
        paragraphs: [
          "Our allied health client, a premium holistic medicine and integrative doctor clinic operating in Australia, approached us to scale their organic visibility, capture local high-intent medical searches, and drive more direct patient consultations through their website.",
          "Operating in a specialized and competitive wellness space, the clinic was struggling with an fragmented online presence.",
          "Despite their industry expertise and highly qualified practitioners, the website suffered from an unoptimized technical framework, a lack of clear service landing pages, and minimal search engine presence for lucrative, high-intent keywords (like 'integrative doctor near me' or specific natural therapy queries). They were consistently losing valuable patient leads to larger medical centers with stronger digital foundations.",
          "The challenge was not simply to bring generic, informational traffic to the site, but to establish profound digital trust and attract highly targeted local patients looking for holistic medical care. The clinic required a tailored healthcare SEO strategy focused on multi-location visibility, clinical authority, and a streamlined mobile patient journey."
        ]
      },
      {
        id: "02",
        tag: "Roadmap",
        title: "THE STRATEGY",
        subtitle: "Clinical SEO Foundation & Technical Optimisation",
        theme: "variant",
        paragraphs: [
          "To drive qualified traffic and continuous appointment growth, we designed and executed a multi-layered healthcare SEO strategy optimized for medical search intent.",
          "The initial step was upgrading the website's technical health and structuring its data so search engine crawlers could easily interpret the clinic's specialized offerings and locations."
        ],
        featuresHeader: "Key Improvements Included:",
        features: [
          "Extensive technical SEO health audit and structural optimization",
          "Advanced MedicalBusiness and Physician JSON-LD schema implementation",
          "Page load speed enhancements and Core Web Vitals optimization",
          "Mobile responsiveness and layout testing (essential for patient navigation)",
          "Google Business Profile (GBP) deep optimization and service category mapping",
          "Meta description, title tag, and URL structure optimization for target Australian suburbs",
          "Clean internal link rebuilding to flow search authority to priority treatment pages",
          "Next-gen image asset compression and clinical alt-tag naming"
        ],
        conclusion: "This rigorous technical tuning gave search engines a clear, authoritative signal of the clinic's local physical presence and medical offerings."
      },
      {
        id: "03",
        tag: "Execution",
        title: "Topical Authority & Specialized Treatment Content",
        theme: "dark",
        paragraphs: [
          "To connect with individuals actively looking for alternative and integrative health treatments, we built a comprehensive content architecture mapped to specific patient pain points."
        ],
        featuresHeader: "SEO Activities Included:",
        features: [
          "Deep keyword research targeting localized holistic and integrative medicine queries",
          "Creation of dedicated, comprehensive service pages for specialized therapies",
          "Alignment of copy with authoritative healthcare communication standards to build immediate patient trust",
          "Competitor search gap analysis to identify missing high-intent service terms",
          "Multi-location citation building and local NAP (Name, Address, Phone) consistency validation",
          "Structured FAQ integration to capture voice searches and rich snippet opportunities in SERPs"
        ],
        conclusion: "This tailored alignment established the website as a highly authoritative, go-to regional destination for holistic and integrated medical support."
      },
      {
        id: "04",
        tag: "Optimization",
        title: "Patient Experience & Conversion-Focused Growth",
        theme: "variant",
        paragraphs: [
          "Beyond capturing massive keyword impressions, the campaign focused heavily on converting inbound web traffic into actual clinic appointments."
        ],
        featuresHeader: "Growth Optimisation Included:",
        features: [
          "User experience (UX) enhancements to simplify clinic discovery and mobile menu browsing",
          "Placement of high-visibility, professional 'Book a Consultation' call-to-actions (CTAs)",
          "Integration of a clean, seamless online patient scheduling system",
          "Strategic trust signals, including clear practitioner credentials and compliance-friendly patient reviews",
          "Continuous tracking of the user journey to remove potential friction or drop-offs in the online booking funnel"
        ],
        conclusion: "This unified approach ensured that the growth in organic search interest translated effectively into packed practitioner calendars and steady clinic growth."
      }
    ],
    results: {
      id: "05",
      tag: "Impact",
      title: "THE RESULTS",
      description: "The holistic healthcare SEO campaign achieved remarkable improvements over the 3-month cycle, capturing market share and establishing a dependable patient flow.",
      cards: [
        {
          badge: "Traffic Velocity",
          value: "+2.51K",
          label: "Total Organic Clicks",
          desc: "The platform pulled a substantial stream of hyper-targeted local organic traffic, connecting over 2,500 highly qualified patients with the clinic.",
          isEmerald: true
        },
        {
          badge: "Brand Visibility",
          value: "+145K",
          label: "Total Search Impressions",
          desc: "Brand discoverability scaled impressively, rendering the clinic's specialized services 145,000 times to users actively browsing holistic medical alternatives.",
          isEmerald: false
        }
      ],
      additionalHeader: "Additional Improvements:",
      additionalImprovements: [
        "Dominant search rankings for target geo-specific integrative doctor keywords",
        "Stronger map-pack presence across key local patient catchment zones",
        "Exceptional mobile browsing experience, boosting on-the-go phone and booking metrics",
        "Greater volume of high-lifetime-value patients seeking multi-session treatment plans",
        "A highly scalable, authoritative web asset fully prepared to support future clinic expansions"
      ],
      conclusionTitle: "TURNING HOLISTIC MEDICAL SEO INTO PATIENT GROWTH",
      conclusionParagraphs: [
        "This campaign stands as definitive proof of how a specialized healthcare SEO strategy can effectively transform a medical practice's digital footprint into a primary driver of clinic revenue.",
        "By successfully merging rigorous technical local alignment, strict high-intent keyword targeting, and an intuitive, trustworthy user experience, we converted an underutilized website into a leading source of patient acquisition.",
        "The clinic now commands an authoritative, future-proof digital engine built to secure sustainable market dominance, consistent bookings, and long-term online success."
      ]
    },
    proof: {
      header: "Verified Analytics & Console Performance Proof:",
      subheader: "Live platform snapshots capturing the exact metrics changes and search positioning parameters.",
      images: [
        {
          src: "/dr-results.jpg", // 👈 Bottom Image Path
          alt: "Google Search Console performance dashboard tracking metrics expansion and keyword alignment loops for the holistic clinic.",
          caption: "Figure 6.1: Verified performance index showcasing single-digit map pack placement loops and impression spikes across targeted Australian search patterns.",
          color: "blue"
        }
      ]
    }
  },

// ========================================================
  // 🔥 REAL ESTATE AUSTRALIA (PAID SOCIAL & LEAD GEN CASE STUDY)
  // ========================================================
  {
   slug: "31-increase-in-qualified-property-leads-via-high-intent-social-funnels",
    category: "social", // 👈 Yeh key handle karegi dynamic layout themes aur colors ko
    isSocial: true,
    title: "31% Increase In Qualified Property Leads Via High-Intent Social Funnels",
    description: "Discover how high-intent paid social media funnels scaled qualified property inquiries by 31% for our real estate development client.",
    primaryOutcome: "+31% Property Leads",
    image: "/s-property.png", // 👈 Top Image Path (Real Estate Banner Asset)
     displayCategory: "Paid Social",
    clientName: "Victoria Property Network",
    location: "Australia",
    websiteName: "Facebook & Instagram",
    metrics: [
      { value: "+31%", label: "Increase in qualified property leads realized", highlight: true },
      { value: "+19%", label: "Improvement in digital campaign conversion rate", highlight: false },
      { value: "Paid Search", label: "Expanded visibility across priority regions", highlight: false },
      { value: "Heightened", label: "Brand engagement across social platforms", highlight: false }
    ],
    sections: [
      {
        id: "01",
        tag: "Context",
        title: "THE CHALLENGE",
        theme: "dark",
        paragraphs: [
          "Our real estate client, one of Victoria’s longest-standing and most respected property networks, approached us to optimize their digital marketing, generate a stronger volume of qualified listing leads, and scale market exposure across key metropolitan and regional markets.",
          "Operating in an increasingly competitive Australian real estate landscape, the client required sophisticated digital campaigns that did more than just generate empty vanity metrics.",
          "They needed high-quality inquiries that would translate into meaningful client conversations, property management acquisitions, and successful sales outcomes across their extensive network of offices.",
          "The challenge was to balance broad, authoritative brand awareness with highly localized, high-intent lead acquisition to continuously feed their sales and leasing pipelines in a fluctuating property market."
        ]
      },
      {
        id: "02",
        tag: "Roadmap",
        title: "THE STRATEGY",
        subtitle: "Strategic Social Media Marketing & Paid Campaigns",
        theme: "variant",
        paragraphs: [
          "To drive measurable pipeline growth and maximize market exposure, we engineered a multi-channel digital performance strategy combining high-intent search acquisition with targeted social advertising.",
          "The primary focus was deploying data-driven paid social media campaigns to capture active buyers, sellers, and landlords within specific regional catchments."
        ],
        featuresHeader: "Key Improvements Included:",
        features: [
          "Design and deployment of localized paid social ad campaigns",
          "Intent-based audience segmentation (targeting prospective sellers and investors)",
          "Creative asset optimization tailored for high-converting social feeds",
          "Implementation of native lead-generation forms to reduce friction",
          "Geo-targeted ad delivery customized to specific office territories",
          "Robust conversion tracking and attribution setup across social platforms",
          "Dynamic remarketing campaigns targeting historical website visitors",
          "Clear, action-oriented call-to-actions (CTAs) to drive direct property inquiries"
        ],
        conclusion: "This targeted social architecture ensured the brand remained top-of-mind for locals considering selling or leasing their properties."
      },
      {
        id: "03",
        tag: "Execution",
        title: "High-Intent Paid Search Optimization",
        theme: "dark",
        paragraphs: [
          "To capture active market participants at the exact moment of decision-making, we synchronized our social efforts with a comprehensive paid search blueprint."
        ],
        featuresHeader: "Activities Included:",
        features: [
          "Rigorous keyword research focusing on local property intent and appraisal queries",
          "Tailored search campaign structures designed around priority regional markets",
          "Ongoing ad copy split-testing to maximize click-through rates (CTR)",
          "Strategic landing page alignment to boost quality scores and lower acquisition costs",
          "Search query intent mapping (separating casual browsers from immediate sellers)",
          "Deep competitor ad spend and positioning analysis"
        ],
        conclusion: "By dominating both high-intent search queries and social feeds, we created a comprehensive digital ecosystem that captured leads at every stage of the real estate journey."
      },
      {
        id: "04",
        tag: "Optimization",
        title: "Performance Analysis & Continuous Conversion Tuning",
        theme: "variant",
        paragraphs: [
          "The final pillar focused on scaling efficiency, driving down cost-per-lead (CPL), and boosting overall campaign conversions."
        ],
        featuresHeader: "Growth Optimisation Included:",
        features: [
          "Continuous audience refinement to prioritize high-value segments",
          "Real-time budget allocation shifting toward top-performing regions and creatives",
          "Landing page user experience (UX) audits to streamline the inquiry process",
          "Regular performance insights and strategic data loops to sharpen ad targeting"
        ],
        conclusion: "This proactive optimization model guaranteed that campaign growth directly translated into premium, actionable business data for the client's network."
      }
    ],
    results: {
      id: "05",
      tag: "Impact",
      title: "THE RESULTS",
      description: "The integrated digital marketing campaign delivered strong, measurable advancements in lead performance, visibility, and brand authority across the network.",
      cards: [
        {
          badge: "Lead Velocity",
          value: "+31%",
          label: "Qualified Property Leads",
          desc: "The campaigns generated a massive surge in high-value, intent-driven property inquiries, directly feeding the client's sales and leasing pipelines.",
          isEmerald: false // 👈 Isko false rakhna taake social page par dynamic pink design setup aaye
        },
        {
          badge: "Funnel Efficiency",
          value: "+19%",
          label: "Campaign Conversions",
          desc: "By refining target audiences and optimizing landing page flows, the efficiency of the digital campaigns climbed significantly, delivering more revenue opportunities for less spend.",
          isEmerald: true // 👈 Balance ke liye leads conversion ko true (emerald) rakh sakte hain
        }
      ],
      additionalHeader: "Additional Improvements:",
      additionalImprovements: [
        "Streamlined, high-performing lead generation funnels for local offices",
        "Drastically reduced customer acquisition costs across digital channels",
        "Cohesive, premium brand presentation across all digital touchpoints",
        "Data-backed insight profiles on regional buyer and seller behaviors",
        "A scalable marketing framework ready to support new office launches and market expansions"
      ],
      conclusionTitle: "TURNING DIGITAL MARKETING INTO REAL ESTATE REVENUE",
      conclusionParagraphs: [
        "This campaign stands as definitive proof of how an aligned paid search and strategic social media marketing strategy can directly accelerate pipeline generation for a large-scale real estate network.",
        "By successfully merging targeted paid search visibility with localized, high-intent social ads and constant data optimization, we transformed underutilized digital channels into an aggressive lead-generation engine.",
        "The property network is now equipped with a powerful, scalable digital asset that secures continuous market exposure, consistent listing volume, and long-term business growth."
      ]
    },
    // proof: {
    //   header: "Verified Meta Ads & Campaign Analytics Proof:",
    //   subheader: "Live dashboard snapshots capturing conversion spikes and regional lead acquisition parameters.",
    //   images: [
    //     {
    //       src: "/realestate-result.jpg", // 👈 Bottom Image Path (Meta Ads Performance Matrix Screenshot)
    //       alt: "Meta Ads Manager and Analytics dashboard demonstrating lead acquisition scale for real estate network.",
    //       caption: "Figure 7.1: Verified funnel performance map tracking real-time regional ad delivery, cost-per-lead drops, and conversion tracking loops.",
    //       color: "pink" // 👈 Automated color scheme sync for footer analytics mapping
    //     }
    //   ]
    // }
  },
// ========================================================
  // 🔥 FITNESS BRAND E-COMMERCE (PAID SOCIAL & PERFORMANCE CASE STUDY)
  // ========================================================
  {
    slug: "598541-in-sales-at-22x-roas-for-private-label-fitness-brand",
    category: "social", // 👈 Controls the aesthetic layouts & dynamic pink accents
    isSocial: true,
   title: "$598,541 In Sales At 22x ROAS For Private Label Fitness Brand Via High-Converting Funnels",
    description: "Learn how our direct-response paid social funnels generated $598,541 in revenue at a massive 22x ROAS for a private label fitness brand.",
    primaryOutcome: "22.21x Purchase ROAS",
    image: "/s-gym.png", // 👈 Top Image Path for your Fitness Campaign asset
     displayCategory: "Paid Social",
    clientName: "Premium Fitness Brand",
    location: "USA",
    websiteName: "Facebook & Instagram",
    metrics: [
      { value: "22.21x", label: "Average Purchase ROAS generated", highlight: true },
      { value: "$598,541", label: "Total Purchases Conversion Value scaled", highlight: false },
      { value: "1,072", label: "Total Website Purchases captured", highlight: false },
      { value: "$26,948", label: "Total Amount Spent on advertising", highlight: false }
    ],
    sections: [
      {
        id: "01",
        tag: "Context",
        title: "THE CHALLENGE",
        theme: "dark",
        paragraphs: [
          "Our eCommerce client, a premium private label brand, approached us to scale their digital advertising performance, increase conversion volume, and maximize their return on ad spend (ROAS) across paid channels.",
          "As a private label entity in a highly competitive digital marketplace, the brand was facing steep customer acquisition costs, fluctuating ad delivery metrics, and fierce competition from copycat sellers.",
          "While their proprietary products boasted exceptional build quality and strong margins, their existing advertising strategy was highly fragmented—relying on loose interest targeting and unoptimized creative assets that failed to clearly communicate the brand's unique value proposition.",
          "The challenge was to transition the account away from inefficient ad spend and build a high-yielding, conversion-focused funnel. The brand required a sophisticated paid media strategy capable of identifying and scaling high-intent buyer segments while systematically turning ad spend into explosive, measurable revenue growth."
        ]
      },
      {
        id: "02",
        tag: "Roadmap",
        title: "THE STRATEGY",
        subtitle: "Technical Pixel Architecture & Funnel Optimisation",
        theme: "variant",
        paragraphs: [
          "To drive market dominance and unlock hyper-efficient scaling, we deployed a comprehensive, full-funnel paid advertising and conversion rate optimization strategy.",
          "The immediate priority was establishing a flawless data tracking foundation to give ad platform algorithms clean, real-time conversion signals."
        ],
        featuresHeader: "Key Improvements Included:",
        features: [
          "Full-funnel Conversion API (CAPI) and advanced pixel tracking integration",
          "Precise data-deduplication setup across web touchpoints to optimize algorithmic attribution",
          "Web performance tuning to slash drop-offs between ad clicks and page loads",
          "Deep implementation of product catalog feeds to enable flawless dynamic remarketing",
          "Granular custom conversion mapping tailored around the micro-steps of the purchase journey",
          "Streamlining checkout flows to eradicate cart abandonment roadblocks",
          "Technical optimization of mobile product landing pages for friction-free browsing",
          "Implementation of custom URL parameters for precise multi-platform data tracking"
        ],
        conclusion: "This data-driven baseline enabled rapid ad delivery optimization, ensuring ad spend was instantly funneled into top-performing audiences."
      },
      {
        id: "03",
        tag: "Execution",
        title: "Audience Segmentation & Creative Performance Scale",
        theme: "dark",
        paragraphs: [
          "To outpace competitors and capture high-intent buyers, we built a target-rich audience framework paired with high-impact, direct-response creative assets."
        ],
        featuresHeader: "Activities Included:",
        features: [
          "Development of premium Lookalike Audiences (LLAs) based on historical high-value buyers",
          "Strategic structural separation of top-of-funnel (TOFU) prospecting and bottom-of-funnel (BOFU) remarketing",
          "Creation of high-converting, user-generated content (UGC) ad styles showcasing real product benefits",
          "In-depth competitor creative analysis to identify hook and angle opportunities",
          "Systematic testing of dynamic catalog ads targeting warm, high-intent website browsers",
          "Precise exclusion filtering to ensure prospecting budgets targeted only clean, cold audiences"
        ],
        conclusion: "By feeding the algorithms high-converting creative assets and highly refined custom audiences, we drove down acquisition costs while rapidly scaling conversion volume."
      },
      {
        id: "04",
        tag: "Optimization",
        title: "Continuous ROAS Maximisation & Scaling Efficiency",
        theme: "variant",
        paragraphs: [
          "The final pillar focused strictly on aggressively scaling budgets while continuously protecting the account's profitability metrics."
        ],
        featuresHeader: "Growth Optimisation Included:",
        features: [
          "Rapid budget scaling across high-performing ad sets utilizing advanced scaling mechanics",
          "Systematic creative refresh cadences to preemptively combat ad fatigue across target markets",
          "Ongoing landing page conversion optimization to squeeze the maximum revenue out of every ad click",
          "Granular demographic and placement optimization to eliminate wasted ad spend in lower-yielding zones"
        ],
        conclusion: "This constant, disciplined optimization loop allowed us to scale ad spend efficiently without sacrificing our exceptionally high return metrics."
      }
    ],
    results: {
      id: "05",
      tag: "Impact",
      title: "THE RESULTS",
      description: "The private label advertising campaign achieved industry-leading efficiency metrics, generating massive top-line revenue from a highly controlled ad spend.",
      cards: [
        {
          badge: "Conversion Efficiency",
          value: "22.21x",
          label: "Average Purchase ROAS",
          desc: "The ad campaigns operated at an extraordinary level of efficiency, returning over $22 in revenue for every single dollar invested in advertising.",
          isEmerald: false // Pink layout color sync for core efficiency scale
        },
        {
          badge: "Revenue Scale",
          value: "$598,541",
          label: "Total Conversion Value",
          desc: "Paid acquisition channels drove massive business scale, generating nearly $600,000 ($598,541.78) in tracked top-line revenue for the brand via 1,072 web sales.",
          isEmerald: true // Emerald green theme to balance the pure conversion value metrics
        }
      ],
      additionalHeader: "Additional Improvements:",
      additionalImprovements: [
        "Significant elevation of private label brand equity and digital market share",
        "Drastic inflation of customer lifetime value (LTV) through premium product positioning",
        "Exceptional mobile-first shopping experience, driving record-low cart drop-off rates",
        "Accumulation of high-value custom audience pools ready for future product drops",
        "A highly scalable digital framework primed to launch and scale secondary private label product lines"
      ],
      conclusionTitle: "TURNING AD SPEND INTO AN EXPLOSIVE REVENUE ENGINE",
      conclusionParagraphs: [
        "This campaign serves as a masterclass in how a precise, data-backed paid advertising framework can turn a private label brand into a highly profitable digital powerhouse.",
        "By cleanly blending impeccable pixel tracking, highly calculated audience segmentation, and high-impact creative strategies, we transformed a modest ad budget into a multi-hundred-thousand-dollar revenue engine.",
        "The private label brand now commands a highly optimized, predictable digital asset built to dominate search and social feeds, maximize profit margins, and lock in long-term e-commerce success."
      ]
    },
    proof: {
      header: "Verified Business Manager Analytics Proof:",
      subheader: "Live ROAS dashboards and transaction mapping sheets capturing scale velocity parameters.",
      images: [
        {
          src: "/gym-results.jpg", // 👈 Bottom Snapshot Image Path (Ad Manager Matrix Screenshot)
          alt: "E-commerce store performance analytics mapping tracking verified conversions and scaled revenue loops.",
          caption: "Figure 8.1: Confirmed dashboard capture revealing 22.21x purchase performance metrics and tracking architecture integrity parameters.",
          color: "pink" // 👈 Automated dynamic color selection match for footer snap
        }
      ]
    }
  },

  // ========================================================
  // 🔥 FASHION BRAND E-COMMERCE (PAID SOCIAL & PERFORMANCE CASE STUDY)
  // ========================================================
  {
    slug: "1044-website-purchases-for-fashion-brand",
    category: "social", // 👈 Controls the aesthetic layouts & dynamic pink accents
    isSocial: true,
   title: "1,044 Website Purchases For Fashion Brand In 2 Months At 23.85x ROAS Via Direct-Response Funnels",
    description: "See how targeted direct-response social media funnels delivered 1,044 transactions in just 2 months at an incredible 23.85x ROAS.",
    primaryOutcome: "23.85x Purchase ROAS",
    image: "/s-fastion.png", // 👈 Top Image Path for your Fashion Campaign asset
     displayCategory: "Paid Social",
    clientName: "E-Commerce Fashion Brand",
    location: "USA",
    websiteName: "Facebook & Instagram",
    metrics: [
      { value: "23.85x", label: "Average Purchase ROAS achieved", highlight: true },
      { value: "$166,549", label: "Total Website Purchases Conversion Value", highlight: false },
      { value: "1,044", label: "Total Website Purchases generated", highlight: false },
      { value: "32,444", label: "Total Clicks Generated across campaigns", highlight: false }
    ],
    sections: [
      {
        id: "01",
        tag: "Context",
        title: "THE CHALLENGE",
        theme: "dark",
        paragraphs: [
          "Our e-commerce fashion client approached us looking to overhaul their paid social media advertising strategy, lower their escalating customer acquisition costs, and dramatically increase conversion volume heading into their peak sales season.",
          "Despite having a strong social media presence and highly aesthetic product photography, the brand’s ad account was struggling with ad fatigue, broad targeting overlap, and inefficient budget scaling.",
          "Their previous campaigns relied heavily on standard product collection images without clear hooks, leading to dropping click-through rates and an unstable return on ad spend.",
          "The challenge was to transition the brand away from passive social media advertising to an aggressive, direct-response paid social strategy. The goal was to build a sustainable, high-converting funnel that could scale budget rapidly while maximizing purchase efficiency and driving profitable top-line revenue."
        ]
      },
      {
        id: "02",
        tag: "Roadmap",
        title: "THE STRATEGY",
        subtitle: "Advanced Technical Tracking & Paid Social Architecture",
        theme: "variant",
        paragraphs: [
          "To optimize performance and drive explosive revenue growth, we deployed a comprehensive full-funnel paid social strategy centered around creative testing, advanced conversion signals, and high-intent audience targeting.",
          "The immediate focus was configuring a bulletproof data tracking foundation to provide the social platform algorithms with clean, real-time optimization signals."
        ],
        featuresHeader: "Key Improvements Included:",
        features: [
          "Full-funnel Meta Pixel and Conversions API (CAPI) technical integration",
          "Advanced matching setup to maximize data attribution accuracy across browsers",
          "Strategic event mapping for micro-conversions (ViewContent, AddToCart, InitiateCheckout)",
          "Optimization of product catalog feeds for seamless dynamic product ad (DPA) setups",
          "Custom landing page performance tuning to decrease bounce rates from mobile ad clicks",
          "Systematic tracking structure optimization to cleanly isolate top-of-funnel vs. bottom-of-funnel performance"
        ],
        conclusion: "This data-first foundation allowed the ad platform’s machine learning to rapidly find high-intent buyers,drastically lowering wasted ad spend."
      },
      {
        id: "03",
        tag: "Execution",
        title: "Creative Testing & Direct-Response Optimization",
        theme: "dark",
        paragraphs: [
          "To break through crowded social media feeds and capture qualified shoppers, we introduced a robust creative testing framework paired with hyper-targeted audience segments."
        ],
        featuresHeader: "Activities Included:",
        features: [
          "Development of high-impact User Generated Content (UGC) focusing on product styling and social proof",
          "Split-testing varied dynamic hooks, direct-response ad copy angles, and strong call-to-actions",
          "Structural implementation of Broad Prospecting, Lookalike Audiences (LLAs), and custom high-value customer segments",
          "Setup of lookback window dynamic remarketing carousels targeting warm cart-abandoners",
          "Rigorous creative testing cycles to isolate winning visual formats before scaling budgets"
        ],
        conclusion: "By keeping the ad creative fresh, engaging, and directly aligned with target customer behaviors, we successfully scaled overall ad click volume without experiencing performance drops."
      },
      {
        id: "04",
        tag: "Optimization",
        title: "Budget Scaling & ROAS Maximization",
        theme: "variant",
        paragraphs: [
          "The final phase prioritized scaling the top-performing campaign components while strictly defending profit margins."
        ],
        featuresHeader: "Growth Optimisation Included:",
        features: [
          "Execution of vertical and horizontal scaling methods across the most efficient ad sets",
          "Regular demographic, placement, and device optimization to shift spend to high-converting zones",
          "Landing page conversion rate optimization (CRO) to maximize purchase values from ad traffic",
          "Preemptive creative refreshes to preserve stable click metrics across high-budget scaling periods"
        ],
        conclusion: "This disciplined operational cadence allowed us to scale the brand's budget smoothly while securing incredibly high performance across the entire funnel."
      }
    ],
    results: {
      id: "05",
      tag: "Impact",
      title: "THE RESULTS",
      description: "The paid social marketing campaign achieved elite levels of advertising efficiency, transforming a highly controlled ad spend budget into exceptional retail revenue.",
      cards: [
        {
          badge: "Conversion Efficiency",
          value: "23.85x",
          label: "Average Purchase ROAS",
          desc: "The paid social campaigns achieved a remarkable return on ad spend, generating $23.85 in purchase revenue for every single dollar spent on ads.",
          isEmerald: false // Pink layout color sync for core efficiency scale
        },
        {
          badge: "Revenue Scale",
          value: "$166,549",
          label: "Total Conversion Value",
          desc: "Our conversion-focused social ad funnels drove substantial business growth, resulting in over $166,000 ($166,549.30) across 1,044 verified website sales from an ad investment of $6,983.25.",
          isEmerald: true // Emerald green theme to balance the pure conversion value metrics
        }
      ],
      additionalHeader: "Additional Improvements:",
      additionalImprovements: [
        "Drastic inflation of local and digital brand market authority",
        "Growth of massive custom retargeting and lookalike audience data pools for future scaling",
        "Highly efficient Customer Acquisition Cost (CAC) metrics achieved during highly competitive market periods",
        "Improved conversion flow tracking, providing long-term predictability for ad scaling"
      ],
      conclusionTitle: "SCALING SOCIAL MEDIA ADVERTISING INTO PREDICTABLE REVENUE",
      conclusionParagraphs: [
        "This campaign stands as an absolute proof of how a structured, data-centric paid social media marketing strategy can completely transform an e-commerce brand’s revenue baseline.",
        "By successfully marrying high-fidelity conversion tracking, constant creative testing, and strategic audience segmentation, we converted a highly efficient advertising investment into a multi-six-figure sales channel.",
        "The e-commerce brand now holds a scalable digital customer acquisition model engineered to drive ongoing market capture, high conversion margins, and long-term online success."
      ]
    },
    proof: {
      header: "Verified Business Manager Analytics Proof:",
      subheader: "Live Meta Ads dashboard snapshots and client checkout reports mapping scaling metrics.",
      images: [
        {
          src: "/brand-results.jpg", // 👈 Bottom Snapshot Image Path (Meta Ads Performance Matrix)
          alt: "Meta Ads Manager and analytics dashboard showing verified purchase metrics and acquisition scale for fashion brand.",
          caption: "Figure 9.1: Confirmed dashboard capture revealing 23.85x purchase performance metrics, exact budget configuration, and pixel tracking data loops.",
          color: "pink" // 👈 Automated dynamic color selection match for footer snap
        }
      ]
    }
  },
// ========================================================
  // 🔥 HOME & LIVING BRAND E-COMMERCE (PAID SOCIAL CASE STUDY)
  // ========================================================
  {
    slug: "25-10x-roas-for-home-living-brand",
    category: "social", // 👈 Controls the aesthetic layouts & dynamic pink accents
    isSocial: true,
    title: "25.10x ROAS For Home & Living Brand Via High-Converting Paid Social Funnels",
    description: "Explore our paid social media campaign strategy that unlocked a massive 25.10x ROAS for a leading home and living eCommerce brand.",
    primaryOutcome: "25.10x Purchase ROAS",
    image: "/s-home-living.png", // 👈 Top Image Path for your Home & Living Asset
     displayCategory: "Paid Social",
    clientName: "Premium Home & Living Brand",
    location: "UK",
    websiteName: "Facebook & Instagram",
    metrics: [
      { value: "25.10x", label: "Average Purchase ROAS generated", highlight: true },
      { value: "$239,392", label: "Total Website Purchases Conversion Value", highlight: false },
      { value: "2,752", label: "Total Website Purchases captured", highlight: false },
      { value: "$9,537", label: "Total Amount Spent on social advertising", highlight: false }
    ],
    sections: [
      {
        id: "01",
        tag: "Context",
        title: "THE CHALLENGE",
        theme: "dark",
        paragraphs: [
          "Our eCommerce client, a premium Home & Living brand, approached us looking to optimize their paid social media advertising, scale conversion volume, and dramatically increase their return on ad spend (ROAS) during a pivotal market period.",
          "Despite offering high-fidelity, artisan-quality products, the brand's digital presence was facing significant market friction.",
          "Their previous social media campaigns suffered from inconsistent ad spend efficiency, ad fatigue among core audiences, and an overall lack of sophisticated funnel structure. Customer acquisition costs were volatile, and the brand was struggling to turn browsers into committed buyers.",
          "The challenge was to transition the account away from inefficient ad spend and build a high-performing, data-driven paid social funnel. The brand required a targeted social media marketing strategy capable of identifying and converting high-intent segments while systematically scaling revenue and profitability."
        ]
      },
      {
        id: "02",
        tag: "Roadmap",
        title: "THE STRATEGY",
        subtitle: "Full-Funnel Technical Architecture & Optimization",
        theme: "variant",
        paragraphs: [
          "To achieve industry-leading performance and unlock hyper-efficient scaling, we deployed a multi-channel, conversion-focused paid social marketing and user experience strategy.",
          "The first priority was ensuring flawless conversion tracking and data fidelity to allow algorithmic ad optimization to function at peak efficiency."
        ],
        featuresHeader: "Key Improvements Included:",
        features: [
          "Extensive Conversion API (CAPI) and advanced server-side pixel tracking integration",
          "Precise setup of deduplicated conversion events across all e-commerce funnel micro-steps",
          "Implementation of custom data-layer tracking tailored around key purchase behavior",
          "Website and landing page optimization to decrease drop-offs between ad clicks and views",
          "Structuring product catalog feeds to allow dynamic retargeting to function perfectly",
          "Streamlining checkout flows to eradicate friction and boost purchase completion rates",
          "Technical tuning of product landing pages for optimal mobile-first browsing experience"
        ],
        conclusion: "This robust data baseline ensured ad spend was instantly funneled into the highest-yielding audiences and creative formats."
      },
      {
        id: "03",
        tag: "Execution",
        title: "Hyper-Targeted Audiences & High-Impact Creative",
        theme: "dark",
        paragraphs: [
          "To outpace competitors in the visual-first Home & Living vertical, we built a target-rich audience architecture paired with aesthetic, direct-response creative assets."
        ],
        featuresHeader: "Activities Included:",
        features: [
          "Creation of premium Lookalike Audiences (LLAs) based on historical high-lifetime-value (LTV) buyers",
          "Systematic structural separation of TOFU prospecting from BOFU dynamic remarketing",
          "Setup of layered custom audiences targeting recent website browsers, cart-abandoners, and view-content segments",
          "Strategic deployment of User Generated Content (UGC) ad styles demonstrating product functionality and lifestyle appeal",
          "A/B testing of varied direct-response hooks, ad copy angles, and strong call-to-actions (CTAs)"
        ],
        conclusion: "By feeding the algorithms clean, warm audiences and engaging, conversion-optimized creative, we rapidly lower acquisition costs and boosted conversion volume."
      },
      {
        id: "04",
        tag: "Optimization",
        title: "Continuous ROAS Scaling & Efficiency Refinement",
        theme: "variant",
        paragraphs: [
          "The final pillar focused strictly on aggressively scaling budgets while continuously protecting the account's massive profitability metrics."
        ],
        featuresHeader: "Growth Optimisation Included:",
        features: [
          "Dynamic budget re-allocation to high-performing ad sets utilizing advanced scaling mechanics",
          "Systematic creative refresh cadences to preemptively combat ad fatigue across target regions",
          "Ongoing product landing page conversion optimization to squeeze the maximum revenue from every single ad click",
          "Segmenting placement and device optimization to eliminate wasted ad spend in lower-yielding zones"
        ],
        conclusion: "This constant, disciplined operational loop allowed us to scale the brand's budget smoothly while securing incredibly high performance across the entire funnel."
      }
    ],
    results: {
      id: "05",
      tag: "Impact",
      title: "THE RESULTS",
      description: "The Home & Living marketing campaign achieved elite levels of advertising efficiency, generating immense retail revenue from a very efficient ad budget.",
      cards: [
        {
          badge: "Conversion Efficiency",
          value: "25.10x",
          label: "Average Purchase ROAS",
          desc: "The ad campaigns operated at an extraordinary level of efficiency, returning over $25 in revenue for every single dollar invested in social media advertising.",
          isEmerald: false // Pink layout color sync for core efficiency scale
        },
        {
          badge: "Revenue Scale",
          value: "$239,392",
          label: "Total Conversion Value",
          desc: "Paid acquisition channels drove massive business scale, generating nearly a quarter-million dollars ($239,392.35) in tracked top-line retail revenue via 2,752 verified website purchases.",
          isEmerald: true // Emerald green theme to balance the pure conversion value metrics
        }
      ],
      additionalHeader: "Additional Improvements:",
      additionalImprovements: [
        "Drastic inflation of local and digital brand market authority within the Home & Living vertical",
        "Accumulation of massive custom retargeting and lookalike audience data pools for future scaling",
        "Highly efficient Customer Acquisition Cost (CAC) metrics achieved during competitive market periods",
        "Improved conversion flow tracking, providing long-term predictability for ad scaling and inventory management"
      ],
      conclusionTitle: "TURNING AD SPEND INTO A HIGH-PROFIT REVENUE ENGINE",
      conclusionParagraphs: [
        "This campaign stands as definitive proof of how a specialized, data-centric paid social media marketing strategy can completely transform an eCommerce brand’s profitability baseline.",
        "By successfully marrying high-fidelity conversion signals, constant creative optimization, and calculated audience segmentation, we converted a very efficient advertising investment of $9,537.40 into a quarter-million dollar sales channel.",
        "The Home & Living brand now commands a highly optimized, predictable digital asset engineered to dominate search and social feeds, maximize conversion margins, and lock in long-term e-commerce success."
      ]
    },
    proof: {
      header: "Verified Business Manager Analytics Proof:",
      subheader: "Live ROAS dashboards and storefront checkout parameters tracking order scale velocity.",
      images: [
        {
          src: "/roas-results.jpg", // 👈 Bottom Snapshot Image Path (Meta Ads Performance Matrix)
          alt: "Meta Ads Manager dashboard tracking conversions, scale hooks, and performance attribution loops for Home & Living store.",
          caption: "Figure 10.1: Verified funnel performance capture revealing 25.10x purchase ROAS metrics and pixel tracking data loops.",
          color: "pink" // 👈 Automated dynamic color selection match for footer snap
        }
      ]
    }
  },



];