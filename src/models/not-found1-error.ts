import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorObjectSchema, type ErrorObject } from "./error-object.js";

export type NotFound1Error = {
  error: ErrorObject;
};

export const notFound1ErrorSchema: Schema<NotFound1Error> = s.object<NotFound1Error>({
  error: errorObjectSchema,
});
