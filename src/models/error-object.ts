import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ErrorObject = {
  /**
   * The HTTP status code (also returned in the response header; see [Response Status
   * Codes](https://developer.spotify.com/documentation/web-api/concepts/api-calls#response-status-codes)
   * for more information).
   */
  status: number;
  /** A short description of the cause of the error. */
  message: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const errorObjectProperties: s.Shape<ErrorObject> = {
  status: s.int(),
  message: s.string(),
};

export const errorObjectInternalSchema: Schema<ErrorObject> = s.object<ErrorObject>(errorObjectProperties, {
  additionalProperties: s.json(),
});

export const errorObjectSchema: Schema<ErrorObject> = s.lazySchema(() =>
  s.object<ErrorObject>(
    {
      ...errorObjectProperties,
      status: s.int().check(s.gte(400), s.lte(599)),
    },
    { additionalProperties: s.json() },
  ),
);
