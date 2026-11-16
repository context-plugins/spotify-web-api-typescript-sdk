import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { artistObjectSchema, type ArtistObject } from "./artist-object.js";

export type ManyArtists = {
  artists: ArtistObject[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const manyArtistsSchema: Schema<ManyArtists> = s.object<ManyArtists>(
  {
    artists: s.array(s.lazy(() => artistObjectSchema)),
  },
  { additionalProperties: s.json() },
);
