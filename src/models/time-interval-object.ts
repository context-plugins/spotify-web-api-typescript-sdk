import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TimeIntervalObject = {
  start?: number;
  duration?: number;
  confidence?: number;
};

export const timeIntervalObjectSchema: Schema<TimeIntervalObject> = s.object<TimeIntervalObject>({
  start: s.optional(s.number()),
  duration: s.optional(s.number()),
  confidence: s.optional(s.number()),
});
