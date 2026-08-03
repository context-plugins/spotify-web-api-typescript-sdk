
# Narrator Object

*This model accepts additional fields of type unknown.*

## Structure

`NarratorObject`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string \| undefined` | Optional | The name of the Narrator. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { NarratorObject } from 'spotify-web-apilib';

const narratorObject: NarratorObject = {
  name: 'name8',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

