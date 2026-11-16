import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { pagingPlaylistObjectSchema, type PagingPlaylistObject } from "./paging-playlist-object.js";

export type PagingFeaturedPlaylistObject = {
  /** The localized message of a playlist. */
  message?: string;
  playlists?: PagingPlaylistObject;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const pagingFeaturedPlaylistObjectSchema: Schema<PagingFeaturedPlaylistObject> =
  s.object<PagingFeaturedPlaylistObject>(
    {
      message: s.optional(s.string()),
      playlists: s.optional(s.lazy(() => pagingPlaylistObjectSchema)),
    },
    { additionalProperties: s.json() },
  );
