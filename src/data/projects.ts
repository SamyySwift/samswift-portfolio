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
    id: "ai-customer-support",
    title: "AI Customer Support Chatbot",
    client: "TechCorp Solutions",
    year: 2024,
    industry: "AI Automation",
    technologies: ["Python", "OpenAI", "LangChain", "FastAPI", "React"],
    summary: "Intelligent chatbot system that automates customer support with natural language understanding and context-aware responses.",
    results: [
      "Reduced support tickets by 70%",
      "24/7 automated assistance",
      "95% customer satisfaction rate",
    ],
    imageUrl: "/placeholder.svg",
    liveUrl: "https://example.com/ai-support",
    featured: true,
    metrics: [
      { label: "Response Time", value: "<2s" },
      { label: "Accuracy", value: "95%" },
      { label: "Tickets Handled", value: "50K+" },
    ],
  },
  {
    id: "predictive-analytics",
    title: "Predictive Analytics Dashboard",
    client: "DataFlow Inc.",
    year: 2024,
    industry: "Machine Learning",
    technologies: ["Python", "TensorFlow", "Scikit-learn", "PostgreSQL", "Plotly"],
    summary: "Advanced ML platform for sales forecasting and trend prediction using ensemble models and real-time data processing.",
    results: [
      "Improved forecast accuracy by 40%",
      "Processed 5M+ data points daily",
      "Reduced manual analysis time by 80%",
    ],
    imageUrl: "/placeholder.svg",
    liveUrl: "https://example.com/predictive",
    featured: true,
    metrics: [
      { label: "Accuracy", value: "94%" },
      { label: "Data Points", value: "5M+" },
      { label: "Models", value: "12" },
    ],
  },
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    client: "ShopPro",
    year: 2024,
    industry: "Web Development",
    technologies: ["Next.js", "React", "Stripe", "PostgreSQL", "Tailwind"],
    summary: "Modern e-commerce platform with seamless checkout, inventory management, and admin dashboard.",
    results: [
      "40% increase in conversion rate",
      "Sub-second page loads",
      "100K+ products managed",
    ],
    imageUrl: "/placeholder.svg",
    liveUrl: "https://example.com/shopro",
    featured: true,
    metrics: [
      { label: "Load Time", value: "0.8s" },
      { label: "Conversion", value: "+40%" },
      { label: "Uptime", value: "99.9%" },
    ],
  },
  {
    id: "document-intelligence",
    title: "Document Processing Automation",
    client: "DocuFlow",
    year: 2023,
    industry: "AI Automation",
    technologies: ["Python", "OCR", "AWS Lambda", "MongoDB", "React"],
    summary: "Automated document processing system using AI for extraction, classification, and data validation.",
    results: [
      "98% extraction accuracy",
      "90% time savings on manual entry",
      "Processed 1M+ documents",
    ],
    imageUrl: "/placeholder.svg",
    liveUrl: "https://example.com/docuflow",
    featured: false,
  },
  {
    id: "fraud-detection",
    title: "Real-Time Fraud Detection",
    client: "SecurePay",
    year: 2023,
    industry: "Machine Learning",
    technologies: ["Python", "XGBoost", "Apache Kafka", "Redis", "Docker"],
    summary: "ML-powered fraud detection system processing transactions in real-time with adaptive learning algorithms.",
    results: [
      "Detected 99.2% of fraud attempts",
      "Reduced false positives by 60%",
      "Processing <100ms per transaction",
    ],
    imageUrl: "/placeholder.svg",
    liveUrl: "https://example.com/securepay",
    featured: false,
    metrics: [
      { label: "Detection Rate", value: "99.2%" },
      { label: "Speed", value: "<100ms" },
      { label: "Accuracy", value: "97%" },
    ],
  },
  {
    id: "portfolio-webapp",
    title: "Portfolio Management System",
    client: "InvestTrack",
    year: 2023,
    industry: "Web Development",
    technologies: ["React", "TypeScript", "Node.js", "GraphQL", "AWS"],
    summary: "Comprehensive portfolio tracking platform with real-time market data and advanced analytics.",
    results: [
      "Tracking $2B+ in assets",
      "Real-time data updates",
      "50K+ active users",
    ],
    imageUrl: "/placeholder.svg",
    liveUrl: "https://example.com/investtrack",
    featured: false,
  },
];

export const industries = Array.from(new Set(projects.map(p => p.industry))).sort();
export const technologies = Array.from(new Set(projects.flatMap(p => p.technologies))).sort();
export const years = Array.from(new Set(projects.map(p => p.year))).sort((a, b) => b - a);
