import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type NarratorObject = {
  /** The name of the Narrator. */
  name?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const narratorObjectSchema: Schema<NarratorObject> = s.object<NarratorObject>(
  {
    name: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
