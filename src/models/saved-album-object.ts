import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { albumObjectSchema, type AlbumObject } from "./album-object.js";

export type SavedAlbumObject = {
  addedAt?: Date;
  album?: AlbumObject;
};

export const savedAlbumObjectSchema: Schema<SavedAlbumObject> = s.object<SavedAlbumObject>({
  addedAt: s.optional(s.dateTime()),
  album: s.optional(s.lazy(() => albumObjectSchema)),
  _keysMap: {
    addedAt: "added_at",
  },
});
