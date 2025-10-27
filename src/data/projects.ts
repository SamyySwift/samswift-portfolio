import hrHiringImg from '@/assets/hr-hiring-automation.jpg';
import leadCaptureImg from '@/assets/lead-capture-bot.jpg';
import ragSystemImg from '@/assets/rag-system.jpg';
import cakeEcommerceImg from '@/assets/cake-ecommerce.jpg';
import kConectImg from '@/assets/k-conect.jpg';
import canIEatThisImg from '@/assets/can-i-eat-this.jpg';
import plantDiseaseImg from '@/assets/plant-disease-detection.jpg';
import futureScoutImg from '@/assets/future-scout.jpg';
import drowsinessDetectorImg from '@/assets/drowsiness-detector.jpg';
import signatureRedactorImg from '@/assets/signature-redactor.jpg';

export interface Project {
  id: string;
  title: string;
  year: number;
  industry: string;
  technologies: string[];
  summary: string;
  challenge: string[];
  solution: string[];
  imageUrl: string;
  liveUrl: string;
  featured: boolean;
  metrics?: {
    label: string;
    value: string;
  }[];
}

export const projects: Project[] = [
  // AI Automation Projects
  {
    id: "hr-hiring-automation",
    title: "HR Hiring Automation",
    year: 2025,
    industry: "AI Automation",
    technologies: ["n8n", "Gmail", "Google Drive", "Google Sheets", "AI"],
    summary: "Automated HR hiring workflow that processes incoming resumes from Gmail, stores them in Google Drive, and uses AI to analyze candidate information for streamlined recruitment.",
    challenge: [
      "Manual resume screening was time-consuming",
      "Inconsistent candidate evaluation process",
      "Scattered hiring data across platforms",
    ],
    solution: [
      "Automated resume processing pipeline from Gmail",
      "AI-powered candidate analysis and scoring",
      "Centralized data storage in Google Drive and Sheets",
      "Streamlined recruitment workflow",
    ],
    imageUrl: hrHiringImg,
    liveUrl: "https://github.com/SamyySwift/AI-Automations",
    featured: true,
    metrics: [
      { label: "Automation", value: "100%" },
      { label: "Time Saved", value: "80%" },
      { label: "Integration", value: "Full" },
    ],
  },
  {
    id: "lead-capture-bot",
    title: "Lead Capture Instagram Bot",
    year: 2025,
    industry: "AI Automation",
    technologies: ["n8n", "Instagram API", "Webhooks", "AI", "CRM Integration"],
    summary: "Intelligent automation that captures leads from Instagram interactions and processes them for marketing and sales follow-up with seamless CRM integration.",
    challenge: [
      "Manual lead capture was slow and error-prone",
      "Delayed response times to potential customers",
      "Disconnected marketing and sales data",
    ],
    solution: [
      "Automated lead capture from Instagram interactions",
      "Real-time lead processing and notification system",
      "Seamless CRM integration for sales follow-ups",
      "Enhanced marketing efficiency and conversion rates",
    ],
    imageUrl: leadCaptureImg,
    liveUrl: "https://github.com/SamyySwift/AI-Automations",
    featured: true,
    metrics: [
      { label: "Leads Captured", value: "1000+" },
      { label: "Response Time", value: "<5min" },
      { label: "Conversion", value: "+45%" },
    ],
  },
  {
    id: "rag-system",
    title: "RAG Knowledge Management System",
    year: 2025,
    industry: "AI Automation",
    technologies: ["n8n", "Vector Database", "AI", "LangChain", "REST API"],
    summary: "Advanced Retrieval-Augmented Generation workflow that implements intelligent knowledge management for improved information retrieval and AI-powered content generation.",
    challenge: [
      "Traditional search was inefficient for large knowledge bases",
      "Difficulty in finding relevant information quickly",
      "Manual content generation was time-consuming",
    ],
    solution: [
      "Intelligent semantic search with vector database",
      "AI-powered content generation from knowledge base",
      "Fast and accurate document retrieval",
      "Enhanced knowledge accessibility and utilization",
    ],
    imageUrl: ragSystemImg,
    liveUrl: "https://github.com/SamyySwift/AI-Automations",
    featured: true,
    metrics: [
      { label: "Retrieval Speed", value: "<2s" },
      { label: "Accuracy", value: "92%" },
      { label: "Documents", value: "10K+" },
    ],
  },

  // Web Development Projects
  {
    id: "cake-ecommerce",
    title: "Sweet Delights - Cake E-Commerce",
    year: 2025,
    industry: "Web Development",
    technologies: ["React", "TypeScript", "Supabase", "Tailwind CSS", "Vite"],
    summary: "Full-featured e-commerce platform for handcrafted cakes with custom ordering, real-time inventory, and seamless checkout experience.",
    challenge: [
      "Needed an online presence to reach more customers",
      "Manual order processing was inefficient",
      "Inventory management was difficult to track",
    ],
    solution: [
      "Complete shopping cart and checkout system",
      "Custom cake order functionality with specifications",
      "Real-time product management with Supabase backend",
      "Category-based browsing (Birthday, Wedding, Cupcakes, Specialty)",
    ],
    imageUrl: cakeEcommerceImg,
    liveUrl: "https://cake-ecommerce-site.vercel.app/",
    featured: true,
    metrics: [
      { label: "Categories", value: "4" },
      { label: "Products", value: "70+" },
      { label: "Features", value: "Custom Orders" },
    ],
  },
  {
    id: "k-conect",
    title: "K-Conect Community Platform",
    year: 2025,
    industry: "Web Development",
    technologies: ["React", "TypeScript", "Node.js", "MongoDB", "Tailwind CSS"],
    summary: "Professional community networking platform that connects individuals and organizations for collaboration, knowledge sharing, and community impact initiatives.",
    challenge: [
      "Professionals lacked a dedicated platform for meaningful connections",
      "Community collaboration was fragmented across tools",
      "Difficult to track and measure community impact",
    ],
    solution: [
      "Real-time collaboration and messaging features",
      "Professional networking and connection system",
      "Community engagement tools and event management",
      "Scalable architecture supporting rapid growth",
    ],
    imageUrl: kConectImg,
    liveUrl: "https://www.k-conect.com/",
    featured: true,
    metrics: [
      { label: "Users", value: "500+" },
      { label: "Connections", value: "2K+" },
      { label: "Engagement", value: "High" },
    ],
  },
  {
    id: "can-i-eat-this",
    title: "Can I Eat This - Food Allergen Scanner",
    year: 2025,
    industry: "Web Development",
    technologies: ["TypeScript", "JavaScript", "React", "Node.js", "AI Vision"],
    summary: "Intelligent food allergen scanning application that uses AI to analyze food product labels and ingredients, helping users identify potential allergens and make safe dietary choices.",
    challenge: [
      "People with allergies struggled to quickly identify safe foods",
      "Reading ingredient labels was time-consuming and error-prone",
      "Limited accessibility for those with visual impairments",
    ],
    solution: [
      "Real-time AI-powered ingredient analysis",
      "Instant allergen detection and warnings",
      "Comprehensive support for 14+ common allergens",
      "User-friendly mobile interface with camera scanning",
    ],
    imageUrl: canIEatThisImg,
    liveUrl: "https://can-i-eat-this.vercel.app/",
    featured: true,
    metrics: [
      { label: "Accuracy", value: "95%" },
      { label: "Scan Time", value: "<3s" },
      { label: "Allergens", value: "14+" },
    ],
  },

  // Machine Learning Projects
  {
    id: "plant-disease-detection",
    title: "AI Plant Disease Detection",
    year: 2024,
    industry: "Machine Learning",
    technologies: ["Python", "TensorFlow", "OpenCV", "YOLO v8", "Streamlit", "OpenAI"],
    summary: "Innovative computer vision solution that leverages AI technology to revolutionize how farmers detect and manage plant diseases, empowering them with timely and accurate identification tools for early intervention and minimizing crop loss.",
    challenge: [
      "Farmers lacked timely disease identification tools",
      "Manual inspection was slow and inaccurate",
      "Late detection resulted in significant crop losses",
    ],
    solution: [
      "Computer vision-based real-time disease detection",
      "98% accuracy using YOLO v8 object detection",
      "Integration with ChatGPT API for treatment recommendations",
      "Deployed web application accessible via Streamlit",
    ],
    imageUrl: plantDiseaseImg,
    liveUrl: "https://ai-plant-disease-detector.streamlit.app/",
    featured: true,
    metrics: [
      { label: "Accuracy", value: "98%" },
      { label: "Diseases", value: "20+" },
      { label: "Response", value: "<2s" },
    ],
  },
  {
    id: "future-scout",
    title: "Future Scout - Career Advisory Platform",
    year: 2024,
    industry: "Machine Learning",
    technologies: ["React", "TypeScript", "Vite", "Shadcn UI", "Node.js", "Express", "Supabase", "PayStack"],
    summary: "Your personal career advisor - an AI-powered platform that provides personalized career guidance, skill assessment, and professional development recommendations to help individuals navigate their career paths.",
    challenge: [
      "Job seekers struggled to find personalized career guidance",
      "Career planning tools were generic and unhelpful",
      "Lack of data-driven insights for career decisions",
    ],
    solution: [
      "AI-powered personalized career recommendations",
      "Comprehensive skill assessment and gap analysis",
      "Data-driven career path suggestions",
      "Integration with payment system for premium features",
    ],
    imageUrl: futureScoutImg,
    liveUrl: "https://future-scout.vercel.app/",
    featured: false,
    metrics: [
      { label: "Users", value: "1000+" },
      { label: "Assessments", value: "5K+" },
      { label: "Satisfaction", value: "4.8/5" },
    ],
  },
  {
    id: "drowsiness-detector",
    title: "Real-Time Drowsiness Detection",
    year: 2023,
    industry: "Machine Learning",
    technologies: ["Python", "OpenCV", "Mediapipe", "TensorFlow", "Computer Vision"],
    summary: "Real-time video analytics tool that uses computer vision to constantly monitor driver alertness by analyzing eye closure patterns and facial features to prevent accidents caused by drowsiness.",
    challenge: [
      "Drowsiness is a major cause of road accidents",
      "No real-time monitoring system for driver alertness",
      "Existing solutions were expensive or inaccurate",
    ],
    solution: [
      "Real-time facial recognition and eye tracking with Mediapipe",
      "Eye aspect ratio (EAR) monitoring algorithm",
      "Instant alert system for drowsiness detection",
      "95% detection accuracy with minimal false positives",
    ],
    imageUrl: drowsinessDetectorImg,
    liveUrl: "https://github.com/SamyySwift/Driver-Drowsiness-Detector",
    featured: false,
    metrics: [
      { label: "Accuracy", value: "95%" },
      { label: "Detection Time", value: "<500ms" },
      { label: "Alert Speed", value: "Instant" },
    ],
  },
  {
    id: "signature-redactor",
    title: "Custom Signature Detector & Redactor",
    year: 2023,
    industry: "Machine Learning",
    technologies: ["Python", "TensorFlow", "OpenCV", "Object Detection API", "img2pdf", "pdf2image"],
    summary: "Custom object detection model built with TensorFlow to automatically recognize and redact signatures from PDF documents, ensuring privacy and compliance with data protection regulations for sensitive documents.",
    challenge: [
      "Manual signature redaction was time-consuming",
      "Privacy compliance required accurate signature detection",
      "Batch processing of documents was impossible",
    ],
    solution: [
      "Custom TensorFlow object detection model for signatures",
      "Automated PDF processing and redaction pipeline",
      "Batch document processing capabilities",
      "96% detection rate with intelligent redaction algorithms",
    ],
    imageUrl: signatureRedactorImg,
    liveUrl: "https://github.com/SamyySwift/signature-detector",
    featured: false,
    metrics: [
      { label: "Detection Rate", value: "96%" },
      { label: "Speed", value: "<1s/page" },
      { label: "Accuracy", value: "94%" },
    ],
  },
];

export const industries = Array.from(new Set(projects.map(p => p.industry))).sort();
export const technologies = Array.from(new Set(projects.flatMap(p => p.technologies))).sort();
export const years = Array.from(new Set(projects.map(p => p.year))).sort((a, b) => b - a);
