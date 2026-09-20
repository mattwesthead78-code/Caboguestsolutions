import type { ReactNode } from "react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { cn } from "@/lib/utils";

export function SiteShell({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("min-h-screen bg-bg text-fg", className)}>
      <SiteHeader />
      {children}
      <SiteFooter />
    </div>
  );
}

export function PageIntro({
  kicker,
  title,
  lede,
}: {
  kicker: string;
  title: string;
  lede: string;
}) {
  return (
    <section className="mx-auto max-w-6xl px-5 pb-12 pt-28 md:px-8 md:pt-32">
      <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-accent">
        {kicker}
      </p>
      <h1 className="mt-4 max-w-3xl font-display text-5xl font-medium tracking-tight md:text-7xl">
        {title}
      </h1>
      <p className="mt-5 max-w-xl text-base leading-relaxed text-muted md:text-lg">
        {lede}
      </p>
    </section>
  );
}
