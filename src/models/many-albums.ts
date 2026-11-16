import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { albumObjectSchema, type AlbumObject } from "./album-object.js";

export type ManyAlbums = {
  albums: AlbumObject[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const manyAlbumsSchema: Schema<ManyAlbums> = s.object<ManyAlbums>(
  {
    albums: s.array(s.lazy(() => albumObjectSchema)),
  },
  { additionalProperties: s.json() },
);
