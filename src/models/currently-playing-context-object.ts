import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { contextObjectSchema, type ContextObject } from "./context-object.js";
import { deviceObjectSchema, type DeviceObject } from "./device-object.js";
import { disallowsObjectSchema, type DisallowsObject } from "./disallows-object.js";
import { itemSchema, type Item } from "./unions/item.js";

export type CurrentlyPlayingContextObject = {
  device?: DeviceObject;
  repeatState?: string;
  shuffleState?: boolean;
  context?: ContextObject;
  timestamp?: number;
  progressMs?: number;
  isPlaying?: boolean;
  item?: Item;
  currentlyPlayingType?: string;
  actions?: DisallowsObject;
};

export const currentlyPlayingContextObjectSchema: Schema<CurrentlyPlayingContextObject> =
  s.object<CurrentlyPlayingContextObject>({
    device: s.optional(s.lazy(() => deviceObjectSchema)),
    repeatState: s.optional(s.string()),
    shuffleState: s.optional(s.boolean()),
    context: s.optional(s.lazy(() => contextObjectSchema)),
    timestamp: s.optional(s.number()),
    progressMs: s.optional(s.number()),
    isPlaying: s.optional(s.boolean()),
    item: s.optional(s.lazy(() => itemSchema)),
    currentlyPlayingType: s.optional(s.string()),
    actions: s.optional(s.lazy(() => disallowsObjectSchema)),
    _keysMap: {
      repeatState: "repeat_state",
      shuffleState: "shuffle_state",
      progressMs: "progress_ms",
      isPlaying: "is_playing",
      currentlyPlayingType: "currently_playing_type",
    },
  });
