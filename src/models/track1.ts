import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Track1 = {
  /** Spotify URI */
  uri?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const track1Schema: Schema<Track1> = s.object<Track1>(
  {
    uri: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
