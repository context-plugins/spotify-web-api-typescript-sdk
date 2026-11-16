import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ImageObject = {
  /** The source URL of the image. */
  url: string;
  /** The image height in pixels. */
  height: number | null;
  /** The image width in pixels. */
  width: number | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const imageObjectSchema: Schema<ImageObject> = s.object<ImageObject>(
  {
    url: s.string(),
    height: s.nullable(s.int()),
    width: s.nullable(s.int()),
  },
  { additionalProperties: s.json() },
);
