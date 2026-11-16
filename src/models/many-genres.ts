import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ManyGenres = {
  genres: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const manyGenresSchema: Schema<ManyGenres> = s.object<ManyGenres>(
  {
    genres: s.array(s.string()),
  },
  { additionalProperties: s.json() },
);
