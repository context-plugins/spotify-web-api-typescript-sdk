import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { categoriesSchema, type Categories } from "./categories.js";

export type PagedCategories = {
  categories: Categories;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const pagedCategoriesSchema: Schema<PagedCategories> = s.object<PagedCategories>(
  {
    categories: categoriesSchema,
  },
  { additionalProperties: s.json() },
);
