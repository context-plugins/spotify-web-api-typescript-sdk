
# Paging Simplified Album Object

*This model accepts additional fields of type unknown.*

## Structure

`PagingSimplifiedAlbumObject`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `href` | `string` | Required | A link to the Web API endpoint returning the full result of the request |
| `limit` | `number` | Required | The maximum number of items in the response (as set in the query or by default). |
| `next` | `string \| null` | Required | URL to the next page of items. ( `null` if none) |
| `offset` | `number` | Required | The offset of the items returned (as set in the query or by default) |
| `previous` | `string \| null` | Required | URL to the previous page of items. ( `null` if none) |
| `total` | `number` | Required | The total number of items available to return. |
| `items` | [`SimplifiedAlbumObject[]`](../../doc/models/simplified-album-object.md) | Required | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  AlbumType,
  PagingSimplifiedAlbumObject,
  Reason,
  ReleaseDatePrecision,
  Type,
  Type2,
} from 'spotify-web-apilib';

const pagingSimplifiedAlbumObject: PagingSimplifiedAlbumObject = {
  href: 'https://api.spotify.com/v1/me/shows?offset=0&limit=20\n',
  limit: 20,
  next: 'https://api.spotify.com/v1/me/shows?offset=1&limit=1',
  offset: 0,
  previous: 'https://api.spotify.com/v1/me/shows?offset=1&limit=1',
  total: 4,
  items: [
    {
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
      restrictions: {
        reason: Reason.Explicit,
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

