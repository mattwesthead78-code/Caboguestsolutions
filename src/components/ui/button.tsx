import { type ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "ghost" | "outline" | "cream";

const variants: Record<Variant, string> = {
  primary: "bg-fg text-bg hover:bg-fg/90",
  cream: "bg-fg text-bg hover:bg-fg/90",
  ghost: "bg-transparent text-fg hover:bg-raised",
  outline:
    "bg-transparent text-fg shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-fg)_18%,transparent)] hover:shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-fg)_34%,transparent)]",
};

export const Button = forwardRef<
  HTMLButtonElement,
  ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }
>(function Button({ className, variant = "primary", ...props }, ref) {
  return (
    <button
      ref={ref}
      className={cn(
        "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 text-sm font-medium tracking-wide transition-[background-color,box-shadow,transform,opacity] duration-150 ease-out active:not-disabled:scale-[0.96] disabled:opacity-50",
        variants[variant],
        className,
      )}
      {...props}
    />
  );
});
