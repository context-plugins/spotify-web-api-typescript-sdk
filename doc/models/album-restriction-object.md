
# Album Restriction Object

*This model accepts additional fields of type unknown.*

## Structure

`AlbumRestrictionObject`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `reason` | [`Reason \| undefined`](../../doc/models/reason.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { AlbumRestrictionObject, Reason } from 'spotify-web-apilib';

const albumRestrictionObject: AlbumRestrictionObject = {
  reason: Reason.Market,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

