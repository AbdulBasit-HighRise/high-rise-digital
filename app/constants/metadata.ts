export interface MetadataConfig {
  title: string;
  description: string;
  image?: string;
}

export type MetadataRecord = {
  [key: string]: MetadataConfig | MetadataRecord;
};

export const siteMetadata: MetadataRecord = {
  home: {
    title: "Trusted Digital Marketing Agency | Online Growth Solutions",
    description: "Grow your business with our expert digital marketing agency. We offer SEO, web, and content marketing strategies that drive measurable results.",
    image: "about-preview.png",
  },
  about: {
    title: "About Us | High Rise Digital",
    description: "Learn more about our team, mission, and expertise. We help businesses grow through innovative digital marketing, web development, SEO, and AI-driven solutions.",
    image: "/about-preview.png",
  },
  contact: {
    title: "Contact Us | Get a Free Project Proposal | High Rise Digital",
    description: "Ready to scale your business? Contact our experts today for a personalized growth strategy and support.",
    image: "/about-preview.png",
  },
  blog: {
    title: "Latest Insights, Marketing & AI Trends | High Rise Digital",
    description: "Stay updated with expert articles on AI automation, web engineering, local SEO hacks, and performance paid social media marketing strategies.",
    image: "/about-preview.png",
  },
 "case-studies": {
  title: "Case Studies | Proven Results & Success Stories",
  description: "See how High Rise Digital delivers growth. Explore our real agency case studies, SEO success stories, and high-ROAS social media marketing results.",
  image: "/about-preview.png",

  "case-studies/11-total-sales-revenue-increased-for-fastion-brand": {
    title: "Nordic Socks | +28% Organic Traffic & Revenue Growth",
    description: "Discover how we scaled Nordic Socks' organic traffic by 28% and boosted overall eCommerce revenue through an advanced Shopify SEO framework.",
    image: "/nordic-socks.png"
  },
  "case-studies/6.69K-clicks-in-just-3-months-for-real-estate": {
    title: "Real Estate Company Achieved 1,000+ Leads In 3 Months With SEO",
    description: "Learn how our targeted local real estate SEO strategy helped a property agency generate over 1,000 qualified buyer and vendor leads in 90 days.",
    image: "/real-estate.png"
  },
  "case-studies/170-leads-increased-for-marketing-agency": {
    title: "Marketing Agency Generated 1.76K Leads In 3 Months",
    description: "See how we transformed Social Status's digital footprint, driving an 850% organic traffic surge and 1.76K+ qualified marketing agency leads.",
    image: "/social-status.png"
  },
  "case-studies/28-organic-traffic-increase-for-fittness-brand": {
    title: "Fitness Brand SEO Case Study: 1,000+ Leads in 3 Months",
    description: "Explore our fitness SEO success story delivering 1,000+ targeted gym and supplement leads through rapid technical optimization and high-intent content.",
    image: "/fitness-brand.png"
  },
  "case-studies/31-increase-in-qualified-property-leads-via-high-intent-social-funnels": {
    title: "31% Increase In Qualified Property Leads Via High-Intent Social Funnels",
    description: "Discover how high-intent paid social media funnels scaled qualified property inquiries by 31% for our real estate development client.",
    image: "/s-property.png"
  },
  "case-studies/598541-in-sales-at-22x-roas-for-private-label-fitness-brand": {
    title: "$598,541 In Sales At 22x ROAS For Private Label Fitness Brand Via High-Converting Funnels",
    description: "Learn how our direct-response paid social funnels generated $598,541 in revenue at a massive 22x ROAS for a private label fitness brand.",
    image: "/s-gym.png"
  },
  "case-studies/1044-website-purchases-for-fashion-brand": {
    title: "1,044 Website Purchases For Fashion Brand In 2 Months At 23.85x ROAS Via Direct-Response Funnels",
    description: "See how targeted direct-response social media funnels delivered 1,044 transactions in just 2 months at an incredible 23.85x ROAS.",
    image: "/s-fastion.png"
  },
  "case-studies/25-10x-roas-for-home-living-brand": {
    title: "25.10x ROAS For Home & Living Brand Via High-Converting Paid Social Funnels",
    description: "Explore our paid social media campaign strategy that unlocked a massive 25.10x ROAS for a leading home and living eCommerce brand.",
    image: "/s-home-living.png"
  }
},

  faq: {
    title: "FAQs | Frequently Asked Questions & Support",
    description: "Find answers to common questions about our services, pricing, SEO, web development, and AI automation solutions.",
    image: "/about-preview.png",
  },
  terms: {
    title: "Terms & Conditions | Website Usage & Legal Information",
    description: "Review our Terms and Conditions to understand the rules, rights, and responsibilities when using our website and digital services.",
    image: "/about-preview.png",
  },
  pricing: {
    title: "Pricing Plans | Affordable Digital Marketing & Web Services",
    description: "Explore our flexible pricing plans for SEO, digital marketing, web development, and AI automation services designed to fit your business needs.",
    image: "/about-preview.png",
  },
  privacy: {
    title: "Privacy Policy | Data Protection & User Information",
    description: "Read our Privacy Policy to understand how we collect, use, and protect your personal data while ensuring full transparency and security.",
    image: "/about-preview.png",
  },
  services: {
    title: "Our Services | Digital Marketing, SEO & Web Development",
    description: "Explore our comprehensive services, including digital marketing, SEO, website development, social media management, ecommerce solutions, and AI automation.",
    image: "/servicepng.png",

    "website-development": {
      title: "Website Development Agency | WordPress & Shopify Experts",
      description: "Build a powerful online presence with our website development agency. We create responsive, user-friendly, and SEO-optimized websites for your business.",
      image: "/web.png"
    },
    seo: {
      title: "SEO Agency | Improve Rankings, Traffic & Online Visibility",
      description: "Boost your rankings and organic traffic with our professional SEO agency. We provide on-page SEO, technical SEO, link building, and local SEO services.",
      image: "/seo.png",
    },
    "social-media-marketing": {
      title: "Social Media Marketing Agency | Grow Your Brand Online",
      description: "Increase brand awareness, engagement, and sales with our social media marketing agency. We manage Facebook, Instagram, LinkedIn, TikTok, and other social media platforms.",
      image: "/social.png",
    },
    "e-commerce-management": {
      title: "Ecommerce Management Agency | Store Optimization & Growth",
      description: "Maximize your online store performance with our ecommerce management agency. We handle product listings, inventory management, marketing, and conversion optimization.",
      image: "/ecommerce.webp",
    },
    "ai-automation": {
      title: "AI Automation Agency | Smart Business Automation Solutions",
      description: "Boost efficiency with AI automation, chatbots, and smart workflows that streamline operations and accelerate business growth.",
      image: "/ai.webp",
    },
  }
};