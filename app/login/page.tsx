"use client";

import { GithubIcon } from "@/components/icons/github-icon";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { useState } from "react";

/**
 * LoginPage Component
 *
 * A visually stunning login interface for GitCMS.
 * Fully semantic and connected to the central theme configuration.
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
      {/* Subtle Background Decorative Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-15%] left-[-10%] w-[45%] h-[45%] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-15%] right-[-10%] w-[45%] h-[45%] bg-primary/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative w-full max-w-[420px] flex flex-col items-center text-center">
        {/* Header Section */}
        <header className="flex flex-col items-center mb-12">
          <h2 className="font-heading font-medium text-foreground leading-tight mb-3 tracking-tight">
            Login to <span className="text-primary">GitCMS</span>
          </h2>
          <h3 className="text-muted-foreground font-body max-w-[300px]">
            Your GitHub-powered content workspace.
          </h3>
        </header>

        {/* Action Section */}
        <div className="w-full flex flex-col items-center gap-8">
          <button
            onClick={handleLogin}
            disabled={isLoading}
            className="group w-full h-[48px] flex items-center justify-center gap-3.5 bg-card border border-border rounded-brand text-foreground font-semibold shadow-sm transition-all hover:bg-muted hover:shadow-md active:scale-[0.98] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <div className="h-5 w-5 animate-spin rounded-full border-2 border-primary border-t-transparent" />
            ) : (
              <GithubIcon className="w-[20px] h-[20px] transition-transform group-hover:scale-110" />
            )}
            <span>
              {isLoading ? "Connecting..." : "Continue with GitHub"}
            </span>
          </button>

          <p className="text-[14px] text-muted-foreground/60 leading-relaxed px-4 font-body max-w-[340px]">
            By clicking continue, you agree to our{" "}
            <Link
              href="/terms"
              className="text-muted-foreground underline underline-offset-4 hover:text-foreground transition-colors decoration-border hover:decoration-foreground"
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              href="/privacy"
              className="text-muted-foreground underline underline-offset-4 hover:text-foreground transition-colors decoration-border hover:decoration-foreground"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>

        {/* Footer Section */}
        <footer className="mt-28 flex items-center gap-5 text-[14px] font-medium text-muted-foreground/40 font-body">
          <Link
            href="/help"
            className="hover:text-foreground transition-colors"
          >
            Help Center
          </Link>
          <div className="w-[1.5px] h-3.5 bg-border" aria-hidden="true" />
          <Link
            href="/updates"
            className="hover:text-foreground transition-colors"
          >
            Product Updates
          </Link>
        </footer>
      </div>
    </div>
  );
}
