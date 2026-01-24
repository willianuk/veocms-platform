import type { Metadata } from "next";
import { Roboto_Serif } from "next/font/google";
import "./globals.css";
import { themeConfig } from "@/config/theme";
import { generateThemeVariables } from "@/lib/theme-utils";
import { ThemeProvider } from "@/components/theme-provider";

const robotoSerif = Roboto_Serif({
  subsets: ["latin"],
  variable: "--font-roboto-serif",
});

export const metadata: Metadata = {
  title: "GitCMS - GitHub-based CMS",
  description: "A professional CMS entirely based on GitHub repositories.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const lightStyles = generateThemeVariables(themeConfig, "light");
  const darkStyles = generateThemeVariables(themeConfig, "dark");

  return (
    <html lang="es" className={robotoSerif.variable} suppressHydrationWarning>
      <head>
        <style dangerouslySetInnerHTML={{ __html: `
          :root {
            ${Object.entries(lightStyles).map(([k, v]) => `${k}: ${v};`).join(' ')}
          }
          [data-theme='dark'] {
            ${Object.entries(darkStyles).map(([k, v]) => `${k}: ${v};`).join(' ')}
          }
        `}} />
      </head>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
