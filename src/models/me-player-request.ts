import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MePlayerRequest = {
  deviceIds: string[];
  play?: boolean;
};

export const mePlayerRequestSchema: Schema<MePlayerRequest> = s.object<MePlayerRequest>({
  deviceIds: s.array(s.string()),
  play: s.optional(s.boolean()),
  _keysMap: {
    deviceIds: "device_ids",
  },
});
