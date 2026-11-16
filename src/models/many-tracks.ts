import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { trackObjectSchema, type TrackObject } from "./track-object.js";

export type ManyTracks = {
  tracks: TrackObject[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const manyTracksSchema: Schema<ManyTracks> = s.object<ManyTracks>(
  {
    tracks: s.array(s.lazy(() => trackObjectSchema)),
  },
  { additionalProperties: s.json() },
);
