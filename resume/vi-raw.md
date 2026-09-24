# Nguyễn Huy Hùng - ghi chú nguồn CV

## Thông tin cá nhân

- Tên: Nguyễn Huy Hùng
- Vai trò: Software Engineer
- Địa điểm: Thành phố Hồ Chí Minh, Việt Nam
- Email: yisus.nhh.dev@gmail.com
- Số điện thoại: 0967 622 166
- GitHub: https://github.com/YiSuSNHH
- LinkedIn: https://www.linkedin.com/in/yisus-nhh

## Ghi chú nội dung bắt buộc

- Start date tại Onschool: 11/2022
- Tech Lead role: APM là hiện tại, SRMA/SRM là giai đoạn sau
- Dùng cụm `Event-Driven Architecture`, không dùng `Event Sourcing`
- Không đưa các dự án bị đánh dấu `không nên đưa vào CV`
- CV chân thực, đúng những gì đã làm, không đưa công nghệ chưa từng kinh qua vào để tránh bị đánh giá chém gió.

## Tóm tắt nghề nghiệp

Software Engineer với hơn 4 năm kinh nghiệm làm việc trong lĩnh vực EdTech và Quản lý tài chính. Thành thạo **Java 21 / Spring Boot** và **PHP / Laravel**, am hiểu về kiến trúc phần mềm (**Domain-Driven Design (DDD)**, **Modular Monolith**, **Clean / Hexagonal Architecture**, **Event-Driven Architecture**). Có thế mạnh vượt trội về thiết kế backend, tối ưu hiệu năng (xử lý N+1 query, giải pháp download bất đồng bộ cho báo cáo dung lượng lớn, tối ưu thuật toán API $O(1)$, cơ chế On-demand Image Resizing, chuẩn hóa DB migration đa instance), thiết kế phân quyền/xác thực bảo mật (OAuth2, JWT, Spring Security) và thiết kế quy trình bàn giao dữ liệu & công cụ làm việc giữa các phòng ban.

## Kỹ năng kỹ thuật

### Languages & Frameworks

- Java, Spring Boot (Spring Security, Spring Data JPA)
- PHP, Laravel, Lumen
- JavaScript, TypeScript
- Vue.js, React, Next.js, Nuxt.js

### Databases & Data Engineering

- PostgreSQL
- MySQL
- MongoDB
- Truy vấn SQL & Indexing, Tối ưu hóa N+1 query, Asynchronous Batch Download, On-demand Image Resizing, Data Migration Strategy

### Architecture & Design Patterns

- Domain-Driven Design (DDD)
- Hexagonal Architecture
- Clean Architecture
- Modular Monolith
- Backend-for-Frontend (BFF)
- Event-Driven Architecture (NATS)
- RESTful API Design

### Security & Authentication

- OAuth2 (Integration with 3rd party)
- JWT (Internal services authentication)
- Spring Security & Method-level Authorization (Custom `PermissionEvaluator`)

### Engineering Principles & Practices

- OOP, SOLID, Design Patterns
- API Performance Tuning (Algorithmic optimization O(N^2) -> O(1))
- Multi-instance Git Repository Management & Branching strategy
- Blue-Green Deployment (Zero-downtime releases)
- Backward Compatibility & Domain Concept Standardization
- Inter-system Data Handoff & Department Tooling Workflow Design

### Tools & Platforms

- Git, GitHub, GitLab
- Docker, Linux
- Jira, Maven
- Neovim, PhpStorm, VS Code

## Kinh nghiệm làm việc

### Onschool Edtech Group

- Thời gian: 11/2022 - nay
- Vai trò: Software Engineer / Tech Lead (Tech Lead cho APM; Tech Lead cho SRM/SRMA ở giai đoạn sau)
- Địa điểm: Thành phố Hồ Chí Minh, Việt Nam

#### Sản phẩm & Dự án chi tiết

##### 1. APM (Academic Process Management) — Java 21, Spring Boot, Next.js, PostgreSQL (Tech Lead / Software Engineer)
- **Nghiệp vụ:** Quản lý thông tin kế hoạch, lộ trình, quá trình học tập của sinh viên.
- **Đóng góp kỹ thuật:**
  - Thiết kế source code áp dụng Platform architecture, DDD, Core Concept, Backend-for-Frontend (BFF), Hexagonal architecture giúp dễ dàng cải tiến khi tích hợp nhiều hệ thống.
  - Áp dụng OAuth2 để bảo mật dữ liệu khi cung cấp cho bên thứ 3 và JWT cho kết nối nội bộ; triển khai method-level authorization với Spring Security & custom `PermissionEvaluator`.
  - Thiết kế và triển khai quy trình Blue-Green deployment trên production giúp đảm bảo zero-downtime và khả năng rollback an toàn.

##### 2. Hệ sinh thái SRM System (SRMA, SRM1, SV50) — PHP (Laravel, Lumen), PostgreSQL, MySQL, React, Nuxt.js (Software Engineer / Tech Lead giai đoạn sau)
- **Nghiệp vụ:** Quản lý hồ sơ sinh viên, tiến trình học tập, đơn từ, tài chính và quy trình đăng ký nhập học của các trường đại học đối tác trên nhiều instance phân tán.
- **Đóng góp kỹ thuật:**
  - Phát triển tính năng liên quan đến Sinh viên, Điểm, xử lý đơn từ, quản lý tài chính thực thu, phải thu, sao kê ngân hàng và tự động đối soát sao kê (auto match bank statements).
  - Phát triển giải pháp **download bất đồng bộ** (asynchronous batch download) xử lý các bộ dữ liệu/báo cáo lớn mà không gây quá tải tài nguyên hay nén RAM.
  - Refactor các hệ thống legacy SRM1 & SV50, tối ưu tốc độ xử lý bằng cách loại bỏ triệt để N+1 queries và áp dụng phân trang hiệu năng cao.
  - Design chiến lược DB migration chuẩn hóa cấu trúc dữ liệu đa instance và tái cấu trúc Git repos theo chiến lược branching tối ưu.
  - **Thiết kế quy trình & công cụ bàn giao dữ liệu:** Đề xuất và xây dựng quy trình làm việc cùng công cụ chuẩn hóa bàn giao file dữ liệu giữa các phòng ban vận hành và 3 hệ thống thành phần (SRMA, SV50, SRM1), đảm bảo dữ liệu không bị thất thoát hay sai lệch.

##### 3. Moodle LMS Integration — PHP, Moodle Core, REST Web Service APIs (Software Engineer)
- **Nghiệp vụ:** Tích hợp dữ liệu và tiến trình học tập giữa Moodle LMS và hệ thống Onschool.
- **Đóng góp kỹ thuật:**
  - Nghiên cứu Moodle core internals; phát triển local plugin cùng các REST APIs cho sự kiện học tập, course module, sinh viên, điểm số, live class.
  - Sử dụng HashMap / Lookup Table thay cho vòng lặp foreach lồng nhau ($O(N^2) \rightarrow O(1)$) để tăng tốc độ xử lý API rõ rệt.

##### 4. Data Pipeline & Data Controlling System — Java, PHP, PostgreSQL, REST API (Software Engineer / Delivery Manager)
- **Nghiệp vụ:** Đồng bộ dữ liệu liên hệ thống và giám sát cảnh báo vận hành.
- **Đóng góp kỹ thuật:**
  - Thiết kế logic chuyển đổi và đồng bộ dữ liệu giữa các CSDL của các hệ thống khác nhau.
  - Thiết kế quy trình tự động kiểm toán (daily / auto auditing) giám sát xem datapipeline có chạy hay không.
  - Thiết kế nghiệp vụ báo cáo vận hành và hệ thống cảnh báo (quá hạn, sắp tới hạn, sai logic); xây dựng chuẩn REST APIs cho bên thứ ba tích hợp.

### Freelance

- Thời gian: 2022 - nay
- Vai trò: Software Engineer
- Địa điểm: Remote

#### Financial Management Platform — Laravel, React, MongoDB, NATS
- Phân tích nghiệp vụ tài chính và định nghĩa mô hình dữ liệu linh hoạt bằng Entity-Attribute-Value (EAV).
- Xây nền tảng quản lý tài chính theo hướng mô-đun với PSR-compliant PHP core để tái sử dụng business logic.
- Triển khai Event-Driven Architecture với NATS messaging queue cho xử lý giao dịch bất đồng bộ và thông báo thời gian thực.
- Áp dụng cơ chế **On-demand Image Resizing / Dynamic Image Optimization** kết hợp lazy loading và client-side rendering, giúp tối ưu băng thông và giảm 60%+ thời gian tải trang.

## Học vấn

- Hanoi Open University
- Bachelor of Engineering — Software Technology
- 2019 – 2024
