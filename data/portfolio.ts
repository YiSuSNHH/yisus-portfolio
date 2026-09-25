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
      "Software Engineer with 4+ years of hands-on experience designing, refactoring, and optimizing large-scale systems across EdTech and Financial Management platforms.",
    focus:
      "I engineer resilient backend systems, build automated data pipelines (Python/Airflow), optimize PostgreSQL 16 databases, and develop high-performance APIs (Bun/Hono 4, Spring Boot).",
    availability: "Open to Software Engineer and Technical Lead roles.",
  },

  metrics: [
    { value: "4+ years", label: "Software Engineering" },
    { value: "PHP, Java 21, Python, Bun", label: "Core Stack" },
    { value: "PostgreSQL 16 & Airflow", label: "Data & Systems" },
  ],

  skills: {
    languages: [
      { name: "PHP", level: "Advanced", frameworks: ["Laravel", "Lumen"] },
      { name: "Java (Java 21)", level: "Working Knowledge", frameworks: ["Spring Boot", "Spring Security", "Spring Data JPA"] },
      { name: "TypeScript / JavaScript", level: "Working Knowledge", frameworks: ["Bun 1.3+", "Hono 4 (REST + OpenAPI 3)", "Next.js", "React"] },
      { name: "Python", level: "Working Knowledge", frameworks: ["Apache Airflow"] },
    ],
    databases: [
      { name: "PostgreSQL 16", level: "Advanced", details: "Admissions & Progress DBs, SQL Tuning, N+1 Fixes" },
      { name: "MySQL", level: "Working Knowledge", details: "Relational DB Management" },
      { name: "MongoDB", level: "Working Knowledge", details: "Document Store & EAV Integration" },
    ],
    architecture: [
      { name: "Domain-Driven Design (DDD) & Modular Monolith", level: "Advanced" },
      { name: "Clean & Hexagonal Architecture", level: "Advanced" },
      { name: "Backend-for-Frontend (BFF) & OpenAPI 3 Specification", level: "Advanced" },
      { name: "Event-Driven Architecture (NATS)", level: "Working Knowledge" },
    ],
    engineering: [
      { name: "SQL Query Tuning & Indexing", level: "Advanced" },
      { name: "N+1 Query Elimination & Async Batch Download", level: "Advanced" },
      { name: "O(1) API Algorithmic Tuning", level: "Advanced" },
      { name: "Apache Airflow DAGs & Data Pipelines", level: "Working Knowledge" },
      { name: "On-demand Image Resizing / Dynamic Optimization", level: "Working Knowledge" },
      { name: "Multi-instance DB Migration Strategy", level: "Advanced" },
      { name: "Inter-system Data Handoff Workflow Design", level: "Advanced" },
    ],
    security: [
      { name: "OAuth2 & JWT Authentication", level: "Advanced" },
      { name: "Spring Security & Method-level Authorization (Custom PermissionEvaluator)", level: "Working Knowledge" },
    ],
    tools: [
      { name: "Docker & Docker Compose", level: "Advanced" },
      { name: "Nginx & Reverse Proxy", level: "Advanced" },
      { name: "Git & Multi-instance Branching Strategy", level: "Advanced" },
      { name: "Blue-Green Deployment (Zero-downtime)", level: "Advanced" },
      { name: "Linux, Maven, Jira, Neovim, PhpStorm, VS Code", level: "Working Knowledge" },
    ],
  },

  featuredProjects: [
    {
      name: "APM (Academic Process Management / Student Life Cycle)",
      context: "Onschool Edtech Group",
      role: "Tech Lead",
      tech: "Java 21, Spring Boot (Spring Security, Spring Data JPA), Next.js, PostgreSQL 16, Docker Compose, Nginx",
      summary:
        "Comprehensive management of academic plans, learning paths, course exemptions, gradebooks, class enrollments, and examination schedules across university programs.",
      highlights: [
        "Project Description: Comprehensive management of academic plans, learning paths, course exemptions, gradebooks, class enrollments, and examination schedules across university programs.",
        "Responsibilities: Requirement analysis, system architecture design (DDD, Hexagonal, BFF), OAuth2/JWT security, custom PermissionEvaluator, and Production Blue-Green deployment.",
      ],
    },
    {
      name: "Data Pipeline & Data Controlling System",
      context: "Onschool Edtech Group",
      role: "Tech Lead",
      tech: "Python, Apache Airflow, Bun 1.3+, Hono 4 (REST + OpenAPI 3), PostgreSQL 16, Docker Compose, Nginx",
      summary:
        "Automated data pipeline workflows using Python & Apache Airflow between core academic databases. Operational monitoring APIs built with Bun 1.3+ & Hono 4 (OpenAPI 3).",
      highlights: [
        "Project Description: Automated data transfer and synchronization system between multi-system core academic databases; operational monitoring system aggregating data for automated alerts.",
        "Responsibilities: System architecture design, Python/Airflow DAG programming, data integrity auditing mechanisms, and OpenAPI 3 REST APIs development.",
      ],
    },
    {
      name: "SRM Ecosystem (SRMA, SRM1, SV50)",
      context: "Onschool Edtech Group",
      role: "Software Engineer / Tech Lead (later phase)",
      tech: "PHP (Laravel, Lumen), PostgreSQL 16, MySQL, React, Nuxt.js, Git",
      summary:
        "End-to-end student information management ecosystem, gradebooks, receivables/payables, auto bank statement matching, async batch downloads, N+1 query fixes, and inter-department data handoff workflows.",
      highlights: [
        "Project Description: End-to-end student information management ecosystem handling student profiles, gradebooks, receivables/payables, and auto-matching bank statements across multi-university instances.",
        "Responsibilities: Core financial & academic modules development, async batch download solution, N+1 query elimination, multi-instance DB migration strategies, and inter-department data handoff workflow tools.",
      ],
    },
    {
      name: "LMS2.0 (Moodle LMS Integration & Custom UI)",
      context: "Onschool Edtech Group",
      role: "Software Engineer",
      tech: "PHP, Moodle Core (Frankenstyle), REST Web Service APIs",
      summary:
        "Researched Moodle core internals, built local plugins & REST Web Services APIs, and optimized execution latency from O(N^2) loops to O(1) HashMap lookup tables.",
      highlights: [
        "Project Description: LMS integration platform utilizing Moodle LMS as core engine, building custom UI interfaces and REST Web Service APIs tailored to Onschool's needs.",
        "Responsibilities: Custom local plugin development, external REST Web Service APIs for student progress/grades, and O(N^2) to O(1) API performance optimization.",
      ],
    },
    {
      name: "Digital Bank",
      context: "Freelance",
      role: "Software Engineer",
      tech: "PHP (Laravel), React, MongoDB, NATS, Docker Compose, Nginx",
      summary:
        "Designed flexible financial data models using EAV structure, built Event-Driven Architecture with NATS, and implemented On-demand Image Resizing for fast frontend loading.",
      highlights: [
        "Project Description: Digital banking platform managing multi-department wallets, handling internal transactions, and trading/managing real estate contracts.",
        "Responsibilities: EAV dynamic financial entity modeling, Event-Driven Architecture with NATS, and On-demand Image Resizing combined with lazy loading.",
      ],
    },
  ],

  experience: [
    {
      company: "Onschool Edtech Group",
      role: "Tech Lead",
      period: "06/2024 - Present",
      location: "Ho Chi Minh City, Vietnam",
      summary:
        "Technical execution, requirement analysis, software development, and infrastructure setup.",
      achievements: [
        "Managed 3 projects leading a 6-member team (1 BA, 1 Tester, 4 Developers), steering technical execution and delivery milestones.",
        "Led requirement analysis, system architecture design, software development, and infrastructure setup.",
      ],
      projects: [
        {
          name: "APM (Academic Process Management / Student Life Cycle)",
          role: "Tech Lead",
          tech: "Java 21, Spring Boot (Spring Security, Spring Data JPA), Next.js, PostgreSQL 16, Docker Compose, Nginx",
          description: "Comprehensive management of academic plans, learning paths, course exemptions, gradebooks, class enrollments, and examination schedules across university programs.",
          responsibility: "Requirement analysis, system architecture design, application development, and production infrastructure setup.",
          highlights: [
            "Project Description: Comprehensive management of academic plans, learning paths, course exemptions, gradebooks, class enrollments, and examination schedules across university programs.",
            "Responsibilities: Led requirement analysis, system architecture design (DDD, Hexagonal, BFF), OAuth2/JWT security, custom PermissionEvaluator, and Production Blue-Green deployment.",
          ],
        },
        {
          name: "Data Pipeline System",
          role: "Tech Lead",
          tech: "Python, Apache Airflow, PostgreSQL 16, Docker Compose, Nginx",
          description: "Automated data transfer, transformation, and synchronization system between multi-system core academic databases.",
          responsibility: "Requirement analysis, technical system design, Python/Airflow DAGs programming, and data integrity auditing.",
          highlights: [
            "Project Description: Automated data transfer, transformation, and synchronization system between multi-system core academic databases.",
            "Responsibilities: Requirement analysis, system design, Python & Apache Airflow DAGs programming, and automated daily data integrity auditing.",
          ],
        },
        {
          name: "Data Controlling System",
          role: "Tech Lead",
          tech: "Bun 1.3+, Hono 4 (REST + OpenAPI 3 Specification), PostgreSQL 16, Docker Compose, Nginx",
          description: "Operational monitoring system that aggregates multi-system data to trigger automated alerts and generate operational tickets for overdue cases.",
          responsibility: "Requirement analysis, technical architecture design, software development, and infrastructure setup.",
          highlights: [
            "Project Description: Operational monitoring system that aggregates multi-system data to trigger automated alerts and generate operational tickets for overdue cases.",
            "Responsibilities: Requirement analysis, technical architecture design, OpenAPI 3 REST APIs development on Bun 1.3+ & Hono 4, and Docker Compose/Nginx setup.",
          ],
        },
      ],
      techStack: [
        "PHP",
        "PostgreSQL 16",
        "Java 21",
        "Spring Boot",
        "Python",
        "Apache Airflow",
        "Bun 1.3+",
        "Hono 4",
        "OpenAPI 3",
        "Docker Compose",
        "Nginx",
        "Git",
      ],
    },
    {
      company: "Onschool Edtech Group",
      role: "Software Engineer",
      period: "11/2022 - 06/2024",
      location: "Ho Chi Minh City, Vietnam",
      summary:
        "Engineered core modules of SRM ecosystem and Moodle LMS integration.",
      achievements: [
        "Developed core modules of the SRM ecosystem and integrated Moodle LMS platform.",
      ],
      projects: [
        {
          name: "SRM Ecosystem (SRMA, SRM1, SV50)",
          role: "Software Engineer",
          tech: "PHP (Laravel, Lumen), PostgreSQL 16, MySQL, React, Nuxt.js, Git",
          description: "End-to-end student information and record management ecosystem, handling student profiles from initial consultation/registration to program completion.",
          responsibility: "Requirement analysis, technical design, core software development, async batch download, N+1 query elimination, and inter-department data handoff workflows.",
          highlights: [
            "Project Description: End-to-end student information and record management ecosystem, handling student profiles from initial consultation/registration to academic program completion, gradebooks, receivables/payables, and auto-matching bank statements across multi-university instances.",
            "Responsibilities: Requirement analysis, technical design, core financial/academic module development, async batch download solution, N+1 query elimination, multi-instance DB migration strategies, and inter-department data handoff workflow tools.",
          ],
        },
        {
          name: "LMS2.0 (Moodle LMS Integration & Custom UI)",
          role: "Software Engineer",
          tech: "PHP, Moodle Core (Frankenstyle structure), REST Web Service APIs",
          description: "LMS integration platform utilizing Moodle LMS as core engine, building custom UI interfaces and integrating REST Web Service APIs tailored to Onschool's requirements.",
          responsibility: "Requirement analysis, technical design, custom software development, and API performance optimization.",
          highlights: [
            "Project Description: LMS integration platform utilizing Moodle LMS as the central core engine, developing custom UI interfaces and integrating REST Web Service APIs tailored to Onschool's operational needs.",
            "Responsibilities: Requirement analysis, technical design, custom local plugin development, external REST Web Service APIs, and O(N^2) to O(1) API performance optimization.",
          ],
        },
      ],
      techStack: [
        "PHP",
        "Laravel",
        "Lumen",
        "PostgreSQL 16",
        "MySQL",
        "Moodle Core",
        "Git",
      ],
    },
    {
      company: "Freelance",
      role: "Software Engineer",
      period: "2022 - Present",
      location: "Remote",
      summary:
        "Engineered digital banking platform managing multi-department wallets.",
      achievements: [
        "Business requirement analysis and software solution engineering for financial management & digital bank platform.",
      ],
      projects: [
        {
          name: "Digital Bank",
          role: "Software Engineer",
          tech: "PHP (Laravel), React, MongoDB, NATS, Docker Compose, Nginx",
          description: "Digital banking platform managing multi-department wallets, handling internal transactions, and trading/managing real estate contracts.",
          responsibility: "Requirement analysis, technical architecture design, software development, and infrastructure setup.",
          highlights: [
            "Project Description: Digital banking platform managing multi-department wallets, handling internal transactions, and trading/managing real estate contracts.",
            "Responsibilities: Requirement analysis, technical architecture design, EAV dynamic financial entity modeling, Event-Driven Architecture with NATS, and On-demand Image Resizing with lazy loading.",
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
      name: "Pham Anh Tuan",
      title: "Head of Technology Department",
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
    "Teams building scalable backend systems using PHP / Laravel, Java / Spring Boot, or Bun / Hono 4.",
  ],
};

export type PortfolioData = typeof portfolioData;
