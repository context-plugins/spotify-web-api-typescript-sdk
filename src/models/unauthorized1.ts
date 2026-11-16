import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { errorObjectInternalSchema, errorObjectSchema, type ErrorObject } from "./error-object.js";

export type Unauthorized1 = {
  error: ErrorObject;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const unauthorized1Properties: s.Shape<Unauthorized1> = {
  error: errorObjectInternalSchema,
};

export const unauthorized1InternalSchema: Schema<Unauthorized1> = s.object<Unauthorized1>(
  unauthorized1Properties,
  { additionalProperties: s.json() },
);

export const unauthorized1Schema: Schema<Unauthorized1> = s.lazySchema(() =>
  s.object<Unauthorized1>(
    {
      ...unauthorized1Properties,
      error: errorObjectSchema,
    },
    { additionalProperties: s.json() },
  ),
);
