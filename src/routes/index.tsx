import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PhoneSimulator } from "@/components/phone-simulator";
import { SiteShell } from "@/components/site-shell";
import { company, industries, modules, process } from "@/lib/content";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const featured = industries[0];
  const rest = industries.slice(1);

  return (
    <SiteShell>
      <section className="relative min-h-[100svh] overflow-hidden">
        <img
          src="/images/hero.jpg"
          alt="Oceanfront villa infinity pool in Cabo San Lucas at blue hour"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/55 to-bg/25" />
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
              to="/work"
              className="inline-flex min-h-11 items-center rounded-full bg-fg px-5 text-sm font-medium text-bg transition-transform duration-150 active:scale-[0.96]"
            >
              Try a guest flow
            </Link>
            <Link
              to="/contact"
              className="inline-flex min-h-11 items-center rounded-full px-5 text-sm font-medium text-fg shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-fg)_28%,transparent)] transition-transform duration-150 active:scale-[0.96]"
            >
              Request a proposal
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-border">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-10 gap-y-3 px-5 py-5 text-[11px] font-medium uppercase tracking-[0.18em] text-muted md:px-8">
          <span>Native Android & iOS</span>
          <span>BLE · NFC · QR keys</span>
          <span>WhatsApp concierge</span>
          <span>EN / ES</span>
          <span>Full whitelabel</span>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-accent">
              We build apps for
            </p>
            <h2 className="mt-3 max-w-xl font-display text-4xl font-medium tracking-tight md:text-5xl">
              Six kinds of property. One guest engine.
            </h2>
          </div>
          <Link
            to="/work"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-fg"
          >
            See live presets <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-12">
          <Link
            to="/work"
            search={{ industry: featured.id }}
            className="group relative min-h-[380px] overflow-hidden rounded-[1.75rem] lg:col-span-7 lg:min-h-[520px]"
          >
            <img
              src={featured.image}
              alt={featured.imageAlt}
              className="img-frame absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
              <p className="text-[11px] uppercase tracking-[0.18em] text-accent">
                {featured.kicker}
              </p>
              <h3 className="mt-2 font-display text-3xl font-medium md:text-4xl">
                {featured.name}
              </h3>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-fg/80">
                {featured.description}
              </p>
            </div>
          </Link>

          <div className="grid gap-4 lg:col-span-5">
            {rest.slice(0, 2).map((ind) => (
              <Link
                key={ind.id}
                to="/work"
                search={{ industry: ind.id }}
                className="group relative min-h-[200px] overflow-hidden rounded-[1.5rem]"
              >
                <img
                  src={ind.image}
                  alt={ind.imageAlt}
                  className="img-frame absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/25 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="text-[11px] uppercase tracking-[0.16em] text-accent">
                    {ind.short}
                  </p>
                  <h3 className="mt-1 font-display text-2xl font-medium">
                    {ind.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          {rest.slice(2).map((ind) => (
            <Link
              key={ind.id}
              to="/work"
              search={{ industry: ind.id }}
              className="group relative min-h-[220px] overflow-hidden rounded-[1.5rem]"
            >
              <img
                src={ind.image}
                alt={ind.imageAlt}
                className="img-frame absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="text-[11px] uppercase tracking-[0.16em] text-accent">
                  {ind.short}
                </p>
                <h3 className="mt-1 font-display text-xl font-medium">
                  {ind.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-surface/40">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-accent">
            Platform
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-4xl font-medium tracking-tight md:text-5xl">
            Modules you actually run, not a catalog of maybe.
          </h2>
          <ol className="mt-12 divide-y divide-border">
            {modules.slice(0, 6).map((mod) => (
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
          <Link
            to="/platform"
            className="mt-8 inline-flex items-center gap-2 text-sm text-muted hover:text-fg"
          >
            Full platform <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <PhoneSimulator />
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-accent">
            How we work
          </p>
          <h2 className="mt-3 max-w-xl font-display text-4xl font-medium tracking-tight md:text-5xl">
            Built around the property, not the other way around.
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
          src="/images/villa.jpg"
          alt="Villa living room looking out to an infinity pool"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-bg/70" />
        <div className="relative mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-accent">
            Next
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-4xl font-medium tracking-tight md:text-6xl">
            Tell us about the stay you want to run.
          </h2>
          <p className="mt-4 max-w-lg text-base text-fg/80">
            Fabi and Matt work directly with owners and GMs. WhatsApp is the
            fastest door in.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex min-h-11 items-center rounded-full bg-fg px-5 text-sm font-medium text-bg"
          >
            Contact CaboGuest
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
