---
inclusion: always
---

# Design System Rules for YiSuS Portfolio

## Project Overview
Personal portfolio built with Next.js 15, React 19, TypeScript, and Tailwind CSS. Features a sophisticated design system based on "Bạch Lạp Kim" (White Wax Gold) theme with metallic aesthetics and dark/light mode support.

## Design System Structure

### 1. Token Definitions

**Color System** (`tailwind.config.ts`):
```typescript
// Primary: Gold/Silver metallic tones
primary: {
  50: "#FFFEF5", 100: "#FFF9E6", 200: "#FFF0C2",
  300: "#FFE599", 400: "#FFD966", 500: "#D4AF37", // Classic gold
  600: "#B8860B", 700: "#8B6914", 800: "#5C4612", 900: "#3D2E0C"
},

// Metal accents
metal: {
  silver: "#C0C0C0", platinum: "#E5E4E2",
  gold: "#D4AF37", bronze: "#CD7F32"
},

// Navy for contrast
navy: {
  50: "#F0F4F8", 100: "#D9E2EC", 200: "#BCCCDC",
  // ... through 900: "#102A43"
}
```

**Typography** (`tailwind.config.ts`):
```typescript
fontFamily: {
  serif: ["var(--font-crimson)", "Georgia", "serif"],
  sans: ["var(--font-inter)", "system-ui", "sans-serif"]
}
```

**Animations** (`tailwind.config.ts`):
```typescript
animation: {
  "float": "float 6s ease-in-out infinite",
  "glow": "glow 2s ease-in-out infinite alternate",
  "shimmer": "shimmer 2s linear infinite"
}
```

### 2. Component Library

**Location**: `/components/` directory
**Architecture**: Functional React components with TypeScript
**Export Pattern**: Centralized exports via `components/index.ts`

```typescript
// components/index.ts
export { Hero } from "./Hero";
export { Skills } from "./Skills";
export { Experience } from "./Experience";
export { Projects } from "./Projects";
export { Contact } from "./Contact";
export { FadeIn, StaggerContainer, StaggerItem, ScaleIn } from "./animations";
```

**Component Patterns**:
- Use `"use client"` directive for interactive components
- Framer Motion for animations
- Dynamic imports for performance-critical components
- Consistent prop interfaces with TypeScript

### 3. Frameworks & Libraries

**Core Stack**:
- **Framework**: Next.js 15 (App Router)
- **UI Library**: React 19
- **Styling**: Tailwind CSS 3.4.1
- **Animations**: Framer Motion 12.27.0
- **3D Graphics**: Three.js + React Three Fiber
- **Icons**: Lucide React 0.562.0
- **Language**: TypeScript 5

**Build System**: Next.js built-in (Turbopack/Webpack)

### 4. Asset Management

**Fonts**: 
- Stored in `/app/fonts/` (GeistVF.woff, GeistMonoVF.woff)
- Loaded via CSS variables in layout

**Images**: 
- Static assets in `/public/` (inferred from favicon.ico)
- Optimized via Next.js Image component (recommended)

**Icons**: 
- Lucide React for consistent icon system
- Custom SVG icons as React components when needed

### 5. Icon System

**Primary**: Lucide React icons
```typescript
import { Mail, Phone, ExternalLink, MapPin, ChevronDown } from "lucide-react";
```

**Usage Pattern**:
```tsx
<Mail size={18} />
<Phone size={18} className="text-primary-600" />
```

**Naming Convention**: Use semantic names from Lucide library

### 6. Styling Approach

**Primary**: Tailwind CSS utility-first
**Theme**: Custom extended theme with design tokens
**Dark Mode**: Class-based (`darkMode: "class"`)

**Global Styles** (`app/globals.css`):
```css
/* CSS Custom Properties for theme switching */
:root {
  --background: #FFFEF5;
  --foreground: #102A43;
}

.dark {
  --background: #102A43;
  --foreground: #F0F4F8;
}

/* Custom utility classes */
.gold-shimmer { /* Animated gold gradient */ }
.metallic-text { /* Metallic text effect */ }
.gold-glow { /* Glow box-shadow */ }
```

**Responsive Design**: Mobile-first with Tailwind breakpoints
**Print Styles**: Dedicated `@media print` rules for Resume pages

### 7. Project Structure

```
app/                    # Next.js App Router
├── resume/            # Resume page route
├── fonts/             # Font assets
├── globals.css        # Global styles
├── layout.tsx         # Root layout
└── page.tsx           # Home page

components/            # Reusable UI components
├── animations.tsx     # Framer Motion wrappers
├── Hero.tsx          # Landing section
├── ThemeProvider.tsx # Theme context
└── index.ts          # Centralized exports

data/                 # Static data
└── portfolio.ts      # Portfolio content

resume/               # Resume content (Markdown)
├── en.md            # English Resume
└── vi.md            # Vietnamese Resume
```

## Figma Integration Guidelines

### Design-to-Code Conversion Rules

1. **Color Mapping**:
   - Map Figma colors to design tokens (primary, navy, metal palettes)
   - Use semantic color names over hex values
   - Respect dark/light mode variants

2. **Typography**:
   - Map to `font-serif` or `font-sans` classes
   - Use Tailwind text size utilities (`text-lg`, `text-xl`, etc.)
   - Apply `metallic-text` or `gold-shimmer` classes for special effects

3. **Spacing & Layout**:
   - Use Tailwind spacing scale (`p-4`, `m-6`, `gap-4`)
   - Prefer flexbox/grid utilities over absolute positioning
   - Maintain responsive design patterns

4. **Component Reuse**:
   - Check existing components before creating new ones
   - Extend existing patterns (glassmorphism cards, gradient buttons)
   - Use consistent animation patterns from `animations.tsx`

5. **Interactive Elements**:
   - Apply Framer Motion animations for micro-interactions
   - Use hover states with `whileHover` and `whileTap`
   - Maintain accessibility with proper focus states

### Code Connect Mapping

**Target Components for Mapping**:
- `Hero.tsx` - Main landing section
- `Skills.tsx` - Skills showcase
- `Experience.tsx` - Work experience timeline
- `Projects.tsx` - Project portfolio
- `Contact.tsx` - Contact form/info
- `ThemeToggle.tsx` - Theme switcher
- Animation components in `animations.tsx`

**File Patterns for Hooks**:
- `**/*.tsx` - All React components
- `**/*.jsx` - Legacy React components  
- `**/components/**/*` - Component directory

### Design System Validation

When converting Figma designs:

1. **Visual Parity**: Compare against Figma screenshots
2. **Token Compliance**: Use only defined color/spacing tokens
3. **Animation Consistency**: Apply established motion patterns
4. **Responsive Behavior**: Test across breakpoints
5. **Theme Compatibility**: Verify dark/light mode appearance
6. **Performance**: Optimize for Core Web Vitals

### Print Considerations

For Resume-related components:
- Use `@media print` styles for proper formatting
- Hide interactive elements with `.no-print`
- Ensure proper page breaks with `page-break-inside: avoid`
- Use print-safe colors and fonts