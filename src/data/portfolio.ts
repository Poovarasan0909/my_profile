export interface PortfolioData {
  name: string;
  title: string;
  summary: string;
  resumeLink: string;
  socialLinks: {
    linkedin: string;
    github: string;
    portfolio: string;
  };
  contact: {
    location: string;
    phone: string;
    email: string;
  };
  languages: string[];
  technicalSkills: {
    backend: string[];
    frontend: string[];
    database: string[];
    versionControl: string[];
    toolsAndPlatforms: string[];
    frameworksAndLibraries: string[];
    softSkills: string[];
  };
  experience: {
    company: string;
    role: string;
    period: string;
    description: string;
    responsibilities: string[];
  }[];
  projects: {
    name: string;
    description: string[];
    stack: string;
  }[];
  achievements: string[];
  education: {
    degree: string;
    institution: string;
    period: string;
  }[];
}

export const portfolioData: PortfolioData = {
  name: "Poovarasan M",
  title: "Full Stack Developer",
  summary: "Full Stack Developer with 2.6 years of experience in developing, designing and deploying scalable web applications. Proficient in frontend and backend technologies including Java, Spring Boot, React.js, TypeScript, and PostgreSQL. Skilled in building robust admin interfaces using React-Admin. Contributed to fintech and AI-based projects, particularly in the Merchant Cash Advance (MCA) domain, improving financial workflows and overall system performance. Passionate about clean code, performance optimization, and business-driven development.",
  resumeLink: "/Poovarasan_Resume_cv.pdf",
  socialLinks: {
    linkedin: "https://linkedin.com/in/poovarasan-m-50341b20b",
    github: "https://github.com/Poovarasan0909",
    portfolio: "https://poovarasan.dev",
  },
  contact: {
    location: "Bengaluru",
    phone: "+91-9344146625",
    email: "poovarasanm0909@gmail.com",
  },
  languages: ["English", "Tamil"],
  technicalSkills: {
    backend: ["Java", "Spring Boot", "Node.js", "Hibernate", "REST APIs"],
    frontend: ["React.js", "React-Admin", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
    database: ["PostgreSQL", "MongoDB (basic)"],
    versionControl: ["Git", "GitHub", "Bitbucket"],
    toolsAndPlatforms: ["IntelliJ IDEA", "VS Code", "Postman", "Maven", "Docker (basic)"],
    frameworksAndLibraries: ["React-Admin", "OpenXava", "Redux"],
    softSkills: ["Debugging", "Troubleshooting", "Team Collaboration", "Clean Code Practices"],
  },
  experience: [
    {
      company: "MAHASWAMI SOFTWARE PRIVATE LIMITED",
      role: "Full Stack Developer",
      period: "Dec 2021 – Present",
      description: "A software development company specializing in business web applications.",
      responsibilities: [
        "Designed and developed full-stack modules using Spring Boot and React.js.",
        "Built and consumed RESTful APIs for internal and third-party integrations.",
        "Boosted backend performance by 25% by optimizing queries and reducing data load.",
        "Utilized PostgreSQL for data modeling, integrity enforcement, and indexing.",
        "Applied React Hooks, conditional rendering, and reusable component design for better UI state management.",
        "Used Git, GitHub, and Bitbucket for version control and collaborative development.",
      ],
    },
  ],
  projects: [
    {
      name: "🔹 MCA – Merchant Cash Advance",
      description: [
        "Contributed to a web application that facilitates payment processing for businesses.",
        "Ensured secure data exchange and efficient transaction processing through REST APIs.",
        "Improved user experience and backend reliability across financial workflows.",
      ],
      stack: "Java, Spring Boot, React.js and PostgreSQL",
    },
    {
      name: "🔹 Coach Chess AI",
      description: [
        "An AI-powered coaching platform to enhance chess learning and analysis.",
        "Built admin dashboards and user interfaces using React.js and React-Admin.",
        "Integrated AI features to analyze games and suggest optimal moves for students.",
      ],
      stack: "React.js, React-Admin, Ts, Js, Spring Boot",
    },
  ],
  achievements: [
    "Optimized backend logic and queries, reducing API response times by 40% in high-traffic modules.",
    "Built scalable modules for processing high-volume data and generating dynamic documents in various formats.",
    "Enhanced admin panel usability by building dynamic, filterable views using React-Admin.",
    "Reduced bug resolution time through improved logging and debugging strategies.",
    "Collaborated across cross-functional teams, ensuring timely sprint deliveries and smooth CI/CD.",
    "Participated in code reviews and improved code quality through consistent feedback, resulting in cleaner and more testable codebase.",
  ],
  education: [
    {
      degree: "Bachelor of Computer Applications (BCA) – Data Science",
      institution: "SRM University – Online",
      period: "July 2023 – Present (final year)",
    },
    {
      degree: "Diploma in Computer Science Engineering",
      institution: "KET Polytechnic College",
      period: "June 2018 – July 2021",
    },
  ],
};
