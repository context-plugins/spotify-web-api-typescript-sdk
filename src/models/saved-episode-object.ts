import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { episodeObjectSchema, type EpisodeObject } from "./episode-object.js";

export type SavedEpisodeObject = {
  /**
   * The date and time the episode was saved. Timestamps are returned in ISO 8601 format as
   * Coordinated Universal Time (UTC) with a zero offset: YYYY-MM-DDTHH:MM:SSZ.
   */
  addedAt?: Date;
  episode?: EpisodeObject;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const savedEpisodeObjectSchema: Schema<SavedEpisodeObject> = s.object<SavedEpisodeObject>(
  {
    addedAt: s.optional(s.dateTime()),
    episode: s.optional(s.lazy(() => episodeObjectSchema)),
    _keysMap: {
      addedAt: "added_at",
    },
  },
  { additionalProperties: s.json() },
);
