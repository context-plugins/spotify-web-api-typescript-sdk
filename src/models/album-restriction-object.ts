import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { reasonSchema, type Reason } from "./reason.js";

export type AlbumRestrictionObject = {
  reason?: Reason;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const albumRestrictionObjectSchema: Schema<AlbumRestrictionObject> = s.object<AlbumRestrictionObject>(
  {
    reason: s.optional(s.lazy(() => reasonSchema)),
  },
  { additionalProperties: s.json() },
);
