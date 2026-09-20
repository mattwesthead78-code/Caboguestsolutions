import { Link } from "@tanstack/react-router";
import { contacts, nav } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-bg">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-12 md:px-8">
        <div className="md:col-span-5">
          <p className="font-display text-3xl font-medium tracking-tight">
            CaboGuest
          </p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
            Bespoke guest apps for luxury hotels, villas, restaurants, yachts,
            spas, and boutiques in Los Cabos.
          </p>
        </div>
        <div className="md:col-span-3">
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-subtle">
            Navigate
          </p>
          <ul className="mt-4 space-y-2">
            {nav.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-sm text-muted transition-colors hover:text-fg"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-4">
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-subtle">
            Direct line
          </p>
          <ul className="mt-4 space-y-3">
            {contacts.map((c) => (
              <li key={c.id}>
                <a
                  href={c.wa}
                  className="text-sm text-muted transition-colors hover:text-fg"
                >
                  {c.name} · {c.phone}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mx-auto flex max-w-6xl flex-col gap-2 border-t border-border px-5 py-5 text-[11px] uppercase tracking-[0.16em] text-subtle md:flex-row md:justify-between md:px-8">
        <span>Cabo San Lucas, Baja California Sur</span>
        <span>Native Android & iOS · Whitelabel</span>
      </div>
    </footer>
  );
}
