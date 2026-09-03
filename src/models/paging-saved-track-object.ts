import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { savedTrackObjectSchema, type SavedTrackObject } from "./saved-track-object.js";

export type PagingSavedTrackObject = {
  href: string;
  limit: number;
  next: string | null;
  offset: number;
  previous: string | null;
  total: number;
  items: SavedTrackObject[];
};

export const pagingSavedTrackObjectSchema: Schema<PagingSavedTrackObject> = s.object<PagingSavedTrackObject>({
  href: s.string(),
  limit: s.number(),
  next: s.nullable(s.string()),
  offset: s.number(),
  previous: s.nullable(s.string()),
  total: s.number(),
  items: s.array(s.lazy(() => savedTrackObjectSchema)),
});
