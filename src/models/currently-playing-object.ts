import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { contextObjectSchema, type ContextObject } from "./context-object.js";
import { disallowsObjectSchema, type DisallowsObject } from "./disallows-object.js";
import { itemSchema, type Item } from "./unions/item.js";

export type CurrentlyPlayingObject = {
  context?: ContextObject;
  timestamp?: number;
  progressMs?: number;
  isPlaying?: boolean;
  item?: Item;
  currentlyPlayingType?: string;
  actions?: DisallowsObject;
};

export const currentlyPlayingObjectSchema: Schema<CurrentlyPlayingObject> = s.object<CurrentlyPlayingObject>({
  context: s.optional(s.lazy(() => contextObjectSchema)),
  timestamp: s.optional(s.number()),
  progressMs: s.optional(s.number()),
  isPlaying: s.optional(s.boolean()),
  item: s.optional(s.lazy(() => itemSchema)),
  currentlyPlayingType: s.optional(s.string()),
  actions: s.optional(s.lazy(() => disallowsObjectSchema)),
  _keysMap: {
    progressMs: "progress_ms",
    isPlaying: "is_playing",
    currentlyPlayingType: "currently_playing_type",
  },
});
