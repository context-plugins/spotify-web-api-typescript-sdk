
# External Url Object

*This model accepts additional fields of type unknown.*

## Structure

`ExternalUrlObject`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `spotify` | `string \| undefined` | Optional | The [Spotify URL](https://developer.spotify.com/documentation/web-api/concepts/spotify-uris-ids) for the object. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ExternalUrlObject } from 'spotify-web-apilib';

const externalUrlObject: ExternalUrlObject = {
  spotify: 'spotify0',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

