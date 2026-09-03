import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  artistDiscographyAlbumObjectSchema,
  type ArtistDiscographyAlbumObject,
} from "./artist-discography-album-object.js";

export type PagingArtistDiscographyAlbumObject = {
  href: string;
  limit: number;
  next: string | null;
  offset: number;
  previous: string | null;
  total: number;
  items: ArtistDiscographyAlbumObject[];
};

export const pagingArtistDiscographyAlbumObjectSchema: Schema<PagingArtistDiscographyAlbumObject> =
  s.object<PagingArtistDiscographyAlbumObject>({
    href: s.string(),
    limit: s.number(),
    next: s.nullable(s.string()),
    offset: s.number(),
    previous: s.nullable(s.string()),
    total: s.number(),
    items: s.array(s.lazy(() => artistDiscographyAlbumObjectSchema)),
  });
