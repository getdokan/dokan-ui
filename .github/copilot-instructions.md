# Copilot Instructions for dokan-ui

## Overview

This project is a React component library using TypeScript, Vite, Tailwind CSS, and Storybook. It provides a set of UI components for the Dokan platform, with stories for each component under `src/stories/`.

## Project Structure

- `src/components/` — All reusable UI components.
- `src/stories/` — Storybook stories for each component.
- `src/utils/` — Utility functions and theme color definitions.
- `src/styles/app.css` — Tailwind CSS and custom styles.
- `tailwind.config.ts` — Tailwind and theme configuration.
- `vite.config.ts` — Vite build configuration.
- `tsconfig.json` — TypeScript configuration.

## Coding Conventions

- Use TypeScript for all components and utilities.
- Use named exports for components and utilities.
- Use functional components and React hooks.
- Use Tailwind CSS for styling; extend theme via `tailwind.config.ts`.
- Use Storybook for component documentation and testing.
- Use `@` as an alias for `src/` in imports.
- Use `classNames` utility for conditional class merging.

## Adding a New Component

1. Create the component in `src/components/ComponentName.tsx`.
2. Add a Storybook story in `src/stories/ComponentName.stories.tsx`.
3. Use TypeScript types for props and export them.
4. Use Tailwind CSS classes for styling.
5. Add tests if applicable.

## Theming

- Theme colors are defined in `src/utils/index.ts` as `themeColors`.
- Tailwind config extends colors using `extendedThemeColorsUsingVariables`.

## Utilities

- Use `classNames` for merging class names.
- Use `debounceSearch` for debounced async search.

## Storybook

- Stories use the `Meta` and `StoryObj` types from `@storybook/react`.
- Each story exports a `Default` and other variants as needed.
- Use the `args` and `render` pattern for interactive stories.

## Build & Development

- Use Vite for development and build (`vite.config.ts`).
- Use `pnpm` for dependency management.
- Tailwind CSS is configured with plugins for forms and CSS variables.

## Best Practices

- Keep components small and focused.
- Document props and usage in stories.
- Prefer composition over inheritance.
- Use React 18+ features (and update for React 19 as needed).

## Contribution

- Follow existing code style and patterns.
- Add/Update stories for any component changes.
- Ensure all builds and stories work before submitting changes.

---

This file is for GitHub Copilot and other AI coding assistants. Follow these guidelines to ensure consistency and maintainability in this codebase.
