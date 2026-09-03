import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type RemoveTracksRequest = {
  ids?: string[];
};

export const removeTracksRequestSchema: Schema<RemoveTracksRequest> = s.object<RemoveTracksRequest>({
  ids: s.optional(s.array(s.string())),
});
