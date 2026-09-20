import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useState, type FormEvent } from "react";
import {
  FileText,
  FolderPlus,
  Inbox,
  LoaderCircle,
  Mail,
  Pin,
} from "lucide-react";
import { PageIntro, SiteShell } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { Input, Label, Textarea } from "@/components/ui/field";
import {
  isLoginRequired,
  redirectToLoginIfRequired,
  useRefetchWhenConnectorReady,
} from "@/lib/app-data";
import { useCurrentUser, useCurrentUserState } from "@/lib/auth/use-current-user";
import {
  addNote,
  createStudioFolder,
  listNotes,
  readDriveFile,
  readMail,
  searchDrive,
  searchMail,
  type ConnectorPayload,
  type DriveFile,
  type MailItem,
  type StudioNote,
} from "@/lib/studio";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/studio")({ component: Studio });

type Tab = "drive" | "mail" | "board";

function Studio() {
  const [tab, setTab] = useState<Tab>("drive");

  return (
    <SiteShell>
      <PageIntro
        kicker="Founder studio"
        title="Drive, mail, and a shared board."
        lede="Open this from Grok with Google Drive and Gmail connected to the company account. Files and inbox load from that Google account — we never keep the password here."
      />
      <section className="mx-auto max-w-6xl px-5 pb-20 md:px-8">
        <div className="mb-8 flex flex-wrap gap-2">
          {(
            [
              ["drive", "Google Drive"],
              ["mail", "Gmail"],
              ["board", "Pinboard"],
            ] as const
          ).map(([id, label]) => (
            <button
              key={id}
              type="button"
              onClick={() => setTab(id)}
              className={cn(
                "min-h-10 rounded-full px-4 text-[12px] font-medium transition-[background-color,color] duration-150",
                tab === id
                  ? "bg-fg text-bg"
                  : "text-muted shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-fg)_14%,transparent)] hover:text-fg",
              )}
            >
              {label}
            </button>
          ))}
        </div>
        {tab === "drive" ? <DrivePanel /> : null}
        {tab === "mail" ? <MailPanel /> : null}
        {tab === "board" ? <BoardPanel /> : null}
      </section>
    </SiteShell>
  );
}

function ConnectorBanner({
  error,
  loginUrl,
  wait,
}: {
  error: ConnectorPayload<unknown>["error"];
  loginUrl?: string;
  wait: string;
}) {
  if (!error && wait === "idle") return null;
  const kind = error?.kind;
  const message =
    wait === "waiting"
      ? "Connecting to Google…"
      : wait === "not_embedded"
        ? "Open studio from Grok so Drive and Gmail can load."
        : wait === "timed_out"
          ? "Still waiting on Google. Stay in the Grok preview and try again."
          : error?.message;
  if (!message) return null;

  return (
    <div className="mb-6 rounded-2xl bg-surface p-5">
      <p className="text-sm text-muted">{message}</p>
      {kind === "login" && loginUrl ? (
        <button
          type="button"
          className="mt-4 inline-flex min-h-11 items-center rounded-full bg-fg px-5 text-sm font-medium text-bg"
          onClick={() => {
            redirectToLoginIfRequired({
              ok: false,
              data: null,
              loginRequired: true,
              loginUrl,
            });
          }}
        >
          Continue with Grok
        </button>
      ) : null}
      {kind === "not_connected" ? (
        <p className="mt-3 text-sm text-fg">
          Connect Google Drive and Gmail in Grok for caboguestsolutions@gmail.com,
          then refresh this page.
        </p>
      ) : null}
    </div>
  );
}

function DrivePanel() {
  const [query, setQuery] = useState("");
  const [payload, setPayload] = useState<ConnectorPayload<DriveFile> | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  const load = useCallback(async (q: string) => {
    setBusy(true);
    try {
      const next = await searchDrive({ data: { q } });
      setPayload(next);
      if (isLoginRequired(next.result)) {
        redirectToLoginIfRequired(next.result);
      }
    } finally {
      setBusy(false);
    }
  }, []);

  useEffect(() => {
    void load("");
  }, [load]);

  const wait = useRefetchWhenConnectorReady(
    !!payload?.result.pending,
    () => load(query),
  );

  async function openFile(file: DriveFile) {
    setBusy(true);
    try {
      const next = await readDriveFile({ data: { id: file.id } });
      setPreview(next.preview ?? next.result.errorMessage ?? "No preview.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div>
      <ConnectorBanner
        error={payload?.error ?? null}
        loginUrl={payload?.result.loginUrl}
        wait={wait}
      />
      <form
        className="flex flex-col gap-3 sm:flex-row"
        onSubmit={(e) => {
          e.preventDefault();
          void load(query);
        }}
      >
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search Drive — decks, menus, contracts"
          aria-label="Search Google Drive"
        />
        <Button type="submit" disabled={busy}>
          {busy ? <LoaderCircle className="size-4 animate-spin" /> : "Search"}
        </Button>
        <Button
          type="button"
          variant="outline"
          onClick={async () => {
            setBusy(true);
            try {
              await createStudioFolder();
              await load(query);
            } finally {
              setBusy(false);
            }
          }}
        >
          <FolderPlus className="size-4" /> Folder
        </Button>
      </form>

      <ul className="mt-6 divide-y divide-border">
        {(payload?.items ?? []).map((file) => (
          <li key={file.id}>
            <button
              type="button"
              onClick={() => void openFile(file)}
              className="flex w-full items-start gap-3 py-4 text-left hover:text-accent"
            >
              <FileText className="mt-0.5 size-4 shrink-0 text-accent" />
              <span className="min-w-0 flex-1">
                <span className="block text-sm font-medium">{file.name}</span>
                <span className="mt-1 block text-[12px] text-muted">
                  {file.mimeType}
                  {file.modified ? ` · ${file.modified}` : ""}
                </span>
              </span>
            </button>
          </li>
        ))}
      </ul>
      {payload && payload.items.length === 0 && !payload.error ? (
        <p className="mt-6 text-sm text-muted">No files yet. Search or create the studio folder.</p>
      ) : null}
      {preview ? (
        <pre className="mt-6 max-h-80 overflow-auto whitespace-pre-wrap rounded-2xl bg-surface p-5 text-xs leading-relaxed text-muted">
          {preview}
        </pre>
      ) : null}
    </div>
  );
}

function MailPanel() {
  const [query, setQuery] = useState("in:inbox");
  const [payload, setPayload] = useState<ConnectorPayload<MailItem> | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  const load = useCallback(async (q: string) => {
    setBusy(true);
    try {
      const next = await searchMail({ data: { q } });
      setPayload(next);
      if (isLoginRequired(next.result)) {
        redirectToLoginIfRequired(next.result);
      }
    } finally {
      setBusy(false);
    }
  }, []);

  useEffect(() => {
    void load("in:inbox");
  }, [load]);

  const wait = useRefetchWhenConnectorReady(
    !!payload?.result.pending,
    () => load(query),
  );

  async function openMail(item: MailItem) {
    setBusy(true);
    try {
      const next = await readMail({ data: { id: item.id } });
      setPreview(next.preview ?? item.snippet ?? next.result.errorMessage ?? "No body.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div>
      <ConnectorBanner
        error={payload?.error ?? null}
        loginUrl={payload?.result.loginUrl}
        wait={wait}
      />
      <form
        className="flex flex-col gap-3 sm:flex-row"
        onSubmit={(e) => {
          e.preventDefault();
          void load(query);
        }}
      >
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Gmail search — from:, subject:, newer_than:7d"
          aria-label="Search Gmail"
        />
        <Button type="submit" disabled={busy}>
          {busy ? <LoaderCircle className="size-4 animate-spin" /> : "Search"}
        </Button>
      </form>
      <ul className="mt-6 divide-y divide-border">
        {(payload?.items ?? []).map((item) => (
          <li key={item.id}>
            <button
              type="button"
              onClick={() => void openMail(item)}
              className="flex w-full items-start gap-3 py-4 text-left"
            >
              <Mail className="mt-0.5 size-4 shrink-0 text-accent" />
              <span className="min-w-0 flex-1">
                <span className="block text-sm font-medium">{item.subject}</span>
                <span className="mt-1 block text-[12px] text-muted">
                  {item.from}
                  {item.date ? ` · ${item.date}` : ""}
                </span>
                {item.snippet ? (
                  <span className="mt-1 block text-sm text-muted">{item.snippet}</span>
                ) : null}
              </span>
            </button>
          </li>
        ))}
      </ul>
      {payload && payload.items.length === 0 && !payload.error ? (
        <p className="mt-6 flex items-center gap-2 text-sm text-muted">
          <Inbox className="size-4" /> Inbox is empty, or Gmail is not connected yet.
        </p>
      ) : null}
      {preview ? (
        <pre className="mt-6 max-h-80 overflow-auto whitespace-pre-wrap rounded-2xl bg-surface p-5 text-xs leading-relaxed text-muted">
          {preview}
        </pre>
      ) : null}
    </div>
  );
}

function BoardPanel() {
  const user = useCurrentUser();
  const { isPending } = useCurrentUserState();
  const [notes, setNotes] = useState<StudioNote[]>([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [url, setUrl] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  const refresh = useCallback(async () => {
    try {
      setNotes(await listNotes());
      setError(null);
    } catch {
      setError("Sign in through Grok to read and pin shared notes.");
    }
  }, []);

  useEffect(() => {
    if (isPending) return;
    void refresh();
  }, [isPending, refresh]);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setBusy(true);
    try {
      const next = await addNote({
        data: {
          title,
          body,
          url: url || undefined,
          author: user?.displayName ?? user?.primaryEmail ?? undefined,
        },
      });
      setNotes(next);
      setTitle("");
      setBody("");
      setUrl("");
      setError(null);
    } catch {
      setError("Could not pin that note. Open studio from Grok and try again.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="grid gap-10 lg:grid-cols-12">
      <form onSubmit={onSubmit} className="space-y-4 lg:col-span-5">
        <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-accent">
          Pin for Fabi & Matt
        </p>
        <div>
          <Label htmlFor="note-title">Title</Label>
          <Input
            id="note-title"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Villa walkthrough deck"
          />
        </div>
        <div>
          <Label htmlFor="note-url">Link (optional)</Label>
          <Input
            id="note-url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://"
          />
        </div>
        <div>
          <Label htmlFor="note-body">Note</Label>
          <Textarea
            id="note-body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="What the other founder should see…"
          />
        </div>
        <Button type="submit" disabled={busy}>
          <Pin className="size-4" /> Pin to board
        </Button>
        {error ? <p className="text-sm text-danger">{error}</p> : null}
      </form>
      <ul className="space-y-3 lg:col-span-7">
        {notes.map((note) => (
          <li key={note.id} className="rounded-2xl bg-surface p-5">
            <p className="font-display text-xl">{note.title}</p>
            <p className="mt-1 text-[11px] uppercase tracking-[0.14em] text-subtle">
              {note.author}
            </p>
            {note.body ? (
              <p className="mt-3 text-sm leading-relaxed text-muted">{note.body}</p>
            ) : null}
            {note.url ? (
              <a
                href={note.url}
                className="mt-3 inline-block text-sm text-fg underline decoration-border underline-offset-4"
              >
                Open link
              </a>
            ) : null}
          </li>
        ))}
        {notes.length === 0 ? (
          <li className="text-sm text-muted">No pins yet. Drop the first one for the other founder.</li>
        ) : null}
      </ul>
    </div>
  );
}
