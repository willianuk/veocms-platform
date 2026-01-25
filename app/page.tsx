import Image from "next/image";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background p-8 font-body transition-colors duration-300">
      <main className="flex w-full max-w-4xl flex-col gap-12">
        {/* Header Section */}
        <section className="flex flex-col gap-4">
          <h1 className="text-primary font-heading">Login to GitCMS</h1>
          <p className="max-w-xl text-foreground/80">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </section>

        {/* Buttons Section */}
        <section className="flex flex-col gap-4 max-w-sm">
          <button className="flex h-12 w-full items-center justify-center gap-2 rounded-brand bg-primary px-5 text-primary-foreground font-semibold transition-opacity hover:opacity-90 cursor-pointer">
            <span className="text-xl">+</span> New Post
          </button>

          <button className="flex h-12 w-full items-center justify-center gap-2 rounded-brand border border-border bg-card px-5 text-card-foreground font-medium transition-colors hover:bg-muted cursor-pointer">
            <Image
              src="/vercel.svg"
              alt="GitHub"
              width={16}
              height={16}
              className="dark:invert opacity-80"
            />
            Continue with GitHub
          </button>
        </section>

        {/* Content Section */}
        <section className="flex flex-col gap-6">
          <h2 className="font-heading">Recent Posts</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col overflow-hidden rounded-brand border border-border bg-card shadow-sm">
              <div className="h-48 bg-accent/20 flex items-center justify-center">
                <div className="w-12 h-12 rounded bg-accent/40 opacity-50" />
              </div>
              <div className="p-6 flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/30 px-2 py-0.5 rounded">
                    Published
                  </span>
                  <span className="text-[10px] text-muted-foreground">2h ago</span>
                </div>
                <h3 className="text-lg leading-tight text-card-foreground">
                  How to scale React apps with Micro-frontends
                </h3>
                <p className="line-clamp-2 text-muted-foreground">
                  Learn the best practices for managing large scale frontend
                  architectures using module federation and specialized
                  patterns.
                </p>
                <div className="mt-2 flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-accent" />
                  <span className="text-[11px] font-medium text-card-foreground">Alex Chen</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <ThemeToggle />
    </div>
  );
}
