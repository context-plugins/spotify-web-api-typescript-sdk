
# Episode Object

*This model accepts additional fields of type unknown.*

## Structure

`EpisodeObject`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `audioPreviewUrl` | `string \| null` | Required | A URL to a 30 second preview (MP3 format) of the episode. `null` if not available. |
| `description` | `string` | Required | A description of the episode. HTML tags are stripped away from this field, use `html_description` field in case HTML tags are needed. |
| `htmlDescription` | `string` | Required | A description of the episode. This field may contain HTML tags. |
| `durationMs` | `number` | Required | The episode length in milliseconds. |
| `explicit` | `boolean` | Required | Whether or not the episode has explicit content (true = yes it does; false = no it does not OR unknown). |
| `externalUrls` | [`ExternalUrlObject`](../../doc/models/external-url-object.md) | Required | - |
| `href` | `string` | Required | A link to the Web API endpoint providing full details of the episode. |
| `id` | `string` | Required | The [Spotify ID](https://developer.spotify.com/documentation/web-api/concepts/spotify-uris-ids) for the episode. |
| `images` | [`ImageObject[]`](../../doc/models/image-object.md) | Required | The cover art for the episode in various sizes, widest first. |
| `isExternallyHosted` | `boolean` | Required | True if the episode is hosted outside of Spotify's CDN. |
| `isPlayable` | `boolean` | Required | True if the episode is playable in the given market. Otherwise false. |
| `language` | `string \| undefined` | Optional | The language used in the episode, identified by a [ISO 639](https://en.wikipedia.org/wiki/ISO_639) code. This field is deprecated and might be removed in the future. Please use the `languages` field instead. |
| `languages` | `string[]` | Required | A list of the languages used in the episode, identified by their [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639) code. |
| `name` | `string` | Required | The name of the episode. |
| `releaseDate` | `string` | Required | The date the episode was first released, for example `"1981-12-15"`. Depending on the precision, it might be shown as `"1981"` or `"1981-12"`. |
| `releaseDatePrecision` | [`ReleaseDatePrecision`](../../doc/models/release-date-precision.md) | Required | - |
| `resumePoint` | [`ResumePointObject \| undefined`](../../doc/models/resume-point-object.md) | Optional | - |
| `type` | [`Type5`](../../doc/models/type-5.md) | Required | - |
| `uri` | `string` | Required | The [Spotify URI](https://developer.spotify.com/documentation/web-api/concepts/spotify-uris-ids) for the episode. |
| `restrictions` | [`TrackRestrictionObject \| undefined`](../../doc/models/track-restriction-object.md) | Optional | - |
| `show` | [`ShowBase`](../../doc/models/show-base.md) | Required | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  EpisodeObject,
  ReleaseDatePrecision,
  Type5,
  Type6,
} from 'spotify-web-apilib';

const episodeObject: EpisodeObject = {
  audioPreviewUrl: 'https://p.scdn.co/mp3-preview/2f37da1d4221f40b9d1a98cd191f4d6f1646ad17',
  description: 'A Spotify podcast sharing fresh insights on important topics of the moment—in a way only Spotify can. You’ll hear from experts in the music, podcast and tech industries as we discover and uncover stories about our work and the world around us.\n',
  htmlDescription: '<p>A Spotify podcast sharing fresh insights on important topics of the moment—in a way only Spotify can. You’ll hear from experts in the music, podcast and tech industries as we discover and uncover stories about our work and the world around us.</p>\n',
  durationMs: 1686230,
  explicit: false,
  externalUrls: {
    spotify: 'spotify6',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  href: 'https://api.spotify.com/v1/episodes/5Xt5DXGzch68nYYamXrNxZ',
  id: '5Xt5DXGzch68nYYamXrNxZ',
  images: [
    {
      url: 'https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n',
      height: 300,
      width: 300,
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  isExternallyHosted: false,
  isPlayable: false,
  languages: [
    'fr',
    'en'
  ],
  name: 'Starting Your Own Podcast: Tips, Tricks, and Advice From Anchor Creators\n',
  releaseDate: '1981-12-15',
  releaseDatePrecision: ReleaseDatePrecision.Month,
  type: Type5.Episode,
  uri: 'spotify:episode:0zLhl3WsOCQHbe1BPTiHgr',
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
        url: 'https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n',
        height: 300,
        width: 300,
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
  language: 'en',
  resumePoint: {
    fullyPlayed: false,
    resumePositionMs: 254,
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  restrictions: {
    reason: 'reason0',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

