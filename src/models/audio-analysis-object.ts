import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { metaSchema, type Meta } from "./meta.js";
import { sectionObjectInternalSchema, sectionObjectSchema, type SectionObject } from "./section-object.js";
import { segmentObjectInternalSchema, segmentObjectSchema, type SegmentObject } from "./segment-object.js";
import {
  timeIntervalObjectInternalSchema,
  timeIntervalObjectSchema,
  type TimeIntervalObject,
} from "./time-interval-object.js";
import { trackInternalSchema, trackSchema, type Track } from "./track.js";

export type AudioAnalysisObject = {
  meta?: Meta;
  track?: Track;
  /**
   * The time intervals of the bars throughout the track. A bar (or measure) is a segment of time
   * defined as a given number of beats.
   */
  bars?: TimeIntervalObject[];
  /**
   * The time intervals of beats throughout the track. A beat is the basic time unit of a piece of
   * music; for example, each tick of a metronome. Beats are typically multiples of tatums.
   */
  beats?: TimeIntervalObject[];
  /**
   * Sections are defined by large variations in rhythm or timbre, e.g. chorus, verse, bridge,
   * guitar solo, etc. Each section contains its own descriptions of tempo, key, mode,
   * time_signature, and loudness.
   */
  sections?: SectionObject[];
  /** Each segment contains a roughly conisistent sound throughout its duration. */
  segments?: SegmentObject[];
  /**
   * A tatum represents the lowest regular pulse train that a listener intuitively infers from the
   * timing of perceived musical events (segments).
   */
  tatums?: TimeIntervalObject[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const audioAnalysisObjectProperties: s.Shape<AudioAnalysisObject> = {
  meta: s.optional(s.lazy(() => metaSchema)),
  track: s.optional(s.lazy(() => trackInternalSchema)),
  bars: s.optional(s.array(s.lazy(() => timeIntervalObjectInternalSchema))),
  beats: s.optional(s.array(s.lazy(() => timeIntervalObjectInternalSchema))),
  sections: s.optional(s.array(s.lazy(() => sectionObjectInternalSchema))),
  segments: s.optional(s.array(s.lazy(() => segmentObjectInternalSchema))),
  tatums: s.optional(s.array(s.lazy(() => timeIntervalObjectInternalSchema))),
};

export const audioAnalysisObjectInternalSchema: Schema<AudioAnalysisObject> = s.object<AudioAnalysisObject>(
  audioAnalysisObjectProperties,
  { additionalProperties: s.json() },
);

export const audioAnalysisObjectSchema: Schema<AudioAnalysisObject> = s.lazySchema(() =>
  s.object<AudioAnalysisObject>(
    {
      ...audioAnalysisObjectProperties,
      track: s.optional(s.lazy(() => trackSchema)),
      bars: s.optional(s.array(s.lazy(() => timeIntervalObjectSchema))),
      beats: s.optional(s.array(s.lazy(() => timeIntervalObjectSchema))),
      sections: s.optional(s.array(s.lazy(() => sectionObjectSchema))),
      segments: s.optional(s.array(s.lazy(() => segmentObjectSchema))),
      tatums: s.optional(s.array(s.lazy(() => timeIntervalObjectSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
