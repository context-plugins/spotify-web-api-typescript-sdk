import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { externalUrlObjectSchema, type ExternalUrlObject } from "./external-url-object.js";
import { linkedTrackObjectSchema, type LinkedTrackObject } from "./linked-track-object.js";
import { simplifiedArtistObjectSchema, type SimplifiedArtistObject } from "./simplified-artist-object.js";
import { trackRestrictionObjectSchema, type TrackRestrictionObject } from "./track-restriction-object.js";

export type SimplifiedTrackObject = {
  artists?: SimplifiedArtistObject[];
  availableMarkets?: string[];
  discNumber?: number;
  durationMs?: number;
  explicit?: boolean;
  externalUrls?: ExternalUrlObject;
  href?: string;
  id?: string;
  isPlayable?: boolean;
  linkedFrom?: LinkedTrackObject;
  restrictions?: TrackRestrictionObject;
  name?: string;
  previewUrl?: string | null;
  trackNumber?: number;
  type?: string;
  uri?: string;
  isLocal?: boolean;
};

export const simplifiedTrackObjectSchema: Schema<SimplifiedTrackObject> = s.object<SimplifiedTrackObject>({
  artists: s.optional(s.array(s.lazy(() => simplifiedArtistObjectSchema))),
  availableMarkets: s.optional(s.array(s.string())),
  discNumber: s.optional(s.number()),
  durationMs: s.optional(s.number()),
  explicit: s.optional(s.boolean()),
  externalUrls: s.optional(s.lazy(() => externalUrlObjectSchema)),
  href: s.optional(s.string()),
  id: s.optional(s.string()),
  isPlayable: s.optional(s.boolean()),
  linkedFrom: s.optional(s.lazy(() => linkedTrackObjectSchema)),
  restrictions: s.optional(s.lazy(() => trackRestrictionObjectSchema)),
  name: s.optional(s.string()),
  previewUrl: s.optionalNullable(s.string()),
  trackNumber: s.optional(s.number()),
  type: s.optional(s.string()),
  uri: s.optional(s.string()),
  isLocal: s.optional(s.boolean()),
  _keysMap: {
    availableMarkets: "available_markets",
    discNumber: "disc_number",
    durationMs: "duration_ms",
    externalUrls: "external_urls",
    isPlayable: "is_playable",
    linkedFrom: "linked_from",
    previewUrl: "preview_url",
    trackNumber: "track_number",
    isLocal: "is_local",
  },
});
