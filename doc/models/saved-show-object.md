
# Saved Show Object

*This model accepts additional fields of type unknown.*

## Structure

`SavedShowObject`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `addedAt` | `string \| undefined` | Optional | The date and time the show was saved.<br>Timestamps are returned in ISO 8601 format as Coordinated Universal Time (UTC) with a zero offset: YYYY-MM-DDTHH:MM:SSZ.<br>If the time is imprecise (for example, the date/time of an album release), an additional field indicates the precision; see for example, release_date in an album object. |
| `show` | [`ShowBase \| undefined`](../../doc/models/show-base.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { SavedShowObject, Type6 } from 'spotify-web-apilib';

const savedShowObject: SavedShowObject = {
  addedAt: '2016-03-13T12:52:32.123Z',
  show: {
    availableMarkets: [
      'available_markets0',
      'available_markets1',
      'available_markets2'
    ],
    copyrights: [
      {
        text: 'text2',
        type: 'type2',
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      {
        text: 'text2',
        type: 'type2',
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      {
        text: 'text2',
        type: 'type2',
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      }
    ],
    description: 'description4',
    htmlDescription: 'html_description4',
    explicit: false,
    externalUrls: {
      spotify: 'spotify6',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    href: 'href8',
    id: 'id6',
    images: [
      {
        url: 'url6',
        height: 182,
        width: 222,
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      {
        url: 'url6',
        height: 182,
        width: 222,
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      {
        url: 'url6',
        height: 182,
        width: 222,
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      }
    ],
    isExternallyHosted: false,
    languages: [
      'languages7',
      'languages6',
      'languages5'
    ],
    mediaType: 'media_type6',
    name: 'name6',
    publisher: 'publisher6',
    type: Type6.Show,
    uri: 'uri0',
    totalEpisodes: 198,
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

