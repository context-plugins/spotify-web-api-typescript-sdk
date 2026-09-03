import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { track1Schema, type Track1 } from "./track1.js";

export type PlaylistsTracksRequest2 = {
  tracks: Track1[];
  snapshotId?: string;
};

export const playlistsTracksRequest2Schema: Schema<PlaylistsTracksRequest2> =
  s.object<PlaylistsTracksRequest2>({
    tracks: s.array(s.lazy(() => track1Schema)),
    snapshotId: s.optional(s.string()),
    _keysMap: {
      snapshotId: "snapshot_id",
    },
  });
