# SamSwift Portfolio 🚀

A modern, responsive portfolio website showcasing AI automation projects, web development work, and machine learning solutions.

## 🌟 Features

- **Responsive Design**: Beautiful, mobile-first design built with Tailwind CSS
- **Project Showcase**: Interactive project cards with filtering by industry and technology
- **Modern Tech Stack**: Built with React, TypeScript, and Vite for optimal performance
- **Smooth Animations**: Engaging user experience with smooth transitions and hover effects
- **SEO Optimized**: Built with best practices for search engine optimization

## 🛠️ Technologies Used

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, shadcn/ui components
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Package Manager**: npm/bun

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v18 or higher)
- npm or bun package manager

## 🚀 Getting Started

### Installation

1. Clone the repository:

```bash
git clone https://github.com/SamyySwift/samswift-portfolio.git
cd samswift-portfolio
```

2. Install dependencies:

```bash
npm install
# or
bun install
```

3. Start the development server:

```bash
npm run dev
# or
bun run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # shadcn/ui components
│   ├── About.tsx       # About section
│   ├── Contact.tsx     # Contact form
│   ├── Hero.tsx        # Hero section
│   ├── Navigation.tsx  # Navigation bar
│   ├── ProjectCard.tsx # Project display card
│   └── ProjectFilter.tsx # Project filtering
├── data/               # Data and content
│   └── projects.ts     # Project data and interfaces
├── pages/              # Page components
│   ├── Index.tsx       # Homepage
│   ├── Projects.tsx    # Projects listing
│   └── ProjectDetail.tsx # Individual project page
├── assets/             # Images and media
└── hooks/              # Custom React hooks
```

## 🎯 Project Categories

The portfolio showcases projects across three main categories:

- **AI Automation**: Intelligent workflow automation using n8n, AI, and various APIs
- **Web Development**: Full-stack applications built with modern technologies
- **Machine Learning**: Computer vision and AI-powered solutions

### Adding New Projects

1. Add project images to `src/assets/`
2. Update project data in `src/data/projects.ts`
3. Follow the existing project structure in the `projects` array

### Modifying Content

- **Hero Section**: Edit `src/components/Hero.tsx`
- **About Section**: Edit `src/components/About.tsx`
- **Contact Information**: Edit `src/components/Contact.tsx`

### Styling

- Global styles: `src/index.css`
- Tailwind configuration: `tailwind.config.ts`
- Component styles use Tailwind utility classes

---

**Built with ❤️ using React, TypeScript, and Tailwind CSS**
