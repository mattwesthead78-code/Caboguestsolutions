import { useEffect, useId, useRef, useState } from "react";
import { Check, ChevronDown } from "lucide-react";
import {
  Flag,
  localeMeta,
  locales,
  useI18n,
  type Locale,
} from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function LanguageSwitcher({
  align = "right",
}: {
  align?: "left" | "right";
}) {
  const { locale, setLocale, t } = useI18n();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const listId = useId();

  useEffect(() => {
    if (!open) return;

    function onPointer(event: MouseEvent | PointerEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  function choose(next: Locale) {
    setLocale(next);
    setOpen(false);
  }

  return (
    <div ref={rootRef} className="relative" data-language-switcher>
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        aria-label={t("chrome.language")}
        onClick={() => setOpen((value) => !value)}
        className={cn(
          "inline-flex h-11 items-center gap-2 rounded-full px-2.5 text-fg transition-[background-color,box-shadow] duration-150",
          open
            ? "bg-raised"
            : "hover:bg-raised/70",
        )}
      >
        <Flag
          locale={locale}
          className="h-3.5 w-5 shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-fg)_28%,transparent)]"
        />
        <span className="hidden text-[11px] font-medium uppercase tracking-[0.16em] sm:inline">
          {locale}
        </span>
        <ChevronDown
          className={cn(
            "size-3.5 text-muted transition-transform duration-150",
            open && "rotate-180",
          )}
        />
      </button>

      {open ? (
        <ul
          id={listId}
          role="listbox"
          aria-label={t("chrome.language")}
          className={cn(
            "absolute top-[calc(100%+8px)] z-50 min-w-[13.5rem] overflow-hidden rounded-2xl bg-surface py-1.5 shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-fg)_14%,transparent),0_24px_48px_-24px_rgba(0,0,0,0.7)]",
            align === "right" ? "right-0" : "left-0",
          )}
        >
          {locales.map((code) => {
            const selected = code === locale;
            return (
              <li key={code} role="presentation">
                <button
                  type="button"
                  role="option"
                  aria-selected={selected}
                  data-locale={code}
                  onClick={() => choose(code)}
                  className={cn(
                    "flex w-full items-center gap-3 px-3.5 py-2.5 text-left text-sm transition-colors duration-150",
                    selected
                      ? "bg-raised text-accent"
                      : "text-fg hover:bg-raised/80",
                  )}
                >
                  <Flag
                    locale={code}
                    className="h-3.5 w-5 shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-fg)_22%,transparent)]"
                  />
                  <span className="flex-1 font-medium tracking-wide">
                    {localeMeta[code].native}
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.14em] text-subtle">
                    {code}
                  </span>
                  {selected ? (
                    <Check className="size-3.5 text-accent" />
                  ) : (
                    <span className="size-3.5" />
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}
