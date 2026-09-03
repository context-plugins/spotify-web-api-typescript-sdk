import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { trackObjectSchema, type TrackObject } from "./track-object.js";

export type SavedTrackObject = {
  addedAt?: Date;
  track?: TrackObject;
};

export const savedTrackObjectSchema: Schema<SavedTrackObject> = s.object<SavedTrackObject>({
  addedAt: s.optional(s.dateTime()),
  track: s.optional(s.lazy(() => trackObjectSchema)),
  _keysMap: {
    addedAt: "added_at",
  },
});
