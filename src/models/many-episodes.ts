import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { episodeObjectSchema, type EpisodeObject } from "./episode-object.js";

export type ManyEpisodes = {
  episodes: EpisodeObject[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const manyEpisodesSchema: Schema<ManyEpisodes> = s.object<ManyEpisodes>(
  {
    episodes: s.array(s.lazy(() => episodeObjectSchema)),
  },
  { additionalProperties: s.json() },
);
