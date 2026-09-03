import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type EpisodeRestrictionObject = {
  reason?: string;
};

export const episodeRestrictionObjectSchema: Schema<EpisodeRestrictionObject> =
  s.object<EpisodeRestrictionObject>({
    reason: s.optional(s.string()),
  });
