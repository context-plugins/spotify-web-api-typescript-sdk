import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  recommendationSeedObjectSchema,
  type RecommendationSeedObject,
} from "./recommendation-seed-object.js";
import { trackObjectSchema, type TrackObject } from "./track-object.js";

export type RecommendationsObject = {
  /** An array of recommendation seed objects. */
  seeds: RecommendationSeedObject[];
  /** An array of track objects ordered according to the parameters supplied. */
  tracks: TrackObject[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const recommendationsObjectSchema: Schema<RecommendationsObject> = s.object<RecommendationsObject>(
  {
    seeds: s.array(s.lazy(() => recommendationSeedObjectSchema)),
    tracks: s.array(s.lazy(() => trackObjectSchema)),
  },
  { additionalProperties: s.json() },
);
