
# Markets

*This model accepts additional fields of type unknown.*

## Structure

`Markets`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `markets` | `string[] \| undefined` | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Markets } from 'spotify-web-apilib';

const markets: Markets = {
  markets: [
    'CA',
    'BR',
    'IT'
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

