# Bilingual Glossary and Tone Guide (EN/VI)

- Date: 2026-03-25
- Bead: portfolio-v4u.1.4
- Scope: Landing UI, resume pages, metadata copy, and translation namespaces

## 1. Usage Rules

- Keep product/project names in their canonical form (do not translate product names).
- Keep key architecture acronyms in English: DDD, OOP, SOLID, MVC, EAV.
- Prefer role consistency: map one Vietnamese role phrase to one English role phrase.
- Use sentence-case prose in both locales (except headings where title style is used).
- Avoid mixed terminology within the same page section.

## 2. Canonical Role Labels

| Domain | English | Vietnamese | Notes |
|---|---|---|---|
| Primary role | Software Engineer | Kỹ sư Phần mềm | Use this default across pages and resume |
| Leadership role | Tech Lead | Tech Lead | Keep as `Tech Lead` in both locales |
| Contribution mode | Individual Contributor (IC) | Developer (IC) | `IC` token is preserved |

## 3. Canonical Product and Project Names

| Key | Canonical label | Translation policy |
|---|---|---|
| `project.slc` | SLC (Student Life Cycle) | Keep English expansion |
| `project.srm` | SRM System (Student Management) | Keep English expansion |
| `project.moodle` | Moodle Integration | Never localize product name `Moodle` |
| `project.financialPlatform` | Financial Management Platform | Keep as product-style proper noun |
| `org.onschool` | Onschool Edtech Group | Keep organization name unchanged |

## 4. Technical Glossary (EN <-> VI)

| English | Vietnamese | Rule |
|---|---|---|
| educational technology | công nghệ giáo dục | Prefer this exact pair |
| financial platforms | nền tảng tài chính | Use plural when describing domain focus |
| scalable backend systems | hệ thống backend có khả năng mở rộng | Keep `backend` token |
| maintainable code | mã nguồn dễ bảo trì | Avoid overly literal alternatives |
| clean architecture | kiến trúc sạch | Keep lowercase unless heading/title |
| Hexagonal Architecture | Hexagonal Architecture | Keep English framework name |
| Event-Driven Architecture | Event-Driven Architecture | Never use `Event Sourcing` as substitute |
| Modular Monolith | Modular Monolith | Keep as canonical English term |
| method-level authorization | phân quyền ở cấp độ method | Keep `method` token in technical context |
| migration | di trú | Prefer `di trú` over loose alternatives |
| observability | khả năng quan sát hệ thống | Use explanatory VN phrase |
| lazy loading | lazy loading | Keep English term |
| fallback | dự phòng (fallback) | Keep parenthetical English on first mention |
| locale | locale | Keep English term in technical docs |
| namespace | namespace | Keep English term in implementation docs |

## 5. Tone Guide

### English tone

- Professional, direct, and evidence-oriented.
- Prefer active voice: `Built`, `Designed`, `Implemented`.
- Avoid marketing superlatives (`world-class`, `best-in-class`).
- Keep claims measurable or concrete.

### Vietnamese tone

- Chuyên nghiệp, rõ ràng, thiên về giá trị kỹ thuật.
- Ưu tiên động từ hành động: `Thiết kế`, `Triển khai`, `Tối ưu`.
- Tránh văn phong quảng cáo hoặc khẩu hiệu.
- Giữ mức trang trọng trung tính, phù hợp CV/portfolio.

## 6. Style Constraints by Content Type

| Content type | English style | Vietnamese style |
|---|---|---|
| Hero headline | concise, impact-first | ngắn gọn, định hướng giá trị |
| Project highlights | action + result | hành động + kết quả |
| Skills labels | canonical terms | giữ nguyên thuật ngữ chuẩn |
| Metadata description | compact and keyword-aware | ngắn, tự nhiên, không nhồi từ khóa |

## 7. Disallowed or Deprecated Terms

- Do not replace `Event-Driven Architecture` with `Event Sourcing`.
- Do not translate brand/product names (e.g., `Moodle`, `Next.js`, `Spring Boot`).
- Do not switch between `Software Engineer` and `Backend Engineer` as primary title in the same locale without explicit section intent.

## 8. Review Checklist for New Translations

- Role labels match the canonical glossary table.
- Product names are unchanged and consistently cased.
- Architecture terms follow canonical wording.
- Tone is professional and non-promotional.
- English and Vietnamese versions preserve the same claim strength and scope.

## 9. Ownership

- Source maintainers: resume and content contributors.
- This glossary must be updated when new domain terms, role labels, or product names are introduced.
- Downstream localization beads (`portfolio-v4u.3.1`, `portfolio-v4u.3.2`, `portfolio-v4u.3.3`) should treat this file as the terminology baseline.