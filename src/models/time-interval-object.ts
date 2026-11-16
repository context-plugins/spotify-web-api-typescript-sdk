import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type TimeIntervalObject = {
  /** The starting point (in seconds) of the time interval. */
  start?: number;
  /** The duration (in seconds) of the time interval. */
  duration?: number;
  /** The confidence, from 0.0 to 1.0, of the reliability of the interval. */
  confidence?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const timeIntervalObjectProperties: s.Shape<TimeIntervalObject> = {
  start: s.optional(s.float64()),
  duration: s.optional(s.float64()),
  confidence: s.optional(s.float64()),
};

export const timeIntervalObjectInternalSchema: Schema<TimeIntervalObject> = s.object<TimeIntervalObject>(
  timeIntervalObjectProperties,
  { additionalProperties: s.json() },
);

export const timeIntervalObjectSchema: Schema<TimeIntervalObject> = s.lazySchema(() =>
  s.object<TimeIntervalObject>(
    {
      ...timeIntervalObjectProperties,
      confidence: s.optional(s.float64().check(s.gte(0), s.lte(1))),
    },
    { additionalProperties: s.json() },
  ),
);
