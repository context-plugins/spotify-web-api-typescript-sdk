import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PlaylistSnapshotId = {
  snapshotId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const playlistSnapshotIdSchema: Schema<PlaylistSnapshotId> = s.object<PlaylistSnapshotId>(
  {
    snapshotId: s.optional(s.string()),
    _keysMap: {
      snapshotId: "snapshot_id",
    },
  },
  { additionalProperties: s.json() },
);
