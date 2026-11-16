import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { errorObjectInternalSchema, errorObjectSchema, type ErrorObject } from "./error-object.js";

export type BadRequest1Error = {
  error: ErrorObject;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const badRequest1ErrorProperties: s.Shape<BadRequest1Error> = {
  error: errorObjectInternalSchema,
};

export const badRequest1ErrorInternalSchema: Schema<BadRequest1Error> = s.object<BadRequest1Error>(
  badRequest1ErrorProperties,
  { additionalProperties: s.json() },
);

export const badRequest1ErrorSchema: Schema<BadRequest1Error> = s.lazySchema(() =>
  s.object<BadRequest1Error>(
    {
      ...badRequest1ErrorProperties,
      error: errorObjectSchema,
    },
    { additionalProperties: s.json() },
  ),
);
