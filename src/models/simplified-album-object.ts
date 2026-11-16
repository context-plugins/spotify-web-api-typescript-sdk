import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { albumRestrictionObjectSchema, type AlbumRestrictionObject } from "./album-restriction-object.js";
import { albumTypeSchema, type AlbumType } from "./album-type.js";
import { externalUrlObjectSchema, type ExternalUrlObject } from "./external-url-object.js";
import { imageObjectSchema, type ImageObject } from "./image-object.js";
import { releaseDatePrecisionSchema, type ReleaseDatePrecision } from "./release-date-precision.js";
import { simplifiedArtistObjectSchema, type SimplifiedArtistObject } from "./simplified-artist-object.js";
import { type2Schema, type Type2 } from "./type2.js";

export type SimplifiedAlbumObject = {
  albumType: AlbumType;
  /** The number of tracks in the album. */
  totalTracks: number;
  /**
   * The markets in which the album is available: [ISO 3166-1 alpha-2 country
   * codes](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). _**NOTE**: an album is considered
   * available in a market when at least 1 of its tracks is available in that market._
   */
  availableMarkets?: string[];
  externalUrls: ExternalUrlObject;
  /** A link to the Web API endpoint providing full details of the album. */
  href: string;
  /**
   * The [Spotify ID](https://developer.spotify.com/documentation/web-api/concepts/spotify-uris-ids)
   * for the album.
   */
  id: string;
  /** The cover art for the album in various sizes, widest first. */
  images: ImageObject[];
  /** The name of the album. In case of an album takedown, the value may be an empty string. */
  name: string;
  /** The date the album was first released. */
  releaseDate: string;
  releaseDatePrecision: ReleaseDatePrecision;
  restrictions?: AlbumRestrictionObject;
  type: Type2;
  /**
   * The [Spotify
   * URI](https://developer.spotify.com/documentation/web-api/concepts/spotify-uris-ids) for the
   * album.
   */
  uri: string;
  /**
   * The artists of the album. Each artist object includes a link in `href` to more detailed
   * information about the artist.
   */
  artists: SimplifiedArtistObject[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const simplifiedAlbumObjectSchema: Schema<SimplifiedAlbumObject> = s.object<SimplifiedAlbumObject>(
  {
    albumType: albumTypeSchema,
    totalTracks: s.int(),
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
    _keysMap: {
      albumType: "album_type",
      totalTracks: "total_tracks",
      availableMarkets: "available_markets",
      externalUrls: "external_urls",
      releaseDate: "release_date",
      releaseDatePrecision: "release_date_precision",
    },
  },
  { additionalProperties: s.json() },
);
