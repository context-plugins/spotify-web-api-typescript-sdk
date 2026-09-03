import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PlaylistsFollowersRequest = {
  public?: boolean;
};

export const playlistsFollowersRequestSchema: Schema<PlaylistsFollowersRequest> =
  s.object<PlaylistsFollowersRequest>({
    public: s.optional(s.boolean()),
  });
