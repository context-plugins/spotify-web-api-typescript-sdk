import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ExternalUrlObject = {
  spotify?: string;
};

export const externalUrlObjectSchema: Schema<ExternalUrlObject> = s.object<ExternalUrlObject>({
  spotify: s.optional(s.string()),
});
