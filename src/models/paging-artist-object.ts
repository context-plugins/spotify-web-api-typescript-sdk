import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { artistObjectSchema, type ArtistObject } from "./artist-object.js";

export type PagingArtistObject = {
  href: string;
  limit: number;
  next: string | null;
  offset: number;
  previous: string | null;
  total: number;
  items: ArtistObject[];
};

export const pagingArtistObjectSchema: Schema<PagingArtistObject> = s.object<PagingArtistObject>({
  href: s.string(),
  limit: s.number(),
  next: s.nullable(s.string()),
  offset: s.number(),
  previous: s.nullable(s.string()),
  total: s.number(),
  items: s.array(s.lazy(() => artistObjectSchema)),
});
