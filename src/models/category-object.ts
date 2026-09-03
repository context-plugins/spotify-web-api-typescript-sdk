import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { imageObjectSchema, type ImageObject } from "./image-object.js";

export type CategoryObject = {
  href: string;
  icons: ImageObject[];
  id: string;
  name: string;
};

export const categoryObjectSchema: Schema<CategoryObject> = s.object<CategoryObject>({
  href: s.string(),
  icons: s.array(s.lazy(() => imageObjectSchema)),
  id: s.string(),
  name: s.string(),
});
