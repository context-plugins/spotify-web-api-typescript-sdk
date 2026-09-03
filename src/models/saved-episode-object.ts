import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { episodeObjectSchema, type EpisodeObject } from "./episode-object.js";

export type SavedEpisodeObject = {
  addedAt?: Date;
  episode?: EpisodeObject;
};

export const savedEpisodeObjectSchema: Schema<SavedEpisodeObject> = s.object<SavedEpisodeObject>({
  addedAt: s.optional(s.dateTime()),
  episode: s.optional(s.lazy(() => episodeObjectSchema)),
  _keysMap: {
    addedAt: "added_at",
  },
});
