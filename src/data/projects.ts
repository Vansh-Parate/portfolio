export const projects = [
  {
    id: "rehabos",
    name: "RehabOS - AI Rehabilitation Platform",
    description: "AI-powered rehabilitation tracking platform with Dual Recovery Index",
    type: "Fullstack",
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL", "Drizzle ORM", "Express", "React Native", "Expo", "LangGraph", "Python", "JWT", "Tailwind CSS"],
    features: [
      "Architected a full-stack rehabilitation platform tracking physical (ROM, pain, exercises) and cognitive recovery via a proprietary Dual Recovery Index (DRI) scoring algorithm across both domains.",
      "Built a LangGraph AI feedback agent with Python-based facial and speech analyzers for multimodal post-session recovery insights.",
      "Developed an offline-first React Native Expo mobile app with MMKV-backed action queue, syncing sessions automatically on reconnect."
    ],
    demoUrl: "https://github.com/Vansh-Parate/RehabOS"
  },

  {
    id: "nexus",
    name: "Nexus - Startup-Investor Discovery Platform",
    description: "AI-powered startup and investor matchmaking platform",
    type: "Fullstack",
    tech: ["React 19", "TypeScript", "Node.js", "Express", "PostgreSQL", "Prisma", "JWT", "WebSockets", "Tailwind CSS", "Google Gemini API"],
    features: [
      "Built an AI-powered investor matchmaking platform with ML regression scoring across sector, stage, ticket size, and idea similarity, reducing manual discovery effort by ~50%.",
      "Integrated Google Gemini for AI pitch generation and WebSocket notifications, supporting 2 user roles with real-time automated outreach."
    ],
    demoUrl: "https://nexus-startup.vercel.app/"
  },

  {
    id: "Cultiva",
    name: "Cultiva - Plant Care Assistant",
    description: "A comprehensive plant care management platform",
    type: "Fullstack",
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS", "JWT", "Express", "AWS S3", "Google OAuth", "Chart.js"],
    features: [
      "Developed comprehensive plant care management platform with React/TypeScript frontend and Node.js backend, featuring plant identification using Plant.ID API integration.",
      "Implemented advanced plant health monitoring system with disease detection, treatment recommendations, and interactive diagnostic workflows to help users maintain healthy plants.",
      "Built robust care scheduling system with automated reminders, weather-based watering adjustments, and detailed plant health analytics with visual trend charts."
    ],
    demoUrl: "http://cultiva-plant.vercel.app/",
    image: "/cultiva.jpg"
  },
  
  {
    id: "acadly-mentor",
    name: "Acadly Mentor",
    description: "A mentorship platform connecting students with experienced mentors",
    type: "Fullstack",
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS", "JWT", "Express"],
    features: [
      "Built a comprehensive mentorship platform with React/TypeScript frontend and Node.js backend for connecting students with experienced mentors.",
      "Implemented user authentication, profile management, and real-time messaging system for seamless mentor-student communication.",
      "Developed advanced search and filtering capabilities to help users find the perfect mentor based on skills, experience, and availability."
    ],
    demoUrl: "https://acadly-mentor.vercel.app/",
    image: "/acadly-mentor.png"
  },

  {
    id: "travel-blog",
    name: "Travel Blog",
    description: "A modern travel blog showcasing destinations and experiences",
    type: "Frontend",
    tech: ["React", "JavaScript", "Tailwind CSS", "Vercel"],
    features: [
      "Built a responsive travel blog using React and JavaScript with modern UI/UX design principles and smooth animations.",
      "Implemented clean, minimalist design with focus on readability and visual appeal for travel content and photography.",
      "Deployed on Vercel with optimized performance."
    ],
    demoUrl: "https://travel-blog-tan-beta.vercel.app/"
  },

  {
    id: "pixel-forge",
    name: "Pixel Forge",
    description: "A creative hackathon project focused on pixel art and design",
    type: "Frontend",
    tech: ["React", "JavaScript", "Tailwind CSS", "Vercel"],
    features: [
      "Developed a frontend-only hackathon project showcasing creative pixel art and design capabilities using React and JavaScript.",
      "Implemented interactive UI components with smooth animations and modern design principles for an engaging user experience.",
      "Built responsive design with Tailwind CSS ensuring optimal viewing across different devices and screen sizes."
    ],
    demoUrl: "https://pixel-forge-chi.vercel.app/"
  },

  {
    id: "payease",
    name: "Payment Website",
    description: "A comprehensive payment processing platform",
    tech: ["React", "Node.js", "MongoDB", "Tailwind CSS", "JWT", "Postman", "Mongoose"],
    type: "Backend",
    features: [
      "Built full-stack web application with React frontend and Node.js backend, implementing secure user authentication and account management system.",
      "Developed robust transaction handling with Mongoose transaction modules to prevent data inconsistencies and ensure accurate balance transfers.",
      "Designed RESTful API architecture with separate user and account routes, extensively testing endpoints and debugging integration issues."
    ],
    demoUrl: "https://x.com/radeon74055/status/1822940638179975212"
  },
  
]
