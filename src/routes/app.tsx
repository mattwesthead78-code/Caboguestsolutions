import { createFileRoute, Link } from "@tanstack/react-router";
import { Download } from "lucide-react";
import { PageIntro, SiteShell } from "@/components/site-shell";
import { androidApk } from "@/lib/content";
import { useCopy } from "@/lib/use-copy";

export const Route = createFileRoute("/app")({ component: GuestApp });

function GuestApp() {
  const { t } = useCopy();

  return (
    <SiteShell>
      <PageIntro
        kicker={t("page.app.kicker")}
        title={t("page.app.title")}
        lede={t("page.app.lede")}
      />

      <section className="mx-auto grid max-w-6xl items-start gap-10 px-5 pb-24 md:grid-cols-12 md:px-8">
        <div className="md:col-span-7">
          <div className="overflow-hidden rounded-[1.75rem]">
            <img
              src="/images/villa.jpg"
              alt="A villa terrace guests open the house app from"
              className="img-frame h-[240px] w-full object-cover md:h-[380px]"
            />
          </div>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-muted">
            {t("page.app.body")}
          </p>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-subtle">
            {t("page.app.note")}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={androidApk.href}
              download={androidApk.fileName}
              className="inline-flex min-h-12 items-center gap-2 rounded-full bg-fg px-5 text-sm font-medium text-bg transition-transform duration-150 active:scale-[0.96]"
            >
              <Download className="size-4" />
              {t("cta.download")}
            </a>
            <p className="text-[12px] uppercase tracking-[0.16em] text-subtle">
              {t("page.app.android")} · {t("page.app.version")}
            </p>
          </div>
        </div>
        <aside className="rounded-[1.75rem] bg-surface p-7 md:col-span-5 md:p-8">
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-accent">
            {t("page.app.also")}
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            {t("company.mission")}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex min-h-11 items-center rounded-full bg-fg px-5 text-sm font-medium text-bg"
            >
              {t("cta.talk")}
            </Link>
            <Link
              to="/platform"
              className="inline-flex min-h-11 items-center rounded-full px-5 text-sm font-medium text-fg shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-fg)_14%,transparent)]"
            >
              {t("cta.software")}
            </Link>
          </div>
        </aside>
      </section>
    </SiteShell>
  );
}
