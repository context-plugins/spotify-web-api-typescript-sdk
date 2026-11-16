import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { errorObjectInternalSchema, errorObjectSchema, type ErrorObject } from "./error-object.js";

export type TooManyRequests1 = {
  error: ErrorObject;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const tooManyRequests1Properties: s.Shape<TooManyRequests1> = {
  error: errorObjectInternalSchema,
};

export const tooManyRequests1InternalSchema: Schema<TooManyRequests1> = s.object<TooManyRequests1>(
  tooManyRequests1Properties,
  { additionalProperties: s.json() },
);

export const tooManyRequests1Schema: Schema<TooManyRequests1> = s.lazySchema(() =>
  s.object<TooManyRequests1>(
    {
      ...tooManyRequests1Properties,
      error: errorObjectSchema,
    },
    { additionalProperties: s.json() },
  ),
);
