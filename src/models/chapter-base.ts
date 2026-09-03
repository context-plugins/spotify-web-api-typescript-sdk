import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  chapterRestrictionObjectSchema,
  type ChapterRestrictionObject,
} from "./chapter-restriction-object.js";
import { externalUrlObjectSchema, type ExternalUrlObject } from "./external-url-object.js";
import { imageObjectSchema, type ImageObject } from "./image-object.js";
import { releaseDatePrecisionSchema, type ReleaseDatePrecision } from "./release-date-precision.js";
import { resumePointObjectSchema, type ResumePointObject } from "./resume-point-object.js";
import { type5Schema, type Type5 } from "./type5.js";

export type ChapterBase = {
  audioPreviewUrl: string | null;
  availableMarkets?: string[];
  chapterNumber: number;
  description: string;
  htmlDescription: string;
  durationMs: number;
  explicit: boolean;
  externalUrls: ExternalUrlObject;
  href: string;
  id: string;
  images: ImageObject[];
  isPlayable: boolean;
  languages: string[];
  name: string;
  releaseDate: string;
  releaseDatePrecision: ReleaseDatePrecision;
  resumePoint?: ResumePointObject;
  type: Type5;
  uri: string;
  restrictions?: ChapterRestrictionObject;
};

export const chapterBaseSchema: Schema<ChapterBase> = s.object<ChapterBase>({
  audioPreviewUrl: s.nullable(s.string()),
  availableMarkets: s.optional(s.array(s.string())),
  chapterNumber: s.number(),
  description: s.string(),
  htmlDescription: s.string(),
  durationMs: s.number(),
  explicit: s.boolean(),
  externalUrls: externalUrlObjectSchema,
  href: s.string(),
  id: s.string(),
  images: s.array(s.lazy(() => imageObjectSchema)),
  isPlayable: s.boolean(),
  languages: s.array(s.string()),
  name: s.string(),
  releaseDate: s.string(),
  releaseDatePrecision: releaseDatePrecisionSchema,
  resumePoint: s.optional(s.lazy(() => resumePointObjectSchema)),
  type: type5Schema,
  uri: s.string(),
  restrictions: s.optional(s.lazy(() => chapterRestrictionObjectSchema)),
  _keysMap: {
    audioPreviewUrl: "audio_preview_url",
    availableMarkets: "available_markets",
    chapterNumber: "chapter_number",
    htmlDescription: "html_description",
    durationMs: "duration_ms",
    externalUrls: "external_urls",
    isPlayable: "is_playable",
    releaseDate: "release_date",
    releaseDatePrecision: "release_date_precision",
    resumePoint: "resume_point",
  },
});
