# Spiker - Enterprise Angular Application

A modern, scalable Angular application built with enterprise-level architecture patterns and best practices.

## 🏗️ Architecture Overview

This application follows Angular best practices with a feature-based architecture:

```
src/app/
├── core/                     # Singleton services, guards, interceptors
│   ├── services/            # Application-wide services
│   ├── guards/              # Route guards
│   ├── interceptors/        # HTTP interceptors
│   └── models/              # Core data models
├── shared/                   # Reusable components, pipes, directives
│   ├── components/          # Shared UI components
│   ├── directives/          # Custom directives
│   ├── pipes/               # Custom pipes
│   └── models/              # Shared data models
├── features/                 # Feature modules
│   └── dashboard/           # Dashboard feature
│       ├── components/      # Feature-specific components
│       ├── services/        # Feature-specific services
│       └── models/          # Feature-specific models
├── layout/                   # Layout components
│   └── components/          # Layout-specific components
└── app.component.*          # Root component
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)
- Angular CLI (v19 or higher)

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd spiker

# Install dependencies
npm install

# Install Husky hooks
npm run prepare
```

### Development

```bash
# Start development server
npm start

# Run with specific environment
ng serve --configuration development
```

Navigate to `http://localhost:4200/`. The application will automatically reload when you change source files.

## 🛠️ Development Tools

### Code Quality

This project includes comprehensive tooling for code quality:

- **ESLint**: Linting for TypeScript and Angular templates
- **Prettier**: Code formatting
- **Husky**: Git hooks for automated checks
- **Conventional Commits**: Standardized commit messages

### Available Scripts

```bash
# Development
npm start                    # Start dev server
npm run build               # Build for production
npm run watch               # Build in watch mode

# Code Quality
npm run lint                # Run ESLint
npm run lint:fix            # Fix ESLint issues
npm run format              # Format code with Prettier
npm run format:check        # Check code formatting

# Testing
npm test                    # Run unit tests
npm run test:watch          # Run tests in watch mode

# Storybook
npm run storybook           # Start Storybook dev server
npm run build-storybook     # Build Storybook for production
```

### Git Workflow

This project uses conventional commits and automated checks:

1. **Commit Message Format**: Follow the [Commit Guide](./COMMIT_GUIDE.md)
2. **Pre-commit Hooks**: Automatically run linting and formatting
3. **Commit Message Validation**: Ensures proper commit format

Example commit:
```bash
git commit -m "feat(dashboard): add zoom functionality to network diagram"
```

## 🧩 Key Features

### Modern Angular Patterns

- **Signals**: Reactive state management with Angular signals
- **Standalone Components**: Modern component architecture
- **Dependency Injection**: Clean service architecture
- **TypeScript**: Full type safety

### Component Architecture

- **Shared Components**: Reusable UI components
- **Feature Components**: Domain-specific components
- **Layout Components**: Application shell components
- **Service Layer**: Business logic separation

### State Management

- **Signal-based Services**: Reactive state management
- **Service Injection**: Dependency injection patterns
- **Computed Values**: Reactive computed properties

## 📦 Project Structure Details

### Core Module
Contains singleton services and application-wide functionality:
- `ZoomService`: Manages zoom functionality
- `NavigationService`: Handles navigation state

### Shared Module
Reusable components and utilities:
- `NoteComponent`: Display note cards
- `ListComponent`: Display list items
- `StatusComponent`: Status indicators
- `ImageHoverComponent`: Interactive image components

### Features Module
Feature-specific components and services:
- **Dashboard**: Main dashboard functionality
  - Components for dashboard layout
  - Services for dashboard data
  - Models for dashboard types

### Layout Module
Application shell components:
- `SidenavComponent`: Navigation sidebar

## 🎨 Storybook Integration

Component development and documentation with Storybook:

```bash
# Start Storybook
npm run storybook

# Build Storybook
npm run build-storybook
```

Access Storybook at `http://localhost:6006/`

## 🔧 Configuration

### ESLint Configuration
- Angular-specific rules
- TypeScript best practices
- Naming conventions enforcement

### Prettier Configuration
- Consistent code formatting
- Angular template support
- Custom formatting rules

### Husky Configuration
- Pre-commit linting and formatting
- Commit message validation
- Automated quality checks

## 🚀 Deployment

### Production Build

```bash
npm run build
```

Build artifacts are stored in the `dist/` directory.

### Environment Configuration

Configure environments in:
- `src/environments/environment.ts` (development)
- `src/environments/environment.prod.ts` (production)

## 📚 Documentation

- [Commit Guidelines](./COMMIT_GUIDE.md)
- [Component Documentation](http://localhost:6006/) (Storybook)
- [Angular Documentation](https://angular.dev/)

## 🤝 Contributing

1. Follow the [Commit Guidelines](./COMMIT_GUIDE.md)
2. Ensure all tests pass: `npm test`
3. Ensure linting passes: `npm run lint`
4. Ensure formatting is correct: `npm run format:check`
5. Create comprehensive component stories for new components

## 📄 License

This project is licensed under the MIT License.