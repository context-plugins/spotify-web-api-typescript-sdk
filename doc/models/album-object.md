
# Album Object

*This model accepts additional fields of type unknown.*

## Structure

`AlbumObject`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `albumType` | [`AlbumType`](../../doc/models/album-type.md) | Required | - |
| `totalTracks` | `number` | Required | The number of tracks in the album. |
| `availableMarkets` | `string[]` | Required | The markets in which the album is available: [ISO 3166-1 alpha-2 country codes](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). _**NOTE**: an album is considered available in a market when at least 1 of its tracks is available in that market._ |
| `externalUrls` | [`ExternalUrlObject`](../../doc/models/external-url-object.md) | Required | - |
| `href` | `string` | Required | A link to the Web API endpoint providing full details of the album. |
| `id` | `string` | Required | The [Spotify ID](https://developer.spotify.com/documentation/web-api/concepts/spotify-uris-ids) for the album. |
| `images` | [`ImageObject[]`](../../doc/models/image-object.md) | Required | The cover art for the album in various sizes, widest first. |
| `name` | `string` | Required | The name of the album. In case of an album takedown, the value may be an empty string. |
| `releaseDate` | `string` | Required | The date the album was first released. |
| `releaseDatePrecision` | [`ReleaseDatePrecision`](../../doc/models/release-date-precision.md) | Required | - |
| `restrictions` | [`AlbumRestrictionObject \| undefined`](../../doc/models/album-restriction-object.md) | Optional | - |
| `type` | [`Type2`](../../doc/models/type-2.md) | Required | - |
| `uri` | `string` | Required | The [Spotify URI](https://developer.spotify.com/documentation/web-api/concepts/spotify-uris-ids) for the album. |
| `artists` | [`SimplifiedArtistObject[]`](../../doc/models/simplified-artist-object.md) | Required | The artists of the album. Each artist object includes a link in `href` to more detailed information about the artist. |
| `tracks` | [`PagingSimplifiedTrackObject`](../../doc/models/paging-simplified-track-object.md) | Required | - |
| `copyrights` | [`CopyrightObject[]`](../../doc/models/copyright-object.md) | Required | The copyright statements of the album. |
| `externalIds` | [`ExternalIdObject`](../../doc/models/external-id-object.md) | Required | - |
| `genres` | `string[]` | Required | A list of the genres the album is associated with. If not yet classified, the array is empty. |
| `label` | `string` | Required | The label associated with the album. |
| `popularity` | `number` | Required | The popularity of the album. The value will be between 0 and 100, with 100 being the most popular. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  AlbumObject,
  AlbumType,
  Reason,
  ReleaseDatePrecision,
  Type,
  Type2,
} from 'spotify-web-apilib';

const albumObject: AlbumObject = {
  albumType: AlbumType.Single,
  totalTracks: 9,
  availableMarkets: [
    'CA',
    'BR',
    'IT'
  ],
  externalUrls: {
    spotify: 'spotify6',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  href: 'href8',
  id: '2up3OPMp9Tb4dAKM2erWXQ',
  images: [
    {
      url: 'https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n',
      height: 300,
      width: 300,
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  name: 'name6',
  releaseDate: '1981-12',
  releaseDatePrecision: ReleaseDatePrecision.Day,
  type: Type2.Album,
  uri: 'spotify:album:2up3OPMp9Tb4dAKM2erWXQ',
  artists: [
    {
      externalUrls: {
        spotify: 'spotify6',
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      href: 'href2',
      id: 'id0',
      name: 'name0',
      type: Type.Artist,
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  tracks: {
    href: 'https://api.spotify.com/v1/me/shows?offset=0&limit=20\n',
    limit: 20,
    next: 'https://api.spotify.com/v1/me/shows?offset=1&limit=1',
    offset: 0,
    previous: 'https://api.spotify.com/v1/me/shows?offset=1&limit=1',
    total: 4,
    items: [
      {
        artists: [
          {
            externalUrls: {
              spotify: 'spotify6',
              additionalProperties: {
                'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
              },
            },
            href: 'href2',
            id: 'id0',
            name: 'name0',
            type: Type.Artist,
            additionalProperties: {
              'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
            },
          }
        ],
        availableMarkets: [
          'available_markets2'
        ],
        discNumber: 244,
        durationMs: 52,
        explicit: false,
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      }
    ],
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  copyrights: [
    {
      text: 'text2',
      type: 'type2',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  externalIds: {
    isrc: 'isrc8',
    ean: 'ean8',
    upc: 'upc2',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  genres: [
    'Egg punk',
    'Noise rock'
  ],
  label: 'label6',
  popularity: 152,
  restrictions: {
    reason: Reason.Explicit,
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

