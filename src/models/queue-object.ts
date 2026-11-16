import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { currentlyPlayingSchema, type CurrentlyPlaying } from "./unions/currently-playing.js";
import { queueSchema, type Queue } from "./unions/queue.js";

export type QueueObject = {
  /** The currently playing track or episode. Can be `null`. */
  currentlyPlaying?: CurrentlyPlaying;
  /** The tracks or episodes in the queue. Can be empty. */
  queue?: Queue[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const queueObjectSchema: Schema<QueueObject> = s.object<QueueObject>(
  {
    currentlyPlaying: s.optional(s.lazy(() => currentlyPlayingSchema)),
    queue: s.optional(s.array(s.lazy(() => queueSchema))),
    _keysMap: {
      currentlyPlaying: "currently_playing",
    },
  },
  { additionalProperties: s.json() },
);
