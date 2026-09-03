import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SaveEpisodesRequest = {
  ids: string[];
};

export const saveEpisodesRequestSchema: Schema<SaveEpisodesRequest> = s.object<SaveEpisodesRequest>({
  ids: s.array(s.string()),
});
