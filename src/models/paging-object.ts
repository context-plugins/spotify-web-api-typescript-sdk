import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PagingObject = {
  href: string;
  limit: number;
  next: string | null;
  offset: number;
  previous: string | null;
  total: number;
};

export const pagingObjectSchema: Schema<PagingObject> = s.object<PagingObject>({
  href: s.string(),
  limit: s.number(),
  next: s.nullable(s.string()),
  offset: s.number(),
  previous: s.nullable(s.string()),
  total: s.number(),
});
