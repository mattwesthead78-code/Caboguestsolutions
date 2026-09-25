import { createFileRoute } from "@tanstack/react-router";
import { Download, Smartphone, ShieldCheck, Languages } from "lucide-react";
import { PhoneSimulator } from "@/components/phone-simulator";
import { BrandLockup } from "@/components/brand-logo";
import { PageIntro, SiteShell } from "@/components/site-shell";
import { androidApkLocal, androidApkUrl, company, modules } from "@/lib/content";

export const Route = createFileRoute("/app")({ component: AppDownload });

function AppDownload() {
  return (
    <SiteShell>
      <PageIntro
        kicker="The guest app"
        title="Install CaboGuest on Android."
        lede="The same multi-business suite we build for hotels, villas, restaurants, yachts, spas, and boutiques. Download the Android package, then try the guest flows below."
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
                Android
              </p>
              <h2 className="mt-3 font-display text-3xl font-medium tracking-tight">
                CaboGuest Solutions v3
              </h2>
              <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted">
                Sideload the APK on an Android phone. After install, open it and
                walk the live demos — keys, dining, concierge, charters, retail,
                and spa.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-muted">
                <li className="flex gap-3">
                  <Smartphone className="mt-0.5 size-4 shrink-0 text-accent" />
                  Native Android package · min API 24
                </li>
                <li className="flex gap-3">
                  <ShieldCheck className="mt-0.5 size-4 shrink-0 text-accent" />
                  Whitelabel engine with BLE / NFC keys and WhatsApp concierge
                </li>
                <li className="flex gap-3">
                  <Languages className="mt-0.5 size-4 shrink-0 text-accent" />
                  English and Spanish throughout
                </li>
              </ul>
              <a
                href={androidApkUrl}
                download="CaboGuestSolutions.apk"
                className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-full bg-fg px-6 text-sm font-medium text-bg transition-transform duration-150 active:scale-[0.96]"
              >
                <Download className="size-4" />
                Download Android APK
              </a>
              <p className="mt-4 text-xs leading-relaxed text-subtle">
                iOS builds are delivered per property. Message Fabi or Matt if
                you need a TestFlight or branded iPhone suite.
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
          Inside the package
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
