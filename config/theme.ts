export const themeConfig = {
  // Shared brand tokens based on reference
  brand: {
    primary: "#DB6B46",
    primaryForeground: "#FFFFFF",
    accent: "#E5E3DA",
    accentForeground: "#141413",
    radius: "8px",
    spacing: "4px",
    fontHeading: "var(--font-newsreader), serif",
    fontBody: "var(--font-inter), sans-serif",
  },
  // Semantic tokens for each mode
  modes: {
    light: {
      background: "#FAF9F5",
      foreground: "#141413",
      card: "#FFFFFF",
      cardForeground: "#141413",
      popover: "#FFFFFF",
      popoverForeground: "#141413",
      muted: "#F4F4F1",
      mutedForeground: "#616889",
      border: "#E5E3DA",
      input: "#E5E3DA",
      ring: "#DB6B46",
    },
    dark: {
      background: "#141413",
      foreground: "#FAF9F5",
      card: "#1C1C1B",
      cardForeground: "#FAF9F5",
      popover: "#1C1C1B",
      popoverForeground: "#FAF9F5",
      muted: "#262625",
      mutedForeground: "#949491",
      border: "#262625",
      input: "#262625",
      ring: "#DB6B46",
    },
  },
  // Typography scales (Directly matching reference)
  typography: {
    h1: "32px",
    h2: "24px",
    h3: "18px",
    h4: "15px",
    body: "15px",
    small: "12px",
  },
} as const;

export type ThemeConfig = typeof themeConfig;
