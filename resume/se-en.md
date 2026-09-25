# Nguyen Huy Hung

**Software Engineer**<br>
Ho Chi Minh City, Vietnam<br>
Email: yisus.nhh.dev@gmail.com | Phone: +84 967 622 166<br>
GitHub: [YiSuSNHH](https://github.com/YiSuSNHH) | LinkedIn: [yisus-nhh](https://www.linkedin.com/in/yisus-nhh)

---

## Executive Summary

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
11/2022 – Present | Ho Chi Minh City, Vietnam

#### Tech Lead
06/2024 – Present

- Managed 3 projects leading a 6-member team (1 BA, 1 Tester, 4 Developers), steering technical execution and delivery milestones.
- Managed requirements gathering, system analysis, technical design, application development, and infrastructure setup.

##### 1. APM (Academic Process Management / Student Life Cycle)
- **Project Description:** Comprehensive management of academic plans, learning paths, course exemptions, gradebooks, class enrollments, and examination schedules across university programs.
- **Tech Stack:** Java 21, Spring Boot (Spring Security, Spring Data JPA), Next.js, PostgreSQL 16, Docker Compose, Nginx
- **Responsibilities:**
  - Designed and developed backend architecture following Domain-Driven Design (DDD), Hexagonal Architecture, and Backend-for-Frontend (BFF), streamlining data integration across satellite services.
  - Built security infrastructure using OAuth2 for 3rd-party integrations and JWT for internal microservices; implemented fine-grained method-level authorization with Spring Security and custom `PermissionEvaluator`.
  - Configured and executed Production Blue-Green deployment pipelines, achieving zero-downtime releases and instant rollback capability.

##### 2. Data Pipeline System
- **Project Description:** Automated data transfer, transformation, and synchronization system between multi-system core academic databases.
- **Tech Stack:** Python, Apache Airflow, PostgreSQL 16, Docker Compose, Nginx
- **Responsibilities:**
  - Requirement analysis and technical system design.
  - Designed and programmed **Python & Apache Airflow** DAGs to automate data sync workflows between PostgreSQL 16 databases.
  - Built automated daily auditing mechanisms to track pipeline health, verify data consistency, and trigger operational alerts.

##### 3. Data Controlling System
- **Project Description:** Operational monitoring system that aggregates multi-system data to trigger automated alerts and generate operational tickets for overdue cases.
- **Tech Stack:** Bun 1.3+, Hono 4 (REST + OpenAPI 3 Specification), PostgreSQL 16, Docker Compose, Nginx
- **Responsibilities:**
  - Requirement analysis, technical architecture design, software development, and infrastructure setup.
  - Developed high-performance REST APIs adhering to **OpenAPI 3 / Swagger** standards using **Hono 4** framework running on **Bun 1.3+** runtime.
  - Containerized and managed service deployments using **Docker Compose** and **Nginx** reverse proxy.

#### Software Engineer
11/2022 – 06/2024

- Developed core modules of the SRM ecosystem and integrated Moodle LMS platform.

##### 1. SRM Ecosystem (SRMA, SRM1, SV50)
- **Project Description:** End-to-end student information and record management ecosystem, handling student profiles from initial consultation/registration (contacts) to academic program completion, gradebooks, receivables/payables, and auto-matching bank statements across multi-university instances.
- **Tech Stack:** PHP (Laravel, Lumen), PostgreSQL 16, MySQL, React, Nuxt.js, Git
- **Responsibilities:**
  - Requirement analysis, technical design, core software development, and Tech Lead support in later phase.
  - Engineered core SRMA financial & academic modules: student profiles, gradebooks, application workflows, receivables/payables, and automated bank statement matching.
  - Architected an **asynchronous batch download solution** to export massive financial reports and statements without blocking main HTTP threads or causing memory crashes.
  - Refactored legacy codebases across SRM1 & SV50: eliminated N+1 queries and implemented high-performance SQL pagination across isolated PostgreSQL 16 database instances.
  - Formulated multi-instance database migration strategies to standardize schemas and restructured Git repository branching models for multi-tenant versioning.
  - Proposed and engineered standardized data handoff tools and operational workflows between support departments and core subsystems (SRMA, SV50, SRM1), ensuring seamless file exchange and data consistency.

##### 2. LMS2.0 (Moodle LMS Integration & API Performance Tuning)
- **Project Description:** LMS integration platform utilizing Moodle LMS as the central core engine, developing custom UI interfaces and integrating REST Web Service APIs tailored to Onschool's operational needs.
- **Tech Stack:** PHP, Moodle Core (Frankenstyle structure), REST Web Service APIs
- **Responsibilities:**
  - Requirement analysis, technical design, custom software development, and API performance optimization.
  - Researched Moodle core internals; engineered custom local plugins and REST Web Service APIs for student data, grades, courses, and live classroom events.
  - Optimized API execution algorithms: replaced nested $O(N^2)$ loops with HashMap / Lookup Table logic ($O(1)$), significantly accelerating API response latency.

---

### Freelance
2022 – Present | Remote

#### Digital Bank
- **Project Description:** Digital banking platform managing multi-department wallets, handling internal transactions, and trading/managing real estate contracts.
- **Tech Stack:** PHP (Laravel), React, MongoDB, NATS, Docker Compose, Nginx
- **Responsibilities:**
  - Requirement analysis, technical architecture design, software development, and infrastructure setup.
  - Analyzed financial domain rules and engineered a dynamic data storage model using Entity-Attribute-Value (EAV).
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
