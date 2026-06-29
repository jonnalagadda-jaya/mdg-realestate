import type { SiteContent, ServiceDetail, Testimonial, TeamMember, WhyChooseUsItem } from './types';

export const DEFAULT_SITE_CONTENT: SiteContent = {
  companyName: 'Mango Digital Growth',
  phone: '6301972313',
  whatsapp: '916301972313',
  address: '4-73/6, RNR Nagar, Haripuram Colony, Peruru, Tirupati, Andhra Pradesh – 517505',
  googleMapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.843653198083!2d79.3789422756857!3d13.636836986743126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3cd13fd07119ffef%3A0xbd8607fa668e1a8e!2sPerur%2C%20Tirupati%2C%20Andhra%20Pradesh%20517505!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
  heroHeading: 'Grow Your Business with Digital Marketing That Delivers Results',
  heroSubheading: 'We help businesses increase online visibility, generate quality leads, improve search rankings, and grow revenue through strategic digital marketing solutions.',
  videoUrl: '/videoInsight.mp4',
  aboutText: 'Mango Digital Growth is a results-driven digital marketing company helping businesses build a strong online presence. We specialize in SEO, Google Ads, Social Media Marketing, Website Development, and Local Business Promotion. Our goal is to help businesses reach the right audience, generate quality leads, and achieve measurable growth through innovative digital marketing strategies.',
  visionText: 'To be the most trusted growth partner for businesses globally, driving digital transformation and enabling sustainable revenue generation.',
  missionText: 'To empower businesses of all sizes with highly targeted, affordable, and result-oriented digital marketing strategies that turn online visibility into long-term commercial success.',
  emailJsServiceId: 'service_da90y1f', // Configured user service ID
  emailJsPublicKey: 'jgH-WK7Q3_5LHQQ11', // Configured user public key
  emailJsTemplateId: 'template_duw9vib', // Configured user template ID
  companyEmail: 'mangodigitalgrowth@gmail.com',
  companyWebsite: 'www.mangodigitalgrowth.com',
};

export const SERVICES_DATA: ServiceDetail[] = [
  {
    id: 'seo',
    title: 'Search Engine Optimization (SEO)',
    shortDesc: 'Improve your website rankings on Google and attract more organic visitors.',
    longDesc: 'Our advanced Search Engine Optimization (SEO) strategies are designed to put your business at the top of search engine result pages. We conduct extensive keyword research, audit technical site structure, perform on-page optimization, and build premium authority back-links to attract high-intent organic visitors who are ready to purchase.',
    icon: 'Search',
    features: [
      'Comprehensive Keyword Research & Competitor Analysis',
      'Technical SEO Audits & Core Web Vitals Optimization',
      'On-Page SEO (Meta tags, content optimization, internal linking)',
      'High-Quality White-Hat Backlink Building',
      'Monthly Ranking & Traffic Performance Reports'
    ],
    benefits: [
      'Increase organic search visibility by up to 200%',
      'Attract highly qualified inbound customer leads',
      'Establish brand authority and long-term search value',
      'Lower cost-per-acquisition compared to paid advertising'
    ]
  },
  {
    id: 'google-ads',
    title: 'Google Ads Management',
    shortDesc: 'Reach potential customers instantly with targeted campaigns that maximize ROI.',
    longDesc: 'Google Ads (PPC) offers immediate search dominance. We manage your ad budget effectively by structuring hyper-focused campaigns that bid on terms representing instant purchasing intent. By optimizing ad copy, landing pages, and quality scores, we drive premium leads at a lower cost-per-click.',
    icon: 'TrendingUp',
    features: [
      'Search, Display, Shopping & Local Campaign Setup',
      'High-Converting Ad Copywriting & Creative Design',
      'Negative Keyword Filtering to Reduce Waste',
      'A/B Testing of Ads & Dedicated Landing Pages',
      'Conversion Tracking & Smart Bidding Optimization'
    ],
    benefits: [
      'Generate high-quality leads from day one',
      'Dominate high-value keywords immediately',
      'Complete budget control with transparent tracking',
      'Maximize Return on Ad Spend (ROAS)'
    ]
  },
  {
    id: 'smm',
    title: 'Social Media Marketing',
    shortDesc: 'Build your brand and engage your audience through Facebook, Instagram, and LinkedIn.',
    longDesc: 'Social media is where your customers live. We build cohesive brand narratives and design gorgeous social assets that resonate with audiences across Facebook, Instagram, LinkedIn, and YouTube. Through a mix of organic brand-building content and highly targeted paid campaigns, we transform casual scrolling into commercial engagement.',
    icon: 'Share2',
    features: [
      'Social Media Strategy & Content Calendars',
      'Custom Graphic Design & Video Reels Creation',
      'Targeted Facebook, Instagram & LinkedIn Paid Ad Campaigns',
      'Community Management & Customer Interaction',
      'Audience Growth & Engagement Rate Analytics'
    ],
    benefits: [
      'Enhance brand recognition and top-of-mind recall',
      'Build an active, loyal community of customers',
      'Laser-target demographical and professional audiences',
      'Boost referral traffic and brand authority'
    ]
  },
  {
    id: 'web-dev',
    title: 'Website Development',
    shortDesc: 'Create professional, responsive, and high-converting websites for your business.',
    longDesc: 'Your website is your digital storefront. We develop blazing-fast, mobile-friendly, and secure websites optimized to guide visitors down the sales funnel. From responsive user interfaces to seamless contact forms and calls-to-action, we ensure your website is engineered to turn visitor interest into commercial action.',
    icon: 'Code',
    features: [
      'Custom Responsive UI/UX Design & Architecture',
      'Fast Loading Speed & Mobile First Optimization',
      'WordPress, React, and Static Site Implementations',
      'Lead Forms, WhatsApp, & Call Button Integrations',
      'SSL Security, SEO-Friendly Markup & Analytics'
    ],
    benefits: [
      'Leave a premium, professional first impression',
      'Enhance conversion rates and customer enquiries',
      'Flawless performance across mobiles, tablets & desktops',
      'Easily update content and track user behaviors'
    ]
  },
  {
    id: 'local-seo',
    title: 'Local SEO & Google Maps',
    shortDesc: 'Improve local search visibility and Google Maps placement to attract nearby customers.',
    longDesc: 'For businesses serving specific cities or regions, Local SEO is critical. We optimize your Google Business Profile (GBP) and coordinate local directory citations so your company appears prominently in the "Local 3-Pack" map listings when local customers search for your services.',
    icon: 'MapPin',
    features: [
      'Google Business Profile Setup & Optimization',
      'Local Citations & Directory Submissions (NAP Consistency)',
      'Review Acquisition Strategies & Management',
      'Location-Specific Landing Page SEO',
      'Geofocused Keyword Strategy & Local Map Audits'
    ],
    benefits: [
      'Capture ready-to-buy customers in your immediate area',
      'Increase physical store visits and phone enquiries',
      'Outrank local competitors in Google Maps search',
      'Build local trust through client reviews and rankings'
    ]
  },
  {
    id: 'ai-marketing',
    title: 'AI Marketing Solutions',
    shortDesc: 'Leverage AI-powered tools and automation to improve marketing performance and efficiency.',
    longDesc: 'Stay ahead of the technology curve. We integrate cutting-edge Artificial Intelligence tools to automate lead qualification, construct conversational chatbots, generate highly optimized draft content, and perform deep predictive data analytics that refine marketing workflows and skyrocket conversions.',
    icon: 'Cpu',
    features: [
      'Conversational AI Chatbots for Customer Support & Lead Qualification',
      'AI-Powered Predictive Ad Bidding & Optimization',
      'Automated Lead Nurturing Email Sequences',
      'Data-Driven Content Optimization Tools',
      'AI Audience Segmentation & Behavior Analysis'
    ],
    benefits: [
      'Provide 24/7 instant response to prospective leads',
      'Drastically reduce customer acquisition costs',
      'Gain deep predictive insights into consumer actions',
      'Increase team productivity and automation throughput'
    ]
  },
  {
    id: 'content-marketing',
    title: 'Content Marketing',
    shortDesc: 'Create valuable and engaging content that builds trust and drives customer action.',
    longDesc: 'Content is king. We develop authority-building content marketing campaigns that solve consumer pain points, boost search rankings, and establish brand confidence. By publishing high-quality blogs, case studies, whitepapers, and infographics, we convert information-seekers into premium buyers.',
    icon: 'FileText',
    features: [
      'Content Strategy & Topic Ideation Analysis',
      'SEO-Optimized Blog Copywriting & Publishing',
      'Ebooks, Case Studies, and Lead Magnet Creation',
      'Newsletter Design & Email Campaign Management',
      'Content Promotion & Backlink Distribution'
    ],
    benefits: [
      'Nurture and educate leads through the buyer journey',
      'Generate long-term compound organic traffic growth',
      'Boost domain authority through highly shareable content',
      'Establish authoritative industry leadership'
    ]
  }
];

export const WHY_CHOOSE_US_DATA: WhyChooseUsItem[] = [
  {
    id: 'expert',
    title: 'Expert Team',
    desc: 'Experienced professionals dedicated to business growth. We stay up-to-date with search algorithms, ad bidding strategies, and content trends.',
    icon: 'Award'
  },
  {
    id: 'custom',
    title: 'Customized Strategies',
    desc: 'No cookie-cutter templates. We design custom marketing funnels tailored explicitly to your unique commercial objectives and target demographics.',
    icon: 'Sliders'
  },
  {
    id: 'transparent',
    title: 'Transparent Reporting',
    desc: 'Regular updates, visual dashboard summaries, and performance reports. We keep you informed about key metrics that actually move the needle.',
    icon: 'BarChart'
  },
  {
    id: 'affordable',
    title: 'Affordable Pricing',
    desc: 'Cost-effective services scaled for businesses of all sizes. Enjoy enterprise-grade marketing solutions at prices that yield positive returns.',
    icon: 'DollarSign'
  },
  {
    id: 'results',
    title: 'Result-Oriented Approach',
    desc: 'We focus on concrete growth metrics: organic traffic, qualified client leads, conversion rates, and positive return on investment (ROI).',
    icon: 'CheckCircle'
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: '1',
    name: 'Ramesh Naidu',
    role: 'Local Retailer, Tirupati',
    quote: 'Mango Digital Growth helped us improve our online presence and generate more customer enquiries. Our local foot traffic increased significantly!',
    rating: 5
  },
  {
    id: '2',
    name: 'Suhasini Reddy',
    role: 'E-commerce Founder',
    quote: 'Their SEO and digital marketing strategies delivered excellent results for our business. Organic rankings went from page 4 to page 1 in 3 months.',
    rating: 5
  },
  {
    id: '3',
    name: 'Vijay Kumar',
    role: 'Real Estate Developer',
    quote: 'Professional service, timely support, and measurable growth. The quality of lead generation has been outstanding. Highly recommended!',
    rating: 5
  }
];

export const TEAM_MEMBERS_DATA: TeamMember[] = [
  {
    id: 'team1',
    name: 'Srinivas Rao',
    role: 'Founder & Digital Growth Strategist',
    bio: 'With over 10 years of experience, Srinivas consults with businesses to build robust digital pipelines that turn traffic into reliable sales revenue.'
  },
  {
    id: 'team2',
    name: 'Kiran Kumar',
    role: 'SEO & Content Strategist',
    bio: 'Kiran is an expert in search engine indexing, semantic keyword structures, and technical optimization. He loves solving complex ranking puzzles.'
  },
  {
    id: 'team3',
    name: 'Priya Sharma',
    role: 'Social Media & Paid Ads Specialist',
    bio: 'Priya manages campaign setup, audience profiling, and creative copywriting. She is certified in Google Ads and Meta Blueprint campaigns.'
  }
];
