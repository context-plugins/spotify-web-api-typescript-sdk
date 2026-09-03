import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DisallowsObject = {
  interruptingPlayback?: boolean;
  pausing?: boolean;
  resuming?: boolean;
  seeking?: boolean;
  skippingNext?: boolean;
  skippingPrev?: boolean;
  togglingRepeatContext?: boolean;
  togglingShuffle?: boolean;
  togglingRepeatTrack?: boolean;
  transferringPlayback?: boolean;
};

export const disallowsObjectSchema: Schema<DisallowsObject> = s.object<DisallowsObject>({
  interruptingPlayback: s.optional(s.boolean()),
  pausing: s.optional(s.boolean()),
  resuming: s.optional(s.boolean()),
  seeking: s.optional(s.boolean()),
  skippingNext: s.optional(s.boolean()),
  skippingPrev: s.optional(s.boolean()),
  togglingRepeatContext: s.optional(s.boolean()),
  togglingShuffle: s.optional(s.boolean()),
  togglingRepeatTrack: s.optional(s.boolean()),
  transferringPlayback: s.optional(s.boolean()),
  _keysMap: {
    interruptingPlayback: "interrupting_playback",
    skippingNext: "skipping_next",
    skippingPrev: "skipping_prev",
    togglingRepeatContext: "toggling_repeat_context",
    togglingShuffle: "toggling_shuffle",
    togglingRepeatTrack: "toggling_repeat_track",
    transferringPlayback: "transferring_playback",
  },
});
