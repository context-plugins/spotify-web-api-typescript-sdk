import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { errorObjectInternalSchema, errorObjectSchema, type ErrorObject } from "./error-object.js";

export type Forbidden1Error = {
  error: ErrorObject;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const forbidden1ErrorProperties: s.Shape<Forbidden1Error> = {
  error: errorObjectInternalSchema,
};

export const forbidden1ErrorInternalSchema: Schema<Forbidden1Error> = s.object<Forbidden1Error>(
  forbidden1ErrorProperties,
  { additionalProperties: s.json() },
);

export const forbidden1ErrorSchema: Schema<Forbidden1Error> = s.lazySchema(() =>
  s.object<Forbidden1Error>(
    {
      ...forbidden1ErrorProperties,
      error: errorObjectSchema,
    },
    { additionalProperties: s.json() },
  ),
);
