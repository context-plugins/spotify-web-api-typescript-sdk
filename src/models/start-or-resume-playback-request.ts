import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type StartOrResumePlaybackRequest = {
  contextUri?: string;
  uris?: string[];
  offset?: Record<string, unknown>;
  positionMs?: number;
};

export const startOrResumePlaybackRequestSchema: Schema<StartOrResumePlaybackRequest> =
  s.object<StartOrResumePlaybackRequest>({
    contextUri: s.optional(s.string()),
    uris: s.optional(s.array(s.string())),
    offset: s.optional(s.record(s.string(), s.unknown())),
    positionMs: s.optional(s.number()),
    _keysMap: {
      contextUri: "context_uri",
      positionMs: "position_ms",
    },
  });
