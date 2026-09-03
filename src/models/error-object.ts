import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ErrorObject = {
  status: number;
  message: string;
};

export const errorObjectSchema: Schema<ErrorObject> = s.object<ErrorObject>({
  status: s.number(),
  message: s.string(),
});
