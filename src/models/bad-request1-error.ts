import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorObjectSchema, type ErrorObject } from "./error-object.js";

export type BadRequest1Error = {
  error: ErrorObject;
};

export const badRequest1ErrorSchema: Schema<BadRequest1Error> = s.object<BadRequest1Error>({
  error: errorObjectSchema,
});
