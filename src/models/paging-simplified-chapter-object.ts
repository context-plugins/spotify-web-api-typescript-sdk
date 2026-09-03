import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { chapterBaseSchema, type ChapterBase } from "./chapter-base.js";

export type PagingSimplifiedChapterObject = {
  href: string;
  limit: number;
  next: string | null;
  offset: number;
  previous: string | null;
  total: number;
  items: ChapterBase[];
};

export const pagingSimplifiedChapterObjectSchema: Schema<PagingSimplifiedChapterObject> =
  s.object<PagingSimplifiedChapterObject>({
    href: s.string(),
    limit: s.number(),
    next: s.nullable(s.string()),
    offset: s.number(),
    previous: s.nullable(s.string()),
    total: s.number(),
    items: s.array(s.lazy(() => chapterBaseSchema)),
  });
