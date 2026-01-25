import { ThemeConfig } from "@/config/theme";
import React from "react";

export function generateThemeVariables(config: ThemeConfig, mode: "light" | "dark" = "light") {
  const modeColors = config.modes[mode];
  const brand = config.brand;

  return {
    // Brand base
    "--brand-primary": brand.primary,
    "--brand-primary-fg": brand.primaryForeground,
    "--brand-accent": brand.accent,
    "--brand-accent-fg": brand.accentForeground,

    // Semantic mode-specific
    "--brand-background": modeColors.background,
    "--brand-foreground": modeColors.foreground,
    "--brand-card": modeColors.card,
    "--brand-card-fg": modeColors.cardForeground,
    "--brand-popover": modeColors.popover,
    "--brand-popover-fg": modeColors.popoverForeground,
    "--brand-muted": modeColors.muted,
    "--brand-muted-fg": modeColors.mutedForeground,
    "--brand-border": modeColors.border,
    "--brand-input": modeColors.input,
    "--brand-ring": modeColors.ring,

    // Shared structural
    "--brand-font-heading": brand.fontHeading,
    "--brand-font-body": brand.fontBody,
    "--brand-radius": brand.radius,
    "--brand-spacing-unit": brand.spacing,

    // Typography
    "--text-h1": config.typography.h1,
    "--text-h2": config.typography.h2,
    "--text-h3": config.typography.h3,
    "--text-h4": config.typography.h4,
    "--text-body": config.typography.body,
  } as React.CSSProperties;
}
