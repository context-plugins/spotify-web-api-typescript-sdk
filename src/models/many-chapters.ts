import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { chapterObjectSchema, type ChapterObject } from "./chapter-object.js";

export type ManyChapters = {
  chapters: ChapterObject[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const manyChaptersSchema: Schema<ManyChapters> = s.object<ManyChapters>(
  {
    chapters: s.array(s.lazy(() => chapterObjectSchema)),
  },
  { additionalProperties: s.json() },
);
