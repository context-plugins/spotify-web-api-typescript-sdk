import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { pagingPlaylistObjectSchema, type PagingPlaylistObject } from "./paging-playlist-object.js";

export type PagingFeaturedPlaylistObject = {
  message?: string;
  playlists?: PagingPlaylistObject;
};

export const pagingFeaturedPlaylistObjectSchema: Schema<PagingFeaturedPlaylistObject> =
  s.object<PagingFeaturedPlaylistObject>({
    message: s.optional(s.string()),
    playlists: s.optional(s.lazy(() => pagingPlaylistObjectSchema)),
  });
