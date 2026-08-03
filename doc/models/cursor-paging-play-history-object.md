
# Cursor Paging Play History Object

*This model accepts additional fields of type unknown.*

## Structure

`CursorPagingPlayHistoryObject`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `href` | `string \| undefined` | Optional | A link to the Web API endpoint returning the full result of the request. |
| `limit` | `number \| undefined` | Optional | The maximum number of items in the response (as set in the query or by default). |
| `next` | `string \| undefined` | Optional | URL to the next page of items. ( `null` if none) |
| `cursors` | [`CursorObject \| undefined`](../../doc/models/cursor-object.md) | Optional | - |
| `total` | `number \| undefined` | Optional | The total number of items available to return. |
| `items` | [`PlayHistoryObject[] \| undefined`](../../doc/models/play-history-object.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { CursorPagingPlayHistoryObject } from 'spotify-web-apilib';

const cursorPagingPlayHistoryObject: CursorPagingPlayHistoryObject = {
  href: 'href2',
  limit: 124,
  next: 'next8',
  cursors: {
    after: 'after8',
    before: 'before6',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  total: 218,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

