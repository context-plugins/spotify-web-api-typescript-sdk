import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { errorObjectInternalSchema, errorObjectSchema, type ErrorObject } from "./error-object.js";

export type TooManyRequests1Error = {
  error: ErrorObject;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const tooManyRequests1ErrorProperties: s.Shape<TooManyRequests1Error> = {
  error: errorObjectInternalSchema,
};

export const tooManyRequests1ErrorInternalSchema: Schema<TooManyRequests1Error> =
  s.object<TooManyRequests1Error>(tooManyRequests1ErrorProperties, { additionalProperties: s.json() });

export const tooManyRequests1ErrorSchema: Schema<TooManyRequests1Error> = s.lazySchema(() =>
  s.object<TooManyRequests1Error>(
    {
      ...tooManyRequests1ErrorProperties,
      error: errorObjectSchema,
    },
    { additionalProperties: s.json() },
  ),
);
