import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { modeSchema, type Mode } from "./mode.js";

export type SectionObject = {
  start?: number;
  duration?: number;
  confidence?: number;
  loudness?: number;
  tempo?: number;
  tempoConfidence?: number;
  key?: number;
  keyConfidence?: number;
  mode?: Mode;
  modeConfidence?: number;
  timeSignature?: number;
  timeSignatureConfidence?: number;
};

export const sectionObjectSchema: Schema<SectionObject> = s.object<SectionObject>({
  start: s.optional(s.number()),
  duration: s.optional(s.number()),
  confidence: s.optional(s.number()),
  loudness: s.optional(s.number()),
  tempo: s.optional(s.number()),
  tempoConfidence: s.optional(s.number()),
  key: s.optional(s.number()),
  keyConfidence: s.optional(s.number()),
  mode: s.optional(s.lazy(() => modeSchema)),
  modeConfidence: s.optional(s.number()),
  timeSignature: s.optional(s.number()),
  timeSignatureConfidence: s.optional(s.number()),
  _keysMap: {
    tempoConfidence: "tempo_confidence",
    keyConfidence: "key_confidence",
    modeConfidence: "mode_confidence",
    timeSignature: "time_signature",
    timeSignatureConfidence: "time_signature_confidence",
  },
});
