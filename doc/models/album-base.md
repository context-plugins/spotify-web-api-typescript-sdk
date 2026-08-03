
# Album Base

*This model accepts additional fields of type unknown.*

## Structure

`AlbumBase`

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
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  AlbumBase,
  AlbumType,
  Reason,
  ReleaseDatePrecision,
  Type2,
} from 'spotify-web-apilib';

const albumBase: AlbumBase = {
  albumType: AlbumType.Album,
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
  href: 'href0',
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
  name: 'name8',
  releaseDate: '1981-12',
  releaseDatePrecision: ReleaseDatePrecision.Month,
  type: Type2.Album,
  uri: 'spotify:album:2up3OPMp9Tb4dAKM2erWXQ',
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

