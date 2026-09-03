import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  explicitContentSettingsObjectSchema,
  type ExplicitContentSettingsObject,
} from "./explicit-content-settings-object.js";
import { externalUrlObjectSchema, type ExternalUrlObject } from "./external-url-object.js";
import { followersObjectSchema, type FollowersObject } from "./followers-object.js";
import { imageObjectSchema, type ImageObject } from "./image-object.js";

export type PrivateUserObject = {
  country?: string;
  displayName?: string;
  email?: string;
  explicitContent?: ExplicitContentSettingsObject;
  externalUrls?: ExternalUrlObject;
  followers?: FollowersObject;
  href?: string;
  id?: string;
  images?: ImageObject[];
  product?: string;
  type?: string;
  uri?: string;
};

export const privateUserObjectSchema: Schema<PrivateUserObject> = s.object<PrivateUserObject>({
  country: s.optional(s.string()),
  displayName: s.optional(s.string()),
  email: s.optional(s.string()),
  explicitContent: s.optional(s.lazy(() => explicitContentSettingsObjectSchema)),
  externalUrls: s.optional(s.lazy(() => externalUrlObjectSchema)),
  followers: s.optional(s.lazy(() => followersObjectSchema)),
  href: s.optional(s.string()),
  id: s.optional(s.string()),
  images: s.optional(s.array(s.lazy(() => imageObjectSchema))),
  product: s.optional(s.string()),
  type: s.optional(s.string()),
  uri: s.optional(s.string()),
  _keysMap: {
    displayName: "display_name",
    explicitContent: "explicit_content",
    externalUrls: "external_urls",
  },
});
