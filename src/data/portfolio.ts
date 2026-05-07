export const personal = {
    name: "Mohammed Najeeb Alhafidi",
    title: "AI Automation Engineer | Frontend Developer",
    tagline: "Building AI agents, automating workflows, and crafting modern web applications.",
    email: "mnloop2020@gmail.com",
    linkedin: "https://www.linkedin.com/feed/",
    github: "https://github.com/mnloop2020-byte",
    location: "Istanbul, Turkey",
    phone: "+90 534 609 2441",
};

export const about = {
    summary: `AI Automation Engineer with experience building AI agents, RAG systems, and full-stack web applications. Focused on automating business workflows and building real-world solutions using modern technologies.`,
    bio: `I enjoy solving real business problems through intelligent automation and clean, responsive UIs. My focus is on AI agents, n8n workflows, and building SaaS-ready applications that work at scale.`,
    stats: [
        { label: "Years of Learning", value: "3+" },
        { label: "Technologies Used", value: "15+" },
        { label: "Projects Built", value: "6+" },
        { label: "Cups of Coffee", value: "∞" },
    ],
};

export const skills = [
    {
        category: "AI & Automation",
        items: ["AI Agents", "RAG", "LLM APIs", "n8n"],
    },
    {
        category: "Frontend",
        items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
        category: "Backend",
        items: ["Node.js", "Express.js"],
    },
    {
        category: "Database",
        items: ["PostgreSQL", "SQL"],
    },
    {
        category: "Tools & Workflow",
        items: ["Git", "GitHub", "VS Code", "Vercel"],
    },
    {
        category: "Microsoft & Data",
        items: ["Excel", "PowerPoint", "Word"],
    },
];

export const education = [
    {
        title: "B.Sc. Software Engineering",
        institution: "Nişantaşı University — Istanbul, Turkey",
        period: "2023 – 2027 (Expected)",
        description: "Studying software engineering fundamentals, algorithms, databases, and modern web development.",
        type: "education" as const,
    },
    {
        title: "Turkish Language Program",
        institution: "Altınbaş University — Istanbul, Turkey",
        period: "2022 – 2023",
        description: "Completed an intensive Turkish language program at Altınbaş University.",
        type: "education" as const,
    },
    {
        title: "Turkish Language Program",
        institution: "Istanbul Sabahattin Zaim University — Istanbul, Turkey",
        period: "2021 – 2022",
        description: "Completed a Turkish language program at Istanbul Sabahattin Zaim University.",
        type: "education" as const,
    },
    {
        title: "Modern Frontend Development",
        institution: "Online Course",
        period: "2024",
        description: "Advanced frontend tooling, TypeScript, Tailwind CSS, Vite, and production-ready workflows.",
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
        title: "JavaScript Development",
        institution: "Online Course",
        period: "2023",
        description: "Deep dive into modern JavaScript including ES6+, DOM manipulation, async programming, and OOP.",
        type: "certification" as const,
    },
    {
        title: "Web Development Fundamentals",
        institution: "Online Course",
        period: "2022",
        description: "Covered the core building blocks of the web: HTML, CSS, and JavaScript from the ground up.",
        type: "certification" as const,
    },
];

export type ProjectLinkType = "live" | "github";
export type ProjectCategory = "GitHub" | "Web" | "Excel" | "Dashboard";

export const projects = [
    {
        id: 1,
        title: "AI Customer Agent (SaaS Platform)",
        description: "A SaaS platform for automating customer support and sales. Includes an operational dashboard, AI decision workflow, lead management, and a customer-facing chat API.",
        tools: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS"],
        category: "Web" as ProjectCategory,
        linkType: "live" as ProjectLinkType,
        liveUrl: "https://ai-customer-agent-beige.vercel.app/",
        githubUrl: "https://github.com/mnloop2020-byte/ai-customer-agent",
        featured: true,
    },
    {
        id: 2,
        title: "Find My AI",
        description: "A smart discovery platform that helps users find the right AI tools for their needs. Browse, filter, and explore AI tools by category and use case.",
        tools: ["React", "TypeScript", "Tailwind CSS"],
        category: "Web" as ProjectCategory,
        linkType: "live" as ProjectLinkType,
        liveUrl: "https://find-my-ai-gold.vercel.app/",
        githubUrl: "https://github.com/mnloop2020-byte",
        featured: true,
    },
    {
        id: 3,
        title: "Education Management System",
        description: "A full-stack LMS platform with user authentication, course management, and student progress tracking. Built with a RESTful API and a fully responsive frontend.",
        tools: ["React", "TypeScript", "Node.js", "Express", "SQL", "Tailwind CSS"],
        category: "Web" as ProjectCategory,
        linkType: "live" as ProjectLinkType,
        liveUrl: "https://edu-management-system-virid.vercel.app/landing",
        githubUrl: "https://github.com/mnloop2020-byte/edu-management-system",
        featured: true,
    },
    {
        id: 4,
        title: "WhatsApp AI Agent (Multi-Tenant)",
        description: "A professional multi-tenant WhatsApp AI agent with persistent memory, voice transcription, image analysis, and smart reminders. Built with n8n and Google Gemini.",
        tools: ["n8n", "Google Gemini", "Supabase", "Redis", "JavaScript"],
        category: "GitHub" as ProjectCategory,
        linkType: "github" as ProjectLinkType,
        liveUrl: "",
        githubUrl: "https://github.com/mnloop2020-byte/whatsapp-ai-agent-n8n",
        featured: false,
    },
    {
        id: 5,
        title: "Agentic RAG Assistant",
        description: "An AI agent powered by Retrieval-Augmented Generation that answers questions from documents with high accuracy using vector search and LLM APIs.",
        tools: ["Node.js", "RAG", "LLM APIs", "JavaScript"],
        category: "GitHub" as ProjectCategory,
        linkType: "github" as ProjectLinkType,
        liveUrl: "",
        githubUrl: "https://github.com/mnloop2020-byte/Agentic-rag-assistant",
        featured: false,
    },
    {
        id: 6,
        title: "n8n Employee Attendance Tracker",
        description: "Automated the full employee attendance workflow using n8n, eliminating manual data entry and providing real-time notifications and reporting.",
        tools: ["n8n", "Automation", "SQL"],
        category: "GitHub" as ProjectCategory,
        linkType: "github" as ProjectLinkType,
        liveUrl: "",
        githubUrl: "https://github.com/mnloop2020-byte/n8n-employee-attendance-tracker",
        featured: false,
    },
];

export const experience = [
    {
        role: "Freelance Frontend & AI Developer",
        company: "Independent · Remote",
        period: "2023 – Present",
        description: "Building AI-powered applications, automation workflows, and full-stack web projects for real-world use cases.",
        highlights: [
            "Built React frontends with Tailwind CSS for SaaS and automation platforms",
            "Developed Node.js/Express backends with RESTful APIs and SQL databases",
            "Built AI agents and RAG systems integrated with LLM APIs",
            "Automated business workflows using n8n",
        ],
    },
    {
        role: "Full-Stack & AI Development",
        company: "Node.js · Next.js · AI Agents",
        period: "2024 – Present",
        description: "Expanding into full-stack development and AI integration, building production-ready SaaS projects.",
        highlights: [
            "Built multi-tenant SaaS platforms with Next.js and Prisma",
            "Integrated AI APIs including Google Gemini and OpenAI Whisper",
            "Designed n8n automation workflows with Redis and Supabase",
            "Deployed projects on Vercel with Docker for local development",
        ],
    },
    {
        role: "React & Modern Frontend",
        company: "React · TypeScript · Tailwind",
        period: "2023 – 2024",
        description: "Focused on modern frontend development using React, TypeScript, and professional developer tooling.",
        highlights: [
            "Built component-driven React applications with TypeScript",
            "Adopted Tailwind CSS and Vite for fast, responsive UIs",
            "Learned Git workflows and professional deployment with Vercel",
        ],
    },
    {
        role: "Frontend Foundation",
        company: "HTML · CSS · JavaScript",
        period: "2022 – 2023",
        description: "Mastered the core technologies of frontend development to build a solid foundation.",
        highlights: [
            "Built multiple static and dynamic web pages",
            "Learned responsive design and modern CSS",
            "Completed structured JavaScript courses (ES6+, DOM, async)",
        ],
    },
];

export const contact = {
    heading: "Let's Work Together",
    subheading: "I'm open to freelance projects, full-time opportunities, and collaborations. Feel free to reach out anytime.",
};
