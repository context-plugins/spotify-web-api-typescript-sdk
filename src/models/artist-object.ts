import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { externalUrlObjectSchema, type ExternalUrlObject } from "./external-url-object.js";
import { followersObjectSchema, type FollowersObject } from "./followers-object.js";
import { imageObjectSchema, type ImageObject } from "./image-object.js";
import { typeSchema, type Type } from "./type.js";

export type ArtistObject = {
  externalUrls?: ExternalUrlObject;
  followers?: FollowersObject;
  genres?: string[];
  href?: string;
  id?: string;
  images?: ImageObject[];
  name?: string;
  popularity?: number;
  type?: Type;
  uri?: string;
};

export const artistObjectSchema: Schema<ArtistObject> = s.object<ArtistObject>({
  externalUrls: s.optional(s.lazy(() => externalUrlObjectSchema)),
  followers: s.optional(s.lazy(() => followersObjectSchema)),
  genres: s.optional(s.array(s.string())),
  href: s.optional(s.string()),
  id: s.optional(s.string()),
  images: s.optional(s.array(s.lazy(() => imageObjectSchema))),
  name: s.optional(s.string()),
  popularity: s.optional(s.number()),
  type: s.optional(s.lazy(() => typeSchema)),
  uri: s.optional(s.string()),
  _keysMap: {
    externalUrls: "external_urls",
  },
});
