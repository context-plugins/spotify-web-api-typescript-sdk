import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ImageObject = {
  url: string;
  height: number | null;
  width: number | null;
};

export const imageObjectSchema: Schema<ImageObject> = s.object<ImageObject>({
  url: s.string(),
  height: s.nullable(s.number()),
  width: s.nullable(s.number()),
});
