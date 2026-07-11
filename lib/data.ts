export const siteConfig = {
  name: 'Bhoopendra Singh',
  title: 'Full-Stack JavaScript Developer',
  description:
    'Full-Stack JavaScript Developer specializing in Next.js, React, TypeScript, and scalable backend systems.',
  url: 'https://zoro-dev.com',
  ogImage: '/api/og',
  links: {
    portfolio: 'https://zoro-dev.com/bhoopendra',
    github: 'https://github.com/singhbhoopendra9331',
    linkedin: 'https://www.linkedin.com/in/bhoopendra-singh-2570863b7/',
    email: 'mailto:singh.bhoopendra9331@gmail.com',
  },
  email: 'singh.bhoopendra9331@gmail.com',
  location: 'India',
  available: true,
};

export const navItems = [
  { title: 'Home', href: '/' },
  { title: 'About', href: '/#about' },
  { title: 'Skills', href: '/#skills' },
  { title: 'Projects', href: '/#projects' },
  { title: 'Experience', href: '/#experience' },
  { title: 'Blog', href: '/blog' },
  { title: 'Contact', href: '/#contact' },
];

export const socialLinks = [
  {
    name: 'GitHub',
    href: siteConfig.links.github,
    icon: 'github',
  },
  {
    name: 'LinkedIn',
    href: siteConfig.links.linkedin,
    icon: 'linkedin',
  },
  {
    name: 'Portfolio',
    href: siteConfig.links.portfolio,
    icon: 'globe',
  },
  {
    name: 'Email',
    href: siteConfig.links.email,
    icon: 'mail',
  },
];

export type SkillCategory = {
  title: string;
  icon: string;
  color: string;
  skills: { name: string; level: number }[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    icon: 'layout',
    color: 'primary',
    skills: [
      { name: 'Next.js', level: 95 },
      { name: 'React', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'JavaScript', level: 95 },
      { name: 'Tailwind CSS', level: 92 },
    ],
  },
  {
    title: 'Backend',
    icon: 'server',
    color: 'accent',
    skills: [
      { name: 'Node.js', level: 90 },
      { name: 'Express', level: 88 },
      { name: 'REST APIs', level: 92 },
      { name: 'Prisma ORM', level: 88 },
    ],
  },
  {
    title: 'Database',
    icon: 'database',
    color: 'primary',
    skills: [
      { name: 'PostgreSQL', level: 87 },
      { name: 'Prisma', level: 88 },
      { name: 'SQL', level: 85 },
    ],
  },
  {
    title: 'Cloud & DevOps',
    icon: 'cloud',
    color: 'accent',
    skills: [
      { name: 'Docker', level: 80 },
      { name: 'Git', level: 93 },
      { name: 'Cloudinary', level: 85 },
      { name: 'CI/CD', level: 78 },
    ],
  },
  {
    title: 'Tools',
    icon: 'wrench',
    color: 'primary',
    skills: [
      { name: 'VS Code', level: 95 },
      { name: 'Vite', level: 85 },
      { name: 'Postman', level: 90 },
      { name: 'ESLint', level: 85 },
    ],
  },
  {
    title: 'Architecture',
    icon: 'blocks',
    color: 'accent',
    skills: [
      { name: 'SSR / SSG', level: 90 },
      { name: 'Design Systems', level: 85 },
      { name: 'SEO', level: 88 },
      { name: 'Performance', level: 90 },
    ],
  },
];

export type Project = {
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  tags: string[];
  repository: string;
  liveUrl?: string;
  featured: boolean;
  image: string;
};

export const projects: Project[] = [
  {
    slug: 'nextcom',
    title: 'Nextcom',
    description:
      'A production-ready CMS built with Next.js featuring SSR, SEO optimization, media management, authentication, PostgreSQL, Prisma ORM, and a modern admin dashboard.',
    longDescription:
      'Nextcom is a full-featured content management system engineered for performance and developer experience. It ships with server-side rendering for lightning-fast initial loads, built-in SEO optimization, a robust media management pipeline, secure authentication, and an intuitive admin dashboard. Built on PostgreSQL with Prisma ORM for type-safe database access.',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Tailwind CSS'],
    repository: 'https://github.com/singhbhoopendra9331/nextecom',
    featured: true,
    image:
      'https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    slug: 'more-coming-soon',
    title: 'More Projects Coming Soon',
    description:
      'Additional production projects are being documented and will be added here shortly. Each will include a case study, live demo, and full source.',
    tags: ['Coming Soon'],
    repository: siteConfig.links.github,
    featured: false,
    image:
      'https://images.pexels.com/photos/17794815/pexels-photo-17794815.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
];

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
  stack: string[];
};

export const experiences: ExperienceItem[] = [
  {
    role: 'Full-Stack JavaScript Developer',
    company: 'Freelance / Open Source',
    period: '2023 — Present',
    description:
      'Building production-grade web applications with Next.js, React, and TypeScript. Focused on performance, accessibility, and developer experience.',
    highlights: [
      'Architected and shipped a production-ready CMS with SSR, SEO optimization, and Prisma ORM',
      'Delivered responsive, accessible interfaces with near-perfect Core Web Vitals',
      'Established reusable component libraries and design systems',
    ],
    stack: ['Next.js', 'React', 'TypeScript', 'PostgreSQL', 'Prisma', 'Tailwind CSS'],
  },
  {
    role: 'Frontend Developer',
    company: 'Independent Projects',
    period: '2022 — 2023',
    description:
      'Specialized in building modern, interactive user interfaces with React and modern CSS frameworks, emphasizing motion and micro-interactions.',
    highlights: [
      'Built animated, accessible UIs with Framer Motion and Tailwind CSS',
      'Integrated REST APIs and managed complex client state',
      'Optimized rendering performance and bundle sizes',
    ],
    stack: ['React', 'JavaScript', 'Tailwind CSS', 'REST APIs'],
  },
  {
    role: 'Backend Developer',
    company: 'Independent Projects',
    period: '2021 — 2022',
    description:
      'Designed and implemented RESTful APIs and database schemas with Node.js, Express, and PostgreSQL.',
    highlights: [
      'Designed normalized database schemas and Prisma models',
      'Built secure, well-documented REST APIs with Express',
      'Implemented authentication and media management with Cloudinary',
    ],
    stack: ['Node.js', 'Express', 'PostgreSQL', 'Cloudinary'],
  },
];

export const aboutContent = {
  story:
    "I'm a Full-Stack JavaScript Developer who lives at the intersection of clean engineering and thoughtful design. I specialize in Next.js, React, and TypeScript, building applications that are fast, accessible, and a pleasure to use. My work spans the full stack — from pixel-perfect interfaces to type-safe database schemas.",
  philosophy:
    "Great software is invisible. When an interface feels effortless, it's because every layer — from the database query to the CSS transition — was considered. I obsess over performance budgets, semantic HTML, and the small interactions that make a product feel alive.",
  enjoyBuilding:
    'I enjoy building developer tools, content platforms, and anything where performance and UX matter equally. I am happiest when a page loads instantly and the motion feels just right.',
  stats: [
    { label: 'Years Experience', value: '4+' },
    { label: 'Projects Built', value: '20+' },
    { label: 'Technologies', value: '15+' },
    { label: 'Core Web Vitals', value: '100%' },
  ],
};

export const timeline = [
  {
    year: '2024',
    title: 'Production CMS — Nextcom',
    description:
      'Shipped a production-ready content management system with SSR, SEO optimization, media management, and Prisma ORM.',
  },
  {
    year: '2023',
    title: 'Full-Stack Focus',
    description:
      'Deepened expertise in Next.js App Router, server components, and type-safe full-stack architecture with Prisma.',
  },
  {
    year: '2022',
    title: 'Frontend Specialization',
    description:
      'Mastered React, modern CSS, and Framer Motion to build accessible, animated interfaces.',
  },
  {
    year: '2021',
    title: 'Backend Foundations',
    description:
      'Built REST APIs with Node.js, Express, and PostgreSQL, with a focus on clean schema design.',
  },
];
