# Nguyễn Huy Hùng — Ghi chú thô (NỘI BỘ)

> **NỘI BỘ / KHÔNG CHIA SẺ**
>
> File này chứa ghi chú thô (raw notes) và là **nguồn sự thật (source of truth)** cho các chi tiết.
> Khi cần cập nhật CV/website: cập nhật ở đây trước, sau đó sync sang bản clean.

## Quy tắc sync (vi-raw → vi → en → site)

1. Cập nhật `resume/vi-raw.md` (file này)
2. Sync sang `resume/vi.md` (bản clean tiếng Việt: ngắn gọn, an toàn để chia sẻ)
3. Sync sang `resume/en.md` (bản clean tiếng Anh)
4. Sync sang `data/portfolio.ts` (nội dung website + trang `/resume`)

**Clean vs Raw**
- **Clean (`resume/vi.md`, `resume/en.md`)**: ngắn gọn, chuyên nghiệp, chỉ các thông tin có thể chia sẻ công khai.
- **Raw (`resume/vi-raw.md`)**: chi tiết hơn, ghi chú để viết/sửa bullet sau này; vẫn tránh thông tin nhạy cảm nội bộ.

---

## Bản clean hiện tại (baseline) — copy từ `resume/vi.md`

# Nguyễn Huy Hùng

**Kỹ sư Phần mềm**

📧 yisus.nhh.dev@gmail.com | 📱 0967 622 166 | 🐙 [GitHub](https://github.com/YiSuSNHH)

---

## Giới thiệu

Kỹ sư Phần mềm với hơn 3 năm kinh nghiệm chuyên về **công nghệ giáo dục** và **nền tảng tài chính**. Thiết kế và xây dựng hệ thống backend có khả năng mở rộng sử dụng PHP/Laravel và Java/Spring Boot với nền tảng vững chắc về Domain-Driven Design (DDD) và nguyên tắc kiến trúc sạch.

Đam mê tạo ra mã nguồn có cấu trúc tốt, dễ bảo trì.

---

## Kỹ năng kỹ thuật

### Ngôn ngữ
- **PHP** (Chính) — Laravel, Lumen
- **Java** — Spring Boot
- **JavaScript/TypeScript** — Vue.js, React, Next.js, Nuxt.js

### Cơ sở dữ liệu
- MySQL, PostgreSQL, MongoDB

### Kiến trúc
- Domain-Driven Design (DDD)
- Hexagonal Architecture / Clean Architecture
- Event-Driven Architecture
- Modular Monolith
- MVC

### Nguyên tắc
- OOP, SOLID
- EAV Model

### Công cụ & Môi trường
- Git (GitHub, GitLab), Jira
- Neovim, PHPStorm, VSCode
- Linux (Arch), Docker

---

## Kinh nghiệm làm việc

### Kỹ sư Phần mềm — Onschool Edtech Group
*11/2022 – Hiện tại*

**SLC (Student Life Cycle)** — Java 21, Spring Boot, Next.js (React), PostgreSQL · **Tech Lead**
- Thiết kế kiến trúc DDD + Hexagonal multi-module Maven với domain layer thuần (entities, value objects, domain services)
- Thiết kế phân tách infrastructure layer: platform/core, platform/infrastructure, application layer
- Triển khai JWT authentication với Spring Security và custom PermissionEvaluator cho method-level authorization
- Cấu hình Flyway migrations và SpringDoc OpenAPI cho API documentation
- Chuẩn hoá scripts, cấu hình và bootstrap PostgreSQL để môi trường dev có thể tái tạo nhất quán theo README

**SRM System (Student Management)** — Lumen, Laravel, React, Nuxt.js (Vue), PostgreSQL · **Tech Lead** *(giai đoạn sau)*
- Xây dựng hệ thống quản lý quan hệ sinh viên: form đăng ký contact → thu thập thông tin cho kế toán/sales → bàn giao giáo vụ quản lý hồ sơ → điều hành học tập
- Bắt đầu ở vai trò developer (IC), sau đó đảm nhận vai trò Tech Lead ở giai đoạn sau của dự án
- Phát triển và vận hành backend services với Lumen và Laravel, tích hợp với client React và Nuxt.js
- Thiết kế kiến trúc Modular Monolith với composer-merge-plugin
- Tạo platform core layer: Entity base class, Repository pattern, Hydrator, EventDispatcher
- Triển khai Actions pattern (Use Cases) với DTOs và self-hydration cho entity mapping
- Tích hợp Firebase push notifications và QR Bank payment APIs
- Gộp phạm vi quản lý học viên (Student Management) vào SRM để thống nhất mô hình dữ liệu và luồng xử lý
- Tăng observability với logging/tracing để debug nhanh hơn; tối ưu truy cập dữ liệu, tránh truy vấn N+1

**Moodle Integration**
- Reverse-engineered cơ chế autoload của Moodle (Frankenstyle naming convention)
- Phát triển local plugin với external functions và web service APIs

**Tech Stack:** Java/Spring Boot, Laravel, Lumen, React, Nuxt.js, Next.js, MySQL, PostgreSQL, Firebase, Moodle

---

### Kỹ sư Phần mềm Freelance
*2022 – Hiện tại*

**Financial Management Platform**
- Thiết kế nền tảng low-code dựa trên mô hình **Entity-Attribute-Value (EAV)**
- Áp dụng **Domain-Driven Design (DDD)** trên PHP core tuân thủ PSR
- Xây dựng **Event-Driven Architecture** với NATS làm message broker cho các luồng bất đồng bộ
- Tối ưu tải ảnh bằng lazy loading để cải thiện hiệu năng cảm nhận

**Tech Stack:** Laravel, Inertia.js, React, MongoDB, PostgreSQL, NATS

---

## Học vấn

### Đại học Mở Hà Nội (HOU)
**Kỹ sư** — Công nghệ Phần mềm
*2019 – 2024*

---

## Kỹ năng mềm

- 💬 Giao tiếp rõ ràng
- 👥 Làm việc nhóm
- 🧩 Giải quyết vấn đề
- ⏰ Quản lý thời gian
- 🎯 Lãnh đạo
- 💡 Tư duy sáng tạo

---

## Tôi đang tìm kiếm

Tôi đang tìm cơ hội tham gia các đội nhóm có quy trình rõ ràng, nơi tôi có thể:
- Học hỏi từ các kỹ sư senior và nâng cao chiều sâu kỹ thuật
- Áp dụng và trau dồi kiến thức về DDD và clean architecture trong hệ thống production
- Đóng góp vào codebase có cấu trúc tốt với code reviews và tiêu chuẩn kỹ thuật
- Phát triển như một backend engineer trong môi trường cộng tác

---

## Ghi chú thô / TODO (internal)

### Quy ước & kiểm tra nhanh
- Tránh dùng cụm từ **"Event Sourcing"** trong CV/site; dùng **"Event-Driven Architecture"**.
- Scope **Tech Lead**: **SLC = hiện tại**, **SRM = giai đoạn sau**.
- Ngày bắt đầu Onschool: **11/2022**.
- Không đưa các dự án có ghi chú **"không nên đưa vào CV"** vào bản clean.

### Các thay đổi dự kiến (để sync sang clean + site)
- Freelance: gộp thành 1 mục “Financial Management Platform” (gộp Skeleton Platform), giữ bullet thiên về tech (EAV/DDD/NATS/lazy-loading) và bỏ mô tả domain/business.
- Onschool: đổi SRM thành “SRM System (Student Management)” và gộp nội dung Student Management vào.
- SLC: thêm bullet về infra/bootstrap (scripts/config/postgres, hướng dẫn chạy local, v.v.).
