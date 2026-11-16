import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { audiobookObjectSchema, type AudiobookObject } from "./audiobook-object.js";

export type ManyAudiobooks = {
  audiobooks: AudiobookObject[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const manyAudiobooksSchema: Schema<ManyAudiobooks> = s.object<ManyAudiobooks>(
  {
    audiobooks: s.array(s.lazy(() => audiobookObjectSchema)),
  },
  { additionalProperties: s.json() },
);
