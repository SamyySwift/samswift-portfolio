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
  // AI Automation Projects
  {
    id: "hr-hiring-automation",
    title: "HR Hiring Automation",
    client: "Enterprise Solutions",
    year: 2025,
    industry: "AI Automation",
    technologies: ["n8n", "Gmail", "Google Drive", "Google Sheets", "AI"],
    summary: "Automated HR hiring workflow that processes incoming resumes from Gmail, stores them in Google Drive, and uses AI to analyze candidate information for streamlined recruitment.",
    results: [
      "Automated resume processing pipeline",
      "Integration with Gmail and Google Drive",
      "AI-powered candidate analysis",
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
    client: "Marketing Agency",
    year: 2025,
    industry: "AI Automation",
    technologies: ["n8n", "Instagram API", "Webhooks", "AI", "CRM Integration"],
    summary: "Intelligent automation that captures leads from Instagram interactions and processes them for marketing and sales follow-up with seamless CRM integration.",
    results: [
      "Automated lead capture from Instagram",
      "Real-time lead processing",
      "CRM integration for follow-ups",
      "Enhanced marketing efficiency",
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
    client: "Knowledge Base Solutions",
    year: 2025,
    industry: "AI Automation",
    technologies: ["n8n", "Vector Database", "AI", "LangChain", "REST API"],
    summary: "Advanced Retrieval-Augmented Generation workflow that implements intelligent knowledge management for improved information retrieval and AI-powered content generation.",
    results: [
      "Intelligent document retrieval",
      "AI-powered content generation",
      "Vector database integration",
      "Enhanced knowledge accessibility",
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
    client: "Sweet Delights Bakery",
    year: 2025,
    industry: "Web Development",
    technologies: ["React", "TypeScript", "Supabase", "Tailwind CSS", "Vite"],
    summary: "Full-featured e-commerce platform for handcrafted cakes with custom ordering, real-time inventory, and seamless checkout experience.",
    results: [
      "Complete shopping cart and checkout system",
      "Custom cake order functionality",
      "Real-time product management with Supabase",
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
    client: "Professional Network",
    year: 2025,
    industry: "Web Development",
    technologies: ["React", "TypeScript", "Node.js", "MongoDB", "Tailwind CSS"],
    summary: "Professional community networking platform that connects individuals and organizations for collaboration, knowledge sharing, and community impact initiatives.",
    results: [
      "Real-time collaboration features",
      "Professional networking capabilities",
      "Community engagement tools",
      "Scalable architecture for growth",
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
    client: "Health Tech Solutions",
    year: 2025,
    industry: "Web Development",
    technologies: ["TypeScript", "JavaScript", "React", "Node.js", "AI Vision"],
    summary: "Intelligent food allergen scanning application that uses AI to analyze food product labels and ingredients, helping users identify potential allergens and make safe dietary choices.",
    results: [
      "Real-time ingredient analysis",
      "AI-powered allergen detection",
      "Comprehensive dietary restriction support",
      "User-friendly mobile interface",
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
    client: "Agricultural Technology",
    year: 2024,
    industry: "Machine Learning",
    technologies: ["Python", "TensorFlow", "OpenCV", "YOLO v8", "Streamlit", "OpenAI"],
    summary: "Computer vision-based plant disease detection system that empowers farmers with timely and accurate identification of crop diseases, facilitating early intervention and minimizing crop loss.",
    results: [
      "98% disease detection accuracy",
      "Real-time plant health analysis",
      "Integration with ChatGPT for recommendations",
      "Deployed web application with Streamlit",
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
    title: "Future Scout - Talent Prediction AI",
    client: "Sports Analytics",
    year: 2024,
    industry: "Machine Learning",
    technologies: ["Python", "Scikit-learn", "Pandas", "XGBoost", "Data Analytics"],
    summary: "Machine learning platform for predicting future talent potential using advanced analytics and performance metrics to identify emerging stars in sports and professional fields.",
    results: [
      "Predictive talent scoring system",
      "Multi-factor performance analysis",
      "Historical data pattern recognition",
      "Data-driven scouting recommendations",
    ],
    imageUrl: futureScoutImg,
    liveUrl: "https://github.com/SamyySwift",
    featured: false,
    metrics: [
      { label: "Prediction Accuracy", value: "87%" },
      { label: "Factors Analyzed", value: "15+" },
      { label: "Models Used", value: "3" },
    ],
  },
  {
    id: "drowsiness-detector",
    title: "Real-Time Drowsiness Detection",
    client: "Road Safety Solutions",
    year: 2023,
    industry: "Machine Learning",
    technologies: ["Python", "OpenCV", "dlib", "Facial Recognition", "Eye Tracking"],
    summary: "Computer vision system that monitors driver alertness in real-time by analyzing eye closure patterns and facial features to prevent accidents caused by drowsiness.",
    results: [
      "Real-time facial recognition and tracking",
      "Eye aspect ratio (EAR) monitoring",
      "Alert system for drowsiness detection",
      "95% detection accuracy",
    ],
    imageUrl: drowsinessDetectorImg,
    liveUrl: "https://github.com/SamyySwift",
    featured: false,
    metrics: [
      { label: "Accuracy", value: "95%" },
      { label: "Detection Time", value: "<500ms" },
      { label: "Alert Speed", value: "Instant" },
    ],
  },
  {
    id: "signature-redactor",
    title: "Signature Redaction AI",
    client: "Document Security",
    year: 2023,
    industry: "Machine Learning",
    technologies: ["Python", "OpenCV", "Deep Learning", "OCR", "Computer Vision"],
    summary: "Automated document processing system that uses computer vision and deep learning to detect and redact signatures from documents, ensuring privacy and compliance with data protection regulations.",
    results: [
      "Automated signature detection",
      "Intelligent redaction algorithms",
      "Batch document processing",
      "Privacy compliance automation",
    ],
    imageUrl: signatureRedactorImg,
    liveUrl: "https://github.com/SamyySwift",
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
