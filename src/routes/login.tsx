import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell, PageIntro } from "@/components/site-shell";

export const Route = createFileRoute("/login")({ component: Login });

function Login() {
  return (
    <SiteShell>
      <PageIntro
        kicker="Founders"
        title="Studio opens from Grok."
        lede="Drive and Gmail load from the Google account connected in Grok — usually the company inbox. We never store Google passwords in this site."
      />
      <section className="mx-auto max-w-6xl px-5 pb-20 md:px-8">
        <div className="max-w-lg rounded-[1.5rem] bg-surface p-7">
          <p className="text-sm leading-relaxed text-muted">
            If you are viewing this inside Grok, you are already signed in. Connect
            Google Drive and Gmail for{" "}
            <span className="text-fg">caboguestsolutions@gmail.com</span> in Grok
            connectors, then open Studio.
          </p>
          <Link
            to="/studio"
            className="mt-6 inline-flex min-h-11 items-center rounded-full bg-fg px-5 text-sm font-medium text-bg"
          >
            Go to studio
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
