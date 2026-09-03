import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UsersPlaylistsRequest = {
  name: string;
  public?: boolean;
  collaborative?: boolean;
  description?: string;
};

export const usersPlaylistsRequestSchema: Schema<UsersPlaylistsRequest> = s.object<UsersPlaylistsRequest>({
  name: s.string(),
  public: s.optional(s.boolean()),
  collaborative: s.optional(s.boolean()),
  description: s.optional(s.string()),
});
