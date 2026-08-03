
# Save Episodes Request

*This model accepts additional fields of type unknown.*

## Structure

`SaveEpisodesRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `ids` | `string[]` | Required | A JSON array of the [Spotify IDs](https://developer.spotify.com/documentation/web-api/concepts/spotify-uris-ids). <br/>A maximum of 50 items can be specified in one request. _**Note**: if the `ids` parameter is present in the query string, any IDs listed here in the body will be ignored._ |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { SaveEpisodesRequest } from 'spotify-web-apilib';

const saveEpisodesRequest: SaveEpisodesRequest = {
  ids: [
    'ids9',
    'ids0'
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

