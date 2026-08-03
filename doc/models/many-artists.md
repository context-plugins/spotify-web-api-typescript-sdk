
# Many Artists

*This model accepts additional fields of type unknown.*

## Structure

`ManyArtists`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `artists` | [`ArtistObject[]`](../../doc/models/artist-object.md) | Required | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ManyArtists } from 'spotify-web-apilib';

const manyArtists: ManyArtists = {
  artists: [
    {
      externalUrls: {
        spotify: 'spotify6',
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      followers: {
        href: 'href0',
        total: 82,
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      genres: [
        'Prog rock',
        'Grunge'
      ],
      href: 'href2',
      id: 'id0',
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

