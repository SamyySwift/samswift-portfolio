export interface Project {
  id: string;
  title: string;
  client: string;
  year: number;
  industry: string;
  technologies: string[];
  summary: string;
  results: string[];
  imageUrl: string;
  liveUrl: string;
  featured: boolean;
  metrics?: {
    label: string;
    value: string;
  }[];
}

export const projects: Project[] = [
  {
    id: "fintech-dashboard",
    title: "Enterprise FinTech Platform",
    client: "FinanceFlow Inc.",
    year: 2024,
    industry: "Finance",
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "AWS"],
    summary: "A comprehensive financial dashboard enabling real-time analytics and seamless transaction processing for enterprise clients.",
    results: [
      "Reduced processing time by 60%",
      "Increased user engagement by 145%",
      "Handled 1M+ daily transactions",
    ],
    imageUrl: "/placeholder.svg",
    liveUrl: "https://example.com/financeflow",
    featured: true,
    metrics: [
      { label: "Performance Score", value: "98" },
      { label: "Daily Users", value: "250K+" },
      { label: "Uptime", value: "99.9%" },
    ],
  },
  {
    id: "ecommerce-marketplace",
    title: "Global E-Commerce Marketplace",
    client: "ShopConnect",
    year: 2024,
    industry: "E-Commerce",
    technologies: ["Next.js", "React", "Stripe", "MongoDB", "Vercel"],
    summary: "Multi-vendor marketplace with advanced search, real-time inventory, and seamless checkout experience.",
    results: [
      "30% increase in conversion rate",
      "2M+ products listed",
      "Expanded to 45 countries",
    ],
    imageUrl: "/placeholder.svg",
    liveUrl: "https://example.com/shopconnect",
    featured: true,
    metrics: [
      { label: "Monthly GMV", value: "$15M+" },
      { label: "Vendors", value: "5,000+" },
      { label: "Load Time", value: "0.8s" },
    ],
  },
  {
    id: "healthcare-portal",
    title: "Patient Care Portal",
    client: "HealthTech Solutions",
    year: 2023,
    industry: "Healthcare",
    technologies: ["Vue.js", "Django", "Redis", "Docker", "Azure"],
    summary: "HIPAA-compliant patient portal with telemedicine, appointment scheduling, and secure messaging.",
    results: [
      "Improved patient satisfaction by 85%",
      "50K+ appointments monthly",
      "Zero security incidents",
    ],
    imageUrl: "/placeholder.svg",
    liveUrl: "https://example.com/healthtech",
    featured: true,
    metrics: [
      { label: "Patients", value: "100K+" },
      { label: "Consultations", value: "25K/mo" },
      { label: "Satisfaction", value: "4.9/5" },
    ],
  },
  {
    id: "saas-analytics",
    title: "AI-Powered Analytics Platform",
    client: "DataVision",
    year: 2023,
    industry: "SaaS",
    technologies: ["React", "Python", "TensorFlow", "BigQuery", "GCP"],
    summary: "Advanced analytics platform with machine learning-driven insights and predictive modeling.",
    results: [
      "Processed 10TB+ data daily",
      "40% faster insights generation",
      "Served Fortune 500 clients",
    ],
    imageUrl: "/placeholder.svg",
    liveUrl: "https://example.com/datavision",
    featured: false,
    metrics: [
      { label: "Data Points", value: "5B+" },
      { label: "Accuracy", value: "96%" },
      { label: "Speed", value: "10x" },
    ],
  },
  {
    id: "edtech-platform",
    title: "Interactive Learning Platform",
    client: "EduConnect",
    year: 2023,
    industry: "Education",
    technologies: ["Angular", "Firebase", "WebRTC", "Node.js"],
    summary: "Gamified learning platform with live classes, progress tracking, and personalized curricula.",
    results: [
      "1M+ active learners",
      "92% course completion rate",
      "Expanded to 30+ languages",
    ],
    imageUrl: "/placeholder.svg",
    liveUrl: "https://example.com/educonnect",
    featured: false,
  },
  {
    id: "real-estate-platform",
    title: "Smart Property Management",
    client: "PropTech Innovations",
    year: 2022,
    industry: "Real Estate",
    technologies: ["React Native", "GraphQL", "PostgreSQL", "AWS"],
    summary: "Comprehensive property management system with virtual tours, automated workflows, and tenant portals.",
    results: [
      "Reduced admin time by 70%",
      "50K+ properties managed",
      "4.8-star app rating",
    ],
    imageUrl: "/placeholder.svg",
    liveUrl: "https://example.com/proptech",
    featured: false,
  },
];

export const industries = Array.from(new Set(projects.map(p => p.industry))).sort();
export const technologies = Array.from(new Set(projects.flatMap(p => p.technologies))).sort();
export const years = Array.from(new Set(projects.map(p => p.year))).sort((a, b) => b - a);
