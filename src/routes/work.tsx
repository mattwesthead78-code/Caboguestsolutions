import { createFileRoute } from "@tanstack/react-router";
import { PhoneSimulator } from "@/components/phone-simulator";
import { PageIntro, SiteShell } from "@/components/site-shell";
import { useCopy } from "@/lib/use-copy";

export const Route = createFileRoute("/work")({
  component: Work,
});

function Work() {
  const { t } = useCopy();

  return (
    <SiteShell>
      <PageIntro
        kicker={t("page.work.kicker")}
        title={t("page.work.title")}
        lede={t("page.work.lede")}
      />

      <section className="border-t border-border bg-surface/30">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <PhoneSimulator />
        </div>
      </section>
    </SiteShell>
  );
}
