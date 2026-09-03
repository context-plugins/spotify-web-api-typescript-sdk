import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorObjectSchema, type ErrorObject } from "./error-object.js";

export type Forbidden1Error = {
  error: ErrorObject;
};

export const forbidden1ErrorSchema: Schema<Forbidden1Error> = s.object<Forbidden1Error>({
  error: errorObjectSchema,
});
