import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TrackRestrictionObject = {
  reason?: string;
};

export const trackRestrictionObjectSchema: Schema<TrackRestrictionObject> = s.object<TrackRestrictionObject>({
  reason: s.optional(s.string()),
});
