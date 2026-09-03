import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { copyrightObjectSchema, type CopyrightObject } from "./copyright-object.js";
import { externalUrlObjectSchema, type ExternalUrlObject } from "./external-url-object.js";
import { imageObjectSchema, type ImageObject } from "./image-object.js";
import {
  pagingSimplifiedEpisodeObjectSchema,
  type PagingSimplifiedEpisodeObject,
} from "./paging-simplified-episode-object.js";
import { type6Schema, type Type6 } from "./type6.js";

export type ShowObject = {
  availableMarkets: string[];
  copyrights: CopyrightObject[];
  description: string;
  htmlDescription: string;
  explicit: boolean;
  externalUrls: ExternalUrlObject;
  href: string;
  id: string;
  images: ImageObject[];
  isExternallyHosted: boolean;
  languages: string[];
  mediaType: string;
  name: string;
  publisher: string;
  type: Type6;
  uri: string;
  totalEpisodes: number;
  episodes: PagingSimplifiedEpisodeObject;
};

export const showObjectSchema: Schema<ShowObject> = s.object<ShowObject>({
  availableMarkets: s.array(s.string()),
  copyrights: s.array(s.lazy(() => copyrightObjectSchema)),
  description: s.string(),
  htmlDescription: s.string(),
  explicit: s.boolean(),
  externalUrls: externalUrlObjectSchema,
  href: s.string(),
  id: s.string(),
  images: s.array(s.lazy(() => imageObjectSchema)),
  isExternallyHosted: s.boolean(),
  languages: s.array(s.string()),
  mediaType: s.string(),
  name: s.string(),
  publisher: s.string(),
  type: type6Schema,
  uri: s.string(),
  totalEpisodes: s.number(),
  episodes: pagingSimplifiedEpisodeObjectSchema,
  _keysMap: {
    availableMarkets: "available_markets",
    htmlDescription: "html_description",
    externalUrls: "external_urls",
    isExternallyHosted: "is_externally_hosted",
    mediaType: "media_type",
    totalEpisodes: "total_episodes",
  },
});
