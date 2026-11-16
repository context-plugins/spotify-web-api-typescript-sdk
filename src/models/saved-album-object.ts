import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { albumObjectSchema, type AlbumObject } from "./album-object.js";

export type SavedAlbumObject = {
  /**
   * The date and time the album was saved Timestamps are returned in ISO 8601 format as Coordinated
   * Universal Time (UTC) with a zero offset: YYYY-MM-DDTHH:MM:SSZ. If the time is imprecise (for
   * example, the date/time of an album release), an additional field indicates the precision; see
   * for example, release_date in an album object.
   */
  addedAt?: Date;
  album?: AlbumObject;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const savedAlbumObjectSchema: Schema<SavedAlbumObject> = s.object<SavedAlbumObject>(
  {
    addedAt: s.optional(s.dateTime()),
    album: s.optional(s.lazy(() => albumObjectSchema)),
    _keysMap: {
      addedAt: "added_at",
    },
  },
  { additionalProperties: s.json() },
);
