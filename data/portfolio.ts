export const portfolioData = {
  personal: {
    name: "Nguyen Huy Hung",
    nickname: "YiSuS",
    title: "Software Engineer",
    email: "yisus.nhh.dev@gmail.com",
    phone: "0967 622 166",
    github: "https://github.com/YiSuSNHH",
    linkedin: "https://www.linkedin.com/in/yisus-nhh",
    location: "Ho Chi Minh City, Vietnam",
  },

  about: {
    summary:
      "Software Engineer with 4+ years of hands-on experience designing, refactoring, and optimizing large-scale systems across EdTech and Finance. Specialized in Java 21 / Spring Boot, PHP / Laravel, Python / Airflow, and Bun / Hono 4. Proven track record in building automated data pipelines (Apache Airflow, PostgreSQL 16 OAA/APM DBs), solving complex performance bottlenecks (asynchronous batch downloads, N+1 query elimination, O(1) API algorithm optimizations, on-demand image resizing), and delivering OpenAPI 3 compliant microservices.",
    focus:
      "I engineer resilient backend systems, build automated data pipelines (Python/Airflow), optimize PostgreSQL 16 databases, and develop high-performance APIs (Bun/Hono 4, Spring Boot).",
    availability: "Open to Software Engineer and Technical Lead roles.",
  },

  metrics: [
    { value: "4+ years", label: "Software Engineering" },
    { value: "Java 21, PHP, Python, Bun", label: "Core Stack" },
    { value: "PostgreSQL 16 & Airflow", label: "Data & Systems" },
  ],

  skills: {
    languages: [
      { name: "Java (Java 21)", level: "Strong", frameworks: ["Spring Boot", "Spring Security", "Spring Data JPA"] },
      { name: "PHP", level: "Strong", frameworks: ["Laravel", "Lumen"] },
      { name: "TypeScript / JavaScript", level: "Strong", frameworks: ["Bun 1.3+", "Hono 4 (REST + OpenAPI 3)", "Next.js", "React", "Nuxt.js"] },
      { name: "Python", level: "Working", frameworks: ["Apache Airflow"] },
    ],
    databases: ["PostgreSQL 16 (OAA & APM DBs)", "MySQL", "MongoDB"],
    architecture: [
      "Domain-Driven Design (DDD)",
      "Modular Monolith",
      "Hexagonal Architecture",
      "Clean Architecture",
      "Backend-for-Frontend (BFF)",
      "Event-Driven Architecture (NATS)",
      "RESTful API & OpenAPI 3 Specification",
    ],
    engineering: [
      "Apache Airflow DAGs & Data Pipelines",
      "SQL Query Optimization & Indexing",
      "N+1 Query Elimination",
      "Asynchronous Batch Download",
      "On-demand Image Resizing / Dynamic Image Optimization",
      "O(1) API Algorithmic Tuning",
      "Multi-instance DB Migration Strategy",
      "Inter-system Data Handoff & Department Tooling Workflow Design",
    ],
    security: [
      "OAuth2 (3rd-party integration)",
      "JWT (Internal micro-services)",
      "Spring Security",
      "Method-level Authorization (Custom PermissionEvaluator)",
    ],
    tools: [
      "Docker & Docker Compose",
      "Nginx",
      "Git (Multi-instance repo branching)",
      "GitHub",
      "GitLab",
      "Blue-Green Deployment (Zero-downtime)",
      "Linux",
      "Maven",
      "Jira",
      "Neovim",
      "PhpStorm",
      "VS Code",
    ],
  },

  featuredProjects: [
    {
      name: "APM (Academic Process Management)",
      context: "Onschool Edtech Group",
      role: "Software Engineer / Tech Lead",
      tech: "Java 21, Spring Boot, Next.js, PostgreSQL 16 (APM DB)",
      summary:
        "Engineered backend architecture following DDD, Hexagonal Architecture, and BFF. Implemented OAuth2/JWT security, method-level Spring Security authorization, and Production Blue-Green deployment.",
      highlights: [
        "Architected multi-module Spring Boot backend with DDD, Hexagonal Architecture, and BFF.",
        "Implemented OAuth2, JWT, and custom PermissionEvaluator for method-level authorization.",
        "Operated Production Blue-Green deployment for zero-downtime releases.",
      ],
    },
    {
      name: "SRM Ecosystem (SRMA, SRM1, SV50)",
      context: "Onschool Edtech Group",
      role: "Software Engineer / Tech Lead (later phase)",
      tech: "PHP (Laravel, Lumen), PostgreSQL 16, MySQL, React, Nuxt.js, Git",
      summary:
        "Engineered student records, gradebooks, receivables/payables, auto bank statement matching, async batch downloads, N+1 query fixes, and inter-department data handoff workflows between SRMA, SV50, and SRM1.",
      highlights: [
        "Built core finance & academic modules including automated bank statement matching.",
        "Engineered asynchronous batch download system for massive reports without RAM bloat.",
        "Eliminated N+1 queries across multi-instance isolated university databases.",
        "Designed inter-system data handoff tools and operational workflows between support departments and SRMA/SV50/SRM1 systems.",
      ],
    },
    {
      name: "Data Pipeline & Data Controlling System",
      context: "Onschool Edtech Group",
      role: "Delivery Manager",
      tech: "Python, Apache Airflow, PostgreSQL 16 (OAA & APM DBs), Bun 1.3+, Hono 4 (REST + OpenAPI 3), Docker Compose, Nginx",
      summary:
        "Designed automated data pipeline workflows using Python & Apache Airflow between OAA and APM databases. Built lightweight REST APIs with Bun 1.3+ & Hono 4 (OpenAPI 3) deployed with Docker Compose and Nginx.",
      highlights: [
        "Built Python & Apache Airflow DAGs for automated cross-system data sync between OAA DB and APM DB.",
        "Engineered automated daily auditing & alert triggers for pipeline monitoring and data integrity.",
        "Developed high-performance REST APIs compliant with OpenAPI 3 specification using Bun 1.3+ and Hono 4.",
        "Configured containerized deployment pipeline using Docker Compose and Nginx reverse proxy.",
      ],
    },
    {
      name: "Moodle LMS Integration & API Performance Tuning",
      context: "Onschool Edtech Group",
      role: "Software Engineer",
      tech: "PHP, Moodle Core, REST Web Service APIs",
      summary:
        "Researched Moodle core internals, built local plugins & REST Web Services APIs, and optimized execution latency from O(N^2) loops to O(1) HashMap lookup tables.",
      highlights: [
        "Developed custom local plugins and REST Web Service APIs for learning events and grades.",
        "Replaced nested O(N^2) foreach loops with O(1) HashMap lookups, dramatically boosting response speed.",
      ],
    },
    {
      name: "Financial Management Platform",
      context: "Freelance",
      role: "Software Engineer",
      tech: "Laravel, React, MongoDB, NATS, Docker Compose, Nginx",
      summary:
        "Designed flexible financial data models using EAV structure, built Event-Driven Architecture with NATS, and implemented On-demand Image Resizing for fast frontend loading.",
      highlights: [
        "Engineered dynamic financial entity model using Entity-Attribute-Value (EAV).",
        "Implemented Event-Driven Architecture with NATS for async financial processing.",
        "Applied On-demand Image Resizing combined with lazy loading, reducing load times by 60%+.",
      ],
    },
  ],

  experience: [
    {
      company: "Onschool Edtech Group",
      role: "Software Engineer / Tech Lead",
      period: "11/2022 - Present",
      location: "Ho Chi Minh City, Vietnam",
      summary:
        "Designed, refactored, and optimized mission-critical systems in educational technology. Served as Software Engineer / Tech Lead for APM and SRM (SRMA, SRM1, SV50) platforms, and Delivery Manager for Data Pipeline & Data Controlling System.",
      achievements: [
        "Designed and developed backend architecture for academic process management (APM) using Domain-Driven Design (DDD), Hexagonal Architecture, and Backend-for-Frontend (BFF).",
        "Served as Delivery Manager for automated Data Pipeline & Data Controlling workflows using Python and Apache Airflow between PostgreSQL 16 OAA DB and APM DB.",
        "Developed lightweight, high-performance REST microservices using Bun 1.3+ and Hono 4 framework adhering to OpenAPI 3 specifications.",
        "Deployed and managed containerized services using Docker Compose and Nginx reverse proxy.",
        "Engineered secure authentication & authorization infrastructure (OAuth2, JWT, Spring Security method-level custom PermissionEvaluator).",
        "Designed and operated Blue-Green deployment pipeline on Production, guaranteeing zero-downtime releases and safe rollback.",
        "Engineered core modules across the SRM ecosystem (SRMA, SRM1, SV50) including student records, gradebooks, receivables/payables, and automated bank statement matching.",
        "Architected an asynchronous batch download system to export large-scale financial reports without main thread blocking or RAM exhaustion.",
        "Refactored legacy codebases across SRM1 & SV50 systems, eliminating N+1 queries and optimizing SQL pagination on PostgreSQL 16.",
        "Designed and proposed inter-system data handoff tools and operational workflows between support departments and SRMA, SV50, and SRM1 systems.",
        "Optimized Moodle LMS integration APIs by refactoring nested O(N^2) loops into O(1) HashMap lookup tables.",
      ],
      projects: [
        {
          name: "APM (Academic Process Management)",
          role: "Software Engineer / Tech Lead",
          tech: "Java 21, Spring Boot, Next.js, PostgreSQL 16",
          highlights: [
            "Designed multi-module Spring Boot backend using Domain-Driven Design, Hexagonal Architecture, and Clean Architecture.",
            "Implemented BFF pattern with OAuth2 (3rd party), JWT (internal), and custom PermissionEvaluator.",
            "Operated Blue-Green deployment pipeline for zero-downtime releases on production.",
          ],
        },
        {
          name: "Data Pipeline & Data Controlling System",
          role: "Delivery Manager",
          tech: "Python, Apache Airflow, PostgreSQL 16 (OAA & APM DBs), Bun 1.3+, Hono 4 (OpenAPI 3), Docker Compose, Nginx",
          highlights: [
            "Built Python & Apache Airflow DAGs for automated data sync and daily auditing between OAA DB and APM DB.",
            "Developed Bun 1.3+ & Hono 4 REST APIs with OpenAPI 3 specs for high-speed integrations.",
            "Deployed microservices infrastructure with Docker Compose and Nginx reverse proxy.",
          ],
        },
        {
          name: "SRM Ecosystem (SRMA, SRM1, SV50)",
          role: "Software Engineer / Tech Lead (later phase)",
          tech: "PHP (Laravel, Lumen), PostgreSQL 16, MySQL, React, Nuxt.js, Git",
          highlights: [
            "Built core modules: student records, gradebooks, receivables/payables, and automated bank statement matching.",
            "Architected asynchronous batch download solution to export massive financial reports without RAM crashes.",
            "Refactored legacy codebase, eliminating N+1 query bottlenecks and optimizing SQL pagination.",
            "Designed inter-system data handoff tools and operational workflows between support departments and SRMA, SV50, and SRM1 systems.",
          ],
        },
        {
          name: "Moodle Integration & Performance Tuning",
          role: "Software Engineer",
          tech: "PHP, Moodle Core, REST Web Service APIs",
          highlights: [
            "Engineered local plugins and Web Service APIs to sync learning progress, grades, and live classes.",
            "Optimized API algorithm from nested O(N^2) loops to O(1) HashMap lookup tables.",
          ],
        },
      ],
      techStack: [
        "Java 21",
        "Spring Boot",
        "Python",
        "Apache Airflow",
        "Bun 1.3+",
        "Hono 4",
        "OpenAPI 3",
        "PHP",
        "Laravel",
        "PostgreSQL 16",
        "Docker Compose",
        "Nginx",
        "Git",
      ],
    },
    {
      company: "Freelance",
      role: "Software Engineer",
      period: "2022 - Present",
      location: "Remote",
      summary:
        "Delivered full-lifecycle software engineering for financial management platforms.",
      achievements: [
        "Analyzed financial domain rules and engineered a dynamic data storage model using Entity-Attribute-Value (EAV).",
        "Implemented Event-Driven Architecture with NATS messaging queue for asynchronous transaction processing.",
        "Architected modular PHP core adhering to PSR standards to maximize business logic reusability.",
        "Engineered On-demand Image Resizing / Dynamic Image Optimization combined with lazy loading and client-side rendering, reducing load times by 60%+.",
      ],
      projects: [
        {
          name: "Financial Management Platform",
          role: "Software Engineer",
          tech: "Laravel, React, MongoDB, NATS, Docker Compose, Nginx",
          highlights: [
            "Designed flexible financial entity storage using Entity-Attribute-Value (EAV) model.",
            "Implemented Event-Driven Architecture with NATS for async financial processing and alerts.",
            "Applied On-demand Image Resizing to optimize image loading performance and bandwidth.",
          ],
        },
      ],
      techStack: [
        "PHP",
        "Laravel",
        "React",
        "MongoDB",
        "PostgreSQL",
        "NATS",
        "Docker Compose",
        "Nginx",
      ],
    },
  ],

  references: [
    {
      name: "Phạm Anh Tuấn",
      title: "Trưởng Phòng (Department Head)",
      company: "Onschool Edtech Group",
      phone: "+84 902 996 885",
    },
  ],

  education: {
    school: "Hanoi Open University",
    degree: "Bachelor of Engineering",
    major: "Software Technology",
    period: "2019 - 2024",
  },

  lookingFor: [
    "Software Engineer or Technical Lead roles in high-performance engineering teams.",
    "Products requiring strong domain modeling (DDD), data pipeline automation (Python/Airflow), and clean architecture.",
    "Teams building scalable backend systems using Java / Spring Boot, Bun / Hono 4, or PHP / Laravel.",
  ],
};

export type PortfolioData = typeof portfolioData;
