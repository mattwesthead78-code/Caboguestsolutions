import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { UserButton } from "@/lib/auth/gates";
import { useCurrentUserState } from "@/lib/auth/use-current-user";
import { nav } from "@/lib/content";
import { cn } from "@/lib/utils";

function AccountSlot() {
  const { user, isPending } = useCurrentUserState();
  if (isPending) {
    return <div className="hidden size-8 animate-pulse rounded-full bg-raised md:block" />;
  }
  if (!user) return null;
  return (
    <div className="hidden md:flex">
      <UserButton />
    </div>
  );
}

export function SiteHeader({ inverted = false }: { inverted?: boolean }) {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header
      className={cn(
        "absolute inset-x-0 top-0 z-40",
        inverted ? "text-fg" : "text-fg",
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-5 md:px-8">
        <Link
          to="/"
          className="flex items-baseline gap-2 tracking-tight"
          onClick={() => setOpen(false)}
        >
          <span className="font-display text-[1.35rem] font-medium leading-none">
            CaboGuest
          </span>
          <span className="hidden text-[10px] font-medium uppercase tracking-[0.22em] text-muted sm:inline">
            Solutions
          </span>
        </Link>

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

        <div className="flex items-center gap-3">
          <AccountSlot />
          <Link
            to="/contact"
            className="hidden min-h-10 items-center rounded-full bg-fg px-4 text-[12px] font-medium uppercase tracking-[0.16em] text-bg transition-transform duration-150 active:scale-[0.96] md:inline-flex"
          >
            Start a project
          </Link>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-full lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "fixed inset-0 z-50 flex flex-col bg-bg px-6 pt-6 transition-opacity duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden",
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0",
        )}
      >
        <div className="flex items-center justify-between">
          <span className="font-display text-xl">CaboGuest</span>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          >
            <X className="size-5" />
          </button>
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
        </nav>
        <div className="mt-8">
          <UserButton />
        </div>
        <p className="mt-auto pb-10 text-sm text-muted">
          Cabo San Lucas · Native Android & iOS
        </p>
      </div>
    </header>
  );
}
