
# Currently Playing Context Object

*This model accepts additional fields of type unknown.*

## Structure

`CurrentlyPlayingContextObject`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `device` | [`DeviceObject \| undefined`](../../doc/models/device-object.md) | Optional | - |
| `repeatState` | `string \| undefined` | Optional | off, track, context |
| `shuffleState` | `boolean \| undefined` | Optional | If shuffle is on or off. |
| `context` | [`ContextObject \| undefined`](../../doc/models/context-object.md) | Optional | - |
| `timestamp` | `bigint \| undefined` | Optional | Unix Millisecond Timestamp when data was fetched. |
| `progressMs` | `number \| undefined` | Optional | Progress into the currently playing track or episode. Can be `null`. |
| `isPlaying` | `boolean \| undefined` | Optional | If something is currently playing, return `true`. |
| `item` | [`CurrentlyPlayingContextObjectItem \| undefined`](../../doc/models/containers/currently-playing-context-object-item.md) | Optional | This is a container for one-of cases. |
| `currentlyPlayingType` | `string \| undefined` | Optional | The object type of the currently playing item. Can be one of `track`, `episode`, `ad` or `unknown`. |
| `actions` | [`DisallowsObject \| undefined`](../../doc/models/disallows-object.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { CurrentlyPlayingContextObject } from 'spotify-web-apilib';

const currentlyPlayingContextObject: CurrentlyPlayingContextObject = {
  device: {
    id: 'id6',
    isActive: false,
    isPrivateSession: false,
    isRestricted: false,
    name: 'name6',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  repeatState: 'repeat_state8',
  shuffleState: false,
  context: {
    type: 'type8',
    href: 'href4',
    externalUrls: {
      spotify: 'spotify6',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    uri: 'uri6',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  timestamp: BigInt(48),
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

