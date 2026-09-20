export const portfolioData = {
  personal: {
    name: "Nguyen Huy Hung",
    nickname: "YiSuS",
    title: "Technical Engineer",
    email: "yisus.nhh.dev@gmail.com",
    phone: "0967 622 166",
    github: "https://github.com/YiSuSNHH",
    linkedin: "https://www.linkedin.com/in/yisus-nhh",
    location: "Ho Chi Minh City, Vietnam",
  },

  about: {
    summary:
      "Technical Engineer with 4+ years of experience bridging business vision and engineering execution across educational technology and financial management platforms. Expert in gathering and analyzing stakeholder requirements, drafting functional & technical specifications, user stories, use cases, process flows, and data models while designing resilient backend architectures with PHP/Laravel and Java/Spring Boot.",
    focus:
      "I bridge business needs and software delivery through clear technical specifications, domain modeling, process flows, and robust system architecture.",
    availability: "Open to Technical Engineering and Platform Architecture opportunities.",
  },

  metrics: [
    { value: "4+ years", label: "Technical Engineering" },
    { value: "EdTech & Finance", label: "Domain expertise" },
    { value: "Specs & Architecture", label: "Core engineering focus" },
  ],

  skills: {
    languages: [
      { name: "PHP", level: "Strong", frameworks: ["Laravel", "Lumen"] },
      { name: "Java", level: "Strong", frameworks: ["Spring Boot"] },
      {
        name: "JavaScript / TypeScript",
        level: "Working",
        frameworks: ["React", "Next.js", "Vue.js", "Nuxt.js"],
      },
    ],
    databases: ["PostgreSQL", "MySQL", "MongoDB"],
    architecture: [
      "Requirements Engineering",
      "Functional & Technical Specs",
      "Process Flows & Data Modeling",
      "Domain-Driven Design",
      "Hexagonal Architecture",
      "Clean Architecture",
      "Modular Monolith",
      "Event-Driven Architecture",
      "EAV Model",
    ],
    engineering: [
      "User Stories & Use Cases",
      "OOP",
      "SOLID",
      "Design Patterns",
      "RESTful API",
      "Authentication & Authorization",
    ],
    security: ["OAuth2", "JWT", "Spring Security", "Method-level Authorization"],
    tools: [
      "Git",
      "GitHub",
      "GitLab",
      "Docker",
      "Linux",
      "Jira",
      "Maven",
      "Neovim",
      "PhpStorm",
      "VS Code",
    ],
  },

  featuredProjects: [
    {
      name: "SLC (Student Life Cycle)",
      context: "Onschool Edtech Group",
      role: "Technical Engineer / Tech Lead",
      tech: "Java 21, Spring Boot, Next.js, PostgreSQL",
      summary:
        "Authored technical specifications and led architecture for a student lifecycle platform covering enrollment, academic progress, fee status, and permission workflows.",
      highlights: [
        "Gathered requirements, drafted functional/technical specs, and designed multi-module Spring Boot backend using DDD & Clean Architecture.",
        "Modeled domain rules across enrollment, academic progress, fee status, and permission boundaries.",
      ],
    },
    {
      name: "SRM System (Student Management)",
      context: "Onschool Edtech Group",
      role: "Technical Engineer / Tech Lead",
      tech: "Lumen, Laravel, React, Nuxt.js, PostgreSQL",
      summary:
        "Translated operational requirements into technical specifications and built student management services across finance and admin flows.",
      highlights: [
        "Designed a modular backend structure with shared platform components, repositories, hydrators, and event dispatching.",
        "Built finance-related transaction flows, push notifications, and operational integrations for internal teams.",
      ],
    },
    {
      name: "Financial Management Platform",
      context: "Freelance",
      role: "Technical Engineer",
      tech: "Laravel, React, MongoDB",
      summary:
        "Designed flexible data models and built a modular finance platform aligned with dynamic client business requirements.",
      highlights: [
        "Implemented a PSR-compliant PHP core to keep business logic reusable across modules.",
        "Used an EAV model and event-driven workflows with NATS for flexible attributes and async processing.",
      ],
    },
  ],

  experience: [
    {
      company: "Onschool Edtech Group",
      role: "Technical Engineer",
      period: "11/2022 - Present",
      location: "Ho Chi Minh City, Vietnam",
      summary:
        "Gathered, analyzed, and documented business and technical requirements across core educational platforms. Translated stakeholder needs into specifications, user stories, process flows, and data models while leading system architecture and backend engineering. Tech Lead for SLC and for SRMA in a later phase.",
      achievements: [
        "Gather, analyze, and document business and technical requirements from stakeholders across educational technology workflows.",
        "Translate business needs into clear functional and technical specifications, user stories, use cases, process flows, and data models.",
        "Ensure requirements are complete, feasible, and strictly aligned with business objectives.",
        "Led solution design and backend architecture for student lifecycle and student management platforms using Domain-Driven Design (DDD), Hexagonal Architecture, and Clean Architecture.",
        "Implemented Backend-for-Frontend (BFF) authentication patterns (OAuth2 for third-party integrations, JWT for internal services) and method-level authorization with Spring Security.",
        "Designed and operated blue-green deployment process for production releases, enabling zero-downtime deployment and safer rollback.",
        "Improved backend performance and system observability by optimizing database access, preventing N+1 queries, and adding structured logging and tracing.",
        "Reverse-engineered Moodle's Frankenstyle autoloading mechanism and developed local plugins with external functions and web service APIs.",
        "Collaborated with stakeholders, delivered user training sessions, and supported cross-functional team coordination during implementation phases.",
      ],
      projects: [
        {
          name: "SLC (Student Life Cycle)",
          tech: "Java 21, Spring Boot, Next.js, PostgreSQL",
          highlights: [
            "Gathered requirements from stakeholders and authored functional & technical specifications for student lifecycle management.",
            "Designed a multi-module Spring Boot backend using Domain-Driven Design, Hexagonal Architecture, and Clean Architecture.",
            "Applied DDD to model student lifecycle, enrollment, academic progress, fee status, and permission-related business rules.",
            "Implemented a Backend-for-Frontend pattern with service-specific authentication (OAuth2 & JWT) and custom PermissionEvaluator.",
            "Operated blue-green deployment process for production releases.",
          ],
        },
        {
          name: "SRM System (Student Management)",
          tech: "Lumen, Laravel, React, Nuxt.js, PostgreSQL",
          highlights: [
            "Translated operational business requirements into technical specs and a Modular Monolith architecture.",
            "Designed shared platform core components, base entities, repositories, hydrators, and event dispatching.",
            "Built finance-related transaction workflows, push notifications, and secure operational data handling.",
            "Improved backend performance and observability by optimizing database queries and adding structured logging/tracing.",
          ],
        },
        {
          name: "Moodle Integration",
          tech: "PHP, Moodle Plugin Development",
          highlights: [
            "Designed external function APIs and local plugins to integrate core LMS capabilities with business workflows.",
            "Worked directly with integration points used by educational operations.",
          ],
        },
      ],
      techStack: [
        "Requirements Engineering",
        "Technical Specifications",
        "Java",
        "Spring Boot",
        "Laravel",
        "Lumen",
        "React",
        "Next.js",
        "Nuxt.js",
        "PostgreSQL",
        "Firebase",
        "Moodle",
      ],
    },
    {
      company: "Freelance",
      role: "Technical Engineer",
      period: "2022 - Present",
      location: "Remote",
      summary:
        "Delivered end-to-end technical engineering for finance platforms, from requirement specification and data modeling to modular implementation.",
      achievements: [
        "Analyzed business requirements and defined flexible data models using an Entity-Attribute-Value (EAV) structure.",
        "Built modular Laravel systems with a PSR-compliant PHP core for shared business logic.",
        "Implemented event-driven workflows with NATS for asynchronous transaction processing and notifications.",
        "Improved frontend loading experience through lazy loading and client-side rendering optimizations.",
      ],
      projects: [
        {
          name: "Financial Management Platform",
          tech: "Laravel, React, MongoDB",
          highlights: [
            "Translated client finance workflows into clear technical specifications and a modular architecture.",
            "Designed flexible financial entities using an Entity-Attribute-Value model to support dynamic business attributes.",
            "Implemented event-driven workflows with NATS for asynchronous processing and real-time finance notifications.",
          ],
        },
      ],
      techStack: [
        "Laravel",
        "React",
        "MongoDB",
        "PostgreSQL",
        "NATS",
      ],
    },
  ],

  education: {
    school: "Hanoi Open University",
    degree: "Bachelor of Engineering",
    major: "Software Technology",
    period: "2019 - 2024",
  },

  lookingFor: [
    "Technical Engineering and Architecture roles with clear end-to-end requirement ownership.",
    "Teams that value clear specifications, Domain-Driven Design, and maintainable software execution.",
    "Products where I can bridge business vision and engineering implementation.",
  ],
};

export type PortfolioData = typeof portfolioData;
