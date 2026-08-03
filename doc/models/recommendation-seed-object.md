
# Recommendation Seed Object

*This model accepts additional fields of type unknown.*

## Structure

`RecommendationSeedObject`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `afterFilteringSize` | `number \| undefined` | Optional | The number of tracks available after min\_\* and max\_\* filters have been applied. |
| `afterRelinkingSize` | `number \| undefined` | Optional | The number of tracks available after relinking for regional availability. |
| `href` | `string \| undefined` | Optional | A link to the full track or artist data for this seed. For tracks this will be a link to a Track Object. For artists a link to an Artist Object. For genre seeds, this value will be `null`. |
| `id` | `string \| undefined` | Optional | The id used to select this seed. This will be the same as the string used in the `seed_artists`, `seed_tracks` or `seed_genres` parameter. |
| `initialPoolSize` | `number \| undefined` | Optional | The number of recommended tracks available for this seed. |
| `type` | `string \| undefined` | Optional | The entity type of this seed. One of `artist`, `track` or `genre`. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { RecommendationSeedObject } from 'spotify-web-apilib';

const recommendationSeedObject: RecommendationSeedObject = {
  afterFilteringSize: 118,
  afterRelinkingSize: 194,
  href: 'href0',
  id: 'id8',
  initialPoolSize: 124,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

