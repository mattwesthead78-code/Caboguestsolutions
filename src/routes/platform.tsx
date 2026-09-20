import { createFileRoute } from "@tanstack/react-router";
import { PageIntro, SiteShell } from "@/components/site-shell";
import { integrations, modules } from "@/lib/content";

export const Route = createFileRoute("/platform")({ component: Platform });

function Platform() {
  return (
    <SiteShell>
      <PageIntro
        kicker="Platform"
        title="A guest engine, dressed as your brand."
        lede="Nine production modules. Mix them for a villa, a cliffside restaurant, a marina boutique, or a private yacht. Every pixel is yours."
      />

      <section className="mx-auto max-w-6xl px-5 pb-8 md:px-8">
        <div className="overflow-hidden rounded-[1.75rem]">
          <img
            src="/images/villa.jpg"
            alt="Interior of a Cabo villa looking out to the pool"
            className="img-frame h-[280px] w-full object-cover md:h-[420px]"
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8">
        <ol className="divide-y divide-border">
          {modules.map((mod) => (
            <li
              key={mod.id}
              className="grid gap-4 py-8 md:grid-cols-12 md:items-start"
            >
              <span className="text-[12px] tabular-nums text-subtle md:col-span-1">
                {mod.number}
              </span>
              <div className="md:col-span-4">
                <h2 className="font-display text-3xl font-medium tracking-tight">
                  {mod.name}
                </h2>
                <p className="mt-2 text-sm text-accent">{mod.summary}</p>
              </div>
              <p className="text-sm leading-relaxed text-muted md:col-span-7 md:pt-2">
                {mod.detail}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8">
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-accent">
            Integrations
          </p>
          <h2 className="mt-3 font-display text-3xl font-medium md:text-4xl">
            Locks, payments, and messaging already in the building.
          </h2>
          <ul className="mt-8 flex flex-wrap gap-2">
            {integrations.map((item) => (
              <li
                key={item}
                className="rounded-full px-4 py-2 text-sm text-muted shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-fg)_14%,transparent)]"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </SiteShell>
  );
}
