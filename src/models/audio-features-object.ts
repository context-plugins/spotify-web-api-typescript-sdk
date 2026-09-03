import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type8Schema, type Type8 } from "./type8.js";

export type AudioFeaturesObject = {
  acousticness?: number;
  analysisUrl?: string;
  danceability?: number;
  durationMs?: number;
  energy?: number;
  id?: string;
  instrumentalness?: number;
  key?: number;
  liveness?: number;
  loudness?: number;
  mode?: number;
  speechiness?: number;
  tempo?: number;
  timeSignature?: number;
  trackHref?: string;
  type?: Type8;
  uri?: string;
  valence?: number;
};

export const audioFeaturesObjectSchema: Schema<AudioFeaturesObject> = s.object<AudioFeaturesObject>({
  acousticness: s.optional(s.number()),
  analysisUrl: s.optional(s.string()),
  danceability: s.optional(s.number()),
  durationMs: s.optional(s.number()),
  energy: s.optional(s.number()),
  id: s.optional(s.string()),
  instrumentalness: s.optional(s.number()),
  key: s.optional(s.number()),
  liveness: s.optional(s.number()),
  loudness: s.optional(s.number()),
  mode: s.optional(s.number()),
  speechiness: s.optional(s.number()),
  tempo: s.optional(s.number()),
  timeSignature: s.optional(s.number()),
  trackHref: s.optional(s.string()),
  type: s.optional(s.lazy(() => type8Schema)),
  uri: s.optional(s.string()),
  valence: s.optional(s.number()),
  _keysMap: {
    analysisUrl: "analysis_url",
    durationMs: "duration_ms",
    timeSignature: "time_signature",
    trackHref: "track_href",
  },
});
