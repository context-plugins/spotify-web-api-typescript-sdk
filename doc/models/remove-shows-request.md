
# Remove Shows Request

*This model accepts additional fields of type unknown.*

## Structure

`RemoveShowsRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `ids` | `string[] \| undefined` | Optional | A JSON array of the [Spotify IDs](https://developer.spotify.comhttps://developer.spotify.com/documentation/web-api/#spotify-uris-and-ids).  <br>A maximum of 50 items can be specified in one request. *Note: if the `ids` parameter is present in the query string, any IDs listed here in the body will be ignored.* |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { RemoveShowsRequest } from 'spotify-web-apilib';

const removeShowsRequest: RemoveShowsRequest = {
  ids: [
    'ids1'
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

