import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DeviceObject = {
  id?: string | null;
  isActive?: boolean;
  isPrivateSession?: boolean;
  isRestricted?: boolean;
  name?: string;
  type?: string;
  volumePercent?: number | null;
  supportsVolume?: boolean;
};

export const deviceObjectSchema: Schema<DeviceObject> = s.object<DeviceObject>({
  id: s.optionalNullable(s.string()),
  isActive: s.optional(s.boolean()),
  isPrivateSession: s.optional(s.boolean()),
  isRestricted: s.optional(s.boolean()),
  name: s.optional(s.string()),
  type: s.optional(s.string()),
  volumePercent: s.optionalNullable(s.number()),
  supportsVolume: s.optional(s.boolean()),
  _keysMap: {
    isActive: "is_active",
    isPrivateSession: "is_private_session",
    isRestricted: "is_restricted",
    volumePercent: "volume_percent",
    supportsVolume: "supports_volume",
  },
});
