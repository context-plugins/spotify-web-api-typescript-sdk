import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { cursorObjectSchema, type CursorObject } from "./cursor-object.js";

export type CursorPagingObject = {
  href?: string;
  limit?: number;
  next?: string;
  cursors?: CursorObject;
  total?: number;
};

export const cursorPagingObjectSchema: Schema<CursorPagingObject> = s.object<CursorPagingObject>({
  href: s.optional(s.string()),
  limit: s.optional(s.number()),
  next: s.optional(s.string()),
  cursors: s.optional(s.lazy(() => cursorObjectSchema)),
  total: s.optional(s.number()),
});
