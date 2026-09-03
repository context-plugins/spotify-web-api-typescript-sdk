import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SaveShowsRequest = {
  ids?: string[];
};

export const saveShowsRequestSchema: Schema<SaveShowsRequest> = s.object<SaveShowsRequest>({
  ids: s.optional(s.array(s.string())),
});
