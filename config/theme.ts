export const themeConfig = {
  modes: {
    light: {
      colors: {
        primary: {
          base: "#DD4B39",
          foreground: "#FFFFFF",
        },
        background: "#F8F9FA",
        text: "#141414",
        accent: {
          base: "#FBE0DD",
          foreground: "#141414",
        },
      },
    },
    dark: {
      colors: {
        primary: {
          base: "#E25C4D",
          foreground: "#FFFFFF",
        },
        background: "#0F0F0F",
        text: "#F1F1F1",
        accent: {
          base: "#2D1B1A",
          foreground: "#FBE0DD",
        },
      },
    },
  },
  fonts: {
    heading: "'Roboto Serif', serif",
    body: "Segoe UI, system-ui, -apple-system, sans-serif",
  },
  typography: {
    h1: "56px",
    h2: "30px",
    h3: "14px",
    h4: "12px",
    body: "12px",
  },
  radius: "10px",
  spacing: "4px",
} as const;

export type ThemeConfig = typeof themeConfig;
