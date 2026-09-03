import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { externalUrlObjectSchema, type ExternalUrlObject } from "./external-url-object.js";
import { imageObjectSchema, type ImageObject } from "./image-object.js";
import { releaseDatePrecisionSchema, type ReleaseDatePrecision } from "./release-date-precision.js";
import { resumePointObjectSchema, type ResumePointObject } from "./resume-point-object.js";
import { showBaseSchema, type ShowBase } from "./show-base.js";
import { trackRestrictionObjectSchema, type TrackRestrictionObject } from "./track-restriction-object.js";
import { type5Schema, type Type5 } from "./type5.js";

export type EpisodeObject = {
  audioPreviewUrl: string | null;
  description: string;
  htmlDescription: string;
  durationMs: number;
  explicit: boolean;
  externalUrls: ExternalUrlObject;
  href: string;
  id: string;
  images: ImageObject[];
  isExternallyHosted: boolean;
  isPlayable: boolean;
  language?: string;
  languages: string[];
  name: string;
  releaseDate: string;
  releaseDatePrecision: ReleaseDatePrecision;
  resumePoint?: ResumePointObject;
  type: Type5;
  uri: string;
  restrictions?: TrackRestrictionObject;
  show: ShowBase;
};

export const episodeObjectSchema: Schema<EpisodeObject> = s.object<EpisodeObject>({
  audioPreviewUrl: s.nullable(s.string()),
  description: s.string(),
  htmlDescription: s.string(),
  durationMs: s.number(),
  explicit: s.boolean(),
  externalUrls: externalUrlObjectSchema,
  href: s.string(),
  id: s.string(),
  images: s.array(s.lazy(() => imageObjectSchema)),
  isExternallyHosted: s.boolean(),
  isPlayable: s.boolean(),
  language: s.optional(s.string()),
  languages: s.array(s.string()),
  name: s.string(),
  releaseDate: s.string(),
  releaseDatePrecision: releaseDatePrecisionSchema,
  resumePoint: s.optional(s.lazy(() => resumePointObjectSchema)),
  type: type5Schema,
  uri: s.string(),
  restrictions: s.optional(s.lazy(() => trackRestrictionObjectSchema)),
  show: showBaseSchema,
  _keysMap: {
    audioPreviewUrl: "audio_preview_url",
    htmlDescription: "html_description",
    durationMs: "duration_ms",
    externalUrls: "external_urls",
    isExternallyHosted: "is_externally_hosted",
    isPlayable: "is_playable",
    releaseDate: "release_date",
    releaseDatePrecision: "release_date_precision",
    resumePoint: "resume_point",
  },
});
