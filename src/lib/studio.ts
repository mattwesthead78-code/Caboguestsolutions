import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import {
  classifyCallToolError,
  ConnectorType,
  GoogleDriveTools,
  isConnectorPending,
  isLoginRequired,
} from "@/lib/app-data";
import type { CallToolResult } from "@/lib/app-data/types";
import { authMiddleware } from "@/lib/auth/middleware";

export const GmailTools = {
  search: "gmail_search",
  getMessage: "gmail_get_message",
} as const;

export type DriveFile = {
  id: string;
  name: string;
  mimeType: string;
  modified: string;
  link: string;
};

export type MailItem = {
  id: string;
  subject: string;
  from: string;
  date: string;
  snippet: string;
};

export type StudioNote = {
  id: number;
  userId: string;
  author: string;
  title: string;
  body: string;
  url: string | null;
  createdAt: string;
};

export type ConnectorPayload<T> = {
  items: T[];
  preview: string | null;
  result: CallToolResult;
  error: ReturnType<typeof classifyCallToolError>;
};

function asRecord(data: unknown): Record<string, unknown> | null {
  if (data && typeof data === "object" && !Array.isArray(data)) {
    return data as Record<string, unknown>;
  }
  return null;
}

function asArray(data: unknown): unknown[] {
  if (Array.isArray(data)) return data;
  const rec = asRecord(data);
  if (!rec) return [];
  for (const key of ["files", "items", "results", "messages", "threads", "data"]) {
    if (Array.isArray(rec[key])) return rec[key] as unknown[];
  }
  return [];
}

function str(value: unknown, fallback = ""): string {
  return typeof value === "string" ? value : fallback;
}

function previewText(data: unknown): string | null {
  if (typeof data === "string" && data.trim()) return data.slice(0, 4000);
  const rec = asRecord(data);
  if (!rec) return null;
  for (const key of ["content", "text", "body", "snippet", "markdown"]) {
    if (typeof rec[key] === "string" && rec[key]) return String(rec[key]).slice(0, 4000);
  }
  try {
    return JSON.stringify(data, null, 2).slice(0, 4000);
  } catch {
    return null;
  }
}

function mapDrive(data: unknown): DriveFile[] {
  return asArray(data)
    .map((row) => {
      const rec = asRecord(row);
      if (!rec) return null;
      const id = str(rec.id || rec.fileId || rec.file_id);
      const name = str(rec.name || rec.title, "Untitled");
      if (!id) return null;
      return {
        id,
        name,
        mimeType: str(rec.mimeType || rec.mime_type, "file"),
        modified: str(rec.modifiedTime || rec.modified_time || rec.updatedAt || rec.modified),
        link: str(rec.webViewLink || rec.web_view_link || rec.url),
      };
    })
    .filter((row): row is DriveFile => row !== null);
}

function mapMail(data: unknown): MailItem[] {
  return asArray(data)
    .map((row) => {
      const rec = asRecord(row);
      if (!rec) return null;
      const id = str(rec.id || rec.messageId || rec.message_id);
      if (!id) return null;
      const headers = asRecord(rec.payload) ? asRecord(asRecord(rec.payload)?.headers) : null;
      return {
        id,
        subject: str(rec.subject || rec.title || headers?.Subject, "(no subject)"),
        from: str(rec.from || rec.sender || rec.from_email || headers?.From, "Unknown"),
        date: str(rec.date || rec.internalDate || rec.sent || headers?.Date),
        snippet: str(rec.snippet || rec.preview || rec.body, "").slice(0, 240),
      };
    })
    .filter((row): row is MailItem => row !== null);
}

function pack<T>(result: CallToolResult, items: T[]): ConnectorPayload<T> {
  return {
    items,
    preview: result.ok ? previewText(result.data) : null,
    result,
    error: classifyCallToolError(result),
  };
}

export const searchDrive = createServerFn({ method: "POST" })
  .validator(z.object({ q: z.string() }))
  .handler(async ({ data }): Promise<ConnectorPayload<DriveFile>> => {
    const { callTool } = await import("@/lib/app-data/client.server");
    const result = await callTool(
      GoogleDriveTools.search,
      { q: data.q },
      { connectorType: ConnectorType.GoogleDrive },
    );
    return pack(result, mapDrive(result.data));
  });

export const listDriveFolder = createServerFn({ method: "POST" })
  .validator(z.object({ folderId: z.string().optional() }))
  .handler(async ({ data }): Promise<ConnectorPayload<DriveFile>> => {
    const { callTool } = await import("@/lib/app-data/client.server");
    const result = await callTool(
      GoogleDriveTools.listFolder,
      data.folderId ? { id: data.folderId, folderId: data.folderId } : {},
      { connectorType: ConnectorType.GoogleDrive },
    );
    return pack(result, mapDrive(result.data));
  });

export const readDriveFile = createServerFn({ method: "POST" })
  .validator(z.object({ id: z.string() }))
  .handler(async ({ data }): Promise<ConnectorPayload<DriveFile>> => {
    const { callTool } = await import("@/lib/app-data/client.server");
    const result = await callTool(
      GoogleDriveTools.readFile,
      { id: data.id, fileId: data.id },
      { connectorType: ConnectorType.GoogleDrive },
    );
    return pack(result, mapDrive(result.data));
  });

export const createStudioFolder = createServerFn({ method: "POST" })
  .handler(async (): Promise<ConnectorPayload<DriveFile>> => {
    const { callTool } = await import("@/lib/app-data/client.server");
    const result = await callTool(
      GoogleDriveTools.createFolder,
      { name: "CaboGuest Studio" },
      { connectorType: ConnectorType.GoogleDrive },
    );
    return pack(result, mapDrive(result.data));
  });

export const searchMail = createServerFn({ method: "POST" })
  .validator(z.object({ q: z.string() }))
  .handler(async ({ data }): Promise<ConnectorPayload<MailItem>> => {
    const { callTool } = await import("@/lib/app-data/client.server");
    const result = await callTool(
      GmailTools.search,
      { q: data.q, query: data.q },
      { connectorType: ConnectorType.Gmail },
    );
    return pack(result, mapMail(result.data));
  });

export const readMail = createServerFn({ method: "POST" })
  .validator(z.object({ id: z.string() }))
  .handler(async ({ data }): Promise<ConnectorPayload<MailItem>> => {
    const { callTool } = await import("@/lib/app-data/client.server");
    const result = await callTool(
      GmailTools.getMessage,
      { id: data.id, messageId: data.id, message_id: data.id },
      { connectorType: ConnectorType.Gmail },
    );
    return pack(result, mapMail(result.data));
  });

export const listNotes = createServerFn({ method: "POST" })
  .middleware([authMiddleware])
  .handler(async (): Promise<StudioNote[]> => {
    const { getSql } = await import("@/lib/db");
    const sql = await getSql();
    const rows = await sql<{
      id: number;
      user_id: string;
      author: string;
      title: string;
      body: string;
      url: string | null;
      created_at: string;
    }>`select id, user_id, author, title, body, url, created_at from studio_notes order by created_at desc limit 80`;
    return rows.map((row) => ({
      id: row.id,
      userId: row.user_id,
      author: row.author,
      title: row.title,
      body: row.body,
      url: row.url,
      createdAt: row.created_at,
    }));
  });

export const addNote = createServerFn({ method: "POST" })
  .middleware([authMiddleware])
  .validator(
    z.object({
      title: z.string().min(1).max(160),
      body: z.string().max(4000),
      url: z.string().max(500).optional(),
    }),
  )
  .handler(async ({ data, context }): Promise<StudioNote[]> => {
    const { getSql } = await import("@/lib/db");
    const sql = await getSql();
    const url = data.url?.trim() ? data.url.trim() : null;
    await sql`
      insert into studio_notes (user_id, author, title, body, url)
      values (${context.userId}, ${context.userId}, ${data.title.trim()}, ${data.body.trim()}, ${url})
    `;
    const rows = await sql<{
      id: number;
      user_id: string;
      author: string;
      title: string;
      body: string;
      url: string | null;
      created_at: string;
    }>`select id, user_id, author, title, body, url, created_at from studio_notes order by created_at desc limit 80`;
    return rows.map((row) => ({
      id: row.id,
      userId: row.user_id,
      author: row.author,
      title: row.title,
      body: row.body,
      url: row.url,
      createdAt: row.created_at,
    }));
  });

export { isConnectorPending, isLoginRequired };
