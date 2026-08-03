
# Many Devices

*This model accepts additional fields of type unknown.*

## Structure

`ManyDevices`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `devices` | [`DeviceObject[]`](../../doc/models/device-object.md) | Required | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ManyDevices } from 'spotify-web-apilib';

const manyDevices: ManyDevices = {
  devices: [
    {
      id: 'id4',
      isActive: false,
      isPrivateSession: false,
      isRestricted: false,
      name: 'Kitchen speaker',
      type: 'computer',
      volumePercent: 59,
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

