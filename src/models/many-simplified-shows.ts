import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { showBaseSchema, type ShowBase } from "./show-base.js";

export type ManySimplifiedShows = {
  shows: ShowBase[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const manySimplifiedShowsSchema: Schema<ManySimplifiedShows> = s.object<ManySimplifiedShows>(
  {
    shows: s.array(s.lazy(() => showBaseSchema)),
  },
  { additionalProperties: s.json() },
);
