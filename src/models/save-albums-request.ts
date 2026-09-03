import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SaveAlbumsRequest = {
  ids?: string[];
};

export const saveAlbumsRequestSchema: Schema<SaveAlbumsRequest> = s.object<SaveAlbumsRequest>({
  ids: s.optional(s.array(s.string())),
});
