import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { artistObjectSchema, type ArtistObject } from "./artist-object.js";
import { cursorObjectSchema, type CursorObject } from "./cursor-object.js";

export type CursorPagingSimplifiedArtistObject = {
  /** A link to the Web API endpoint returning the full result of the request. */
  href?: string;
  /** The maximum number of items in the response (as set in the query or by default). */
  limit?: number;
  /** URL to the next page of items. ( `null` if none) */
  next?: string;
  cursors?: CursorObject;
  /** The total number of items available to return. */
  total?: number;
  items?: ArtistObject[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const cursorPagingSimplifiedArtistObjectSchema: Schema<CursorPagingSimplifiedArtistObject> =
  s.object<CursorPagingSimplifiedArtistObject>(
    {
      href: s.optional(s.string()),
      limit: s.optional(s.int()),
      next: s.optional(s.string()),
      cursors: s.optional(s.lazy(() => cursorObjectSchema)),
      total: s.optional(s.int()),
      items: s.optional(s.array(s.lazy(() => artistObjectSchema))),
    },
    { additionalProperties: s.json() },
  );
