import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { playlistUserObjectSchema, type PlaylistUserObject } from "./playlist-user-object.js";
import { track11Schema, type Track11 } from "./unions/track11.js";

export type PlaylistTrackObject = {
  addedAt?: Date;
  addedBy?: PlaylistUserObject;
  isLocal?: boolean;
  track?: Track11;
};

export const playlistTrackObjectSchema: Schema<PlaylistTrackObject> = s.object<PlaylistTrackObject>({
  addedAt: s.optional(s.dateTime()),
  addedBy: s.optional(s.lazy(() => playlistUserObjectSchema)),
  isLocal: s.optional(s.boolean()),
  track: s.optional(s.lazy(() => track11Schema)),
  _keysMap: {
    addedAt: "added_at",
    addedBy: "added_by",
    isLocal: "is_local",
  },
});
