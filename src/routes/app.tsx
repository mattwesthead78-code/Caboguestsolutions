import { createFileRoute } from "@tanstack/react-router";
import { Download, Smartphone, ShieldCheck, Languages } from "lucide-react";
import { PhoneSimulator } from "@/components/phone-simulator";
import { BrandLockup } from "@/components/brand-logo";
import { PageIntro, SiteShell } from "@/components/site-shell";
import { androidApkLocal, androidApkUrl } from "@/lib/content";
import { useCopy } from "@/lib/use-copy";

export const Route = createFileRoute("/app")({ component: AppDownload });

function AppDownload() {
  const { t, company, modules } = useCopy();

  return (
    <SiteShell>
      <PageIntro
        kicker={t("page.app.kicker")}
        title={t("page.app.title")}
        lede={t("page.app.lede")}
      />

      <section className="mx-auto max-w-6xl px-5 pb-16 md:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <BrandLockup className="max-w-md" />
            <p className="mt-5 text-center text-[11px] uppercase tracking-[0.18em] text-muted">
              {company.slogan}
            </p>
          </div>
          <div className="lg:col-span-7">
            <div className="rounded-[1.75rem] bg-surface p-7 md:p-9">
              <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-accent">
                {t("page.app.android")}
              </p>
              <h2 className="mt-3 font-display text-3xl font-medium tracking-tight">
                CaboGuest Solutions v3
              </h2>
              <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted">
                {t("page.app.body")}
              </p>
              <ul className="mt-6 space-y-3 text-sm text-muted">
                <li className="flex gap-3">
                  <Smartphone className="mt-0.5 size-4 shrink-0 text-accent" />
                  {t("page.app.bullet1")}
                </li>
                <li className="flex gap-3">
                  <ShieldCheck className="mt-0.5 size-4 shrink-0 text-accent" />
                  {t("page.app.bullet2")}
                </li>
                <li className="flex gap-3">
                  <Languages className="mt-0.5 size-4 shrink-0 text-accent" />
                  {t("page.app.bullet3")}
                </li>
              </ul>
              <a
                href={androidApkUrl}
                download="CaboGuestSolutions.apk"
                className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-full bg-fg px-6 text-sm font-medium text-bg transition-transform duration-150 active:scale-[0.96]"
              >
                <Download className="size-4" />
                {t("cta.downloadAndroid")}
              </a>
              <p className="mt-3">
                <a
                  href={androidApkLocal}
                  download="CaboGuestSolutions.apk"
                  className="text-xs text-muted underline decoration-border underline-offset-4 hover:text-fg"
                >
                  {t("cta.downloadHere")}
                </a>
              </p>
              <p className="mt-4 text-xs leading-relaxed text-subtle">
                {t("page.app.ios")}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-surface/30">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <PhoneSimulator />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8">
        <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-accent">
          {t("page.app.inside")}
        </p>
        <ol className="mt-8 divide-y divide-border">
          {modules.slice(0, 6).map((mod) => (
            <li
              key={mod.id}
              className="grid gap-3 py-5 md:grid-cols-12 md:items-baseline"
            >
              <span className="text-[12px] tabular-nums text-subtle md:col-span-1">
                {mod.number}
              </span>
              <h3 className="font-display text-xl font-medium md:col-span-4">
                {mod.name}
              </h3>
              <p className="text-sm leading-relaxed text-muted md:col-span-7">
                {mod.detail}
              </p>
            </li>
          ))}
        </ol>
      </section>
    </SiteShell>
  );
}
