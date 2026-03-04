# AGENTS.md

## Build & Development Commands

**Development:**
```bash
npm run dev          # Start Next.js dev server
```

**Production:**
```bash
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

**No test framework configured** (no test scripts or configs found in package.json)

---

## Code Style Guidelines

### Import Organization

**Internal imports:** Use `@/` path alias (defined in `tsconfig.json`)
```typescript
import { ThemeToggle } from "@/components/theme-toggle";
import { themeConfig } from "@/config/theme";
import { authClient } from "@/lib/auth-client";
```

**External dependencies:** Import from package names
```typescript
import { ThemeProvider } from "next-themes";
import { Newsreader, Inter } from "next/font/google";
import Image from "next/image";
```

**Import order (typical):**
1. React/Next.js imports
2. External packages
3. Internal absolute imports (@/)
4. Internal relative imports (if needed)

### File Structure Conventions

- **App Router:** Use `app/` directory with nested routes (app/page.tsx, app/login/page.tsx, app/layout.tsx)
- **Components:** `components/` directory (Client components with `"use client"`)
- **Libraries:** `lib/` directory for utilities, auth, database, etc.
- **Configuration:** `config/` directory for theme, constants, etc.
- **Separation:** Types often defined in same file as usage, no separate `types/` directory needed

### Naming Conventions

**Components:** PascalCase
```typescript
LoginPage, ThemeToggle, ThemeProvider, Newsreader, Inter
```

**Functions:** camelCase
```typescript
handleLogin, setMounted, generateThemeVariables
```

**Variables/constants:** camelCase (multi-word with underscores)
```typescript
isLoading, lightStyles, darkStyles, themeConfig
```

**Types/Interfaces:** PascalCase
```typescript
Metadata, ThemeConfig
```

**Hooks:** use prefix
```typescript
useTheme, useMounted
```

### TypeScript

- **Strict mode enabled** (in `tsconfig.json`)
- **No `any` types** - use explicit types
- **React 19** with React JSX (`jsx: "react-jsx"`)
- Use `interface` for public API types, `type` for unions/intersections

**Example:**
```typescript
export const metadata: Metadata = {
  title: "Title",
  description: "Description",
};

export type ThemeConfig = typeof themeConfig;
```

### Styling (Tailwind CSS v4)

- **Approach:** Tailwind CSS with custom CSS variables (no CSS modules, styled-components, or plain CSS files)
- **Theme system:** Custom theme config in `config/theme.ts` → CSS variables in `app/globals.css`
- **Dark mode:** `[data-theme="dark"]` attribute (managed by `next-themes`)
- **Radius values:** Use `rounded-brand` or explicit pixel values
- **Spacing:** Use Tailwind spacing scale (p-4, m-2, gap-6) or `spacing-brand` custom var

**Component examples:**
```typescript
// Button
<button className="h-12 w-full rounded-brand bg-primary text-primary-foreground ...">
  Click me
</button>

// Card
<div className="rounded-brand border border-border bg-card ...">
  Content
</div>
```

### Error Handling

**Simple try/catch for async operations:**
```typescript
try {
  await authClient.signIn.social({ provider: "github" });
} catch (error) {
  console.error("Login failed:", error);
}
```

**No error boundaries visible** in codebase (not following React error boundary pattern)

---

## Theme System

**Theme configuration:** `config/theme.ts`
- Defines brand colors (primary, accent, radius, fonts)
- Defines semantic tokens for light/dark modes (background, foreground, card, border, etc.)
- Defines typography scale

**Theme application:**
- `ThemeProvider` wraps app (uses `next-themes`)
- ThemeToggle component toggles between light/dark
- CSS variables injected in `<head>` via `layout.tsx`
- Tailwind v4 uses `@theme` to map CSS vars to Tailwind classes

**Custom utilities:**
- `generateThemeVariables()` in `lib/theme-utils.ts` → generates CSS properties object
- Used in `layout.tsx` to inject theme styles

---

## React Best Practices

**Client Components:** Mark with `"use client"` directive
```typescript
"use client";

export default function ThemeToggle() {
  // ...
}
```

**Server Components:** Default in App Router (no directive)
```typescript
export default function RootLayout({ children }: { children: React.ReactNode }) {
  // ...
}
```

**Fonts:** Use `next/font/google` for better performance
```typescript
const newsreader = Newsreader({ variable: "--font-newsreader" });
const inter = Inter({ variable: "--font-inter" });
```

**Image:** Use `next/image` for optimized images
```typescript
<Image src="/path" alt="Description" width={100} height={100} />
```

**Hydration safety:** Check `mounted` state before rendering conditional content
```typescript
const [mounted, setMounted] = useState(false);
useEffect(() => setMounted(true), []);
if (!mounted) return <div />;
```

---

## Database & Auth

**Database:** Turso (SQLite) with Drizzle ORM
- Schema defined in `lib/db/schema.ts`
- Migrations generated with `drizzle-kit`
- `drizzle.config.ts` configures Turso credentials

**Authentication:** Better Auth
- Config in `lib/auth.ts` (server)
- Client utils in `lib/auth-client.ts`
- Social login via GitHub (client)
- Auth API routes in `app/api/auth/[...auth]/route.ts`

**Pattern:**
```typescript
// Server
export const { GET, POST } = toNextJsHandler(auth);

// Client
await authClient.signIn.social({ provider: "github" });
```

---

## ESLint Rules

Uses `eslint-config-next` with `core-web-vitals` and `typescript` presets:
- Next.js specific rules (link hrefs, img alt text, etc.)
- TypeScript strict rules
- Web Vitals performance rules

**Ignores:** `.next/`, `out/`, `build/`, `next-env.d.ts` (standard Next.js ignores)

---

## Context7 MCP Usage

**Always use Context7 MCP when I need library/API documentation, code generation, setup or configuration steps without me having to explicitly ask.**

## Next.js Configuration

**App Router:** Uses Next.js 16.1.4 App Router
- File-based routing in `app/` directory
- Layout pattern with nested layouts
- Metadata in `layout.tsx`

**Paths alias:** `@/*` → project root (defined in `tsconfig.json`)
```json
{
  "paths": {
    "@/*": ["./*"]
  }
}
```

**Optimization:**
- Font optimization via `next/font/google`
- Image optimization via `next/image`
- Static site generation (SSG) and Server-Side Rendering (SSR) available
