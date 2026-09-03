import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Reason = {
  Market: "market",
  Product: "product",
  Explicit: "explicit",
} as const;
export type Reason = (typeof Reason)[keyof typeof Reason] | (string & {});

export const reasonSchema: EnumSchema<Reason> = s.enumOf<Reason>(Reason);
