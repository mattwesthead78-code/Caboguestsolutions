import { useMemo, useState } from "react";
import { Check, ChevronRight, KeyRound, Sparkles } from "lucide-react";
import { demos, type DemoPreset } from "@/lib/content";
import { cn } from "@/lib/utils";

export function PhoneSimulator({
  initialId = demos[0].id,
}: {
  initialId?: string;
}) {
  const [presetId, setPresetId] = useState(initialId);
  const [status, setStatus] = useState<string | null>(null);
  const [busy, setBusy] = useState<string | null>(null);

  const preset = useMemo(
    () => demos.find((d) => d.id === presetId) ?? demos[0],
    [presetId],
  );

  function runAction(presetLocal: DemoPreset, actionId: string) {
    const action = presetLocal.actions.find((a) => a.id === actionId);
    if (!action) return;
    setBusy(actionId);
    setStatus(null);
    window.setTimeout(() => {
      setBusy(null);
      setStatus(action.success);
    }, 720);
  }

  return (
    <div className="grid items-start gap-8 lg:grid-cols-[1fr_minmax(280px,340px)] lg:gap-12">
      <div>
        <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-accent">
          Interactive guest flow
        </p>
        <h2 className="mt-3 font-display text-4xl font-medium tracking-tight md:text-5xl">
          Tap through a stay.
        </h2>
        <p className="mt-4 max-w-md text-base leading-relaxed text-muted">
          Each property runs the same engine, dressed in its own brand. Choose a
          preset and run the guest actions we ship in production.
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          {demos.map((d) => {
            const active = d.id === preset.id;
            return (
              <button
                key={d.id}
                type="button"
                onClick={() => {
                  setPresetId(d.id);
                  setStatus(null);
                  setBusy(null);
                }}
                className={cn(
                  "min-h-10 rounded-full px-4 text-[12px] font-medium tracking-wide transition-[background-color,color,box-shadow] duration-150",
                  active
                    ? "bg-fg text-bg"
                    : "text-muted shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-fg)_16%,transparent)] hover:text-fg",
                )}
              >
                {d.name}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mx-auto w-full max-w-[320px]">
        <div className="relative rounded-[2.4rem] bg-raised p-2 shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-fg)_14%,transparent),0_30px_60px_-24px_rgba(0,0,0,0.7)]">
          <div className="overflow-hidden rounded-[1.9rem] bg-bg">
            <div className="flex items-center justify-between px-5 pt-3 text-[10px] text-muted">
              <span className="tabular-nums">9:41</span>
              <span className="mx-auto h-4 w-20 rounded-full bg-raised" />
              <span>LTE</span>
            </div>

            <div className="px-5 pb-5 pt-4">
              <p className="text-[10px] uppercase tracking-[0.18em] text-accent">
                {preset.place}
              </p>
              <h3 className="mt-1 font-display text-[1.65rem] leading-tight font-medium">
                {preset.name}
              </h3>
              <p className="mt-1 text-xs text-muted">{preset.tagline}</p>

              <div className="mt-4 flex items-center justify-between rounded-xl bg-raised px-3 py-2.5">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.14em] text-subtle">
                    Guest
                  </p>
                  <p className="text-sm">{preset.guest}</p>
                </div>
                <KeyRound className="size-4 text-accent" />
              </div>

              <div className="mt-4 space-y-2.5">
                {preset.actions.map((action) => (
                  <button
                    key={action.id}
                    type="button"
                    disabled={busy !== null}
                    onClick={() => runAction(preset, action.id)}
                    className="flex w-full items-start gap-3 rounded-xl bg-raised px-3.5 py-3 text-left transition-[background-color,transform] duration-150 hover:bg-surface active:scale-[0.98] disabled:opacity-60"
                  >
                    <Sparkles className="mt-0.5 size-4 shrink-0 text-accent" />
                    <span className="min-w-0 flex-1">
                      <span className="block text-sm font-medium leading-snug">
                        {action.button}
                      </span>
                      <span className="mt-0.5 block text-[11px] leading-snug text-muted">
                        {action.body}
                      </span>
                    </span>
                    <ChevronRight className="mt-0.5 size-4 shrink-0 text-subtle" />
                  </button>
                ))}
              </div>

              <div
                className={cn(
                  "mt-4 flex min-h-12 items-start gap-2 rounded-xl px-3 py-2.5 text-[12px] leading-snug transition-[opacity,transform] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)]",
                  status
                    ? "bg-accent/15 text-fg opacity-100"
                    : "opacity-0",
                )}
                aria-live="polite"
              >
                <Check className="mt-0.5 size-4 shrink-0 text-accent" />
                <span>{status ?? "Ready."}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
