import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export function BrandLogo({
  to = "/",
  onClick,
  compact = false,
}: {
  to?: "/" | "/app";
  onClick?: () => void;
  compact?: boolean;
}) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="flex items-center gap-2.5 tracking-tight"
    >
      <img
        src="/images/logo-icon.png"
        alt=""
        className="size-10 rounded-md object-cover shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-fg)_12%,transparent)]"
      />
      {compact ? (
        <span className="sr-only">CaboGuest Solutions</span>
      ) : (
        <span className="flex flex-col leading-none">
          <span className="font-display text-[1.25rem] font-medium">CaboGuest</span>
          <span className="mt-1 hidden text-[9px] font-medium uppercase tracking-[0.22em] text-muted sm:inline">
            Solutions
          </span>
        </span>
      )}
    </Link>
  );
}

export function BrandLockup({ className }: { className?: string }) {
  return (
    <img
      src="/images/logo.png"
      alt="CaboGuest Solutions — Premium hospitality. Exceptional experiences."
      className={cn(
        "mx-auto w-full max-w-sm rounded-2xl object-cover shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-fg)_10%,transparent)]",
        className,
      )}
    />
  );
}
