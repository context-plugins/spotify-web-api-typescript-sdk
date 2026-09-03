import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AuthorObject = {
  name?: string;
};

export const authorObjectSchema: Schema<AuthorObject> = s.object<AuthorObject>({
  name: s.optional(s.string()),
});
