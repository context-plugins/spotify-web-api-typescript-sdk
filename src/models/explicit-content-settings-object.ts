import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ExplicitContentSettingsObject = {
  /** When `true`, indicates that explicit content should not be played. */
  filterEnabled?: boolean;
  /**
   * When `true`, indicates that the explicit content setting is locked and can't be changed by the
   * user.
   */
  filterLocked?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const explicitContentSettingsObjectSchema: Schema<ExplicitContentSettingsObject> =
  s.object<ExplicitContentSettingsObject>(
    {
      filterEnabled: s.optional(s.boolean()),
      filterLocked: s.optional(s.boolean()),
      _keysMap: {
        filterEnabled: "filter_enabled",
        filterLocked: "filter_locked",
      },
    },
    { additionalProperties: s.json() },
  );
