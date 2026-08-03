
# Playlists Tracks Request 2

*This model accepts additional fields of type unknown.*

## Structure

`PlaylistsTracksRequest2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `tracks` | [`Track1[]`](../../doc/models/track-1.md) | Required | An array of objects containing [Spotify URIs](https://developer.spotify.com/documentation/web-api/concepts/spotify-uris-ids) of the tracks or episodes to remove.<br>For example: `{ "tracks": [{ "uri": "spotify:track:4iV5W9uYEdYUVa79Axb7Rh" },{ "uri": "spotify:track:1301WleyT98MSxVHPZCA6M" }] }`. A maximum of 100 objects can be sent at once. |
| `snapshotId` | `string \| undefined` | Optional | The playlist's snapshot ID against which you want to make the changes.<br>The API will validate that the specified items exist and in the specified positions and make the changes,<br>even if more recent changes have been made to the playlist. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { PlaylistsTracksRequest2 } from 'spotify-web-apilib';

const playlistsTracksRequest2: PlaylistsTracksRequest2 = {
  tracks: [
    {
      uri: 'uri8',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  snapshotId: 'snapshot_id8',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

