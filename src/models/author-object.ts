import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type AuthorObject = {
  /** The name of the author. */
  name?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const authorObjectSchema: Schema<AuthorObject> = s.object<AuthorObject>(
  {
    name: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
