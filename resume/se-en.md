# Nguyen Huy Hung

**Software Engineer**<br>
Ho Chi Minh City, Vietnam<br>
Email: yisus.nhh.dev@gmail.com | Phone: +84 967 622 166<br>
GitHub: [YiSuSNHH](https://github.com/YiSuSNHH) | LinkedIn: [yisus-nhh](https://www.linkedin.com/in/yisus-nhh)

---

## Executive Summary

Software Engineer with 4+ years of hands-on experience designing, refactoring, and optimizing large-scale systems in EdTech and Finance. Strong core in **Java 21 / Spring Boot**, **PHP / Laravel**, **Python / Apache Airflow**, and **Bun 1.3+ / Hono 4 (OpenAPI 3)**. Architectural expertise in **Domain-Driven Design (DDD)**, **Modular Monolith**, **Clean / Hexagonal Architecture**, and **Event-Driven Architecture**. Proven track record in building automated data pipeline systems across **PostgreSQL 16 (OAA & APM DBs)**, tackling complex performance bottlenecks (asynchronous batch downloads, N+1 query elimination, $O(1)$ algorithm optimizations, on-demand image resizing), and managing deployments with **Docker Compose + Nginx**.

---

## Technical Skills

- **Core Languages & Frameworks:** Java (Java 21 / Spring Boot), PHP (Laravel, Lumen), TypeScript / JavaScript (**Bun 1.3+**, **Hono 4 - REST + OpenAPI 3**, Next.js, React), Python (**Apache Airflow**)
- **Databases & Data Engineering:** **PostgreSQL 16 (OAA & APM Databases)**, MySQL, MongoDB; Apache Airflow DAGs, SQL query tuning, high-performance pagination, N+1 query elimination, On-demand Image Resizing, database schema design
- **Architecture & System Design:** Domain-Driven Design (DDD), Modular Monolith, Hexagonal Architecture, Clean Architecture, Backend-for-Frontend (BFF), Event-Driven Architecture (NATS), RESTful API & OpenAPI 3 Specification
- **Security & Authorization:** OAuth2 (3rd-party integration), JWT (internal micro-services), Spring Security (Method-level authorization & Custom `PermissionEvaluator`)
- **DevOps & Infrastructure:** **Docker Compose**, **Nginx**, Blue-Green Deployment (Zero-downtime), Git (Multi-instance repo branching), GitHub, GitLab, Linux, Maven, Jira, Structured Logging & Tracing

---

## Professional Experience

### Software Engineer / Tech Lead
**Onschool Edtech Group**<br>
11/2022 – Present | Ho Chi Minh City, Vietnam

#### 1. APM System (Academic Process Management)
*Tech Stack: Java 21, Spring Boot, Next.js, PostgreSQL 16 (APM DB)*
- **Role:** Software Engineer / Tech Lead
- **Objective:** Manage full academic plans, learning roadmaps, and student progression across university programs.
- **Engineering Contributions:**
  - Designed and developed backend architecture following Domain-Driven Design (DDD), Hexagonal Architecture, and Backend-for-Frontend (BFF), streamlining data integration across satellite services.
  - Built security infrastructure using OAuth2 for 3rd-party integrations and JWT for internal services; implemented fine-grained method-level authorization with Spring Security and custom `PermissionEvaluator`.
  - Designed and executed Blue-Green deployment pipelines on Production, achieving zero-downtime releases and instant rollback capability.

#### 2. Data Pipeline & Data Controlling System
*Tech Stack: Python, Apache Airflow, PostgreSQL 16 (OAA & APM DBs), Bun 1.3+, Hono 4 (REST + OpenAPI 3), Docker Compose, Nginx*
- **Role:** Delivery Manager
- **Objective:** Automated data pipeline synchronization between OAA Database and APM Database, high-performance microservices, and operational monitoring.
- **Engineering Contributions:**
  - Designed and programmed **Python & Apache Airflow** DAGs to automate data sync workflows between PostgreSQL 16 OAA Database and APM Database.
  - Built automated daily auditing mechanisms to track pipeline health, verify data consistency, and trigger operational alerts.
  - Developed high-performance REST APIs adhering to **OpenAPI 3 / Swagger** standards using **Hono 4** framework running on **Bun 1.3+** runtime.
  - Containerized and managed service deployments using **Docker Compose** and **Nginx** reverse proxy.

#### 3. SRM Ecosystem (Student Record & Application Management — SRMA, SRM1, SV50)
*Tech Stack: PHP (Laravel, Lumen), PostgreSQL 16, MySQL, React, Nuxt.js, Git*
- **Role:** Software Engineer / Tech Lead (later phase)
- **Objective:** Manage student records, academic gradebooks, receivables/payables, bank statement auto-matching, and multi-university admission application instances.
- **Engineering Contributions:**
  - Engineered core SRMA financial & academic modules: student profiles, gradebooks, application workflows, and financial management (receivables, payables, bank statements, and automated statement matching).
  - Architected an **asynchronous batch download solution** to export massive financial reports and statements without blocking main HTTP threads or causing memory crashes.
  - Refactored legacy codebases across SRM1 & SV50: eliminated N+1 queries and implemented high-performance SQL pagination across isolated PostgreSQL 16 database instances.
  - Formulated multi-instance database migration strategies to standardize schemas and restructured Git repository branching models for multi-tenant versioning.
  - **Inter-system Data & Department Tooling Workflow Design:** Proposed and engineered standardized data handoff tools and operational workflows between support departments and the 3 core subsystems (SRMA, SV50, SRM1), ensuring seamless file exchange and data consistency.

#### 4. Moodle LMS Integration & API Performance Tuning
*Tech Stack: PHP, Moodle Core, REST Web Service APIs*
- **Role:** Software Engineer
- **Objective:** Synchronize learning progress, course activities, and grades between Moodle LMS and internal platforms.
- **Engineering Contributions:**
  - Researched Moodle core internals; engineered custom local plugins and REST Web Service APIs for student data, grades, courses, and live classroom events.
  - Optimized API execution algorithms: replaced nested $O(N^2)$ loops with HashMap / Lookup Table logic ($O(1)$), significantly accelerating API response latency.

---

### Software Engineer
**Freelance**<br>
2022 – Present | Remote

#### Financial Management Platform
*Tech Stack: PHP (Laravel), React, MongoDB, NATS, Docker Compose, Nginx*
- **Objective:** Enterprise financial management platform with highly extensible data schema requirements.
- **Engineering Contributions:**
  - Analyzed financial domain rules and engineered a dynamic data storage model using Entity-Attribute-Value (EAV).
  - Implemented Event-Driven Architecture with NATS messaging queue for asynchronous transaction processing and real-time notifications.
  - Engineered **On-demand Image Resizing / Dynamic Image Optimization** combined with lazy loading and client-side rendering, reducing page load times by 60%+ and cutting bandwidth usage.
  - Deployed application infrastructure using Docker Compose and Nginx.

---

## Education

### Hanoi Open University
**Bachelor of Engineering — Software Technology**<br>
2019 – 2024
