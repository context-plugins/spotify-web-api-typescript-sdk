import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type RemoveShowsRequest = {
  ids?: string[];
};

export const removeShowsRequestSchema: Schema<RemoveShowsRequest> = s.object<RemoveShowsRequest>({
  ids: s.optional(s.array(s.string())),
});
