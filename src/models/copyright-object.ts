import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CopyrightObject = {
  /** The copyright text for this content. */
  text?: string;
  /**
   * The type of copyright: `C` = the copyright, `P` = the sound recording (performance) copyright.
   */
  type?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const copyrightObjectSchema: Schema<CopyrightObject> = s.object<CopyrightObject>(
  {
    text: s.optional(s.string()),
    type: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
