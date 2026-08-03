
# Simplified Artist Object

*This model accepts additional fields of type unknown.*

## Structure

`SimplifiedArtistObject`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `externalUrls` | [`ExternalUrlObject \| undefined`](../../doc/models/external-url-object.md) | Optional | - |
| `href` | `string \| undefined` | Optional | A link to the Web API endpoint providing full details of the artist. |
| `id` | `string \| undefined` | Optional | The [Spotify ID](https://developer.spotify.com/documentation/web-api/concepts/spotify-uris-ids) for the artist. |
| `name` | `string \| undefined` | Optional | The name of the artist. |
| `type` | [`Type \| undefined`](../../doc/models/type.md) | Optional | - |
| `uri` | `string \| undefined` | Optional | The [Spotify URI](https://developer.spotify.com/documentation/web-api/concepts/spotify-uris-ids) for the artist. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { SimplifiedArtistObject, Type } from 'spotify-web-apilib';

const simplifiedArtistObject: SimplifiedArtistObject = {
  externalUrls: {
    spotify: 'spotify6',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  href: 'href6',
  id: 'id4',
  name: 'name4',
  type: Type.Artist,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

