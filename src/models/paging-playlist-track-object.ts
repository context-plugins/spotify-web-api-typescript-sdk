import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { playlistTrackObjectSchema, type PlaylistTrackObject } from "./playlist-track-object.js";

export type PagingPlaylistTrackObject = {
  href: string;
  limit: number;
  next: string | null;
  offset: number;
  previous: string | null;
  total: number;
  items: PlaylistTrackObject[];
};

export const pagingPlaylistTrackObjectSchema: Schema<PagingPlaylistTrackObject> =
  s.object<PagingPlaylistTrackObject>({
    href: s.string(),
    limit: s.number(),
    next: s.nullable(s.string()),
    offset: s.number(),
    previous: s.nullable(s.string()),
    total: s.number(),
    items: s.array(s.lazy(() => playlistTrackObjectSchema)),
  });
