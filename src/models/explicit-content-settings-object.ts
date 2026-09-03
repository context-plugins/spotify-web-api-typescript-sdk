import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ExplicitContentSettingsObject = {
  filterEnabled?: boolean;
  filterLocked?: boolean;
};

export const explicitContentSettingsObjectSchema: Schema<ExplicitContentSettingsObject> =
  s.object<ExplicitContentSettingsObject>({
    filterEnabled: s.optional(s.boolean()),
    filterLocked: s.optional(s.boolean()),
    _keysMap: {
      filterEnabled: "filter_enabled",
      filterLocked: "filter_locked",
    },
  });
