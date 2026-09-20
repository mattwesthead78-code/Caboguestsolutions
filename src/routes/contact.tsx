import { createFileRoute } from "@tanstack/react-router";
import { InquiryForm } from "@/components/inquiry-form";
import { PageIntro, SiteShell } from "@/components/site-shell";
import { contacts } from "@/lib/content";

export const Route = createFileRoute("/contact")({ component: Contact });

function Contact() {
  return (
    <SiteShell>
      <PageIntro
        kicker="Contact"
        title="Start with a conversation, not a ticket."
        lede="Reach Fabi or Matt on WhatsApp, or send an inquiry. Tell us the property, the guest journey, and what the current stack cannot do."
      />

      <section className="mx-auto max-w-6xl px-5 pb-20 md:px-8">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-[1.5rem]">
              <img
                src="/images/transport.jpg"
                alt="Luxury SUV at a Cabo resort entrance"
                className="img-frame h-56 w-full object-cover"
              />
            </div>
            <ul className="mt-6 space-y-4">
              {contacts.map((c) => (
                <li
                  key={c.id}
                  className="rounded-2xl bg-surface p-5"
                >
                  <p className="font-display text-2xl">{c.name}</p>
                  <p className="text-[12px] uppercase tracking-[0.14em] text-muted">
                    {c.role}
                  </p>
                  <a
                    href={c.wa}
                    className="mt-3 inline-block text-sm text-fg underline decoration-border underline-offset-4 hover:decoration-fg"
                  >
                    WhatsApp {c.phone}
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-muted">
              Cabo San Lucas, Baja California Sur · Typically replies the same
              day.
            </p>
          </div>
          <div className="lg:col-span-7">
            <InquiryForm />
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
