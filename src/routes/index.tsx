import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Download } from "lucide-react";
import { PhoneSimulator } from "@/components/phone-simulator";
import { SiteShell } from "@/components/site-shell";
import { androidApk } from "@/lib/content";
import { useCopy } from "@/lib/use-copy";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const { t, company, industries, modules, process } = useCopy();

  return (
    <SiteShell>
      <section className="relative min-h-[100svh] overflow-hidden">
        <img
          src="/images/hero.jpg"
          alt="Oceanfront stay in Cabo San Lucas at blue hour"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/55 to-bg/20" />
        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-5 pb-16 pt-28 md:px-8 md:pb-20">
          <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-fg/80">
            {company.eyebrow}
          </p>
          <h1 className="mt-4 max-w-4xl font-display text-[2.75rem] leading-[0.95] font-medium tracking-tight md:text-7xl lg:text-8xl">
            {company.tagline}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-fg/80 md:text-lg">
            {company.lede}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex min-h-11 items-center rounded-full bg-fg px-5 text-sm font-medium text-bg transition-transform duration-150 active:scale-[0.96]"
            >
              {t("cta.talk")}
            </Link>
            <Link
              to="/pricing"
              className="inline-flex min-h-11 items-center rounded-full px-5 text-sm font-medium text-fg shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-fg)_28%,transparent)] transition-transform duration-150 active:scale-[0.96]"
            >
              {t("cta.prices")}
            </Link>
            <a
              href={androidApk.href}
              download={androidApk.fileName}
              className="inline-flex min-h-11 items-center gap-2 rounded-full px-5 text-sm font-medium text-fg shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-fg)_28%,transparent)] transition-transform duration-150 active:scale-[0.96]"
            >
              <Download className="size-4" />
              {t("cta.download")}
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-4 px-5 py-20 md:grid-cols-2 md:px-8 md:py-28">
        <article className="rounded-[1.75rem] bg-surface p-7 md:p-9">
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-accent">
            {t("offer.ops.kicker")}
          </p>
          <h2 className="mt-3 font-display text-4xl font-medium tracking-tight md:text-5xl">
            {t("offer.ops.title")}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted">
            {t("offer.ops.body")}
          </p>
          <Link
            to="/platform"
            className="mt-6 inline-flex items-center gap-2 text-sm text-fg"
          >
            {t("offer.ops.link")} <ArrowRight className="size-4" />
          </Link>
        </article>
        <article className="rounded-[1.75rem] bg-surface p-7 md:p-9">
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-accent">
            {t("offer.apps.kicker")}
          </p>
          <h2 className="mt-3 font-display text-4xl font-medium tracking-tight md:text-5xl">
            {t("offer.apps.title")}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted">
            {t("offer.apps.body")}
          </p>
          <Link
            to="/app"
            className="mt-6 inline-flex items-center gap-2 text-sm text-fg"
          >
            {t("offer.apps.link")} <ArrowRight className="size-4" />
          </Link>
        </article>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-accent">
            {t("home.demoKicker")}
          </p>
          <h2 className="mt-3 max-w-3xl font-display text-4xl font-medium tracking-tight md:text-5xl">
            {t("home.demoTitle")}
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted">
            {t("home.demoBody")}
          </p>
          <div className="mt-8 overflow-hidden rounded-[1.5rem] bg-black shadow-[0_0_0_1px_var(--color-border)]">
            <video
              className="aspect-video w-full"
              controls
              playsInline
              preload="metadata"
              poster="/videos/rackfolio-demo.jpg"
            >
              <source src="/videos/rackfolio-demo.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="mt-5 flex flex-wrap gap-5 text-sm">
            <Link to="/demo" className="inline-flex items-center gap-2 text-fg">
              {t("nav.demo")} <ArrowRight className="size-4" />
            </Link>
            <a
              href="https://www.youtube.com/watch?v=G1ReKwM7EPs"
              className="text-fg underline decoration-accent underline-offset-4"
            >
              {t("home.demoLink")}
            </a>
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-24">
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-accent">
            {t("home.whoKicker")}
          </p>
          <h2 className="mt-3 max-w-3xl font-display text-4xl font-medium tracking-tight md:text-5xl">
            {t("home.whoTitle")}
          </h2>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((ind) => (
              <article
                key={ind.id}
                className="overflow-hidden rounded-[1.5rem] bg-surface"
              >
                <img
                  src={ind.image}
                  alt={ind.imageAlt}
                  className="img-frame h-40 w-full object-cover"
                />
                <div className="p-6">
                  <p className="text-[11px] uppercase tracking-[0.16em] text-accent">
                    {ind.kicker}
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-medium">
                    {ind.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {ind.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-surface/40">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-accent">
                {t("home.modulesKicker")}
              </p>
              <h2 className="mt-3 max-w-xl font-display text-4xl font-medium tracking-tight md:text-5xl">
                {t("home.modulesTitle")}
              </h2>
            </div>
            <Link
              to="/platform"
              className="inline-flex items-center gap-2 text-sm text-muted hover:text-fg"
            >
              {t("home.modulesLink")} <ArrowRight className="size-4" />
            </Link>
          </div>
          <ol className="mt-12 divide-y divide-border">
            {modules.slice(0, 4).map((mod) => (
              <li
                key={mod.id}
                className="grid gap-3 py-6 md:grid-cols-12 md:items-baseline"
              >
                <span className="text-[12px] tabular-nums text-subtle md:col-span-1">
                  {mod.number}
                </span>
                <h3 className="font-display text-2xl font-medium md:col-span-4">
                  {mod.name}
                </h3>
                <p className="text-sm leading-relaxed text-muted md:col-span-7">
                  {mod.detail}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <PhoneSimulator />
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-accent">
            {t("home.how")}
          </p>
          <h2 className="mt-3 max-w-xl font-display text-4xl font-medium tracking-tight md:text-5xl">
            {t("home.howTitle")}
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {process.map((step) => (
              <article key={step.number}>
                <p className="text-[12px] tabular-nums text-subtle">{step.number}</p>
                <h3 className="mt-3 font-display text-2xl font-medium">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {step.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <img
          src="/images/hotel.jpg"
          alt="A quiet corridor in a Los Cabos stay"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-bg/75" />
        <div className="relative mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-accent">
            {t("home.next")}
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-4xl font-medium tracking-tight md:text-6xl">
            {t("home.nextTitle")}
          </h2>
          <p className="mt-4 max-w-lg text-base text-fg/80">{t("home.nextBody")}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex min-h-11 items-center rounded-full bg-fg px-5 text-sm font-medium text-bg"
            >
              {t("cta.talk")}
            </Link>
            <Link
              to="/platform"
              className="inline-flex min-h-11 items-center rounded-full px-5 text-sm font-medium text-fg shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-fg)_28%,transparent)]"
            >
              {t("cta.software")}
            </Link>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
