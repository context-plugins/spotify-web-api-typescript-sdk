import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SaveTracksRequest = {
  ids: string[];
};

export const saveTracksRequestSchema: Schema<SaveTracksRequest> = s.object<SaveTracksRequest>({
  ids: s.array(s.string()),
});
