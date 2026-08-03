
# Follow Artists or Users Request

*This model accepts additional fields of type unknown.*

## Structure

`FollowArtistsOrUsersRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `ids` | `string[]` | Required | A JSON array of the artist or user [Spotify IDs](https://developer.spotify.com/documentation/web-api/concepts/spotify-uris-ids).<br>For example: `{ids:["74ASZWbe4lXaubB36ztrGX", "08td7MxkoHQkXnWAYD8d6Q"]}`. A maximum of 50 IDs can be sent in one request. _**Note**: if the `ids` parameter is present in the query string, any IDs listed here in the body will be ignored._ |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { FollowArtistsOrUsersRequest } from 'spotify-web-apilib';

const followArtistsOrUsersRequest: FollowArtistsOrUsersRequest = {
  ids: [
    'ids1',
    'ids2'
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

