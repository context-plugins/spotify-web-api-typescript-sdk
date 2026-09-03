import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { audiobookObjectSchema, type AudiobookObject } from "./audiobook-object.js";

export type SavedAudiobookObject = {
  addedAt?: Date;
  audiobook?: AudiobookObject;
};

export const savedAudiobookObjectSchema: Schema<SavedAudiobookObject> = s.object<SavedAudiobookObject>({
  addedAt: s.optional(s.dateTime()),
  audiobook: s.optional(s.lazy(() => audiobookObjectSchema)),
  _keysMap: {
    addedAt: "added_at",
  },
});
