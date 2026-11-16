import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  cursorPagingSimplifiedArtistObjectSchema,
  type CursorPagingSimplifiedArtistObject,
} from "./cursor-paging-simplified-artist-object.js";

export type CursorPagedArtists = {
  artists: CursorPagingSimplifiedArtistObject;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const cursorPagedArtistsSchema: Schema<CursorPagedArtists> = s.object<CursorPagedArtists>(
  {
    artists: cursorPagingSimplifiedArtistObjectSchema,
  },
  { additionalProperties: s.json() },
);
