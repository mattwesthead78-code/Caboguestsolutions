import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";
import { LanguageSwitcher } from "@/components/language-switcher";
import { useCopy } from "@/lib/use-copy";
import { cn } from "@/lib/utils";

export function SiteHeader({ inverted = false }: { inverted?: boolean }) {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const { t, nav } = useCopy();

  return (
    <header
      className={cn(
        "absolute inset-x-0 top-0 z-40",
        inverted ? "text-fg" : "text-fg",
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-5 md:gap-6 md:px-8">
        <BrandLogo onClick={() => setOpen(false)} />

        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => {
            const active =
              item.to === "/"
                ? pathname === "/"
                : pathname.startsWith(item.to);
            return (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "text-[12px] font-medium uppercase tracking-[0.18em] transition-opacity duration-150",
                  active ? "opacity-100" : "opacity-55 hover:opacity-100",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-1.5 sm:gap-3">
          <LanguageSwitcher />
          <Link
            to="/contact"
            className="hidden min-h-10 items-center rounded-full bg-fg px-4 text-[12px] font-medium uppercase tracking-[0.16em] text-bg transition-transform duration-150 active:scale-[0.96] md:inline-flex"
          >
            {t("cta.talk")}
          </Link>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-full lg:hidden"
            aria-label={open ? t("chrome.menuClose") : t("chrome.menuOpen")}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "fixed inset-0 z-50 flex-col bg-bg px-6 pt-6 lg:hidden",
          open ? "flex" : "hidden",
        )}
      >
        <div className="flex items-center justify-between gap-3">
          <BrandLogo onClick={() => setOpen(false)} />
          <div className="flex items-center gap-1">
            <LanguageSwitcher />
            <button
              type="button"
              className="inline-flex size-11 items-center justify-center"
              aria-label={t("chrome.menuClose")}
              onClick={() => setOpen(false)}
            >
              <X className="size-5" />
            </button>
          </div>
        </div>
        <nav className="mt-12 flex flex-col gap-6">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="font-display text-4xl font-medium tracking-tight"
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="mt-4 inline-flex min-h-12 w-fit items-center rounded-full bg-fg px-5 text-sm font-medium text-bg"
          >
            {t("cta.talk")}
          </Link>
        </nav>
        <p className="mt-auto pb-10 text-sm text-muted">
          {t("company.eyebrow")}
        </p>
      </div>
    </header>
  );
}
