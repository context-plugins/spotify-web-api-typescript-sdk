
# Artist Object

*This model accepts additional fields of type unknown.*

## Structure

`ArtistObject`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `externalUrls` | [`ExternalUrlObject \| undefined`](../../doc/models/external-url-object.md) | Optional | - |
| `followers` | [`FollowersObject \| undefined`](../../doc/models/followers-object.md) | Optional | - |
| `genres` | `string[] \| undefined` | Optional | A list of the genres the artist is associated with. If not yet classified, the array is empty. |
| `href` | `string \| undefined` | Optional | A link to the Web API endpoint providing full details of the artist. |
| `id` | `string \| undefined` | Optional | The [Spotify ID](https://developer.spotify.com/documentation/web-api/concepts/spotify-uris-ids) for the artist. |
| `images` | [`ImageObject[] \| undefined`](../../doc/models/image-object.md) | Optional | Images of the artist in various sizes, widest first. |
| `name` | `string \| undefined` | Optional | The name of the artist. |
| `popularity` | `number \| undefined` | Optional | The popularity of the artist. The value will be between 0 and 100, with 100 being the most popular. The artist's popularity is calculated from the popularity of all the artist's tracks. |
| `type` | [`Type \| undefined`](../../doc/models/type.md) | Optional | - |
| `uri` | `string \| undefined` | Optional | The [Spotify URI](https://developer.spotify.com/documentation/web-api/concepts/spotify-uris-ids) for the artist. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ArtistObject } from 'spotify-web-apilib';

const artistObject: ArtistObject = {
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
  href: 'href8',
  id: 'id6',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

