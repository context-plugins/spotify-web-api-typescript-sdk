import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CursorObject = {
  /** The cursor to use as key to find the next page of items. */
  after?: string;
  /** The cursor to use as key to find the previous page of items. */
  before?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const cursorObjectSchema: Schema<CursorObject> = s.object<CursorObject>(
  {
    after: s.optional(s.string()),
    before: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
