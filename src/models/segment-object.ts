import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SegmentObject = {
  start?: number;
  duration?: number;
  confidence?: number;
  loudnessStart?: number;
  loudnessMax?: number;
  loudnessMaxTime?: number;
  loudnessEnd?: number;
  pitches?: number[];
  timbre?: number[];
};

export const segmentObjectSchema: Schema<SegmentObject> = s.object<SegmentObject>({
  start: s.optional(s.number()),
  duration: s.optional(s.number()),
  confidence: s.optional(s.number()),
  loudnessStart: s.optional(s.number()),
  loudnessMax: s.optional(s.number()),
  loudnessMaxTime: s.optional(s.number()),
  loudnessEnd: s.optional(s.number()),
  pitches: s.optional(s.array(s.number())),
  timbre: s.optional(s.array(s.number())),
  _keysMap: {
    loudnessStart: "loudness_start",
    loudnessMax: "loudness_max",
    loudnessMaxTime: "loudness_max_time",
    loudnessEnd: "loudness_end",
  },
});
