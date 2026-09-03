import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const IncludeExternal = {
  Audio: "audio",
} as const;
export type IncludeExternal = (typeof IncludeExternal)[keyof typeof IncludeExternal] | (string & {});

export const includeExternalSchema: EnumSchema<IncludeExternal> = s.enumOf<IncludeExternal>(IncludeExternal);
