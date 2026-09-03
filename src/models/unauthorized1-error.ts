import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorObjectSchema, type ErrorObject } from "./error-object.js";

export type Unauthorized1Error = {
  error: ErrorObject;
};

export const unauthorized1ErrorSchema: Schema<Unauthorized1Error> = s.object<Unauthorized1Error>({
  error: errorObjectSchema,
});
