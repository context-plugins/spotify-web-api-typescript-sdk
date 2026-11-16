import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { errorObjectInternalSchema, errorObjectSchema, type ErrorObject } from "./error-object.js";

export type NotFound1 = {
  error: ErrorObject;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const notFound1Properties: s.Shape<NotFound1> = {
  error: errorObjectInternalSchema,
};

export const notFound1InternalSchema: Schema<NotFound1> = s.object<NotFound1>(notFound1Properties, {
  additionalProperties: s.json(),
});

export const notFound1Schema: Schema<NotFound1> = s.lazySchema(() =>
  s.object<NotFound1>(
    {
      ...notFound1Properties,
      error: errorObjectSchema,
    },
    { additionalProperties: s.json() },
  ),
);
