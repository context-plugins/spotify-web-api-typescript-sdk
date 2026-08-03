
# Unfollow Artists or Users Request

*This model accepts additional fields of type unknown.*

## Structure

`UnfollowArtistsOrUsersRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `ids` | `string[] \| undefined` | Optional | A JSON array of the artist or user [Spotify IDs](https://developer.spotify.com/documentation/web-api/concepts/spotify-uris-ids). For example: `{ids:["74ASZWbe4lXaubB36ztrGX", "08td7MxkoHQkXnWAYD8d6Q"]}`. A maximum of 50 IDs can be sent in one request. _**Note**: if the `ids` parameter is present in the query string, any IDs listed here in the body will be ignored._ |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { UnfollowArtistsOrUsersRequest } from 'spotify-web-apilib';

const unfollowArtistsOrUsersRequest: UnfollowArtistsOrUsersRequest = {
  ids: [
    'ids5',
    'ids6',
    'ids7'
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

