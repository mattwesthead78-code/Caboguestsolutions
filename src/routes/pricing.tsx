import { createFileRoute, Link } from "@tanstack/react-router";
import { PageIntro, SiteShell } from "@/components/site-shell";
import { useCopy } from "@/lib/use-copy";
import type { MessageKey } from "@/lib/messages";

export const Route = createFileRoute("/pricing")({ component: Pricing });

const plans = [
  { id: "house", featured: false },
  { id: "property", featured: true },
  { id: "group", featured: false },
] as const;

const items = ["logo", "phones", "guest", "host"] as const;

const breaks = ["fit", "phones", "guest", "host"] as const;

function Pricing() {
  const { t } = useCopy();
  const key = (value: string) => value as MessageKey;

  return (
    <SiteShell>
      <PageIntro
        kicker={t("page.pricing.kicker")}
        title={t("page.pricing.title")}
        lede={t("page.pricing.lede")}
      />

      <section className="mx-auto grid max-w-6xl gap-4 px-5 md:grid-cols-3 md:px-8">
        {plans.map((plan) => (
          <article
            key={plan.id}
            className={`flex flex-col rounded-[1.5rem] bg-surface p-6 md:p-7 ${
              plan.featured ? "shadow-[0_0_0_1px_var(--color-accent)]" : ""
            }`}
          >
            <div>
              <h2 className="font-display text-3xl font-medium">
                {t(key(`price.${plan.id}.name`))}
              </h2>
              {plan.featured ? (
                <p className="mt-2 text-[11px] uppercase tracking-[0.16em] text-accent">
                  {t("page.pricing.recommended")}
                </p>
              ) : (
                <p className="mt-2 min-h-4" aria-hidden="true" />
              )}
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {t(key(`price.${plan.id}.who`))}
            </p>
            <p className="mt-6 font-display text-5xl font-medium tracking-tight">
              {t(key(`price.${plan.id}.amount`))}
            </p>
            <p className="text-sm text-muted">{t("page.pricing.month")}</p>
            <p className="mt-2 text-sm text-fg/80">{t(key(`price.${plan.id}.year`))}</p>
            <ul className="mt-6 space-y-3 border-t border-border pt-5 text-sm leading-relaxed">
              {items.map((item) => (
                <li key={item}>{t(key(`price.item.${item}`))}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-accent">
          {t("page.pricing.breakKicker")}
        </p>
        <div className="mt-8 grid gap-10 md:grid-cols-2">
          {breaks.map((id) => (
            <article key={id}>
              <h3 className="font-display text-2xl font-medium">
                {t(key(`price.break.${id}.title`))}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">
                {t(key(`price.break.${id}.body`))}
              </p>
            </article>
          ))}
        </div>
        <p className="mt-10 max-w-2xl text-sm leading-relaxed text-subtle">
          {t("page.pricing.fine")}
        </p>
        <Link
          to="/contact"
          className="mt-8 inline-flex min-h-11 items-center rounded-full bg-fg px-5 text-sm font-medium text-bg"
        >
          {t("cta.talk")}
        </Link>
      </section>
    </SiteShell>
  );
}
