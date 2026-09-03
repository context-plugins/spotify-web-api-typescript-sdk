import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CursorObject = {
  after?: string;
  before?: string;
};

export const cursorObjectSchema: Schema<CursorObject> = s.object<CursorObject>({
  after: s.optional(s.string()),
  before: s.optional(s.string()),
});
