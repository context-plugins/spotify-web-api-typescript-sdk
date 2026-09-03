import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CopyrightObject = {
  text?: string;
  type?: string;
};

export const copyrightObjectSchema: Schema<CopyrightObject> = s.object<CopyrightObject>({
  text: s.optional(s.string()),
  type: s.optional(s.string()),
});
