import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { externalUrlObjectSchema, type ExternalUrlObject } from "./external-url-object.js";
import { imageObjectSchema, type ImageObject } from "./image-object.js";
import { playlistOwnerObjectSchema, type PlaylistOwnerObject } from "./playlist-owner-object.js";
import { playlistTracksRefObjectSchema, type PlaylistTracksRefObject } from "./playlist-tracks-ref-object.js";

export type SimplifiedPlaylistObject = {
  collaborative?: boolean;
  description?: string;
  externalUrls?: ExternalUrlObject;
  href?: string;
  id?: string;
  images?: ImageObject[];
  name?: string;
  owner?: PlaylistOwnerObject;
  public?: boolean;
  snapshotId?: string;
  tracks?: PlaylistTracksRefObject;
  type?: string;
  uri?: string;
};

export const simplifiedPlaylistObjectSchema: Schema<SimplifiedPlaylistObject> =
  s.object<SimplifiedPlaylistObject>({
    collaborative: s.optional(s.boolean()),
    description: s.optional(s.string()),
    externalUrls: s.optional(s.lazy(() => externalUrlObjectSchema)),
    href: s.optional(s.string()),
    id: s.optional(s.string()),
    images: s.optional(s.array(s.lazy(() => imageObjectSchema))),
    name: s.optional(s.string()),
    owner: s.optional(s.lazy(() => playlistOwnerObjectSchema)),
    public: s.optional(s.boolean()),
    snapshotId: s.optional(s.string()),
    tracks: s.optional(s.lazy(() => playlistTracksRefObjectSchema)),
    type: s.optional(s.string()),
    uri: s.optional(s.string()),
    _keysMap: {
      externalUrls: "external_urls",
      snapshotId: "snapshot_id",
    },
  });
