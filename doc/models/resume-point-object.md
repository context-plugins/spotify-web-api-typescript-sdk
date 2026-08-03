
# Resume Point Object

*This model accepts additional fields of type unknown.*

## Structure

`ResumePointObject`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `fullyPlayed` | `boolean \| undefined` | Optional | Whether or not the episode has been fully played by the user. |
| `resumePositionMs` | `number \| undefined` | Optional | The user's most recent position in the episode in milliseconds. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ResumePointObject } from 'spotify-web-apilib';

const resumePointObject: ResumePointObject = {
  fullyPlayed: false,
  resumePositionMs: 106,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

