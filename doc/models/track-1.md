
# Track 1

*This model accepts additional fields of type unknown.*

## Structure

`Track1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `uri` | `string \| undefined` | Optional | Spotify URI |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Track1 } from 'spotify-web-apilib';

const track1: Track1 = {
  uri: 'uri0',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

