# Nguyen Huy Hung

**Software Engineer**<br>
Ho Chi Minh City, Vietnam<br>
Email: yisus.nhh.dev@gmail.com | Phone: +84 967 622 166<br>
GitHub: [YiSuSNHH](https://github.com/YiSuSNHH) | LinkedIn: [yisus-nhh](https://www.linkedin.com/in/yisus-nhh)

---

## Executive Summary

Software Engineer with 4+ years of hands-on experience designing, refactoring, and optimizing large-scale systems in EdTech and Finance. Strong core in **Java 21 / Spring Boot** and **PHP / Laravel**, with architectural expertise in **Domain-Driven Design (DDD)**, **Modular Monolith**, **Clean / Hexagonal Architecture**, and **Event-Driven Architecture**. Proven track record in tackling complex performance bottlenecks (asynchronous batch downloads, N+1 query elimination, $O(1)$ algorithm optimizations, on-demand image resizing, multi-instance database migration strategies) and designing fine-grained security & authorization mechanisms (OAuth2, JWT, Spring Security).

---

## Technical Skills

- **Core Languages & Frameworks:** Java (Java 21), Spring Boot, PHP (Laravel, Lumen), JavaScript / TypeScript (Next.js, React)
- **Databases & Performance:** PostgreSQL, MySQL, MongoDB; SQL query tuning, high-performance pagination, N+1 query elimination, On-demand Image Resizing, database schema design & standardization
- **Architecture & System Design:** Domain-Driven Design (DDD), Modular Monolith, Hexagonal Architecture, Clean Architecture, Backend-for-Frontend (BFF), Event-Driven Architecture (NATS), RESTful API Design
- **Security & Authorization:** OAuth2 (3rd-party integration), JWT (internal micro-services), Spring Security (Method-level authorization & Custom `PermissionEvaluator`)
- **DevOps & Tools:** Git (Multi-instance repo branching strategy), GitHub, GitLab, Blue-Green Deployment (Zero-downtime), Docker, Linux, Maven, Jira, Structured Logging & Tracing

---

## Professional Experience

### Software Engineer / Tech Lead
**Onschool Edtech Group**<br>
11/2022 – Present | Ho Chi Minh City, Vietnam

#### 1. APM System (Academic Process Management)
*Tech Stack: Java 21, Spring Boot, Next.js, PostgreSQL*
- **Role:** Software Engineer / Tech Lead
- **Objective:** Manage full academic plans, learning roadmaps, and student progression across university programs.
- **Engineering Contributions:**
  - Designed and developed backend architecture following Domain-Driven Design (DDD), Hexagonal Architecture, and Backend-for-Frontend (BFF), streamlining data integration across satellite services.
  - Built security infrastructure using OAuth2 for 3rd-party integrations and JWT for internal services; implemented fine-grained method-level authorization with Spring Security and custom `PermissionEvaluator`.
  - Designed and executed Blue-Green deployment pipelines on Production, achieving zero-downtime releases and instant rollback capability.

#### 2. SRM Ecosystem (Student Record & Application Management — SRMA, SRM1, SV50)
*Tech Stack: PHP (Laravel, Lumen), PostgreSQL, MySQL, React, Nuxt.js, Git*
- **Role:** Software Engineer / Tech Lead (later phase)
- **Objective:** Manage student records, academic gradebooks, receivables/payables, bank statement auto-matching, and multi-university admission application instances.
- **Engineering Contributions:**
  - Engineered core SRMA financial & academic modules: student profiles, gradebooks, application workflows, and financial management (receivables, payables, bank statements, and automated statement matching).
  - Architected an **asynchronous batch download solution** to export massive financial reports and statements without blocking main HTTP threads or causing memory crashes.
  - Refactored legacy codebases across SRM1 & SV50: eliminated N+1 queries and implemented high-performance SQL pagination across isolated university instances.
  - Formulated multi-instance database migration strategies to standardize schemas and restructured Git repository branching models for multi-tenant versioning.
  - **Inter-system Data & Department Tooling Workflow Design:** Proposed and engineered standardized data handoff tools and operational workflows between support departments and the 3 core subsystems (SRMA, SV50, SRM1), ensuring seamless file exchange and data consistency.

#### 3. Moodle LMS Integration & API Performance Tuning
*Tech Stack: PHP, Moodle Core, REST Web Service APIs*
- **Role:** Software Engineer
- **Objective:** Synchronize learning progress, course activities, and grades between Moodle LMS and internal platforms.
- **Engineering Contributions:**
  - Researched Moodle core internals; engineered custom local plugins and REST Web Service APIs for student data, grades, courses, and live classroom events.
  - Optimized API execution algorithms: replaced nested $O(N^2)$ loops with HashMap / Lookup Table logic ($O(1)$), significantly accelerating API response latency.

#### 4. Data Pipeline & Data Controlling System
*Tech Stack: Java, PHP, PostgreSQL, REST API*
- **Role:** Software Engineer / Delivery Manager
- **Objective:** Cross-system data synchronization and automated operational monitoring/alerting.
- **Engineering Contributions:**
  - Designed data transformation and synchronization logic between heterogeneous databases.
  - Built automated auditing processes (daily / auto auditing) to track data pipeline health and detect sync failures.
  - Engineered operational alert triggers (impending deadlines, overdue items, logic mismatches) and designed standardized REST APIs for 3rd-party consumers.

---

### Software Engineer
**Freelance**<br>
2022 – Present | Remote

#### Financial Management Platform
*Tech Stack: PHP (Laravel), React, MongoDB, NATS*
- **Objective:** Enterprise financial management platform with highly extensible data schema requirements.
- **Engineering Contributions:**
  - Analyzed financial domain rules and engineered a dynamic data storage model using Entity-Attribute-Value (EAV).
  - Implemented Event-Driven Architecture with NATS messaging queue for asynchronous transaction processing and real-time notifications.
  - Engineered **On-demand Image Resizing / Dynamic Image Optimization** combined with lazy loading and client-side rendering, reducing page load times by 60%+ and cutting bandwidth usage.
  - Architected modular PHP core adhering to PSR standards, maximizing business logic reusability.

---

## Education

### Hanoi Open University
**Bachelor of Engineering — Software Technology**<br>
2019 – 2024
