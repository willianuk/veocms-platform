"use client";

import { GithubIcon } from "@/components/icons/github-icon";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { useState } from "react";

/**
 * LoginPage Component
 * 
 * A visually stunning login interface for GitCMS.
 * Follows a minimalist, high-end aesthetic with precise spacing and typography.
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
          <h1 className="font-heading text-[42px] font-bold text-text-main leading-tight mb-3 tracking-tight">
            Login to <span className="text-primary">GitCMS</span>
          </h1>
          <p className="text-text-main/50 text-lg font-body max-w-[300px]">
            Your GitHub-powered content workspace.
          </p>
        </header>

        {/* Action Section */}
        <div className="w-full flex flex-col items-center gap-8">
          <button 
            onClick={handleLogin}
            disabled={isLoading}
            className="group w-full h-[58px] flex items-center justify-center gap-3.5 bg-white dark:bg-zinc-900 border border-black/[0.08] dark:border-white/[0.08] rounded-brand text-text-main font-semibold shadow-[0_2px_4px_rgba(0,0,0,0.02)] transition-all hover:bg-black/[0.01] dark:hover:bg-white/[0.02] hover:shadow-[0_4px_12px_rgba(0,0,0,0.05)] dark:hover:shadow-[0_4px_12px_rgba(0,0,0,0.2)] active:scale-[0.98] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <div className="h-5 w-5 animate-spin rounded-full border-2 border-primary border-t-transparent" />
            ) : (
              <GithubIcon className="w-[22px] h-[22px] transition-transform group-hover:scale-110" />
            )}
            <span className="text-[17px]">{isLoading ? "Connecting..." : "Continue with GitHub"}</span>
          </button>

          <p className="text-[14px] text-text-main/40 leading-relaxed px-4 font-body max-w-[340px]">
            By clicking continue, you agree to our{" "}
            <Link href="/terms" className="text-text-main/60 underline underline-offset-4 hover:text-text-main transition-colors decoration-text-main/20 hover:decoration-text-main/40">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="text-text-main/60 underline underline-offset-4 hover:text-text-main transition-colors decoration-text-main/20 hover:decoration-text-main/40">
              Privacy Policy
            </Link>
            .
          </p>
        </div>

        {/* Footer Section */}
        <footer className="mt-28 flex items-center gap-5 text-[14px] font-medium text-text-main/30 font-body">
          <Link href="/help" className="hover:text-text-main/60 transition-colors">
            Help Center
          </Link>
          <div className="w-[1.5px] h-3.5 bg-text-main/10" aria-hidden="true" />
          <Link href="/updates" className="hover:text-text-main/60 transition-colors">
            Product Updates
          </Link>
        </footer>
      </div>
    </div>
  );
}
