import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type RemoveEpisodesRequest = {
  ids?: string[];
};

export const removeEpisodesRequestSchema: Schema<RemoveEpisodesRequest> = s.object<RemoveEpisodesRequest>({
  ids: s.optional(s.array(s.string())),
});
