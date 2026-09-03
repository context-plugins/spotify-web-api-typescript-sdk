import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PlaylistTracksRefObject = {
  href?: string;
  total?: number;
};

export const playlistTracksRefObjectSchema: Schema<PlaylistTracksRefObject> =
  s.object<PlaylistTracksRefObject>({
    href: s.optional(s.string()),
    total: s.optional(s.number()),
  });
