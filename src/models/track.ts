import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Track = {
  numSamples?: number;
  duration?: number;
  sampleMd5?: string;
  offsetSeconds?: number;
  windowSeconds?: number;
  analysisSampleRate?: number;
  analysisChannels?: number;
  endOfFadeIn?: number;
  startOfFadeOut?: number;
  loudness?: number;
  tempo?: number;
  tempoConfidence?: number;
  timeSignature?: number;
  timeSignatureConfidence?: number;
  key?: number;
  keyConfidence?: number;
  mode?: number;
  modeConfidence?: number;
  codestring?: string;
  codeVersion?: number;
  echoprintstring?: string;
  echoprintVersion?: number;
  synchstring?: string;
  synchVersion?: number;
  rhythmstring?: string;
  rhythmVersion?: number;
};

export const trackSchema: Schema<Track> = s.object<Track>({
  numSamples: s.optional(s.number()),
  duration: s.optional(s.number()),
  sampleMd5: s.optional(s.string()),
  offsetSeconds: s.optional(s.number()),
  windowSeconds: s.optional(s.number()),
  analysisSampleRate: s.optional(s.number()),
  analysisChannels: s.optional(s.number()),
  endOfFadeIn: s.optional(s.number()),
  startOfFadeOut: s.optional(s.number()),
  loudness: s.optional(s.number()),
  tempo: s.optional(s.number()),
  tempoConfidence: s.optional(s.number()),
  timeSignature: s.optional(s.number()),
  timeSignatureConfidence: s.optional(s.number()),
  key: s.optional(s.number()),
  keyConfidence: s.optional(s.number()),
  mode: s.optional(s.number()),
  modeConfidence: s.optional(s.number()),
  codestring: s.optional(s.string()),
  codeVersion: s.optional(s.number()),
  echoprintstring: s.optional(s.string()),
  echoprintVersion: s.optional(s.number()),
  synchstring: s.optional(s.string()),
  synchVersion: s.optional(s.number()),
  rhythmstring: s.optional(s.string()),
  rhythmVersion: s.optional(s.number()),
  _keysMap: {
    numSamples: "num_samples",
    sampleMd5: "sample_md5",
    offsetSeconds: "offset_seconds",
    windowSeconds: "window_seconds",
    analysisSampleRate: "analysis_sample_rate",
    analysisChannels: "analysis_channels",
    endOfFadeIn: "end_of_fade_in",
    startOfFadeOut: "start_of_fade_out",
    tempoConfidence: "tempo_confidence",
    timeSignature: "time_signature",
    timeSignatureConfidence: "time_signature_confidence",
    keyConfidence: "key_confidence",
    modeConfidence: "mode_confidence",
    codeVersion: "code_version",
    echoprintVersion: "echoprint_version",
    synchVersion: "synch_version",
    rhythmVersion: "rhythm_version",
  },
});
