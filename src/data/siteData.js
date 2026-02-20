export const caseStudies = [
  {
    id: 'ecommerce-scaling',
    industry: 'E-commerce',
    title: 'Scaling DTC Brand Revenue',
    challenge: 'A growing DTC brand was struggling with conversion rates and ad spend efficiency. Their funnel had multiple drop-off points and unclear attribution.',
    solution: 'We implemented a full-funnel optimization strategy: redesigned checkout flow for conversion, built custom attribution tracking, and restructured Meta and Google campaigns with dynamic creative testing.',
    results: [
      { metric: '+120%', label: 'Conversion rate' },
      { metric: '3x', label: 'ROAS' },
      { metric: '40%', label: 'Faster page performance' },
    ],
  },
  {
    id: 'saas-platform',
    industry: 'SaaS',
    title: 'Enterprise Platform Rebuild',
    challenge: 'A B2B SaaS company needed to migrate from legacy infrastructure to a modern, scalable stack while maintaining uptime for existing customers.',
    solution: 'We architected a headless CMS solution with Sanity, built a custom React frontend, and executed a phased migration with zero downtime.',
    results: [
      { metric: '99.9%', label: 'Uptime maintained' },
      { metric: '2.5x', label: 'Faster load times' },
      { metric: '60%', label: 'Reduced hosting costs' },
    ],
  },
  {
    id: 'agency-partner',
    industry: 'Agency',
    title: 'Technical Partner for Creative Agency',
    challenge: 'A design-focused agency needed a reliable technical partner for complex web builds and e-commerce projects they couldn\'t handle in-house.',
    solution: 'We became their dedicated development partner—handling Shopify Plus builds, custom integrations, and performance optimization for their client roster.',
    results: [
      { metric: '15+', label: 'Projects delivered' },
      { metric: '4.9/5', label: 'Client satisfaction' },
      { metric: '50%', label: 'Faster delivery cycles' },
    ],
  },
  {
    id: 'service-business',
    industry: 'Professional Services',
    title: 'Lead Gen Overhaul',
    challenge: 'A professional services firm had an outdated website with poor mobile experience and no clear path to conversion.',
    solution: 'We designed and built a conversion-focused site with strategic CTAs, optimized forms, and integrated CRM. Added performance marketing to fill their pipeline.',
    results: [
      { metric: '+85%', label: 'Form submissions' },
      { metric: '35%', label: 'Lower cost per lead' },
      { metric: '2x', label: 'Mobile conversions' },
    ],
  },
];

export const team = [
  {
    id: '1',
    name: 'Alex Chen',
    title: 'Founder & Lead Developer',
    description: 'Architects scalable digital systems and leads technical strategy. 11+ years building web platforms for brands that need to perform.',
    image: '/team/alex.jpg',
  },
  {
    id: '2',
    name: 'Jordan Reeves',
    title: 'Creative Director',
    description: 'Drives brand identity and conversion-focused design. Ensures every pixel serves the business goal.',
    image: '/team/jordan.jpg',
  },
  {
    id: '3',
    name: 'Sam Rivera',
    title: 'Performance Strategist',
    description: 'Optimizes paid channels and funnels for measurable growth. Data-driven approach to scaling ad spend.',
    image: '/team/sam.jpg',
  },
  {
    id: '4',
    name: 'Morgan Blake',
    title: 'Head of Production',
    description: 'Oversees video and creative production. Delivers high-impact content that converts across platforms.',
    image: '/team/morgan.jpg',
  },
];

export const services = [
  {
    id: 'growth-marketing',
    title: 'Growth & Performance Marketing',
    items: [
      'Paid ads (Meta, Google, TikTok)',
      'Funnel optimization',
      'Content strategy',
      'Data-driven scaling',
    ],
    outcome: 'Turn ad spend into predictable revenue growth.',
  },
  {
    id: 'web-development',
    title: 'Web & Platform Development',
    items: [
      'Custom web applications',
      'Shopify / Shopify Plus',
      'WordPress',
      'Webflow',
      'Headless CMS (Sanity, Contentful, Strapi)',
      'Magento / WooCommerce',
      'CMS migrations',
      'Performance optimization',
    ],
    outcome: 'Build systems that scale with your business.',
  },
  {
    id: 'ui-ux',
    title: 'UI/UX & Conversion Design',
    items: [
      'Conversion-focused design',
      'Design systems',
      'Branding & identity',
      'CRO strategy',
    ],
    outcome: 'Design that converts visitors into customers.',
  },
  {
    id: 'creative-production',
    title: 'Creative & Video Production',
    items: [
      'Ad creatives',
      'Short-form content',
      'Motion graphics',
      'Campaign videos',
    ],
    outcome: 'Creative that performs across every channel.',
  },
];

export const processSteps = [
  { id: 1, title: 'Discovery', description: 'We learn your business, goals, and constraints.' },
  { id: 2, title: 'Strategy', description: 'We define the approach and success metrics.' },
  { id: 3, title: 'Design', description: 'We create conversion-focused experiences.' },
  { id: 4, title: 'Development', description: 'We build with quality and performance in mind.' },
  { id: 5, title: 'Launch', description: 'We deploy and ensure smooth handoff.' },
  { id: 6, title: 'Optimization', description: 'We iterate based on data and results.' },
];
