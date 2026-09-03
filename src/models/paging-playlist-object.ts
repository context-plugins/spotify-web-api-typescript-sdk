import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  simplifiedPlaylistObjectSchema,
  type SimplifiedPlaylistObject,
} from "./simplified-playlist-object.js";

export type PagingPlaylistObject = {
  href: string;
  limit: number;
  next: string | null;
  offset: number;
  previous: string | null;
  total: number;
  items: SimplifiedPlaylistObject[];
};

export const pagingPlaylistObjectSchema: Schema<PagingPlaylistObject> = s.object<PagingPlaylistObject>({
  href: s.string(),
  limit: s.number(),
  next: s.nullable(s.string()),
  offset: s.number(),
  previous: s.nullable(s.string()),
  total: s.number(),
  items: s.array(s.lazy(() => simplifiedPlaylistObjectSchema)),
});
