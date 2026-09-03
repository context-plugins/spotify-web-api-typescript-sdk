import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { artistObjectSchema, type ArtistObject } from "./artist-object.js";
import { cursorObjectSchema, type CursorObject } from "./cursor-object.js";

export type CursorPagingSimplifiedArtistObject = {
  href?: string;
  limit?: number;
  next?: string;
  cursors?: CursorObject;
  total?: number;
  items?: ArtistObject[];
};

export const cursorPagingSimplifiedArtistObjectSchema: Schema<CursorPagingSimplifiedArtistObject> =
  s.object<CursorPagingSimplifiedArtistObject>({
    href: s.optional(s.string()),
    limit: s.optional(s.number()),
    next: s.optional(s.string()),
    cursors: s.optional(s.lazy(() => cursorObjectSchema)),
    total: s.optional(s.number()),
    items: s.optional(s.array(s.lazy(() => artistObjectSchema))),
  });
