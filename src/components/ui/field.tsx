import { type InputHTMLAttributes, type TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const fieldClass =
  "w-full min-h-11 rounded-xl bg-raised px-4 text-sm text-fg placeholder:text-subtle shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-fg)_12%,transparent)] outline-none transition-[box-shadow] duration-150 focus:shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-fg)_36%,transparent)]";

export function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={cn(fieldClass, props.className)} />;
}

export function Textarea(props: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      className={cn(fieldClass, "min-h-32 resize-y py-3", props.className)}
    />
  );
}

export function Label({
  className,
  ...props
}: React.LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label
      className={cn(
        "mb-2 block text-[11px] font-medium uppercase tracking-[0.16em] text-muted",
        className,
      )}
      {...props}
    />
  );
}
