# Nguyen Huy Hung

**Software Engineer**<br>
Ho Chi Minh City, Vietnam<br>
Email: yisus.nhh.dev@gmail.com | Phone: 0967 622 166<br>
GitHub: [YiSuSNHH](https://github.com/YiSuSNHH) | LinkedIn: [yisus-nhh](https://www.linkedin.com/in/yisus-nhh)

---

## Professional Summary

Software Engineer with 4+ years of hands-on experience designing, refactoring, and optimizing large-scale systems across EdTech and Financial Management platforms.

---

## Technical Skills

- **Core Languages & Frameworks:** PHP *(Laravel, Lumen)* **[Advanced]** • PostgreSQL 16 *(SQL Tuning, Indexing, N+1 Fixes)* **[Advanced]** • Java 21 *(Spring Boot, Spring Security)* **[Working]** • TypeScript / JavaScript *(Bun 1.3+, Hono 4, Next.js, React)* **[Working]** • Python *(Apache Airflow)* **[Working]**
- **Databases & Data Engineering:** PostgreSQL 16 **[Advanced]** • MySQL **[Working]** • MongoDB **[Working]** • SQL Query Tuning & Indexing **[Advanced]** • Airflow DAGs & Data Pipelines **[Working]**
- **Architecture & System Design:** Domain-Driven Design (DDD) & Modular Monolith **[Advanced]** • Clean & Hexagonal Architecture **[Advanced]** • Backend-for-Frontend (BFF) & OpenAPI 3 **[Advanced]** • Event-Driven Architecture (NATS) **[Working]**
- **Security & DevOps:** OAuth2 & JWT Authentication **[Advanced]** • Docker, Docker Compose & Nginx **[Advanced]** • Blue-Green Deployment (Zero-downtime) **[Advanced]** • Git Multi-instance Branching **[Advanced]**

---

## Professional Experience

### Onschool Edtech Group
Ho Chi Minh City, Vietnam | 11/2022 – Present

#### Tech Lead
06/2024 – Present

- Managed 3 projects leading a 6-member team (1 BA, 1 Tester, 4 Developers), steering technical execution and delivery milestones.
- Led requirement analysis, system architecture design, software development, and infrastructure setup.

##### 1. APM (Academic Process Management / Student Life Cycle)
- **Project Description:** Comprehensive management of academic plans, learning paths, course exemptions, gradebooks, class enrollments, and examination schedules across university programs.
- **Tech Stack:** Java 21, Spring Boot (Spring Security, Spring Data JPA), Next.js, PostgreSQL 16, Docker Compose, Nginx
- **Responsibilities:**
  - Led requirement analysis, system architecture design, application development, and production infrastructure setup.
  - Designed multi-module backend following Domain-Driven Design (DDD), Hexagonal Architecture, and Backend-for-Frontend (BFF).
  - Built security infrastructure using OAuth2 for 3rd-party integrations, JWT for internal microservices, and custom `PermissionEvaluator` for method-level authorization.
  - Configured and operated Production Blue-Green deployment pipelines achieving zero-downtime releases.

##### 2. Data Pipeline System
- **Project Description:** Automated data transfer, transformation, and synchronization system between multi-system core academic databases.
- **Tech Stack:** Python, Apache Airflow, PostgreSQL 16, Docker Compose, Nginx
- **Responsibilities:**
  - Requirement analysis and technical system design.
  - Programmed Python & Apache Airflow DAGs to automate data sync workflows between PostgreSQL 16 databases.
  - Built automated daily data integrity auditing mechanisms and monitoring alerts for pipeline health.

##### 3. Data Controlling System
- **Project Description:** Operational monitoring system that aggregates multi-system data to trigger automated alerts and generate operational tickets for overdue academic and administrative cases.
- **Tech Stack:** Bun 1.3+, Hono 4 (REST + OpenAPI 3 Specification), PostgreSQL 16, Docker Compose, Nginx
- **Responsibilities:**
  - Requirement analysis, technical architecture design, software development, and infrastructure setup.
  - Developed high-performance REST APIs compliant with OpenAPI 3 specification using Hono 4 on Bun 1.3+ runtime.
  - Containerized microservices and configured Nginx reverse proxy with Docker Compose.

#### Software Engineer
11/2022 – 06/2024

- Developed core modules of the SRM ecosystem and integrated Moodle LMS platform.

##### 1. SRM Ecosystem (SRMA, SRM1, SV50)
- **Project Description:** End-to-end student information and record management ecosystem, handling student profiles from initial consultation/registration (contacts) to academic program completion, gradebooks, receivables/payables, and auto-matching bank statements across multi-university instances.
- **Tech Stack:** PHP (Laravel, Lumen), PostgreSQL 16, MySQL, React, Nuxt.js, Git
- **Responsibilities:**
  - Requirement analysis, technical design, core software development, and Tech Lead support in later phase.
  - Engineered core SRMA financial & academic modules: gradebooks, application workflows, receivables/payables, and automated bank statement matching.
  - Architected an **asynchronous batch download solution** to export massive financial reports without HTTP thread blocking or memory bloat.
  - Refactored legacy codebases across SRM1 & SV50, eliminating N+1 queries and implementing high-performance SQL pagination across isolated PostgreSQL 16 databases.
  - Formulated multi-instance database migration strategies to standardize schemas and restructured Git repository branching models.
  - Proposed and engineered standardized data handoff tools and operational workflows between support departments and core subsystems (SRMA, SV50, SRM1).

##### 2. LMS2.0 (Moodle LMS Integration & Custom UI)
- **Project Description:** LMS integration platform utilizing Moodle LMS as the central core engine, developing custom UI interfaces and integrating REST Web Service APIs tailored to Onschool's operational needs.
- **Tech Stack:** PHP, Moodle Core (Frankenstyle structure), REST Web Service APIs
- **Responsibilities:**
  - Requirement analysis, technical design, custom software development, and API performance optimization.
  - Researched Moodle core internals and engineered custom local plugins with external web service APIs for student progress, grades, courses, and live classroom events.
  - Optimized API execution algorithms: replaced nested $O(N^2)$ loops with HashMap / Lookup Table logic ($O(1)$), dramatically reducing response latency.

---

### Freelance
2022 – Present | Remote

#### Digital Bank
- **Project Description:** Digital banking platform managing multi-department wallets, handling internal transactions, and trading/managing real estate contracts.
- **Tech Stack:** PHP (Laravel), React, MongoDB, NATS, Docker Compose, Nginx
- **Responsibilities:**
  - Requirement analysis, technical architecture design, software development, and infrastructure setup.
  - Modeled dynamic financial entities using Entity-Attribute-Value (EAV) architecture.
  - Implemented Event-Driven Architecture with NATS messaging queue for asynchronous transaction processing and real-time notifications.
  - Engineered **On-demand Image Resizing / Dynamic Image Optimization** combined with lazy loading and client-side rendering, reducing page load times by 60%+ and cutting bandwidth usage.
  - Deployed application infrastructure using Docker Compose and Nginx.

---

## References

- **Pham Anh Tuan** — Head of Technology Department — Onschool Edtech Group
- **Phone:** +84 902 996 885

---

## Education

### Hanoi Open University

**Bachelor of Engineering — Software Technology**<br>
2019 – 2024
