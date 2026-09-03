import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UnfollowArtistsOrUsersRequest = {
  ids?: string[];
};

export const unfollowArtistsOrUsersRequestSchema: Schema<UnfollowArtistsOrUsersRequest> =
  s.object<UnfollowArtistsOrUsersRequest>({
    ids: s.optional(s.array(s.string())),
  });
