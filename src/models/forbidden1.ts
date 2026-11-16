import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { errorObjectInternalSchema, errorObjectSchema, type ErrorObject } from "./error-object.js";

export type Forbidden1 = {
  error: ErrorObject;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const forbidden1Properties: s.Shape<Forbidden1> = {
  error: errorObjectInternalSchema,
};

export const forbidden1InternalSchema: Schema<Forbidden1> = s.object<Forbidden1>(forbidden1Properties, {
  additionalProperties: s.json(),
});

export const forbidden1Schema: Schema<Forbidden1> = s.lazySchema(() =>
  s.object<Forbidden1>(
    {
      ...forbidden1Properties,
      error: errorObjectSchema,
    },
    { additionalProperties: s.json() },
  ),
);
