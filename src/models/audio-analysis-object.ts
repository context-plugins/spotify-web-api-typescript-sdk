import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { metaSchema, type Meta } from "./meta.js";
import { sectionObjectSchema, type SectionObject } from "./section-object.js";
import { segmentObjectSchema, type SegmentObject } from "./segment-object.js";
import { timeIntervalObjectSchema, type TimeIntervalObject } from "./time-interval-object.js";
import { trackSchema, type Track } from "./track.js";

export type AudioAnalysisObject = {
  meta?: Meta;
  track?: Track;
  bars?: TimeIntervalObject[];
  beats?: TimeIntervalObject[];
  sections?: SectionObject[];
  segments?: SegmentObject[];
  tatums?: TimeIntervalObject[];
};

export const audioAnalysisObjectSchema: Schema<AudioAnalysisObject> = s.object<AudioAnalysisObject>({
  meta: s.optional(s.lazy(() => metaSchema)),
  track: s.optional(s.lazy(() => trackSchema)),
  bars: s.optional(s.array(s.lazy(() => timeIntervalObjectSchema))),
  beats: s.optional(s.array(s.lazy(() => timeIntervalObjectSchema))),
  sections: s.optional(s.array(s.lazy(() => sectionObjectSchema))),
  segments: s.optional(s.array(s.lazy(() => segmentObjectSchema))),
  tatums: s.optional(s.array(s.lazy(() => timeIntervalObjectSchema))),
});
