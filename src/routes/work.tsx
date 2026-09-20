import { createFileRoute } from "@tanstack/react-router";
import { useMemo } from "react";
import { PhoneSimulator } from "@/components/phone-simulator";
import { PageIntro, SiteShell } from "@/components/site-shell";
import { demos, industries, type IndustryId } from "@/lib/content";
import { cn } from "@/lib/utils";

type WorkSearch = {
  industry?: IndustryId;
};

export const Route = createFileRoute("/work")({
  validateSearch: (search: Record<string, unknown>): WorkSearch => {
    const industry = search.industry;
    const match = industries.find((i) => i.id === industry);
    return { industry: match?.id };
  },
  component: Work,
});

function Work() {
  const { industry } = Route.useSearch();
  const navigate = Route.useNavigate();
  const active = industry ?? "hotel";

  const current = useMemo(
    () => industries.find((i) => i.id === active) ?? industries[0],
    [active],
  );
  const demo = demos.find((d) => d.industryId === current.id) ?? demos[0];

  return (
    <SiteShell>
      <PageIntro
        kicker="Work"
        title="Production presets, not mockups."
        lede="These are the kinds of businesses we ship for in Los Cabos. Open a vertical, then run the guest flow we built for it."
      />

      <section className="mx-auto max-w-6xl px-5 pb-10 md:px-8">
        <div className="flex flex-wrap gap-2">
          {industries.map((ind) => (
            <button
              key={ind.id}
              type="button"
              onClick={() => navigate({ search: { industry: ind.id } })}
              className={cn(
                "min-h-10 rounded-full px-4 text-[12px] font-medium transition-[background-color,color] duration-150",
                ind.id === current.id
                  ? "bg-fg text-bg"
                  : "text-muted shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-fg)_14%,transparent)] hover:text-fg",
              )}
            >
              {ind.short}
            </button>
          ))}
        </div>

        <article className="mt-8 overflow-hidden rounded-[1.75rem] bg-surface">
          <div className="grid lg:grid-cols-2">
            <img
              src={current.image}
              alt={current.imageAlt}
              className="img-frame h-64 w-full object-cover lg:h-full"
            />
            <div className="p-7 md:p-10">
              <p className="text-[11px] uppercase tracking-[0.18em] text-accent">
                {current.kicker}
              </p>
              <h2 className="mt-3 font-display text-3xl font-medium tracking-tight md:text-4xl">
                {current.name}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                {current.description}
              </p>
              <p className="mt-5 text-sm text-fg">{current.suite}</p>
              <p className="mt-6 text-[11px] uppercase tracking-[0.16em] text-subtle">
                Sample property
              </p>
              <p className="mt-1 font-display text-xl">{current.sample}</p>
            </div>
          </div>
        </article>
      </section>

      <section
        id="simulator"
        className="border-t border-border bg-surface/30"
      >
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <PhoneSimulator initialId={demo.id} key={demo.id} />
        </div>
      </section>
    </SiteShell>
  );
}
