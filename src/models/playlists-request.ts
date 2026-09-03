import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PlaylistsRequest = {
  name?: string;
  public?: boolean;
  collaborative?: boolean;
  description?: string;
};

export const playlistsRequestSchema: Schema<PlaylistsRequest> = s.object<PlaylistsRequest>({
  name: s.optional(s.string()),
  public: s.optional(s.boolean()),
  collaborative: s.optional(s.boolean()),
  description: s.optional(s.string()),
});
