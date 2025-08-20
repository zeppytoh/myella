# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server at `localhost:3000` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview production build locally |
| `npm run astro ...` | Run Astro CLI commands |

## Architecture Overview

This is an **Astro-based marketing website** built with **Tailwind CSS v4** and **TypeScript**. The project follows a content-driven architecture with structured collections and reusable components.

### Key Technologies
- **Astro 5.x** - Static site generator with component islands
- **Tailwind CSS v4 Beta** - Utility-first CSS framework  
- **TypeScript** - Type safety and better DX
- **MDX** - Enhanced markdown with component support
- **Zod** - Schema validation for content collections

### Content Architecture

The site uses **Astro Content Collections** with strict Zod schemas defined in `src/content/config.ts`:

- **Posts** (`/blog`) - Blog articles with images, tags, team attribution
- **Changelog** (`/changelog`) - Version updates with dates and images
- **Customers** (`/customers`) - Case studies with testimonials, logos, challenges/solutions
- **Integrations** (`/integrations`) - Third-party integrations with permissions, details
- **Team** (`/team`) - Team member profiles with socials
- **Help Center** (`/helpcenter`) - Documentation with FAQs and categories
- **Info Pages** (`/infopages`) - Legal pages (privacy, terms)

### Component System

The project uses a **structured component hierarchy** under `src/components/`:

#### Foundation Components (`foundations/`)
- **Text.astro** - Polymorphic text component with variant system (display6XL → textXS)
- **Button.astro** - Multi-variant button (default/accent/muted) with size system and icon support
- **Wrapper.astro** - Layout container with variants (standard/prose) and responsive maxwidths

#### Layout System
- **BaseLayout.astro** - Master layout with optional nav/footer hiding
- Specialized layouts for each content type (BlogLayout, ChangelogLayout, etc.)

#### Content-Specific Components
- Organized by feature: `blog/`, `changelog/`, `customers/`, `features/`, etc.
- Each collection type has dedicated entry components and listing components

### Design System

Uses a **custom Tailwind configuration** with:
- Custom color palette (accent-*, lila-*, base-*)
- Shadow system (shadow-xs → shadow)
- Component-based responsive typography system
- Border-first design approach (border-2 border-black throughout)

### CMS Integration

**PagesCMS** integration via `.pages.yml` provides content editing for non-technical users:
- Images stored in `src/images/` with organized subdirectories
- All content collections are editable through the CMS interface
- Rich text editing for markdown content

### File Organization

```
src/
├── components/          # Reusable UI components
│   ├── foundations/    # Core design system components
│   ├── global/         # Site-wide components (Nav, Footer)
│   └── [feature]/      # Feature-specific components
├── content/            # Content collections (markdown + frontmatter)
├── layouts/            # Page layout templates  
├── pages/              # Route definitions and page components
├── images/             # Static images organized by feature
└── styles/             # Global CSS
```

### Development Patterns

- **Path aliases**: `@/*` maps to `src/*`
- **TypeScript strict**: Enabled with proper type checking
- **Component props**: Well-typed interfaces for all components
- **Responsive-first**: Mobile-first approach with systematic breakpoints
- **Content-driven**: Heavy use of Astro's content collections for structured data