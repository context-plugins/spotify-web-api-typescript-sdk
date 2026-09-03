import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorObjectSchema, type ErrorObject } from "./error-object.js";

export type TooManyRequests1Error = {
  error: ErrorObject;
};

export const tooManyRequests1ErrorSchema: Schema<TooManyRequests1Error> = s.object<TooManyRequests1Error>({
  error: errorObjectSchema,
});
