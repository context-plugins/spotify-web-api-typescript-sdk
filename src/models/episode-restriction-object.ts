import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type EpisodeRestrictionObject = {
  /**
   * The reason for the restriction. Supported values:
   * - `market` - The content item is not available in the given market.
   * - `product` - The content item is not available for the user's subscription type.
   * - `explicit` - The content item is explicit and the user's account is set to not play explicit
   *   content.
   *
   * Additional reasons may be added in the future. **Note**: If you use this field, make sure that
   * your application safely handles unknown values.
   */
  reason?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const episodeRestrictionObjectSchema: Schema<EpisodeRestrictionObject> =
  s.object<EpisodeRestrictionObject>(
    {
      reason: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
