
# Playlist Snapshot Id

*This model accepts additional fields of type unknown.*

## Structure

`PlaylistSnapshotId`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `snapshotId` | `string \| undefined` | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { PlaylistSnapshotId } from 'spotify-web-apilib';

const playlistSnapshotId: PlaylistSnapshotId = {
  snapshotId: 'abc',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

