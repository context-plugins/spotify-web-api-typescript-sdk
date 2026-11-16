import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { errorObjectInternalSchema, errorObjectSchema, type ErrorObject } from "./error-object.js";

export type NotFound1Error = {
  error: ErrorObject;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const notFound1ErrorProperties: s.Shape<NotFound1Error> = {
  error: errorObjectInternalSchema,
};

export const notFound1ErrorInternalSchema: Schema<NotFound1Error> = s.object<NotFound1Error>(
  notFound1ErrorProperties,
  { additionalProperties: s.json() },
);

export const notFound1ErrorSchema: Schema<NotFound1Error> = s.lazySchema(() =>
  s.object<NotFound1Error>(
    {
      ...notFound1ErrorProperties,
      error: errorObjectSchema,
    },
    { additionalProperties: s.json() },
  ),
);
