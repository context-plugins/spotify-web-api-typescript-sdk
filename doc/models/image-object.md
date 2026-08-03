
# Image Object

*This model accepts additional fields of type unknown.*

## Structure

`ImageObject`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `url` | `string` | Required | The source URL of the image. |
| `height` | `number \| null` | Required | The image height in pixels. |
| `width` | `number \| null` | Required | The image width in pixels. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ImageObject } from 'spotify-web-apilib';

const imageObject: ImageObject = {
  url: 'https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n',
  height: 300,
  width: 300,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

