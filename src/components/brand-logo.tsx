import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

function GoldC({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      className={className}
      aria-hidden
    >
      <rect width="32" height="32" rx="7" fill="#032736" />
      <path
        d="M24 8.5c-1.7-1.8-4.3-3-7.3-3C10.4 5.5 6.6 9.9 6.6 16s3.8 10.5 10.1 10.5c3 0 5.6-1.2 7.3-3"
        fill="none"
        stroke="#C9A36A"
        strokeWidth="3.8"
        strokeLinecap="round"
      />
      <path
        d="M12.2 18.6c1.2.7 2.6 1.1 4.2.8 1.8-.4 3.4-1.1 5.4-1"
        fill="none"
        stroke="#2A8A8A"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function HeaderMark() {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return <GoldC className="size-11 shrink-0 rounded-md" />;
  }
  return (
    <img
      src="/images/logo-icon.png"
      alt=""
      className="size-11 shrink-0 rounded-md object-cover shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-fg)_12%,transparent)]"
      onError={() => setFailed(true)}
    />
  );
}

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
      <HeaderMark />
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
  const [failed, setFailed] = useState(false);
  if (failed) {
    return <GoldC className={cn("mx-auto size-40", className)} />;
  }
  return (
    <img
      src="/images/logo.png"
      alt="CaboGuest Solutions — Premium hospitality. Exceptional experiences."
      className={cn(
        "mx-auto w-full max-w-sm rounded-2xl object-cover shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-fg)_10%,transparent)]",
        className,
      )}
      onError={() => setFailed(true)}
    />
  );
}
