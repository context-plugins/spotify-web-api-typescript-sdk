import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type RecommendationSeedObject = {
  afterFilteringSize?: number;
  afterRelinkingSize?: number;
  href?: string;
  id?: string;
  initialPoolSize?: number;
  type?: string;
};

export const recommendationSeedObjectSchema: Schema<RecommendationSeedObject> =
  s.object<RecommendationSeedObject>({
    afterFilteringSize: s.optional(s.number()),
    afterRelinkingSize: s.optional(s.number()),
    href: s.optional(s.string()),
    id: s.optional(s.string()),
    initialPoolSize: s.optional(s.number()),
    type: s.optional(s.string()),
  });
