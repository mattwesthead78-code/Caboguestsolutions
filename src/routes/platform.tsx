import { createFileRoute, Link } from "@tanstack/react-router";
import { PageIntro, SiteShell } from "@/components/site-shell";
import { customizations } from "@/lib/content";
import { useCopy } from "@/lib/use-copy";
import type { MessageKey } from "@/lib/messages";

export const Route = createFileRoute("/platform")({ component: Platform });

function Platform() {
  const { t, modules } = useCopy();

  return (
    <SiteShell>
      <PageIntro
        kicker={t("page.platform.kicker")}
        title={t("page.platform.title")}
        lede={t("page.platform.lede")}
      />

      <section className="mx-auto max-w-6xl px-5 pb-8 md:px-8">
        <div className="overflow-hidden rounded-[1.75rem]">
          <img
            src="/images/villa.jpg"
            alt="Interior of a small property looking out to the pool"
            className="img-frame h-[240px] w-full object-cover md:h-[380px]"
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
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-12 md:px-8">
          <div className="md:col-span-5">
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-accent">
              {t("page.platform.customKicker")}
            </p>
            <h2 className="mt-3 font-display text-3xl font-medium md:text-4xl">
              {t("page.platform.customTitle")}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              {t("page.platform.customBody")}
            </p>
            <figure className="mt-8 hidden md:block">
              <img
                src="/images/towels.png"
                alt="RackFolio laundry screen counting towels by room"
                className="max-h-52 w-auto rounded-2xl object-contain shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-fg)_12%,transparent)]"
              />
              <figcaption className="mt-3 text-[11px] uppercase tracking-[0.16em] text-subtle">
                {t("page.platform.caption")}
              </figcaption>
            </figure>
          </div>
          <ul className="space-y-4 md:col-span-7">
            {customizations.map((id) => (
              <li
                key={id}
                className="rounded-2xl bg-surface px-5 py-4 text-sm leading-relaxed text-muted"
              >
                {t(`custom.${id}` as MessageKey)}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-border bg-surface/40">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-16 md:flex-row md:items-end md:justify-between md:px-8">
          <div className="max-w-xl">
            <h2 className="font-display text-3xl font-medium tracking-tight md:text-4xl">
              {t("home.howTitle")}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              {t("company.engineering")}
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex min-h-11 w-fit items-center rounded-full bg-fg px-5 text-sm font-medium text-bg"
          >
            {t("cta.talk")}
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
