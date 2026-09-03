import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { externalUrlObjectSchema, type ExternalUrlObject } from "./external-url-object.js";
import { followersObjectSchema, type FollowersObject } from "./followers-object.js";
import { imageObjectSchema, type ImageObject } from "./image-object.js";
import {
  pagingPlaylistTrackObjectSchema,
  type PagingPlaylistTrackObject,
} from "./paging-playlist-track-object.js";
import { playlistOwnerObjectSchema, type PlaylistOwnerObject } from "./playlist-owner-object.js";

export type PlaylistObject = {
  collaborative?: boolean;
  description?: string | null;
  externalUrls?: ExternalUrlObject;
  followers?: FollowersObject;
  href?: string;
  id?: string;
  images?: ImageObject[];
  name?: string;
  owner?: PlaylistOwnerObject;
  public?: boolean;
  snapshotId?: string;
  tracks?: PagingPlaylistTrackObject;
  type?: string;
  uri?: string;
};

export const playlistObjectSchema: Schema<PlaylistObject> = s.object<PlaylistObject>({
  collaborative: s.optional(s.boolean()),
  description: s.optionalNullable(s.string()),
  externalUrls: s.optional(s.lazy(() => externalUrlObjectSchema)),
  followers: s.optional(s.lazy(() => followersObjectSchema)),
  href: s.optional(s.string()),
  id: s.optional(s.string()),
  images: s.optional(s.array(s.lazy(() => imageObjectSchema))),
  name: s.optional(s.string()),
  owner: s.optional(s.lazy(() => playlistOwnerObjectSchema)),
  public: s.optional(s.boolean()),
  snapshotId: s.optional(s.string()),
  tracks: s.optional(s.lazy(() => pagingPlaylistTrackObjectSchema)),
  type: s.optional(s.string()),
  uri: s.optional(s.string()),
  _keysMap: {
    externalUrls: "external_urls",
    snapshotId: "snapshot_id",
  },
});
