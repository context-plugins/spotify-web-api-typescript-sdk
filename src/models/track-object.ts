import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { artistObjectSchema, type ArtistObject } from "./artist-object.js";
import { externalIdObjectSchema, type ExternalIdObject } from "./external-id-object.js";
import { externalUrlObjectSchema, type ExternalUrlObject } from "./external-url-object.js";
import { linkedTrackObjectSchema, type LinkedTrackObject } from "./linked-track-object.js";
import { simplifiedAlbumObjectSchema, type SimplifiedAlbumObject } from "./simplified-album-object.js";
import { trackRestrictionObjectSchema, type TrackRestrictionObject } from "./track-restriction-object.js";
import { type3Schema, type Type3 } from "./type3.js";

export type TrackObject = {
  album?: SimplifiedAlbumObject;
  artists?: ArtistObject[];
  availableMarkets?: string[];
  discNumber?: number;
  durationMs?: number;
  explicit?: boolean;
  externalIds?: ExternalIdObject;
  externalUrls?: ExternalUrlObject;
  href?: string;
  id?: string;
  isPlayable?: boolean;
  linkedFrom?: LinkedTrackObject;
  restrictions?: TrackRestrictionObject;
  name?: string;
  popularity?: number;
  previewUrl?: string | null;
  trackNumber?: number;
  type?: Type3;
  uri?: string;
  isLocal?: boolean;
};

export const trackObjectSchema: Schema<TrackObject> = s.object<TrackObject>({
  album: s.optional(s.lazy(() => simplifiedAlbumObjectSchema)),
  artists: s.optional(s.array(s.lazy(() => artistObjectSchema))),
  availableMarkets: s.optional(s.array(s.string())),
  discNumber: s.optional(s.number()),
  durationMs: s.optional(s.number()),
  explicit: s.optional(s.boolean()),
  externalIds: s.optional(s.lazy(() => externalIdObjectSchema)),
  externalUrls: s.optional(s.lazy(() => externalUrlObjectSchema)),
  href: s.optional(s.string()),
  id: s.optional(s.string()),
  isPlayable: s.optional(s.boolean()),
  linkedFrom: s.optional(s.lazy(() => linkedTrackObjectSchema)),
  restrictions: s.optional(s.lazy(() => trackRestrictionObjectSchema)),
  name: s.optional(s.string()),
  popularity: s.optional(s.number()),
  previewUrl: s.optionalNullable(s.string()),
  trackNumber: s.optional(s.number()),
  type: s.optional(s.lazy(() => type3Schema)),
  uri: s.optional(s.string()),
  isLocal: s.optional(s.boolean()),
  _keysMap: {
    availableMarkets: "available_markets",
    discNumber: "disc_number",
    durationMs: "duration_ms",
    externalIds: "external_ids",
    externalUrls: "external_urls",
    isPlayable: "is_playable",
    linkedFrom: "linked_from",
    previewUrl: "preview_url",
    trackNumber: "track_number",
    isLocal: "is_local",
  },
});
