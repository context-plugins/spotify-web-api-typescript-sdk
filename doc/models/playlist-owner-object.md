
# Playlist Owner Object

*This model accepts additional fields of type unknown.*

## Structure

`PlaylistOwnerObject`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `externalUrls` | [`ExternalUrlObject \| undefined`](../../doc/models/external-url-object.md) | Optional | - |
| `followers` | [`FollowersObject \| undefined`](../../doc/models/followers-object.md) | Optional | - |
| `href` | `string \| undefined` | Optional | A link to the Web API endpoint for this user. |
| `id` | `string \| undefined` | Optional | The [Spotify user ID](https://developer.spotify.com/documentation/web-api/concepts/spotify-uris-ids) for this user. |
| `type` | [`Type4 \| undefined`](../../doc/models/type-4.md) | Optional | - |
| `uri` | `string \| undefined` | Optional | The [Spotify URI](https://developer.spotify.com/documentation/web-api/concepts/spotify-uris-ids) for this user. |
| `displayName` | `string \| null \| undefined` | Optional | The name displayed on the user's profile. `null` if not available. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { PlaylistOwnerObject, Type4 } from 'spotify-web-apilib';

const playlistOwnerObject: PlaylistOwnerObject = {
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
  href: 'href6',
  id: 'id4',
  type: Type4.User,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

