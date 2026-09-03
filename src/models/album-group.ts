import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const AlbumGroup = {
  Album: "album",
  Single: "single",
  Compilation: "compilation",
  AppearsOn: "appears_on",
} as const;
export type AlbumGroup = (typeof AlbumGroup)[keyof typeof AlbumGroup] | (string & {});

export const albumGroupSchema: EnumSchema<AlbumGroup> = s.enumOf<AlbumGroup>(AlbumGroup);
