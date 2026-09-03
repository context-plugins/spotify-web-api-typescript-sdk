import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { externalUrlObjectSchema, type ExternalUrlObject } from "./external-url-object.js";
import { followersObjectSchema, type FollowersObject } from "./followers-object.js";
import { type4Schema, type Type4 } from "./type4.js";

export type PlaylistUserObject = {
  externalUrls?: ExternalUrlObject;
  followers?: FollowersObject;
  href?: string;
  id?: string;
  type?: Type4;
  uri?: string;
};

export const playlistUserObjectSchema: Schema<PlaylistUserObject> = s.object<PlaylistUserObject>({
  externalUrls: s.optional(s.lazy(() => externalUrlObjectSchema)),
  followers: s.optional(s.lazy(() => followersObjectSchema)),
  href: s.optional(s.string()),
  id: s.optional(s.string()),
  type: s.optional(s.lazy(() => type4Schema)),
  uri: s.optional(s.string()),
  _keysMap: {
    externalUrls: "external_urls",
  },
});
