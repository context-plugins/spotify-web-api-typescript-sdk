import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FollowersObject = {
  href?: string | null;
  total?: number;
};

export const followersObjectSchema: Schema<FollowersObject> = s.object<FollowersObject>({
  href: s.optionalNullable(s.string()),
  total: s.optional(s.number()),
});
