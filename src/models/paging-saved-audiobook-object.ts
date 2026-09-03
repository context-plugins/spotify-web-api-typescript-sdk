import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { savedAudiobookObjectSchema, type SavedAudiobookObject } from "./saved-audiobook-object.js";

export type PagingSavedAudiobookObject = {
  href: string;
  limit: number;
  next: string | null;
  offset: number;
  previous: string | null;
  total: number;
  items: SavedAudiobookObject[];
};

export const pagingSavedAudiobookObjectSchema: Schema<PagingSavedAudiobookObject> =
  s.object<PagingSavedAudiobookObject>({
    href: s.string(),
    limit: s.number(),
    next: s.nullable(s.string()),
    offset: s.number(),
    previous: s.nullable(s.string()),
    total: s.number(),
    items: s.array(s.lazy(() => savedAudiobookObjectSchema)),
  });
