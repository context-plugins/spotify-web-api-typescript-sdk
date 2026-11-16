import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { deviceObjectInternalSchema, deviceObjectSchema, type DeviceObject } from "./device-object.js";

export type ManyDevices = {
  devices: DeviceObject[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const manyDevicesProperties: s.Shape<ManyDevices> = {
  devices: s.array(s.lazy(() => deviceObjectInternalSchema)),
};

export const manyDevicesInternalSchema: Schema<ManyDevices> = s.object<ManyDevices>(manyDevicesProperties, {
  additionalProperties: s.json(),
});

export const manyDevicesSchema: Schema<ManyDevices> = s.lazySchema(() =>
  s.object<ManyDevices>(
    {
      ...manyDevicesProperties,
      devices: s.array(s.lazy(() => deviceObjectSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
