// ============================================================
// PORTFOLIO DATA — Mohammed Alhfidi
// ============================================================

export const personal = {
  name: "Mohammed Alhfidi",
  title: "Software Engineer | Web Developer",
  tagline: "Building modern web applications and exploring the future of artificial intelligence.",
  email: "mnloop2020@gmail.com",
  linkedin: "https://www.linkedin.com/feed/",
  github: "https://github.com/The-enginner",
  location: "Turkey",
  phone: "",
};

export const about = {
  summary: `I am a motivated software developer with a strong passion for building modern web applications and exploring artificial intelligence technologies. Over the past three years, I have been continuously developing my skills in both frontend and backend development, focusing on technologies such as JavaScript, React, and TypeScript.`,
  bio: `I enjoy building real-world projects, solving technical challenges, and learning new technologies that help create efficient and scalable applications. My long-term goal is to become a highly skilled software engineer capable of developing impactful digital products and intelligent systems.`,
  stats: [
    { label: "Years of Learning", value: "3+" },
    { label: "Technologies Used", value: "15+" },
    { label: "Projects Built", value: "10+" },
    { label: "Cups of Coffee", value: "∞" },
  ],
};

export const skills = [
  {
    category: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "React", "TypeScript"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js"],
  },
  {
    category: "Tools & Workflow",
    items: ["Git", "GitHub", "VS Code", "Figma", "Automations n8n"],
  },
  {
    category: "Microsoft & Data",
    items: ["Excel", "PowerPoint", "Word", "Data Analysis"],
  },
];

export const education = [
  {
    title: "Software Engineering",
    institution: "Self-Study & Online Platforms",
    period: "2022 – Present",
    description: "Continuously learning software engineering principles and modern web technologies through practical projects and structured online courses.",
    type: "education" as const,
  },
  {
    title: "Web Development Fundamentals",
    institution: "Online Course",
    period: "2022",
    description: "Covered the core building blocks of the web: HTML, CSS, and JavaScript from the ground up.",
    type: "certification" as const,
  },
  {
    title: "JavaScript Development",
    institution: "Online Course",
    period: "2023",
    description: "Deep dive into modern JavaScript including ES6+, DOM manipulation, async programming, and OOP.",
    type: "certification" as const,
  },
  {
    title: "React Development",
    institution: "Online Course",
    period: "2023",
    description: "Built modern interactive UIs using React, hooks, component architecture, and state management.",
    type: "certification" as const,
  },
  {
    title: "Modern Frontend Development",
    institution: "Online Course",
    period: "2024",
    description: "Advanced frontend tooling, TypeScript, Tailwind CSS, Vite, and production-ready workflows.",
    type: "certification" as const,
  },
];

export type ProjectCategory = "GitHub" | "Web" | "Excel" | "Dashboard";

export const projects = [
  {
    id: 1,
    title: "Coming Soon — Web Project",
    description: "A real-world web application project currently in development. Built with React and TypeScript. Will be published soon.",
    tools: ["React", "TypeScript", "Tailwind CSS"],
    category: "Web" as ProjectCategory,
    link: "https://github.com/The-enginner",
    featured: true,
  },
  {
    id: 2,
    title: "Coming Soon — React App",
    description: "An interactive React application exploring component-driven architecture and state management patterns.",
    tools: ["React", "JavaScript", "CSS"],
    category: "GitHub" as ProjectCategory,
    link: "https://github.com/The-enginner",
    featured: false,
  },
  {
    id: 3,
    title: "Coming Soon — AI Tool",
    description: "Experimenting with integrating AI tools and APIs into web platforms. Part of an ongoing exploration into intelligent web applications.",
    tools: ["JavaScript", "React", "AI APIs"],
    category: "Web" as ProjectCategory,
    link: "https://github.com/The-enginner",
    featured: true,
  },
  {
    id: 4,
    title: "Coming Soon — Excel Analysis",
    description: "A data analysis project using Excel and Power Query to organize, clean, and visualize structured data.",
    tools: ["Excel", "Power Query", "Charts"],
    category: "Excel" as ProjectCategory,
    link: "https://github.com/The-enginner",
    featured: false,
  },
];

export const experience = [
  {
    role: "Started Learning Programming",
    company: "Self-Study Journey",
    period: "3 Years Ago",
    description: "Began the journey into programming and web development with a strong curiosity about how software and websites are built.",
    highlights: [
      "Learned the fundamentals of programming logic",
      "Explored how the web works at its core",
      "Committed to a long-term self-directed learning path",
    ],
  },
  {
    role: "Frontend Foundation",
    company: "HTML · CSS · JavaScript",
    period: "2022 – 2023",
    description: "Focused on mastering the core technologies of frontend development to build a solid and reliable foundation.",
    highlights: [
      "Built multiple static and dynamic web pages",
      "Learned responsive design and modern CSS",
      "Completed structured JavaScript courses",
    ],
  },
  {
    role: "React & Modern Frontend",
    company: "React · TypeScript · Tooling",
    period: "2023 – 2024",
    description: "Moved into modern frontend development by learning React, TypeScript, and professional developer tooling.",
    highlights: [
      "Built component-driven React applications",
      "Adopted TypeScript for type-safe development",
      "Learned Vite, Tailwind CSS, and Git workflows",
    ],
  },
  {
    role: "Full-Stack & AI Exploration",
    company: "Node.js · Express · AI Tools",
    period: "2024 – Present",
    description: "Currently building real-world projects, improving full-stack development skills, and exploring artificial intelligence integration in web platforms.",
    highlights: [
      "Learning Node.js and Express for backend development",
      "Exploring AI APIs and LLM integration",
      "Building portfolio projects to demonstrate skills",
    ],
  },
];

export const contact = {
  heading: "Let's Work Together",
  subheading: "I'm open to freelance projects, full-time opportunities, and collaborations. Feel free to reach out anytime.",
};