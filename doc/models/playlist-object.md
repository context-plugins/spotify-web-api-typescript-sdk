
# Playlist Object

*This model accepts additional fields of type unknown.*

## Structure

`PlaylistObject`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `collaborative` | `boolean \| undefined` | Optional | `true` if the owner allows other users to modify the playlist. |
| `description` | `string \| null \| undefined` | Optional | The playlist description. _Only returned for modified, verified playlists, otherwise_ `null`. |
| `externalUrls` | [`ExternalUrlObject \| undefined`](../../doc/models/external-url-object.md) | Optional | - |
| `followers` | [`FollowersObject \| undefined`](../../doc/models/followers-object.md) | Optional | - |
| `href` | `string \| undefined` | Optional | A link to the Web API endpoint providing full details of the playlist. |
| `id` | `string \| undefined` | Optional | The [Spotify ID](https://developer.spotify.com/documentation/web-api/concepts/spotify-uris-ids) for the playlist. |
| `images` | [`ImageObject[] \| undefined`](../../doc/models/image-object.md) | Optional | Images for the playlist. The array may be empty or contain up to three images. The images are returned by size in descending order. See [Working with Playlists](https://developer.spotify.com/documentation/web-api/concepts/playlists). _**Note**: If returned, the source URL for the image (`url`) is temporary and will expire in less than a day._ |
| `name` | `string \| undefined` | Optional | The name of the playlist. |
| `owner` | [`PlaylistOwnerObject \| undefined`](../../doc/models/playlist-owner-object.md) | Optional | - |
| `mPublic` | `boolean \| undefined` | Optional | The playlist's public/private status: `true` the playlist is public, `false` the playlist is private, `null` the playlist status is not relevant. For more about public/private status, see [Working with Playlists](https://developer.spotify.com/documentation/web-api/concepts/playlists) |
| `snapshotId` | `string \| undefined` | Optional | The version identifier for the current playlist. Can be supplied in other requests to target a specific playlist version |
| `tracks` | [`PagingPlaylistTrackObject \| undefined`](../../doc/models/paging-playlist-track-object.md) | Optional | - |
| `type` | `string \| undefined` | Optional | The object type: "playlist" |
| `uri` | `string \| undefined` | Optional | The [Spotify URI](https://developer.spotify.com/documentation/web-api/concepts/spotify-uris-ids) for the playlist. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { PlaylistObject } from 'spotify-web-apilib';

const playlistObject: PlaylistObject = {
  collaborative: false,
  description: 'description6',
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
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

