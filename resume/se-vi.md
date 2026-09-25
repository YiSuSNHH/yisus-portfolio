# Nguyễn Huy Hùng

**Software Engineer**<br>
Thành phố Hồ Chí Minh, Việt Nam<br>
Email: yisus.nhh.dev@gmail.com | Điện thoại: 0967 622 166<br>
GitHub: [YiSuSNHH](https://github.com/YiSuSNHH) | LinkedIn: [yisus-nhh](https://www.linkedin.com/in/yisus-nhh)

---

## Giới thiệu

Software Engineer với hơn 4 năm kinh nghiệm thực chiến trong thiết kế, refactor và tối ưu hóa hệ thống backend quản lý dữ liệu quy mô lớn trong lĩnh vực EdTech và Tài chính. Có thế mạnh về **Java 21 / Spring Boot**, **PHP / Laravel**, **Python / Apache Airflow**, và **Bun 1.3+ / Hono 4 (OpenAPI 3)**. Am hiểu sâu sắc về kiến trúc phần mềm (**Domain-Driven Design**, **Modular Monolith**, **Clean / Hexagonal Architecture**, **Event-Driven Architecture**). Nổi bật với khả năng xây dựng hệ thống tự động hóa Data Pipeline trên **PostgreSQL 16**, giải quyết các bài toán hiệu năng phức tạp (xử lý N+1 query, download bất đồng bộ, tối ưu thuật toán API $O(1)$, On-demand Image Resizing) và triển khai hạ tầng với **Docker Compose + Nginx**.

---

## Kỹ năng kỹ thuật

- **Ngôn ngữ & Frameworks chính:** Java (Java 21 / Spring Boot), PHP (Laravel, Lumen), TypeScript / JavaScript (**Bun 1.3+**, **Hono 4 - REST + OpenAPI 3**, Next.js, React), Python (**Apache Airflow**)
- **Cơ sở dữ liệu & Data Engineering:** **PostgreSQL 16**, MySQL, MongoDB; Apache Airflow DAGs, tối ưu truy vấn SQL & Indexing, khắc phục triệt để N+1 query, On-demand Image Resizing, thiết kế & chuẩn hóa schema DB
- **Kiến trúc & Thiết kế hệ thống:** Domain-Driven Design (DDD), Modular Monolith, Hexagonal Architecture, Clean Architecture, Backend-for-Frontend (BFF), Event-Driven Architecture (NATS), RESTful API & OpenAPI 3 Specification
- **Bảo mật & Phân quyền:** OAuth2 (tích hợp 3rd party), JWT (dịch vụ nội bộ), Spring Security (Method-level authorization & Custom `PermissionEvaluator`)
- **DevOps & Hạ tầng:** **Docker Compose**, **Nginx**, Blue-Green Deployment (Zero-downtime), Git (Multi-instance repo branching), GitHub, GitLab, Linux, Maven, Jira, Structured Logging & Tracing

---

## Kinh nghiệm làm việc

### Software Engineer / Tech Lead
**Onschool Edtech Group**<br>
11/2022 – Hiện tại | Thành phố Hồ Chí Minh, Việt Nam

#### 1. Hệ thống Student Life Cycle (SLC System)
*Công nghệ: Java 21, Spring Boot, Next.js, PostgreSQL 16*
- **Vai trò:** Software Engineer / Tech Lead
- **Mục tiêu:** Quản lý thông tin kế hoạch, lộ trình và quá trình học tập toàn diện cho sinh viên.
- **Đóng góp kỹ thuật:**
  - Thiết kế và phát triển kiến trúc backend theo Domain-Driven Design (DDD), Hexagonal Architecture và Backend-for-Frontend (BFF), giúp việc mở rộng và tích hợp dữ liệu với các hệ thống vệ tinh diễn ra dễ dàng.
  - Xây dựng giải pháp bảo mật với OAuth2 cho tích hợp bên thứ ba và JWT cho kết nối nội bộ; triển khai cơ chế phân quyền chi tiết method-level authorization sử dụng Spring Security và custom `PermissionEvaluator`.
  - Thiết kế và vận hành quy trình Blue-Green deployment trên môi trường Production, đảm bảo cập nhật hệ thống với zero-downtime và khả năng rollback an toàn.

#### 2. Hệ thống Data Pipeline & Data Controlling System
*Công nghệ: Python, Apache Airflow, PostgreSQL 16, Bun 1.3+, Hono 4 (REST + OpenAPI 3), Docker Compose, Nginx*
- **Vai trò:** Delivery Manager
- **Mục tiêu:** Đồng bộ dữ liệu tự động giữa các CSDL đào tạo và tiến trình học tập, xây dựng các microservices API tốc độ cao và tự động hóa giám sát/cảnh báo vận hành.
- **Đóng góp kỹ thuật:**
  - Thiết kế và lập trình các DAGs trên **Python & Apache Airflow** để tự động hóa luồng chuyển đổi và đồng bộ dữ liệu giữa các CSDL PostgreSQL 16.
  - Thiết kế quy trình tự động kiểm toán (daily / auto auditing) giám sát trạng thái pipeline và tự động gửi cảnh báo khi phát hiện quá hạn hoặc sai lệch logic.
  - Xây dựng hệ thống REST Web APIs hiệu năng cao tuân thủ chuẩn **OpenAPI 3 / Swagger** bằng framework **Hono 4** chạy trên runtime thế hệ mới **Bun 1.3+**.
  - Đóng gói và triển khai hạ tầng dịch vụ container hóa bằng **Docker Compose** và **Nginx** làm reverse proxy.

#### 3. Hệ sinh thái SRM System (Student Record Management & Applications — SRMA, SRM1, SV50)
*Công nghệ: PHP (Laravel, Lumen), PostgreSQL 16, MySQL, React, Nuxt.js, Git*
- **Vai trò:** Software Engineer / Tech Lead (giai đoạn sau)
- **Mục tiêu:** Quản lý hồ sơ sinh viên, tiến trình học tập, đơn từ, tài chính và quy trình đăng ký nhập học của các trường đại học đối tác trên nhiều instance phân tán.
- **Đóng góp kỹ thuật:**
  - Phân tích và phát triển các mô-đun tài chính & nghiệp vụ SRMA: Quản lý hồ sơ sinh viên, bảng điểm, xử lý đơn từ, quản lý thực thu/phải thu và sao kê ngân hàng tự động đối soát (auto match bank statements).
  - Thiết kế giải pháp **download dữ liệu/báo cáo bất đồng bộ** (asynchronous batch download) xử lý hàng trăm nghìn bản ghi tài chính mà không gây nghẽn RAM hay đơ luồng request.
  - Refactor toàn bộ mã nguồn legacy SRM1 & SV50: tối ưu hóa tốc độ tải và xử lý dữ liệu bằng cách loại bỏ triệt để bài toán N+1 query và áp dụng phân trang hiệu năng cao trên PostgreSQL 16.
  - Xây dựng chiến lược DB Migration chuẩn hóa schema giữa các instance phân tán và cấu trúc lại Git repositories theo chiến lược branching tối ưu cho việc bảo trì multi-instance.
  - **Thiết kế quy trình bàn giao dữ liệu phòng ban:** Đề xuất và xây dựng quy trình làm việc cùng công cụ chuẩn hóa bàn giao file dữ liệu giữa các phòng ban vận hành và 3 hệ thống thành phần (SRMA, SV50, SRM1), đảm bảo dữ liệu không bị thất thoát hay sai lệch.

#### 4. Tích hợp & Tối ưu Moodle LMS (Moodle Integration)
*Công nghệ: PHP, Moodle Core, REST Web Service APIs*
- **Vai trò:** Software Engineer
- **Mục tiêu:** Tích hợp dữ liệu học tập và quản lý tiến trình giữa Moodle LMS và hệ thống Onschool.
- **Đóng góp kỹ thuật:**
  - Nghiên cứu Moodle core internals; phát triển local plugin và hệ thống Web Service APIs để trao đổi dữ liệu về tiến trình học, điểm số, khóa học và phòng học trực tuyến.
  - Tối ưu hóa thuật toán xử lý dữ liệu API: chuyển đổi các vòng lặp foreach lồng nhau ($O(N^2)$) sang cấu trúc HashMap/Lookup Tables ($O(1)$), tăng tốc độ phản hồi API rõ rệt.

---

### Software Engineer
**Freelance**<br>
2022 – Hiện tại | Remote

#### Financial Management Platform
*Công nghệ: PHP (Laravel), React, MongoDB, NATS, Docker Compose, Nginx*
- **Mục tiêu:** Nền tảng quản lý tài chính doanh nghiệp với khả năng mở rộng dữ liệu linh hoạt.
- **Đóng góp kỹ thuật:**
  - Phân tích và thiết kế mô hình dữ liệu linh hoạt bằng Entity-Attribute-Value (EAV).
  - Triển khai kiến trúc Event-Driven Architecture với NATS messaging queue để xử lý các giao dịch tài chính bất đồng bộ và phát thông báo thời gian thực.
  - Áp dụng cơ chế **On-demand Image Resizing / Dynamic Image Optimization** kết hợp lazy loading và client-side rendering, giúp tối ưu băng thông và giảm 60%+ thời gian tải trang.
  - Triển khai ứng dụng với Docker Compose và Nginx reverse proxy.

---

## Người tham chiếu (References)

- **Phạm Anh Tuấn** — Trưởng Phòng (Onschool Edtech Group)
- **Số điện thoại:** +84 902 996 885

---

## Học vấn

### Đại học Mở Hà Nội
**Kỹ sư — Công nghệ Phần mềm**<br>
2019 – 2024
