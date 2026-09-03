import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  recommendationSeedObjectSchema,
  type RecommendationSeedObject,
} from "./recommendation-seed-object.js";
import { trackObjectSchema, type TrackObject } from "./track-object.js";

export type RecommendationsObject = {
  seeds: RecommendationSeedObject[];
  tracks: TrackObject[];
};

export const recommendationsObjectSchema: Schema<RecommendationsObject> = s.object<RecommendationsObject>({
  seeds: s.array(s.lazy(() => recommendationSeedObjectSchema)),
  tracks: s.array(s.lazy(() => trackObjectSchema)),
});
