import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { audiobookBaseSchema, type AudiobookBase } from "./audiobook-base.js";

export type PagingSimplifiedAudiobookObject = {
  href: string;
  limit: number;
  next: string | null;
  offset: number;
  previous: string | null;
  total: number;
  items: AudiobookBase[];
};

export const pagingSimplifiedAudiobookObjectSchema: Schema<PagingSimplifiedAudiobookObject> =
  s.object<PagingSimplifiedAudiobookObject>({
    href: s.string(),
    limit: s.number(),
    next: s.nullable(s.string()),
    offset: s.number(),
    previous: s.nullable(s.string()),
    total: s.number(),
    items: s.array(s.lazy(() => audiobookBaseSchema)),
  });
