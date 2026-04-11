export type Project = {
  id: string;
  name: string;
  shortName: string;
  description: string;
  tagline: string;
  type: string;
  tech: string[];
  keyTech: string[];
  features: string[];
  demoUrl: string;
  githubUrl?: string;
  accent: string;
  bgGradient: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    id: "rehabos",
    name: "RehabOS",
    shortName: "RehabOS",
    description: "AI-powered rehabilitation tracking platform",
    tagline: "Dual Recovery Index. Physical + cognitive rehab in one score.",
    type: "Fullstack",
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL", "Drizzle ORM", "Express", "React Native", "LangGraph", "Python", "JWT", "Tailwind CSS"],
    keyTech: ["LangGraph", "React Native", "PostgreSQL"],
    features: [
      "Architected a full-stack rehabilitation platform tracking physical (ROM, pain, exercises) and cognitive recovery via a proprietary Dual Recovery Index (DRI) scoring algorithm.",
      "Built a LangGraph AI feedback agent with Python-based facial and speech analyzers for multimodal post-session recovery insights.",
      "Developed an offline-first React Native Expo mobile app with MMKV-backed action queue, syncing sessions automatically on reconnect."
    ],
    demoUrl: "https://github.com/Vansh-Parate/RehabOS",
    githubUrl: "https://github.com/Vansh-Parate/RehabOS",
    accent: "#0ea5e9",
    bgGradient: "from-sky-950/80 via-slate-900 to-black",
    featured: true
  },
  {
    id: "nexus",
    name: "Nexus",
    shortName: "Nexus",
    description: "Startup-Investor Discovery Platform",
    tagline: "ML regression matching across sector, stage, ticket size & idea similarity.",
    type: "Fullstack",
    tech: ["React 19", "TypeScript", "Node.js", "Express", "PostgreSQL", "Prisma", "JWT", "WebSockets", "Tailwind CSS", "Google Gemini API"],
    keyTech: ["Google Gemini", "WebSockets", "Prisma"],
    features: [
      "Built an AI-powered investor matchmaking platform with ML regression scoring across sector, stage, ticket size, and idea similarity, reducing manual discovery effort by ~50%.",
      "Integrated Google Gemini for AI pitch generation and WebSocket notifications, supporting 2 user roles with real-time automated outreach."
    ],
    demoUrl: "https://nexus-startup.vercel.app/",
    githubUrl: "https://github.com/Vansh-Parate/nexus",
    accent: "#8b5cf6",
    bgGradient: "from-violet-950/80 via-slate-900 to-black",
    featured: true
  },
  {
    id: "cultiva",
    name: "Cultiva",
    shortName: "Cultiva",
    description: "Plant Care Assistant",
    tagline: "AI plant identification with disease detection and weather-adaptive care.",
    type: "Fullstack",
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS", "JWT", "Express", "AWS S3", "Google OAuth", "Chart.js"],
    keyTech: ["Plant.ID API", "AWS S3", "Chart.js"],
    features: [
      "Built a full-stack plant care management system integrating Plant.ID API for automated plant identification, reducing disease detection time by 30%.",
      "Engineered a care scheduling system with automated reminders, weather-based watering adjustments, and detailed plant health analytics."
    ],
    demoUrl: "https://cultiva-plant.vercel.app/",
    githubUrl: "https://github.com/Vansh-Parate/cultiva",
    accent: "#10b981",
    bgGradient: "from-emerald-950/80 via-slate-900 to-black",
    featured: true
  },
  {
    id: "acadly-mentor",
    name: "Acadly Mentor",
    shortName: "Acadly",
    description: "Mentorship Platform",
    tagline: "Student-mentor connections with real-time messaging and smart matching.",
    type: "Fullstack",
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL", "Socket.io", "Express", "JWT", "Tailwind CSS"],
    keyTech: ["Socket.io", "PostgreSQL", "JWT"],
    features: [
      "Designed and deployed a mentorship platform enabling secure student-mentor connections with real-time messaging via Socket.io.",
      "Developed search and filtering by skills, experience, and availability with JWT-based auth and profile management."
    ],
    demoUrl: "https://acadly-mentor.vercel.app/",
    githubUrl: "https://github.com/Vansh-Parate/acadly-mentor",
    accent: "#f59e0b",
    bgGradient: "from-amber-950/80 via-slate-900 to-black",
    featured: true
  },
  {
    id: "payease",
    name: "PayEase",
    shortName: "PayEase",
    description: "Payment Processing Platform",
    tagline: "Secure transfers with Mongoose transaction integrity.",
    type: "Backend",
    tech: ["React", "Node.js", "MongoDB", "Tailwind CSS", "JWT", "Mongoose"],
    keyTech: ["MongoDB", "Mongoose", "JWT"],
    features: [
      "Built full-stack payment platform with React frontend and Node.js backend, implementing secure user authentication and account management.",
      "Developed robust transaction handling with Mongoose transaction modules to prevent data inconsistencies and ensure accurate balance transfers."
    ],
    demoUrl: "https://x.com/radeon74055/status/1822940638179975212",
    accent: "#06b6d4",
    bgGradient: "from-cyan-950/80 via-slate-900 to-black",
    featured: false
  },
  {
    id: "travel-blog",
    name: "Travel Blog",
    shortName: "Travel Blog",
    description: "Modern Travel Blog",
    tagline: "Clean, minimal travel content with smooth animations.",
    type: "Frontend",
    tech: ["React", "JavaScript", "Tailwind CSS", "Vercel"],
    keyTech: ["React", "Tailwind CSS", "Vercel"],
    features: [
      "Built a responsive travel blog using React and JavaScript with modern UI/UX design principles and smooth animations."
    ],
    demoUrl: "https://travel-blog-tan-beta.vercel.app/",
    accent: "#f472b6",
    bgGradient: "from-pink-950/80 via-slate-900 to-black",
    featured: false
  },
  {
    id: "pixel-forge",
    name: "Pixel Forge",
    shortName: "Pixel Forge",
    description: "Creative Hackathon Project",
    tagline: "Pixel art and design showcase built at a hackathon.",
    type: "Frontend",
    tech: ["React", "JavaScript", "Tailwind CSS", "Vercel"],
    keyTech: ["React", "JavaScript", "Tailwind CSS"],
    features: [
      "Developed a frontend hackathon project showcasing creative pixel art and design capabilities using React and JavaScript."
    ],
    demoUrl: "https://pixel-forge-chi.vercel.app/",
    accent: "#a78bfa",
    bgGradient: "from-purple-950/80 via-slate-900 to-black",
    featured: false
  }
];
