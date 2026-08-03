
# Author Object

*This model accepts additional fields of type unknown.*

## Structure

`AuthorObject`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string \| undefined` | Optional | The name of the author. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { AuthorObject } from 'spotify-web-apilib';

const authorObject: AuthorObject = {
  name: 'name4',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

