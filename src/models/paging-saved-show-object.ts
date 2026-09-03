import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { savedShowObjectSchema, type SavedShowObject } from "./saved-show-object.js";

export type PagingSavedShowObject = {
  href: string;
  limit: number;
  next: string | null;
  offset: number;
  previous: string | null;
  total: number;
  items: SavedShowObject[];
};

export const pagingSavedShowObjectSchema: Schema<PagingSavedShowObject> = s.object<PagingSavedShowObject>({
  href: s.string(),
  limit: s.number(),
  next: s.nullable(s.string()),
  offset: s.number(),
  previous: s.nullable(s.string()),
  total: s.number(),
  items: s.array(s.lazy(() => savedShowObjectSchema)),
});
