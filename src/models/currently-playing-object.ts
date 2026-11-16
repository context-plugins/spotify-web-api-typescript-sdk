import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { contextObjectSchema, type ContextObject } from "./context-object.js";
import { disallowsObjectSchema, type DisallowsObject } from "./disallows-object.js";
import { itemSchema, type Item } from "./unions/item.js";

export type CurrentlyPlayingObject = {
  context?: ContextObject;
  /** Unix Millisecond Timestamp when data was fetched */
  timestamp?: number;
  /** Progress into the currently playing track or episode. Can be `null`. */
  progressMs?: number;
  /** If something is currently playing, return `true`. */
  isPlaying?: boolean;
  /** The currently playing track or episode. Can be `null`. */
  item?: Item;
  /**
   * The object type of the currently playing item. Can be one of `track`, `episode`, `ad` or
   * `unknown`.
   */
  currentlyPlayingType?: string;
  actions?: DisallowsObject;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const currentlyPlayingObjectSchema: Schema<CurrentlyPlayingObject> = s.object<CurrentlyPlayingObject>(
  {
    context: s.optional(s.lazy(() => contextObjectSchema)),
    timestamp: s.optional(s.int()),
    progressMs: s.optional(s.int()),
    isPlaying: s.optional(s.boolean()),
    item: s.optional(s.lazy(() => itemSchema)),
    currentlyPlayingType: s.optional(s.string()),
    actions: s.optional(s.lazy(() => disallowsObjectSchema)),
    _keysMap: {
      progressMs: "progress_ms",
      isPlaying: "is_playing",
      currentlyPlayingType: "currently_playing_type",
    },
  },
  { additionalProperties: s.json() },
);
