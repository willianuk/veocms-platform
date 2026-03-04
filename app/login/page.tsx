"use client";

import { GithubIcon } from "@/components/icons/github-icon";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { useState } from "react";

/**
 * LoginPage Component
 *
 * A high-end, semantic login interface for GitCMS.
 * Matches the reference UI exactly using base HTML tags and theme variables.
 */
export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    setIsLoading(true);
    try {
      await authClient.signIn.social({
        provider: "github",
        callbackURL: "/",
      });
    } catch (error) {
      console.error("Login failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-6 transition-colors duration-500">
      {/* Reference Top Bar Decoration */}
      <div className="fixed top-0 left-0 w-full h-1 bg-primary" />

      <main className="relative w-full max-w-96 flex flex-col items-center py-12">
        {/* Header Section */}
        <header className="flex flex-col items-center text-center mb-10">
          <h1 className="text-foreground">Login to VeoCMS</h1>
          <p className="text-muted-foreground mt-3 max-w-64">
            Your GitHub-powered content workspace.
          </p>
        </header>

        {/* Action Section */}
        <div className="w-full flex flex-col items-center gap-8">
          <button
            onClick={handleLogin}
            disabled={isLoading}
            className="group w-full h-12 flex items-center justify-center gap-3 rounded-brand bg-card border border-border text-foreground font-medium shadow-sm transition-all hover:bg-muted active:scale-[0.98] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <div className="h-5 w-5 animate-spin rounded-full border-2 border-primary border-t-transparent" />
            ) : (
              <GithubIcon className="w-5 h-5 transition-transform group-hover:scale-110" />
            )}
            <span className="text-[15px]">
              {isLoading ? "Connecting..." : "Continue with GitHub"}
            </span>
          </button>

          <p className="text-center px-4">
            <small className="text-muted-foreground leading-relaxed">
              By clicking continue, you agree to our{" "}
              <Link
                href="/terms"
                className="underline underline-offset-4 hover:text-primary transition-colors decoration-border hover:decoration-primary"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy"
                className="underline underline-offset-4 hover:text-primary transition-colors decoration-border hover:decoration-primary"
              >
                Privacy Policy
              </Link>
              .
            </small>
          </p>
        </div>

        {/* Footer Section */}
        <footer className="mt-16 flex items-center justify-center gap-4">
          <Link
            href="/help"
            className="text-[13px] text-muted-foreground/60 hover:text-foreground transition-colors"
          >
            Help Center
          </Link>
          <div className="w-1 h-1 bg-border rounded-full" aria-hidden="true" />
          <Link
            href="/updates"
            className="text-[13px] text-muted-foreground/60 hover:text-foreground transition-colors"
          >
            Product Updates
          </Link>
        </footer>
      </main>
    </div>
  );
}
