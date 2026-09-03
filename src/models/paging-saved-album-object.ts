import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { savedAlbumObjectSchema, type SavedAlbumObject } from "./saved-album-object.js";

export type PagingSavedAlbumObject = {
  href: string;
  limit: number;
  next: string | null;
  offset: number;
  previous: string | null;
  total: number;
  items: SavedAlbumObject[];
};

export const pagingSavedAlbumObjectSchema: Schema<PagingSavedAlbumObject> = s.object<PagingSavedAlbumObject>({
  href: s.string(),
  limit: s.number(),
  next: s.nullable(s.string()),
  offset: s.number(),
  previous: s.nullable(s.string()),
  total: s.number(),
  items: s.array(s.lazy(() => savedAlbumObjectSchema)),
});
