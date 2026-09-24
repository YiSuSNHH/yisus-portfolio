# Nguyễn Huy Hùng

**Software Engineer**<br>
Thành phố Hồ Chí Minh, Việt Nam<br>
Email: yisus.nhh.dev@gmail.com | Điện thoại: 0967 622 166<br>
GitHub: [YiSuSNHH](https://github.com/YiSuSNHH) | LinkedIn: [yisus-nhh](https://www.linkedin.com/in/yisus-nhh)

---

## Giới thiệu

Software Engineer với hơn 4 năm kinh nghiệm thực chiến trong thiết kế, refactor và tối ưu hóa hệ thống quản lý dữ liệu quy mô lớn trong lĩnh vực EdTech và Tài chính. Có thế mạnh về **Java 21 / Spring Boot** và **PHP / Laravel**, am hiểu về kiến trúc phần mềm (**Domain-Driven Design**, **Modular Monolith**, **Clean / Hexagonal Architecture**, **Event-Driven Architecture**). Nổi bật với khả năng giải quyết các bài toán hiệu năng phức tạp (xử lý N+1 query, giải pháp download bất đồng bộ cho dữ liệu lớn, tối ưu thuật toán API $O(1)$, cơ chế On-demand Image Resizing, chiến lược DB migration đa instance) và thiết kế hệ thống phân quyền/xác thực bảo mật (OAuth2, JWT, Spring Security).

---

## Kỹ năng kỹ thuật

- **Ngôn ngữ & Frameworks chính:** Java (Java 21), Spring Boot, PHP (Laravel, Lumen), JavaScript / TypeScript (Next.js, React)
- **Cơ sở dữ liệu & Tối ưu hóa:** PostgreSQL, MySQL, MongoDB; tối ưu truy vấn SQL, phân trang hiệu năng cao, khắc phục triệt để N+1 query, On-demand Image Resizing, thiết kế & chuẩn hóa schema DB
- **Kiến trúc & Thiết kế hệ thống:** Domain-Driven Design (DDD), Modular Monolith, Hexagonal Architecture, Clean Architecture, Backend-for-Frontend (BFF), Event-Driven Architecture (NATS), RESTful API Design
- **Bảo mật & Phân quyền:** OAuth2 (tích hợp 3rd party), JWT (dịch vụ nội bộ), Spring Security (Method-level authorization & Custom `PermissionEvaluator`)
- **Quy trình & Công cụ:** Git (Multi-instance repo branching), GitHub, GitLab, Blue-Green Deployment (Zero-downtime), Docker, Linux, Maven, Jira, Structured Logging & Tracing

---

## Kinh nghiệm làm việc

### Software Engineer / Tech Lead
**Onschool Edtech Group**<br>
11/2022 – Hiện tại | Thành phố Hồ Chí Minh, Việt Nam

#### 1. Hệ thống APM (Academic Process Management)
*Công nghệ: Java 21, Spring Boot, Next.js, PostgreSQL*
- **Vai trò:** Software Engineer / Tech Lead
- **Mục tiêu:** Quản lý thông tin kế hoạch, lộ trình và quá trình học tập toàn diện cho sinh viên.
- **Đóng góp kỹ thuật:**
  - Thiết kế và phát triển kiến trúc backend theo Domain-Driven Design (DDD), Hexagonal Architecture và Backend-for-Frontend (BFF), giúp việc mở rộng và tích hợp dữ liệu với các hệ thống vệ tinh diễn ra dễ dàng.
  - Xây dựng giải pháp bảo mật với OAuth2 cho tích hợp bên thứ ba và JWT cho kết nối nội bộ; triển khai cơ chế phân quyền chi tiết method-level authorization sử dụng Spring Security và custom `PermissionEvaluator`.
  - Thiết kế và vận hành quy trình Blue-Green deployment trên môi trường Production, đảm bảo cập nhật hệ thống với zero-downtime và khả năng rollback an toàn.

#### 2. Hệ sinh thái SRM System (Student Record Management & Applications — SRMA, SRM1, SV50)
*Công nghệ: PHP (Laravel, Lumen), PostgreSQL, MySQL, React, Nuxt.js, Git*
- **Vai trò:** Software Engineer / Tech Lead (giai đoạn sau)
- **Mục tiêu:** Quản lý hồ sơ sinh viên, tiến trình học tập, đơn từ, tài chính và quy trình đăng ký nhập học của các trường đại học đối tác trên nhiều instance phân tán.
- **Đóng góp kỹ thuật:**
  - Phân tích và phát triển các mô-đun tài chính & nghiệp vụ SRMA: Quản lý hồ sơ sinh viên, bảng điểm, xử lý đơn từ, quản lý thực thu/phải thu và sao kê ngân hàng tự động đối soát (auto match bank statements).
  - Thiết kế và giải pháp **download dữ liệu/báo cáo bất đồng bộ** (asynchronous batch download) xử lý hàng trăm nghìn bản ghi tài chính mà không gây nghẽn RAM hay đơ luồng request.
  - Refactor toàn bộ mã nguồn legacy SRM1 & SV50: tối ưu hóa tốc độ tải và xử lý dữ liệu bằng cách loại bỏ triệt để bài toán N+1 query và áp dụng phân trang hiệu năng cao.
  - Xây dựng chiến lược DB Migration chuẩn hóa schema giữa các instance phân tán và cấu trúc lại Git repositories theo chiến lược branching tối ưu cho việc bảo trì multi-instance.
  - **Thiết kế quy trình bàn giao dữ liệu phòng ban:** Đề xuất và xây dựng quy trình làm việc cùng công cụ chuẩn hóa bàn giao file dữ liệu giữa các phòng ban vận hành và 3 hệ thống thành phần (SRMA, SV50, SRM1), đảm bảo dữ liệu không bị thất thoát hay sai lệch.

#### 3. Tích hợp & Tối ưu Moodle LMS (Moodle Integration)
*Công nghệ: PHP, Moodle Core, REST Web Service APIs*
- **Vai trò:** Software Engineer
- **Mục tiêu:** Tích hợp dữ liệu học tập và quản lý tiến trình giữa Moodle LMS và hệ thống Onschool.
- **Đóng góp kỹ thuật:**
  - Nghiên cứu Moodle core internals; phát triển local plugin và hệ thống Web Service APIs để trao đổi dữ liệu về tiến trình học, điểm số, khóa học và phòng học trực tuyến.
  - Tối ưu hóa thuật toán xử lý dữ liệu API: chuyển đổi các vòng lặp foreach lồng nhau ($O(N^2)$) sang cấu trúc HashMap/Lookup Tables ($O(1)$), tăng tốc độ phản hồi API rõ rệt.

#### 4. Hệ thống Data Pipeline & Data Controlling
*Công nghệ: Java, PHP, PostgreSQL, REST API*
- **Vai trò:** Software Engineer / Delivery Manager
- **Mục tiêu:** Đồng bộ dữ liệu liên hệ thống và tự động giám sát/cảnh báo vận hành.
- **Đóng góp kỹ thuật:**
  - Thiết kế logic chuyển đổi và đồng bộ dữ liệu giữa các CSDL của các hệ thống khác nhau.
  - Thiết kế quy trình tự động kiểm toán (daily / auto auditing) để phát hiện kịp thời sự cố gián đoạn pipeline.
  - Thiết kế hệ thống cảnh báo tự động khi quá hạn, sắp tới hạn hoặc sai lệch logic vận hành; thiết kế chuẩn API tích hợp cho bên thứ ba.

---

### Software Engineer
**Freelance**<br>
2022 – Hiện tại | Remote

#### Financial Management Platform
*Công nghệ: PHP (Laravel), React, MongoDB, NATS*
- **Mục tiêu:** Nền tảng quản lý tài chính doanh nghiệp với khả năng mở rộng dữ liệu linh hoạt.
- **Đóng góp kỹ thuật:**
  - Phân tích và thiết kế mô hình dữ liệu linh hoạt bằng Entity-Attribute-Value (EAV).
  - Triển khai kiến trúc Event-Driven Architecture với NATS messaging queue để xử lý các giao dịch tài chính bất đồng bộ và phát thông báo thời gian thực.
  - Áp dụng cơ chế **On-demand Image Resizing / Dynamic Image Optimization** kết hợp lazy loading và client-side rendering, giúp tối ưu băng thông và giảm 60%+ thời gian tải trang.
  - Xây dựng nền tảng trên Laravel tuân thủ các chuẩn PSR, đảm bảo tính mô-đun và tái sử dụng business logic.

---

## Học vấn

### Đại học Mở Hà Nội
**Kỹ sư — Công nghệ Phần mềm**<br>
2019 – 2024
