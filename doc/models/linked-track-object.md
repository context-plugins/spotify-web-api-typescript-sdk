
# Linked Track Object

*This model accepts additional fields of type unknown.*

## Structure

`LinkedTrackObject`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `externalUrls` | [`ExternalUrlObject \| undefined`](../../doc/models/external-url-object.md) | Optional | - |
| `href` | `string \| undefined` | Optional | A link to the Web API endpoint providing full details of the track. |
| `id` | `string \| undefined` | Optional | The [Spotify ID](https://developer.spotify.com/documentation/web-api/concepts/spotify-uris-ids) for the track. |
| `type` | `string \| undefined` | Optional | The object type: "track". |
| `uri` | `string \| undefined` | Optional | The [Spotify URI](https://developer.spotify.com/documentation/web-api/concepts/spotify-uris-ids) for the track. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { LinkedTrackObject } from 'spotify-web-apilib';

const linkedTrackObject: LinkedTrackObject = {
  externalUrls: {
    spotify: 'spotify6',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  href: 'href0',
  id: 'id8',
  type: 'type2',
  uri: 'uri2',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

