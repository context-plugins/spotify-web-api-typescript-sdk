import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { errorObjectInternalSchema, errorObjectSchema, type ErrorObject } from "./error-object.js";

export type BadRequest1 = {
  error: ErrorObject;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const badRequest1Properties: s.Shape<BadRequest1> = {
  error: errorObjectInternalSchema,
};

export const badRequest1InternalSchema: Schema<BadRequest1> = s.object<BadRequest1>(badRequest1Properties, {
  additionalProperties: s.json(),
});

export const badRequest1Schema: Schema<BadRequest1> = s.lazySchema(() =>
  s.object<BadRequest1>(
    {
      ...badRequest1Properties,
      error: errorObjectSchema,
    },
    { additionalProperties: s.json() },
  ),
);
