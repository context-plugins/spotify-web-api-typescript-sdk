import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { albumGroupSchema, type AlbumGroup } from "./album-group.js";
import { albumRestrictionObjectSchema, type AlbumRestrictionObject } from "./album-restriction-object.js";
import { albumTypeSchema, type AlbumType } from "./album-type.js";
import { externalUrlObjectSchema, type ExternalUrlObject } from "./external-url-object.js";
import { imageObjectSchema, type ImageObject } from "./image-object.js";
import { releaseDatePrecisionSchema, type ReleaseDatePrecision } from "./release-date-precision.js";
import { simplifiedArtistObjectSchema, type SimplifiedArtistObject } from "./simplified-artist-object.js";
import { type2Schema, type Type2 } from "./type2.js";

export type ArtistDiscographyAlbumObject = {
  albumType: AlbumType;
  totalTracks: number;
  availableMarkets?: string[];
  externalUrls: ExternalUrlObject;
  href: string;
  id: string;
  images: ImageObject[];
  name: string;
  releaseDate: string;
  releaseDatePrecision: ReleaseDatePrecision;
  restrictions?: AlbumRestrictionObject;
  type: Type2;
  uri: string;
  artists: SimplifiedArtistObject[];
  albumGroup?: AlbumGroup;
};

export const artistDiscographyAlbumObjectSchema: Schema<ArtistDiscographyAlbumObject> =
  s.object<ArtistDiscographyAlbumObject>({
    albumType: albumTypeSchema,
    totalTracks: s.number(),
    availableMarkets: s.optional(s.array(s.string())),
    externalUrls: externalUrlObjectSchema,
    href: s.string(),
    id: s.string(),
    images: s.array(s.lazy(() => imageObjectSchema)),
    name: s.string(),
    releaseDate: s.string(),
    releaseDatePrecision: releaseDatePrecisionSchema,
    restrictions: s.optional(s.lazy(() => albumRestrictionObjectSchema)),
    type: type2Schema,
    uri: s.string(),
    artists: s.array(s.lazy(() => simplifiedArtistObjectSchema)),
    albumGroup: s.optional(s.lazy(() => albumGroupSchema)),
    _keysMap: {
      albumType: "album_type",
      totalTracks: "total_tracks",
      availableMarkets: "available_markets",
      externalUrls: "external_urls",
      releaseDate: "release_date",
      releaseDatePrecision: "release_date_precision",
      albumGroup: "album_group",
    },
  });
