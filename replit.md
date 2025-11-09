# Imobiliária Clementino - Real Estate Platform

## Overview

Imobiliária Clementino is a comprehensive real estate platform serving both B2B and B2C markets since 2010. The system consists of two main components:

1. **Public-Facing Website**: A premium real estate showcase featuring property listings, services, company information, blog content, and lead generation forms
2. **Private CMS (Content Management System)**: An administrative dashboard for managing website content, real estate operations, and future AI assistant integration

The platform emphasizes exceptional UI/UX with a sophisticated design inspired by premium real estate platforms (Zillow, Realtor.com) combined with modern SaaS aesthetics (Linear, Notion).

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React with TypeScript, built using Vite for fast development and optimized production builds.

**Routing**: Wouter for lightweight client-side routing.

**State Management**: TanStack Query (React Query) for server state management with custom query client configuration.

**UI Component Library**: Shadcn/ui components built on Radix UI primitives, providing accessible and customizable components with a "new-york" style variant.

**Styling System**: 
- Tailwind CSS for utility-first styling
- Custom design tokens following the brand's color palette (Azul Profundo Premium #0A2463, Azul Médio Elegante #3E60A3, Dourado Refinado #D4AF37)
- Typography system using Outfit (headings) and Inter (body text)
- Consistent spacing scale and 12-column grid system

**Form Handling**: React Hook Form with Zod validation for type-safe form validation.

**Animation**: Framer Motion for sophisticated UI animations and scroll-based interactions.

**Component Organization**: Components are organized by feature (pages, reusable components) with a clear separation between UI primitives (`/components/ui`) and business components.

### Backend Architecture

**Server Framework**: Express.js running on Node.js with TypeScript for type safety.

**API Design**: RESTful API pattern with a single registered route for service interest form submissions (`/api/service-interest`).

**Data Storage Strategy**: Currently using in-memory storage (`MemStorage` class) as a placeholder implementation. The architecture is designed with an `IStorage` interface to support future migration to PostgreSQL with Drizzle ORM.

**Database Schema** (Prepared but not yet connected):
- `users` table: Admin user authentication (id, username, password)
- `service_interests` table: Lead capture from service inquiry forms (id, service, name, email, phone, message, createdAt)

**Validation**: Zod schemas defined in shared directory for both client and server-side validation, ensuring data integrity.

**Session Management**: Infrastructure prepared for connect-pg-simple for PostgreSQL-backed sessions (currently not active).

### Key Architectural Decisions

**Monorepo Structure**: Single repository containing both client and server code with shared schemas and types.
- `/client` - React frontend application
- `/server` - Express backend API
- `/shared` - Shared TypeScript types and Zod schemas

**Rationale**: Simplifies development, ensures type consistency across the stack, and enables code reuse between frontend and backend.

**Type Safety Throughout**: TypeScript across the entire stack with strict mode enabled, providing compile-time error detection.

**Rationale**: Reduces runtime errors, improves developer experience with autocomplete, and makes refactoring safer.

**Component-First Design**: Extensive component library built with Shadcn/ui on top of Radix UI primitives.

**Rationale**: Provides accessible, customizable, and consistent UI components while maintaining design system coherence.

**Future-Ready Database Layer**: Drizzle ORM configured with PostgreSQL dialect but using in-memory storage temporarily.

**Rationale**: Allows rapid prototyping while maintaining a clear migration path to production-ready data persistence. The `IStorage` interface pattern enables swapping storage implementations without changing business logic.

**Static Asset Management**: Generated images stored in `/attached_assets/generated_images` and imported directly into components.

**Rationale**: Ensures type-safe asset imports and leverages Vite's asset optimization during build.

### Authentication & Authorization

**Current State**: Admin login UI implemented but authentication logic not yet connected.

**Planned Approach**: Session-based authentication with secure password hashing, likely using bcrypt or argon2.

**Rationale**: Session-based auth provides better security for a CMS dashboard compared to token-based approaches for this use case.

### Content Management Strategy

The CMS is designed around three functional divisions (as specified in requirements):
1. **Site Management**: Content editing, property listings, blog posts
2. **Real Estate Management**: Complete property, tenant, landlord, and lead management
3. **AI Assistant Integration**: N8N platform integration for AI agent functionality (infrastructure preparation phase)

### Performance Optimizations

**Development Experience**: Replit-specific plugins for runtime error overlay, cartographer for dependency visualization, and dev banner.

**Build Process**: Vite for frontend bundling, esbuild for server bundling with tree-shaking and minification.

**Image Strategy**: Optimized static images with responsive loading.

**Query Caching**: TanStack Query configured with infinite stale time for certain queries, reducing unnecessary network requests.

## External Dependencies

### UI & Component Libraries
- **Radix UI**: Comprehensive set of accessible, unstyled UI primitives (@radix-ui/react-*)
- **Shadcn/ui**: Pre-built component patterns built on Radix UI
- **Lucide React**: Icon library for consistent iconography
- **Tailwind CSS**: Utility-first CSS framework
- **Class Variance Authority**: Type-safe variant styling
- **Framer Motion**: Animation library
- **Embla Carousel**: Touch-friendly carousel

### Form & Validation
- **React Hook Form**: Performant form library with validation
- **Zod**: TypeScript-first schema validation
- **@hookform/resolvers**: Integration between React Hook Form and validation libraries

### Data Fetching & State
- **TanStack Query**: Powerful async state management
- **Wouter**: Lightweight routing library

### Backend Services
- **Express**: Web application framework
- **Drizzle ORM**: TypeScript ORM for SQL databases
- **@neondatabase/serverless**: Neon serverless PostgreSQL driver
- **connect-pg-simple**: PostgreSQL session store for Express

### Development Tools
- **Vite**: Frontend build tool and dev server
- **TypeScript**: Type-safe JavaScript
- **esbuild**: Fast JavaScript bundler for server code
- **tsx**: TypeScript execution for development
- **@replit/vite-plugin-***: Replit-specific development enhancements

### Database
- **PostgreSQL**: Relational database (via Neon serverless)
- **Drizzle Kit**: Database migration tool

### Future Integrations (Planned)
- **N8N**: Workflow automation platform for AI agent integration
- AI Assistant for lead qualification and content generation