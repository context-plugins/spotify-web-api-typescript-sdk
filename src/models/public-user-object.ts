import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { externalUrlObjectSchema, type ExternalUrlObject } from "./external-url-object.js";
import { followersObjectSchema, type FollowersObject } from "./followers-object.js";
import { imageObjectSchema, type ImageObject } from "./image-object.js";
import { type4Schema, type Type4 } from "./type4.js";

export type PublicUserObject = {
  displayName?: string | null;
  externalUrls?: ExternalUrlObject;
  followers?: FollowersObject;
  href?: string;
  id?: string;
  images?: ImageObject[];
  type?: Type4;
  uri?: string;
};

export const publicUserObjectSchema: Schema<PublicUserObject> = s.object<PublicUserObject>({
  displayName: s.optionalNullable(s.string()),
  externalUrls: s.optional(s.lazy(() => externalUrlObjectSchema)),
  followers: s.optional(s.lazy(() => followersObjectSchema)),
  href: s.optional(s.string()),
  id: s.optional(s.string()),
  images: s.optional(s.array(s.lazy(() => imageObjectSchema))),
  type: s.optional(s.lazy(() => type4Schema)),
  uri: s.optional(s.string()),
  _keysMap: {
    displayName: "display_name",
    externalUrls: "external_urls",
  },
});
