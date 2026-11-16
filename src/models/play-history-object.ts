import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { contextObjectSchema, type ContextObject } from "./context-object.js";
import { trackObjectSchema, type TrackObject } from "./track-object.js";

export type PlayHistoryObject = {
  track?: TrackObject;
  /** The date and time the track was played. */
  playedAt?: Date;
  context?: ContextObject;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const playHistoryObjectSchema: Schema<PlayHistoryObject> = s.object<PlayHistoryObject>(
  {
    track: s.optional(s.lazy(() => trackObjectSchema)),
    playedAt: s.optional(s.dateTime()),
    context: s.optional(s.lazy(() => contextObjectSchema)),
    _keysMap: {
      playedAt: "played_at",
    },
  },
  { additionalProperties: s.json() },
);
