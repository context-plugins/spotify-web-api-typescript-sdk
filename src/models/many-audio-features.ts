import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  audioFeaturesObjectInternalSchema,
  audioFeaturesObjectSchema,
  type AudioFeaturesObject,
} from "./audio-features-object.js";

export type ManyAudioFeatures = {
  audioFeatures: AudioFeaturesObject[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const manyAudioFeaturesProperties: s.Shape<ManyAudioFeatures> = {
  audioFeatures: s.array(s.lazy(() => audioFeaturesObjectInternalSchema)),
  _keysMap: {
    audioFeatures: "audio_features",
  },
};

export const manyAudioFeaturesInternalSchema: Schema<ManyAudioFeatures> = s.object<ManyAudioFeatures>(
  manyAudioFeaturesProperties,
  { additionalProperties: s.json() },
);

export const manyAudioFeaturesSchema: Schema<ManyAudioFeatures> = s.lazySchema(() =>
  s.object<ManyAudioFeatures>(
    {
      ...manyAudioFeaturesProperties,
      audioFeatures: s.array(s.lazy(() => audioFeaturesObjectSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
