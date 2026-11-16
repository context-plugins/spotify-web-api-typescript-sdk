import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  pagingSimplifiedAlbumObjectSchema,
  type PagingSimplifiedAlbumObject,
} from "./paging-simplified-album-object.js";

export type PagedAlbums = {
  albums: PagingSimplifiedAlbumObject;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const pagedAlbumsSchema: Schema<PagedAlbums> = s.object<PagedAlbums>(
  {
    albums: pagingSimplifiedAlbumObjectSchema,
  },
  { additionalProperties: s.json() },
);
