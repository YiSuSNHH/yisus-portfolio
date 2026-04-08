export type SupportedLocale = "en" | "vi";

type ExperienceId = "onschool" | "freelance";
type ProjectId = "slc" | "srm" | "moodle" | "financial-platform";

type PortfolioStructure = {
  personal: {
    email: string;
    phone: string;
    github: string;
    linkedin: string;
  };
  skills: {
    languages: Array<{ name: string; level: string; frameworks: string[] }>;
    databases: string[];
    architecture: string[];
    principles: string[];
    tools: string[];
  };
  experience: Array<{
    id: ExperienceId;
    period: string;
    location: string;
    techStack: string[];
    projects: Array<{
      id: ProjectId;
      tech: string;
    }>;
  }>;
  education: {
    period: string;
  };
};

type PortfolioTranslatableContent = {
  personal: {
    name: string;
    nickname: string;
    title: string;
    location: string;
  };
  about: {
    summary: string;
    passion: string;
  };
  experience: Record<
    ExperienceId,
    {
      company: string;
      role: string;
      period: string;
      location: string;
      projects: Partial<Record<
        ProjectId,
        {
          name: string;
          highlights: string[];
        }
      >>;
    }
  >;
  education: {
    school: string;
    degree: string;
    major: string;
  };
  softSkills: Array<{ icon: string; name: string }>;
  lookingFor: string[];
};

export const portfolioStructure: PortfolioStructure = {
  personal: {
    email: "yisus.nhh.dev@gmail.com",
    phone: "0967 622 166",
    github: "https://github.com/YiSuSNHH",
    linkedin: "https://www.linkedin.com/in/yisus-nhh",
  },
  skills: {
    languages: [
      { name: "PHP", level: "Primary", frameworks: ["Laravel", "Lumen"] },
      { name: "Java", level: "Proficient", frameworks: ["Spring Boot"] },
      {
        name: "JavaScript/TypeScript",
        level: "Proficient",
        frameworks: ["Vue.js", "React", "Next.js", "Nuxt.js"],
      },
    ],
    databases: ["MySQL", "PostgreSQL", "MongoDB"],
    architecture: [
      "Domain-Driven Design (DDD)",
      "Hexagonal Architecture / Clean Architecture",
      "Event-Driven Architecture",
      "Modular Monolith",
      "MVC",
    ],
    principles: ["OOP", "SOLID", "EAV Model"],
    tools: [
      "Git (GitHub, GitLab)",
      "Jira",
      "Docker",
      "Linux (Arch)",
      "Neovim",
      "PHPStorm",
      "VSCode",
    ],
  },
  experience: [
    {
      id: "onschool",
      period: "11/2022 – Present",
      location: "Hanoi",
      projects: [
        {
          id: "slc",
          tech: "Java 21, Spring Boot, Next.js (React), PostgreSQL · Tech Lead",
        },
        {
          id: "srm",
          tech: "Lumen, Laravel, React, Nuxt.js (Vue), PostgreSQL · Tech Lead (later phase)",
        },
        {
          id: "moodle",
          tech: "PHP, Moodle",
        },
      ],
      techStack: [
        "Java/Spring Boot",
        "Laravel",
        "Lumen",
        "React",
        "Nuxt.js",
        "Next.js",
        "MySQL",
        "PostgreSQL",
        "Firebase",
        "Moodle",
      ],
    },
    {
      id: "freelance",
      period: "2022 – Present",
      location: "Remote",
      projects: [
        {
          id: "financial-platform",
          tech: "Laravel, React, MongoDB",
        },
      ],
      techStack: ["Laravel", "Inertia.js", "React", "MongoDB", "PostgreSQL", "NATS"],
    },
  ],
  education: {
    period: "2019 – 2024",
  },
};

export const portfolioContent: Record<SupportedLocale, PortfolioTranslatableContent> = {
  en: {
    personal: {
      name: "Nguyen Huy Hung",
      nickname: "YiSuS",
      title: "Software Engineer",
      location: "Hanoi, Vietnam",
    },
    about: {
      summary:
        "Software Engineer with 3+ years of experience specializing in educational technology and financial platforms. I design and build scalable backend systems using PHP/Laravel and Java/Spring Boot with a strong foundation in Domain-Driven Design (DDD) and clean architecture principles.",
      passion: "Passionate about creating well-structured, maintainable code.",
    },
    experience: {
      onschool: {
        company: "Onschool Edtech Group",
        role: "Software Engineer",
        period: "11/2022 – Present",
        location: "Hanoi",
        projects: {
          slc: {
            name: "SLC (Student Life Cycle)",
            highlights: [
              "Architected a multi-module Maven codebase with a pure domain layer to keep business rules isolated and maintainable",
              "Separated platform/core, platform/infrastructure, and application modules to clarify system boundaries",
              "Implemented JWT authentication and method-level authorization with Spring Security and a custom PermissionEvaluator",
              "Configured Flyway migrations and SpringDoc OpenAPI to keep schema changes and API contracts aligned",
              "Standardized bootstrap scripts, config, and PostgreSQL provisioning so local environments could be reproduced from the README",
            ],
          },
          srm: {
            name: "SRM System (Student Management)",
            highlights: [
              "Started as an individual contributor and later took Tech Lead responsibilities in a subsequent phase",
              "Built and maintained backend services with Lumen and Laravel, integrated with React and Nuxt.js clients",
              "Designed Modular Monolith architecture with composer-merge-plugin",
              "Built a shared platform core with base entities, repositories, hydrators, and event dispatching",
              "Implemented action-based use cases with DTOs and self-hydration for entity mapping",
              "Integrated Firebase push notifications and QR Bank payment APIs",
              "Improved observability with logging and tracing, and optimized data access to prevent N+1 query patterns",
            ],
          },
          moodle: {
            name: "Moodle Integration",
            highlights: [
              "Reverse-engineered Moodle autoload mechanism (Frankenstyle naming convention)",
              "Developed local plugin with external functions and web service APIs",
            ],
          },
        },
      },
      freelance: {
        company: "Freelance",
        role: "Software Engineer",
        period: "2022 – Present",
        location: "Remote",
        projects: {
          "financial-platform": {
            name: "Financial Management Platform",
            highlights: [
              "Built a modular Laravel platform with a PSR-compliant PHP core to keep domain logic reusable",
              "Modeled flexible business entities with an Entity-Attribute-Value (EAV) schema",
              "Designed an Event-Driven Architecture with NATS for asynchronous workflows and real-time notifications",
              "Implemented lazy loading to improve perceived frontend performance",
            ],
          },
        },
      },
    },
    education: {
      school: "Hanoi Open University (HOU)",
      degree: "Bachelor of Engineering",
      major: "Software Technology",
    },
    softSkills: [
      { icon: "💬", name: "Clear Communication" },
      { icon: "👥", name: "Team Collaboration" },
      { icon: "🧩", name: "Problem Solving" },
      { icon: "⏰", name: "Time Management" },
      { icon: "🎯", name: "Leadership" },
      { icon: "💡", name: "Creative Thinking" },
    ],
    lookingFor: [
      "Learn from senior engineers and improve my technical depth",
      "Apply and refine my knowledge of DDD and clean architecture in production systems",
      "Contribute to well-structured codebases with code reviews and engineering standards",
      "Grow as a backend engineer in a collaborative environment",
    ],
  },
  vi: {
    personal: {
      name: "Nguyen Huy Hung",
      nickname: "YiSuS",
      title: "Kỹ sư phần mềm",
      location: "Hà Nội, Việt Nam",
    },
    about: {
      summary:
        "Kỹ sư phần mềm với hơn 3 năm kinh nghiệm, tập trung vào các nền tảng giáo dục và tài chính. Tôi thiết kế và xây dựng hệ thống backend có khả năng mở rộng bằng PHP/Laravel và Java/Spring Boot, được dẫn dắt bởi Domain-Driven Design (DDD) và các nguyên tắc clean architecture.",
      passion: "Đam mê tạo ra code có cấu trúc rõ ràng, dễ bảo trì và dễ mở rộng.",
    },
    experience: {
      onschool: {
        company: "Onschool Edtech Group",
        role: "Kỹ sư phần mềm",
        period: "11/2022 – Nay",
        location: "Hà Nội",
        projects: {
          slc: {
            name: "SLC (Student Life Cycle)",
            highlights: [
              "Thiết kế codebase Maven đa module với domain layer thuần túy để giữ business rule tách biệt và dễ bảo trì",
              "Tách riêng các module platform/core, platform/infrastructure và application để làm rõ ranh giới hệ thống",
              "Triển khai xác thực JWT và phân quyền mức method bằng Spring Security cùng PermissionEvaluator tùy biến",
              "Cấu hình Flyway migrations và SpringDoc OpenAPI để đồng bộ thay đổi schema với hợp đồng API",
              "Chuẩn hóa bootstrap scripts, cấu hình và provisioning PostgreSQL để môi trường local có thể được tái tạo từ README",
            ],
          },
          srm: {
            name: "SRM System (Student Management)",
            highlights: [
              "Bắt đầu với vai trò individual contributor và sau đó đảm nhận trách nhiệm Tech Lead ở giai đoạn tiếp theo",
              "Xây dựng và bảo trì backend bằng Lumen và Laravel, tích hợp với các ứng dụng React và Nuxt.js",
              "Thiết kế kiến trúc Modular Monolith với composer-merge-plugin",
              "Xây dựng platform core dùng chung với base entities, repositories, hydrators và event dispatching",
              "Triển khai action-based use cases với DTO và cơ chế tự hydration cho entity mapping",
              "Tích hợp Firebase push notifications và QR Bank payment APIs",
              "Cải thiện observability với logging, tracing và tối ưu truy cập dữ liệu để tránh N+1 query",
            ],
          },
          moodle: {
            name: "Moodle Integration",
            highlights: [
              "Phân tích ngược cơ chế autoload của Moodle theo quy ước đặt tên Frankenstyle",
              "Phát triển local plugin với external functions và web service APIs",
            ],
          },
        },
      },
      freelance: {
        company: "Làm việc tự do",
        role: "Kỹ sư phần mềm",
        period: "2022 – Nay",
        location: "Từ xa",
        projects: {
          "financial-platform": {
            name: "Nền tảng quản lý tài chính",
            highlights: [
              "Xây dựng nền tảng Laravel theo hướng module với PHP core tuân thủ PSR để tái sử dụng domain logic",
              "Mô hình hóa business entity linh hoạt bằng schema Entity-Attribute-Value (EAV)",
              "Thiết kế Event-Driven Architecture với NATS cho các luồng xử lý bất đồng bộ và thông báo thời gian thực",
              "Triển khai lazy loading để cải thiện hiệu năng cảm nhận ở frontend",
            ],
          },
        },
      },
    },
    education: {
      school: "Đại học Mở Hà Nội (HOU)",
      degree: "Kỹ sư",
      major: "Công nghệ phần mềm",
    },
    softSkills: [
      { icon: "💬", name: "Giao tiếp rõ ràng" },
      { icon: "👥", name: "Hợp tác nhóm" },
      { icon: "🧩", name: "Giải quyết vấn đề" },
      { icon: "⏰", name: "Quản lý thời gian" },
      { icon: "🎯", name: "Lãnh đạo" },
      { icon: "💡", name: "Tư duy sáng tạo" },
    ],
    lookingFor: [
      "Học hỏi từ những kỹ sư senior và nâng cao chiều sâu kỹ thuật",
      "Áp dụng và mài giũa kiến thức về DDD và clean architecture trong hệ thống production",
      "Đóng góp vào codebase có cấu trúc tốt thông qua code review và engineering standards",
      "Phát triển xa hơn với vai trò backend engineer trong môi trường hợp tác",
    ],
  },
};

export function getPortfolioData(locale: SupportedLocale = "en") {
  const localized = portfolioContent[locale];

  return {
    personal: {
      ...portfolioStructure.personal,
      ...localized.personal,
    },
    about: localized.about,
    skills: portfolioStructure.skills,
    experience: portfolioStructure.experience.map((experience) => {
      const localizedExperience = localized.experience[experience.id];
      return {
        company: localizedExperience.company,
        role: localizedExperience.role,
        period: localizedExperience.period,
        location: localizedExperience.location,
        techStack: experience.techStack,
        projects: experience.projects.map((project) => {
          const localizedProject = localizedExperience.projects[project.id];
          if (!localizedProject) {
            throw new Error(`Missing localized project content for ${experience.id}.${project.id}`);
          }

          return {
            name: localizedProject.name,
            tech: project.tech,
            highlights: localizedProject.highlights,
          };
        }),
      };
    }),
    education: {
      ...localized.education,
      period: portfolioStructure.education.period,
    },
    softSkills: localized.softSkills,
    lookingFor: localized.lookingFor,
  };
}

export const portfolioData = getPortfolioData("en");

export type PortfolioData = ReturnType<typeof getPortfolioData>;
