# Overview

This is a full-stack web application for Enigmera Records, a cosmic-themed record label platform. The application features a modern, space-inspired design with a React frontend and Express backend. The project uses a monorepo structure with shared schemas and includes components for showcasing artists, demo submissions, and company information.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture

The client-side application is built with React and TypeScript, utilizing Vite as the build tool. Key architectural decisions include:

- **Component Architecture**: Modular React components organized by feature (artists, hero, contact, etc.)
- **UI Framework**: Radix UI primitives with shadcn/ui components for consistent design
- **Styling**: Tailwind CSS with custom CSS variables for theming, featuring a dark space-themed design
- **State Management**: TanStack Query for server state management and data fetching
- **Routing**: Wouter for lightweight client-side routing
- **Form Handling**: React Hook Form with Zod validation for type-safe form management

## Backend Architecture

The server uses Express.js with TypeScript in ESM format:

- **Storage Layer**: Abstracted storage interface with in-memory implementation (MemStorage) as default
- **Database Ready**: Drizzle ORM configuration for PostgreSQL with migration support
- **API Structure**: RESTful API routes with `/api` prefix convention
- **Development Setup**: Vite integration for development with HMR support
- **Error Handling**: Centralized error handling middleware

## Database Design

Using Drizzle ORM with PostgreSQL dialect:

- **Schema Location**: Shared between client and server (`shared/schema.ts`)
- **User Management**: Basic user schema with username/password authentication
- **Validation**: Zod schemas for runtime type checking and validation
- **Migrations**: Drizzle Kit for database schema management

## Build and Development

- **Monorepo Structure**: Shared code between client and server
- **Development**: tsx for TypeScript execution in development
- **Production Build**: Vite for client bundling, esbuild for server compilation
- **Path Aliases**: Configured for clean imports (@, @shared, @assets)

# External Dependencies

## Core Framework Dependencies

- **Frontend**: React 18, Vite, TypeScript
- **Backend**: Express.js, Node.js with ESM support
- **Database**: PostgreSQL with Neon serverless (@neondatabase/serverless)
- **ORM**: Drizzle ORM with Drizzle Kit for migrations

## UI and Styling

- **Component Library**: Radix UI primitives for accessible components
- **Styling**: Tailwind CSS with PostCSS
- **Icons**: Lucide React for consistent iconography
- **Animations**: Class Variance Authority for component variants

## Form and Validation

- **Forms**: React Hook Form with Hookform Resolvers
- **Validation**: Zod for schema validation and Drizzle-Zod integration
- **Date Handling**: date-fns for date utilities

## Development Tools

- **Build Tools**: Vite with React plugin, esbuild for server bundling
- **Replit Integration**: Cartographer and runtime error modal plugins
- **Session Management**: connect-pg-simple for PostgreSQL session store
- **Development**: tsx for TypeScript execution

## State Management

- **Server State**: TanStack React Query for data fetching and caching
- **Client State**: React built-in state management
- **Toast Notifications**: Custom toast system using Radix UI

## Routing and Navigation

- **Client Routing**: Wouter for lightweight routing
- **Smooth Scrolling**: Custom navigation handlers for single-page sections