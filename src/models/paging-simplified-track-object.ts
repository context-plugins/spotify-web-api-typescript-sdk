import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { simplifiedTrackObjectSchema, type SimplifiedTrackObject } from "./simplified-track-object.js";

export type PagingSimplifiedTrackObject = {
  href: string;
  limit: number;
  next: string | null;
  offset: number;
  previous: string | null;
  total: number;
  items: SimplifiedTrackObject[];
};

export const pagingSimplifiedTrackObjectSchema: Schema<PagingSimplifiedTrackObject> =
  s.object<PagingSimplifiedTrackObject>({
    href: s.string(),
    limit: s.number(),
    next: s.nullable(s.string()),
    offset: s.number(),
    previous: s.nullable(s.string()),
    total: s.number(),
    items: s.array(s.lazy(() => simplifiedTrackObjectSchema)),
  });
