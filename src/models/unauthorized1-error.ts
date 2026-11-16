import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { errorObjectInternalSchema, errorObjectSchema, type ErrorObject } from "./error-object.js";

export type Unauthorized1Error = {
  error: ErrorObject;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const unauthorized1ErrorProperties: s.Shape<Unauthorized1Error> = {
  error: errorObjectInternalSchema,
};

export const unauthorized1ErrorInternalSchema: Schema<Unauthorized1Error> = s.object<Unauthorized1Error>(
  unauthorized1ErrorProperties,
  { additionalProperties: s.json() },
);

export const unauthorized1ErrorSchema: Schema<Unauthorized1Error> = s.lazySchema(() =>
  s.object<Unauthorized1Error>(
    {
      ...unauthorized1ErrorProperties,
      error: errorObjectSchema,
    },
    { additionalProperties: s.json() },
  ),
);
