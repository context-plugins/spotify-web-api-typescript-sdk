import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FollowArtistsOrUsersRequest = {
  ids: string[];
};

export const followArtistsOrUsersRequestSchema: Schema<FollowArtistsOrUsersRequest> =
  s.object<FollowArtistsOrUsersRequest>({
    ids: s.array(s.string()),
  });
