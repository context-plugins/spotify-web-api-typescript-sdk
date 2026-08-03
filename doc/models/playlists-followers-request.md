
# Playlists Followers Request

*This model accepts additional fields of type unknown.*

## Structure

`PlaylistsFollowersRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `mPublic` | `boolean \| undefined` | Optional | Defaults to `true`. If `true` the playlist will be included in user's public playlists, if `false` it will remain private. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { PlaylistsFollowersRequest } from 'spotify-web-apilib';

const playlistsFollowersRequest: PlaylistsFollowersRequest = {
  mPublic: false,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

