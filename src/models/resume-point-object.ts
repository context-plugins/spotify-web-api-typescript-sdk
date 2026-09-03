import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ResumePointObject = {
  fullyPlayed?: boolean;
  resumePositionMs?: number;
};

export const resumePointObjectSchema: Schema<ResumePointObject> = s.object<ResumePointObject>({
  fullyPlayed: s.optional(s.boolean()),
  resumePositionMs: s.optional(s.number()),
  _keysMap: {
    fullyPlayed: "fully_played",
    resumePositionMs: "resume_position_ms",
  },
});
