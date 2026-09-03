import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { episodeObjectSchema, type EpisodeObject } from "../episode-object.js";
import { trackObjectSchema, type TrackObject } from "../track-object.js";

export type Track11 = TrackObject | EpisodeObject;

export const track11Schema: Schema<Track11> = s.of<Track11>(
  s.union([s.lazy(() => trackObjectSchema), s.lazy(() => episodeObjectSchema)]),
);
