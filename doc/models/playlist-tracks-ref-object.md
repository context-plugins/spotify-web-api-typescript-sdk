
# Playlist Tracks Ref Object

*This model accepts additional fields of type unknown.*

## Structure

`PlaylistTracksRefObject`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `href` | `string \| undefined` | Optional | A link to the Web API endpoint where full details of the playlist's tracks can be retrieved. |
| `total` | `number \| undefined` | Optional | Number of tracks in the playlist. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { PlaylistTracksRefObject } from 'spotify-web-apilib';

const playlistTracksRefObject: PlaylistTracksRefObject = {
  href: 'href6',
  total: 80,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

