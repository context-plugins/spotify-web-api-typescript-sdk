import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { categoryObjectSchema, type CategoryObject } from "./category-object.js";

export type Categories = {
  href: string;
  limit: number;
  next: string | null;
  offset: number;
  previous: string | null;
  total: number;
  items: CategoryObject[];
};

export const categoriesSchema: Schema<Categories> = s.object<Categories>({
  href: s.string(),
  limit: s.number(),
  next: s.nullable(s.string()),
  offset: s.number(),
  previous: s.nullable(s.string()),
  total: s.number(),
  items: s.array(s.lazy(() => categoryObjectSchema)),
});
