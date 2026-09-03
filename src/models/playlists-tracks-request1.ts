import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PlaylistsTracksRequest1 = {
  uris?: string[];
  rangeStart?: number;
  insertBefore?: number;
  rangeLength?: number;
  snapshotId?: string;
};

export const playlistsTracksRequest1Schema: Schema<PlaylistsTracksRequest1> =
  s.object<PlaylistsTracksRequest1>({
    uris: s.optional(s.array(s.string())),
    rangeStart: s.optional(s.number()),
    insertBefore: s.optional(s.number()),
    rangeLength: s.optional(s.number()),
    snapshotId: s.optional(s.string()),
    _keysMap: {
      rangeStart: "range_start",
      insertBefore: "insert_before",
      rangeLength: "range_length",
      snapshotId: "snapshot_id",
    },
  });
