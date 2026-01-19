export const portfolioData = {
  personal: {
    name: "Nguyen Huy Hung",
    nickname: "YiSuS",
    title: "Software Engineer",
    email: "yisus.nhh.dev@gmail.com",
    phone: "0967 622 166",
    github: "https://github.com/YiSuSNHH",
    linkedin: "https://www.linkedin.com/in/yisus-nhh",
    location: "Hanoi, Vietnam",
  },

  about: {
    summary:
      "Software Engineer with 3+ years of experience specializing in educational technology and financial platforms. I design and build scalable backend systems using PHP/Laravel and Java/Spring Boot with a strong foundation in Domain-Driven Design (DDD) and clean architecture principles.",
    passion: "Passionate about creating well-structured, maintainable code.",
  },

  skills: {
    languages: [
      { name: "PHP", level: "Primary", frameworks: ["Laravel", "Lumen"] },
      { name: "Java", level: "Proficient", frameworks: ["Spring Boot"] },
      {
        name: "JavaScript/TypeScript",
        level: "Proficient",
        frameworks: ["Vue.js", "React", "Next.js", "Nuxt.js"],
      },
    ],
    databases: ["MySQL", "PostgreSQL", "MongoDB"],
    architecture: [
      "Domain-Driven Design (DDD)",
      "Hexagonal Architecture / Clean Architecture",
      "Event-Driven Architecture",
      "Modular Monolith",
      "MVC",
    ],
    principles: ["OOP", "SOLID", "EAV Model"],
    tools: [
      "Git (GitHub, GitLab)",
      "Jira",
      "Docker",
      "Swoole",
      "Linux (Arch)",
      "Neovim",
      "PHPStorm",
      "VSCode",
    ],
  },

  experience: [
    {
      company: "Onschool Edtech Group",
      role: "Software Engineer",
      period: "2022 – Present",
      location: "Hanoi",
      projects: [
        {
          name: "Student Life Cycle",
          tech: "Java 21, Spring Boot",
          highlights: [
            "Architected DDD + Hexagonal multi-module Maven project with pure domain layer (entities, value objects, domain services)",
            "Designed infrastructure layer separation: platform/core, platform/infrastructure, application layer",
            "Implemented JWT authentication with Spring Security and custom PermissionEvaluator for method-level authorization",
            "Configured Flyway migrations and SpringDoc OpenAPI for API documentation",
          ],
        },
        {
          name: "SRM System",
          tech: "Lumen, Swoole",
          highlights: [
            "Built high-performance async backend with Lumen + Swoole",
            "Designed Modular Monolith architecture with composer-merge-plugin",
            "Created platform core layer: Entity base class, Repository pattern, Hydrator, EventDispatcher",
            "Implemented Actions pattern (Use Cases) with DTOs and self-hydration for entity mapping",
            "Integrated Firebase push notifications and QR Bank payment APIs",
          ],
        },
        {
          name: "Student Management System",
          tech: "Laravel",
          highlights: [
            "Developed modular architecture for class management, financial processing, and reporting",
          ],
        },
        {
          name: "Moodle Integration",
          tech: "PHP, Moodle",
          highlights: [
            "Reverse-engineered Moodle autoload mechanism (Frankenstyle naming convention)",
            "Developed local plugin with external functions and web service APIs",
          ],
        },
      ],
      techStack: [
        "Java/Spring Boot",
        "Laravel",
        "Lumen",
        "Swoole",
        "Nuxt.js",
        "Next.js",
        "MySQL",
        "PostgreSQL",
        "Firebase",
        "Moodle",
      ],
    },
    {
      company: "Freelance",
      role: "Software Engineer",
      period: "2021 – Present",
      location: "Remote",
      projects: [
        {
          name: "Financial Management Platform",
          tech: "Laravel",
          highlights: [
            "Built a complete financial software solution with document processing and order management",
            "Integrated complex business workflows for financial operations",
          ],
        },
        {
          name: "Skeleton Platform (Low-Code)",
          tech: "Laravel, React, MongoDB",
          highlights: [
            "Architected a low-code platform using Entity-Attribute-Value (EAV) model",
            "Implemented Domain-Driven Design patterns with PSR-compliant PHP core",
            "Built event-driven architecture with NATS Server as message broker for real-time notifications",
            "Implemented lazy loading for optimized image performance",
          ],
        },
      ],
      techStack: [
        "Laravel",
        "Inertia.js",
        "React",
        "MongoDB",
        "PostgreSQL",
        "NATS Server",
      ],
    },
  ],

  education: {
    school: "Hanoi Open University (HOU)",
    degree: "Bachelor of Engineering",
    major: "Software Technology",
    period: "2019 – 2024",
  },

  softSkills: [
    { icon: "💬", name: "Clear Communication" },
    { icon: "👥", name: "Team Collaboration" },
    { icon: "🧩", name: "Problem Solving" },
    { icon: "⏰", name: "Time Management" },
    { icon: "🎯", name: "Leadership" },
    { icon: "💡", name: "Creative Thinking" },
  ],

  lookingFor: [
    "Learn from senior engineers and improve my technical depth",
    "Apply and refine my knowledge of DDD and clean architecture in production systems",
    "Contribute to well-structured codebases with code reviews and engineering standards",
    "Grow as a backend engineer in a collaborative environment",
  ],
};

export type PortfolioData = typeof portfolioData;
