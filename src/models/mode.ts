import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Mode = {
  _Minus1: -1,
  _0: 0,
  _1: 1,
} as const;
export type Mode = (typeof Mode)[keyof typeof Mode] | (number & {});

export const modeSchema: EnumSchema<Mode> = s.enumOf<Mode>(Mode);
