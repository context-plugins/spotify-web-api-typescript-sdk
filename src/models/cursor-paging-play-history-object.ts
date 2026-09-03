import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { cursorObjectSchema, type CursorObject } from "./cursor-object.js";
import { playHistoryObjectSchema, type PlayHistoryObject } from "./play-history-object.js";

export type CursorPagingPlayHistoryObject = {
  href?: string;
  limit?: number;
  next?: string;
  cursors?: CursorObject;
  total?: number;
  items?: PlayHistoryObject[];
};

export const cursorPagingPlayHistoryObjectSchema: Schema<CursorPagingPlayHistoryObject> =
  s.object<CursorPagingPlayHistoryObject>({
    href: s.optional(s.string()),
    limit: s.optional(s.number()),
    next: s.optional(s.string()),
    cursors: s.optional(s.lazy(() => cursorObjectSchema)),
    total: s.optional(s.number()),
    items: s.optional(s.array(s.lazy(() => playHistoryObjectSchema))),
  });
