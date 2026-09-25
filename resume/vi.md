# Nguyễn Huy Hùng

**Software Engineer**<br>
Thành phố Hồ Chí Minh, Việt Nam<br>
Email: yisus.nhh.dev@gmail.com | Điện thoại: 0967 622 166<br>
GitHub: [YiSuSNHH](https://github.com/YiSuSNHH) | LinkedIn: [yisus-nhh](https://www.linkedin.com/in/yisus-nhh)

---

## Tóm tắt nghề nghiệp

Software Engineer với hơn 4 năm kinh nghiệm thực tế thiết kế, refactor và tối ưu hóa các hệ thống quy mô lớn trong lĩnh vực EdTech và Quản lý tài chính.

---

## Kỹ năng kỹ thuật

- **Ngôn ngữ & Framework:** PHP *(Laravel, Lumen)* **[Advanced]** • PostgreSQL 16 *(SQL Tuning, Indexing, N+1 Fixes)* **[Advanced]** • Java 21 *(Spring Boot, Spring Security)* **[Working]** • TypeScript / JavaScript *(Bun 1.3+, Hono 4, Next.js, React)* **[Working]** • Python *(Apache Airflow)* **[Working]**
- **Cơ sở dữ liệu & Data Engineering:** PostgreSQL 16 **[Advanced]** • MySQL **[Working]** • MongoDB **[Working]** • Tối ưu hóa SQL & Indexing **[Advanced]** • Airflow DAGs & Data Pipelines **[Working]**
- **Kiến trúc & Thiết kế:** Domain-Driven Design (DDD) & Modular Monolith **[Advanced]** • Clean & Hexagonal Architecture **[Advanced]** • Backend-for-Frontend (BFF) & OpenAPI 3 **[Advanced]** • Event-Driven Architecture (NATS) **[Working]**
- **Bảo mật & DevOps:** OAuth2 & JWT Authentication **[Advanced]** • Docker, Docker Compose & Nginx **[Advanced]** • Triển khai Blue-Green (Zero-downtime) **[Advanced]** • Git Branching Strategy **[Advanced]**

---

## Kinh nghiệm làm việc

### Onschool Edtech Group
Thành phố Hồ Chí Minh, Việt Nam | 11/2022 – Hiện tại

#### Tech Lead
06/2024 – Hiện tại

- Quản lý 3 dự án với đội ngũ 6 thành viên (1 BA, 1 Tester, 4 Developers), dẫn dắt thực thi kỹ thuật và đảm bảo cột mốc tiến độ.
- Nhận yêu cầu, phân tích hệ thống, thiết kế kiến trúc, phát triển phần mềm và xây dựng hạ tầng.

##### 1. APM (Academic Process Management / Student Life Cycle)
- **Mô tả dự án:** Quản lý toàn diện chương trình đào tạo, lộ trình học tập, miễn giảm học phần, sổ điểm, xếp lớp và lịch thi cho các chương trình đại học.
- **Công nghệ:** Java 21, Spring Boot (Spring Security, Spring Data JPA), Next.js, PostgreSQL 16, Docker Compose, Nginx
- **Trách nhiệm:**
  - Nhận yêu cầu, phân tích hệ thống, thiết kế kiến trúc backend và xây dựng hạ tầng production.
  - Thiết kế kiến trúc theo Domain-Driven Design (DDD), Hexagonal Architecture và Backend-for-Frontend (BFF).
  - Xây dựng hạ tầng bảo mật sử dụng OAuth2 cho dịch vụ bên thứ 3, JWT cho dịch vụ nội bộ và custom `PermissionEvaluator` cho phân quyền mức method.
  - Vận hành quy trình triển khai Blue-Green trên Production đạt zero-downtime và khả năng rollback tức thì.

##### 2. Data Pipeline System
- **Mô tả dự án:** Hệ thống tự động hóa truyền tải, chuyển đổi và đồng bộ dữ liệu giữa các cơ sở dữ liệu học thuật cốt lõi.
- **Công nghệ:** Python, Apache Airflow, PostgreSQL 16, Docker Compose, Nginx
- **Trách nhiệm:**
  - Phân tích yêu cầu và thiết kế kiến trúc kỹ thuật.
  - Lập trình các DAGs bằng Python & Apache Airflow để tự động hóa luồng đồng bộ dữ liệu giữa các CSDL PostgreSQL 16.
  - Xây dựng cơ chế kiểm thử toàn vẹn dữ liệu hàng ngày và cảnh báo tự động cho hệ thống pipeline.

##### 3. Data Controlling System
- **Mô tả dự án:** Hệ thống giám sát vận hành tổng hợp dữ liệu đa hệ thống để kích hoạt cảnh báo tự động và phát hành ticket vận hành cho các trường hợp quá hạn.
- **Công nghệ:** Bun 1.3+, Hono 4 (REST + OpenAPI 3), PostgreSQL 16, Docker Compose, Nginx
- **Trách nhiệm:**
  - Phân tích yêu cầu, thiết kế kỹ thuật, phát triển phần mềm và xây dựng hạ tầng.
  - Phát triển các REST APIs hiệu năng cao tuân thủ chuẩn OpenAPI 3 / Swagger bằng Hono 4 chạy trên Bun 1.3+.
  - Container hóa microservices và cấu hình Nginx reverse proxy với Docker Compose.

#### Software Engineer
11/2022 – 06/2024

- Phát triển các mô-đun cốt lõi của hệ sinh thái SRM và tích hợp hệ thống Moodle LMS.

##### 1. SRM Ecosystem (SRMA, SRM1, SV50)
- **Mô tả dự án:** Hệ sinh thái quản lý thông tin và hồ sơ sinh viên toàn diện từ khi là contact (đăng ký/tư vấn) cho tới khi hoàn thành học tập, sổ điểm, công nợ/thu chi và đối soát tự động sao kê ngân hàng trên nhiều instance trường.
- **Công nghệ:** PHP (Laravel, Lumen), PostgreSQL 16, MySQL, React, Nuxt.js, Git
- **Trách nhiệm:**
  - Phân tích yêu cầu, thiết kế kỹ thuật, phát triển phần mềm cốt lõi và hỗ trợ vai trò Tech Lead ở giai đoạn sau.
  - Phát triển các mô-đun tài chính & học thuật SRMA: sổ điểm, luồng hồ sơ, thu chi và đối soát tự động sao kê ngân hàng.
  - Thiết kế **giải pháp download bất đồng bộ (Async Batch Download)** xuất báo cáo tài chính dung lượng lớn không gây nghẽn HTTP thread hay tràn RAM.
  - Refactor hệ thống SRM1 & SV50: tối ưu hóa N+1 query và triển khai phân trang SQL hiệu năng cao trên các CSDL PostgreSQL 16 độc lập.
  - Xây dựng chiến lược DB migration đa instance và chuẩn hóa cấu trúc nhánh Git repository.
  - Thiết kế công cụ và quy trình trao đổi dữ liệu chuẩn hóa giữa các phòng ban vận hành và 3 hệ thống cốt lõi (SRMA, SV50, SRM1).

##### 2. LMS2.0 (Moodle LMS Integration & Custom UI)
- **Mô tả dự án:** Nền tảng tích hợp LMS sử dụng Moodle LMS làm hệ thống trung tâm, phát triển giao diện tùy chỉnh và tích hợp các REST Web Service APIs theo yêu cầu riêng của Onschool.
- **Công nghệ:** PHP, Moodle Core (Frankenstyle structure), REST Web Service APIs
- **Trách nhiệm:**
  - Phân tích yêu cầu, thiết kế kỹ thuật, phát triển plugin tùy chỉnh và tối ưu hiệu năng API.
  - Nghiên cứu core Moodle; phát triển các local plugin tùy chỉnh và REST Web Service APIs cho tiến trình học tập, điểm số, khóa học và lớp học trực tuyến.
  - Tối ưu hóa thuật toán xử lý API: thay thế các vòng lặp $O(N^2)$ bằng giải pháp HashMap / Lookup Table ($O(1)$), giảm đáng kể độ trễ phản hồi API.

---

### Freelance
2022 – Hiện tại | Remote

#### Digital Bank
- **Mô tả dự án:** Nền tảng Digital Bank quản lý ví tiền của từng phòng ban, thực hiện giao dịch nội bộ và mua bán/quản lý hợp đồng nhà đất & bất động sản.
- **Công nghệ:** PHP (Laravel), React, MongoDB, NATS, Docker Compose, Nginx
- **Trách nhiệm:**
  - Phân tích yêu cầu nghiệp vụ, thiết kế kiến trúc phần mềm, phát triển ứng dụng và xây dựng hạ tầng.
  - Thiết kế mô hình dữ liệu thực thể tài chính động bằng cấu trúc Entity-Attribute-Value (EAV).
  - Triển khai Event-Driven Architecture với NATS messaging queue cho xử lý giao dịch bất đồng bộ và thông báo thời gian thực.
  - Phát triển cơ chế **On-demand Image Resizing / Tối ưu hóa ảnh động** kết hợp lazy loading, giảm 60%+ thời gian tải trang.
  - Triển khai hạ tầng ứng dụng với Docker Compose và Nginx.

---

## Người tham chiếu (References)

- **Phạm Anh Tuấn** — Trưởng Phòng Kỹ thuật — Onschool Edtech Group
- **Số điện thoại:** +84 902 996 885

---

## Học vấn

### Đại học Mở Hà Nội

**Kỹ sư — Công nghệ Phần mềm**<br>
2019 – 2024
