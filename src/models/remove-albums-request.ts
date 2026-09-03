import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type RemoveAlbumsRequest = {
  ids?: string[];
};

export const removeAlbumsRequestSchema: Schema<RemoveAlbumsRequest> = s.object<RemoveAlbumsRequest>({
  ids: s.optional(s.array(s.string())),
});
