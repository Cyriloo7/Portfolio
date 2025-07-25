# Portfolio Website - AI/ML Engineer

## Overview

This is a modern portfolio website for an AI/ML Engineer built with React, Express, and TypeScript. The application features a single-page design with smooth animations, interactive components, and a contact form. It showcases the engineer's background, skills, projects, certifications, and achievements in the field of artificial intelligence and machine learning.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: React Query for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Build Tool**: Vite for fast development and optimized builds
- **Theme System**: Custom theme provider supporting light/dark modes

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Structure**: RESTful endpoints with Zod validation
- **Development**: Hot reloading with Vite integration in development mode

### Database Strategy
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Schema Location**: Shared schema definitions in `/shared/schema.ts`
- **Development Storage**: In-memory storage implementation for development
- **Production Ready**: PostgreSQL connection via Neon Database serverless

## Key Components

### Frontend Components
1. **Hero Section**: Animated landing with typewriter effect and particle background
2. **About Section**: Personal information and professional background
3. **Experience Timeline**: Educational and professional journey visualization
4. **Projects Showcase**: Interactive project cards with hover effects
5. **Skills Matrix**: Animated progress bars for technical and cloud skills
6. **Achievements**: Statistics and accomplishments with counter animations
7. **Certifications**: Grid of professional certifications and badges
8. **Contact Form**: Functional contact form with validation and submission

### Backend Services
1. **Contact API**: `/api/contact` endpoint for form submissions with Zod validation
2. **Static File Serving**: Serves built React application in production
3. **Development Middleware**: Vite integration for hot reloading

### UI Library Integration
- **shadcn/ui**: Comprehensive component library with Radix UI primitives
- **Component Structure**: Modular, reusable components with consistent styling
- **Accessibility**: Built-in accessibility features from Radix UI components

## Data Flow

1. **Client-Side Rendering**: React handles all UI interactions and animations
2. **Form Submission**: Contact form data flows through React Query to Express API
3. **Validation Pipeline**: Client-side and server-side validation using Zod schemas
4. **Response Handling**: Toast notifications provide user feedback
5. **Static Assets**: Images and fonts served from CDN (Unsplash, Google Fonts)

## External Dependencies

### Frontend Libraries
- **React Ecosystem**: React 18, React DOM, React Query for state management
- **UI Components**: Radix UI primitives, shadcn/ui component system
- **Styling**: Tailwind CSS, Class Variance Authority, clsx utilities
- **Animations**: Custom CSS animations and transitions
- **Icons**: Font Awesome for iconography

### Backend Dependencies
- **Express.js**: Web framework with middleware support
- **Drizzle ORM**: Type-safe database operations
- **Zod**: Runtime type validation and parsing
- **Development Tools**: tsx for TypeScript execution, esbuild for production builds

### Development Tools
- **Vite**: Build tool with HMR and optimization
- **TypeScript**: Type safety across the entire stack
- **PostCSS**: CSS processing with Tailwind and Autoprefixer
- **ESLint Configuration**: Code quality and consistency

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite compiles React app to `dist/public`
2. **Backend Build**: esbuild bundles Express server to `dist/index.js`
3. **Asset Optimization**: Static assets optimized and fingerprinted

### Production Configuration
- **Environment Variables**: `DATABASE_URL` for PostgreSQL connection
- **Static Serving**: Express serves built React app from `dist/public`
- **API Routes**: Backend API endpoints available under `/api/*`

### Development Workflow
- **Dev Server**: `npm run dev` starts Express with Vite middleware
- **Hot Reloading**: Instant updates for both frontend and backend changes
- **Type Checking**: `npm run check` validates TypeScript across the project
- **Database Management**: `npm run db:push` applies schema changes

### Environment Setup
- **Node.js**: ES modules with top-level await support
- **Database**: PostgreSQL via Neon Database (serverless)
- **Session Storage**: PostgreSQL-based session store with `connect-pg-simple`
- **CORS**: Configured for development and production environments