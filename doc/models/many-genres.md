
# Many Genres

*This model accepts additional fields of type unknown.*

## Structure

`ManyGenres`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `genres` | `string[]` | Required | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ManyGenres } from 'spotify-web-apilib';

const manyGenres: ManyGenres = {
  genres: [
    'alternative',
    'samba'
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

