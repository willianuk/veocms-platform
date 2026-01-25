export const themeConfig = {
  // Shared brand tokens
  brand: {
    primary: "#DD4B39",
    primaryForeground: "#FFFFFF",
    accent: "#FBE0DD",
    accentForeground: "#141414",
    radius: "10px",
    spacing: "4px",
    fontHeading: "var(--font-roboto-serif)",
    fontBody: "Segoe UI, system-ui, -apple-system, sans-serif",
  },
  // Semantic tokens for each mode
  modes: {
    light: {
      background: "#F8F9FA",
      foreground: "#141414",
      card: "#FFFFFF",
      cardForeground: "#141414",
      popover: "#FFFFFF",
      popoverForeground: "#141414",
      muted: "#F1F1F1",
      mutedForeground: "#71717A",
      border: "#E4E4E7",
      input: "#E4E4E7",
      ring: "#DD4B39",
    },
    dark: {
      background: "#0F0F0F",
      foreground: "#F1F1F1",
      card: "#18181B",
      cardForeground: "#F1F1F1",
      popover: "#18181B",
      popoverForeground: "#F1F1F1",
      muted: "#27272A",
      mutedForeground: "#A1A1AA",
      border: "#27272A",
      input: "#27272A",
      ring: "#E25C4D",
    },
  },
  // Typography scales
  typography: {
    h1: "56px",
    h2: "30px",
    h3: "14px",
    h4: "12px",
    body: "12px",
  },
} as const;

export type ThemeConfig = typeof themeConfig;
