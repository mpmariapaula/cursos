# figma-make-app

React + Vite + Tailwind CSS project running inside Figma Make.

## Development Server

A Vite development server is **already running** on `$PORT` (default 8443). You don't need to start it manually.

- Preview URL: The user can access the running app through the preview panel
- Hot reload: Changes to source files are reflected immediately

## Project Structure

This is the canonical project structure. Start with task-relevant files below. Only follow imports or inspect other files when required, when a documented path is missing, or when the repository contradicts this guide.

Configuration and entrypoints:

- `index.html` - Vite HTML shell containing the `#root` element and loading `src/main.tsx`
- `package.json` - Project dependencies and the Vite build, development, preview, and formatting scripts
- `vite.config.ts` - Vite configuration with React, Tailwind CSS v4, and Figma Make plugins plus the `@` alias for `src`
- `.mise.toml` - Toolchain versions for Node.js and pnpm
- `src/main.tsx` - React entrypoint; imports `src/index.css` and mounts `src/App.tsx` into the `#root` element
- `src/App.tsx` - Composition root only: loads persisted state through hooks and chooses between the public site and the admin area (`?area=admin`)
- `src/index.css` - Imports Tailwind and every stylesheet under `src/styles/` (no rules live here)

Source layout (`src/`):

- `types/` - Domain types (`Course`, `Enrollment`, `HomeContent`, testimonials, admin). Import from `@/types`
- `data/` - Initial/mock data and static lists (courses, testimonials, navigation, admin dashboard, etc.)
- `hooks/` - Reusable state logic: `usePersistentState` (localStorage), `useCourses`, `useEnrollments`, `useTestimonialModeration`
- `lib/` - Small helpers (`routing.ts`, `storage-keys.ts`)
- `components/icons/` - SVG icons
- `components/ui/` - Shared presentational components (`Logo`, `SectionIntro`, `StatusPill`, `Modal`, `FormField`)
- `features/public/` - Public landing page: `PublicSite.tsx`, one file per page section in `sections/`, and section-specific parts in `components/` (`CourseCard`, `EnrollmentModal`)
- `features/admin/` - Admin area: `AdminApp.tsx`, layout parts in `components/` (sidebar, topbar, `CourseForm`, ...) and one file per screen in `panels/`
- `styles/` - Plain CSS split by responsibility: `theme.css` (Tailwind `@theme` tokens), `base.css`, `components/` (shared), `public/` and `admin/`. Each file keeps its own responsive (`@media`) rules at the end

Where to put new code:

- New page section on the public site: `features/public/sections/<Name>.tsx`, add it to `PublicSite.tsx`, and its styles to `styles/public/<name>.css` (then import it in `src/index.css`)
- New admin screen: `features/admin/panels/<Name>Panel.tsx`, add its id to `AdminSection` in `types/admin.ts`, the menu entry in `data/admin-navigation.ts`, and render it in `AdminApp.tsx`
- Static content or mock data belongs in `data/`, not inside components
- Import across folders with the `@/` alias; use relative imports only inside the same feature

## Dependencies

- Runtime: React 19 and React DOM 19
- Styling: Tailwind CSS v4 with the `@tailwindcss/vite` plugin
- Build tooling: Vite 8, TypeScript 5.7, and `@vitejs/plugin-react`
- Formatting: oxfmt

## Styling

This project uses **Tailwind CSS v4** through the `@tailwindcss/vite` plugin configured in `vite.config.ts`. `src/index.css` imports Tailwind with `@import 'tailwindcss';`. Use Tailwind utility classes directly in JSX and put global CSS or Tailwind v4 theme customization in `src/index.css`. This scaffold does not need a Tailwind config file or PostCSS config.

`src/main.tsx` imports `src/index.css`, so global font wiring belongs in `src/index.css`. Keep CSS `@import` statements first, then add any `@font-face` rules and font-family defaults there.

## Code quality

- Use double quotes for strings containing apostrophes (`"We're here to help"`), or escape them in single-quoted strings. An unescaped apostrophe in a single-quoted string breaks the build.
- Ensure JSX tags are closed and braces are balanced.
- Export components as default exports.
