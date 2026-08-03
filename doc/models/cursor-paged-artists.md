
# Cursor Paged Artists

*This model accepts additional fields of type unknown.*

## Structure

`CursorPagedArtists`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `artists` | [`CursorPagingSimplifiedArtistObject`](../../doc/models/cursor-paging-simplified-artist-object.md) | Required | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { CursorPagedArtists } from 'spotify-web-apilib';

const cursorPagedArtists: CursorPagedArtists = {
  artists: {
    href: 'href2',
    limit: 214,
    next: 'next2',
    cursors: {
      after: 'after8',
      before: 'before6',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    total: 52,
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

