import { ThemeConfig } from "@/config/theme";
import React from "react";

export function generateThemeVariables(config: ThemeConfig, mode: "light" | "dark" = "light") {
  const colors = config.modes[mode].colors;
  
  return {
    "--brand-primary": colors.primary.base,
    "--brand-primary-fg": colors.primary.foreground,
    "--brand-background": colors.background,
    "--brand-text": colors.text,
    "--brand-accent": colors.accent.base,
    "--brand-accent-fg": colors.accent.foreground,
    
    // Static shared properties
    "--brand-font-heading": config.fonts.heading,
    "--brand-font-body": config.fonts.body,
    "--brand-radius": config.radius,
    "--brand-spacing-unit": config.spacing,
    "--text-h1": config.typography.h1,
    "--text-h2": config.typography.h2,
    "--text-h3": config.typography.h3,
    "--text-h4": config.typography.h4,
    "--text-body": config.typography.body,
  } as React.CSSProperties;
}
