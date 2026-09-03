import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ExternalIdObject = {
  isrc?: string;
  ean?: string;
  upc?: string;
};

export const externalIdObjectSchema: Schema<ExternalIdObject> = s.object<ExternalIdObject>({
  isrc: s.optional(s.string()),
  ean: s.optional(s.string()),
  upc: s.optional(s.string()),
});
