import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { reasonSchema, type Reason } from "./reason.js";

export type AlbumRestrictionObject = {
  reason?: Reason;
};

export const albumRestrictionObjectSchema: Schema<AlbumRestrictionObject> = s.object<AlbumRestrictionObject>({
  reason: s.optional(s.lazy(() => reasonSchema)),
});
