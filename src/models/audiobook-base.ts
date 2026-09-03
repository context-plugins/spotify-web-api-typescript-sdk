import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { authorObjectSchema, type AuthorObject } from "./author-object.js";
import { copyrightObjectSchema, type CopyrightObject } from "./copyright-object.js";
import { externalUrlObjectSchema, type ExternalUrlObject } from "./external-url-object.js";
import { imageObjectSchema, type ImageObject } from "./image-object.js";
import { narratorObjectSchema, type NarratorObject } from "./narrator-object.js";
import { type9Schema, type Type9 } from "./type9.js";

export type AudiobookBase = {
  authors: AuthorObject[];
  availableMarkets: string[];
  copyrights: CopyrightObject[];
  description: string;
  htmlDescription: string;
  edition?: string;
  explicit: boolean;
  externalUrls: ExternalUrlObject;
  href: string;
  id: string;
  images: ImageObject[];
  languages: string[];
  mediaType: string;
  name: string;
  narrators: NarratorObject[];
  publisher: string;
  type: Type9;
  uri: string;
  totalChapters: number;
};

export const audiobookBaseSchema: Schema<AudiobookBase> = s.object<AudiobookBase>({
  authors: s.array(s.lazy(() => authorObjectSchema)),
  availableMarkets: s.array(s.string()),
  copyrights: s.array(s.lazy(() => copyrightObjectSchema)),
  description: s.string(),
  htmlDescription: s.string(),
  edition: s.optional(s.string()),
  explicit: s.boolean(),
  externalUrls: externalUrlObjectSchema,
  href: s.string(),
  id: s.string(),
  images: s.array(s.lazy(() => imageObjectSchema)),
  languages: s.array(s.string()),
  mediaType: s.string(),
  name: s.string(),
  narrators: s.array(s.lazy(() => narratorObjectSchema)),
  publisher: s.string(),
  type: type9Schema,
  uri: s.string(),
  totalChapters: s.number(),
  _keysMap: {
    availableMarkets: "available_markets",
    htmlDescription: "html_description",
    externalUrls: "external_urls",
    mediaType: "media_type",
    totalChapters: "total_chapters",
  },
});
