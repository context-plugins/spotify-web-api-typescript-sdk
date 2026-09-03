import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ChapterRestrictionObject = {
  reason?: string;
};

export const chapterRestrictionObjectSchema: Schema<ChapterRestrictionObject> =
  s.object<ChapterRestrictionObject>({
    reason: s.optional(s.string()),
  });
