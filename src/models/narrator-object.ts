import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type NarratorObject = {
  name?: string;
};

export const narratorObjectSchema: Schema<NarratorObject> = s.object<NarratorObject>({
  name: s.optional(s.string()),
});
