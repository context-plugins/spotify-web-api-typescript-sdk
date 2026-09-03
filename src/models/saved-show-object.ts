import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { showBaseSchema, type ShowBase } from "./show-base.js";

export type SavedShowObject = {
  addedAt?: Date;
  show?: ShowBase;
};

export const savedShowObjectSchema: Schema<SavedShowObject> = s.object<SavedShowObject>({
  addedAt: s.optional(s.dateTime()),
  show: s.optional(s.lazy(() => showBaseSchema)),
  _keysMap: {
    addedAt: "added_at",
  },
});
