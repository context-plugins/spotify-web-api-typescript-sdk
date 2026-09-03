import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PlaylistsTracksRequest = {
  uris?: string[];
  position?: number;
};

export const playlistsTracksRequestSchema: Schema<PlaylistsTracksRequest> = s.object<PlaylistsTracksRequest>({
  uris: s.optional(s.array(s.string())),
  position: s.optional(s.number()),
});
