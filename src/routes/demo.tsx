import { createFileRoute } from "@tanstack/react-router";
import { PageIntro, SiteShell } from "@/components/site-shell";
import { useCopy } from "@/lib/use-copy";

export const Route = createFileRoute("/demo")({ component: Demo });

const shortFilm = "/videos/rackfolio-demo.mp4";
const poster = "/videos/rackfolio-demo.jpg";
const youtube = "https://www.youtube.com/watch?v=G1ReKwM7EPs";
const youtubeEmbed = "https://www.youtube.com/embed/G1ReKwM7EPs";

function Demo() {
  const { t } = useCopy();

  return (
    <SiteShell>
      <PageIntro
        kicker={t("page.demo.kicker")}
        title={t("page.demo.title")}
        lede={t("page.demo.lede")}
      />

      <section className="mx-auto max-w-6xl px-5 pb-8 md:px-8">
        <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-accent">
          {t("page.demo.short")}
        </p>
        <div className="mt-4 overflow-hidden rounded-[1.5rem] bg-black shadow-[0_0_0_1px_var(--color-border)]">
          <video
            className="aspect-video w-full"
            controls
            playsInline
            preload="metadata"
            poster={poster}
          >
            <source src={shortFilm} type="video/mp4" />
          </video>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16">
        <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-accent">
          {t("page.demo.full")}
        </p>
        <h2 className="mt-3 max-w-2xl font-display text-3xl font-medium tracking-tight md:text-4xl">
          {t("page.demo.fullBody")}
        </h2>
        <div className="mt-6 overflow-hidden rounded-[1.5rem] bg-black shadow-[0_0_0_1px_var(--color-border)]">
          <iframe
            className="aspect-video w-full"
            src={youtubeEmbed}
            title="RackFolio full demo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
        <a
          href={youtube}
          className="mt-5 inline-flex text-sm text-fg underline decoration-accent underline-offset-4"
        >
          {t("page.demo.youtube")}
        </a>
      </section>
    </SiteShell>
  );
}
