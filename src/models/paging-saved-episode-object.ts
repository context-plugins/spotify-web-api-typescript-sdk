import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { savedEpisodeObjectSchema, type SavedEpisodeObject } from "./saved-episode-object.js";

export type PagingSavedEpisodeObject = {
  href: string;
  limit: number;
  next: string | null;
  offset: number;
  previous: string | null;
  total: number;
  items: SavedEpisodeObject[];
};

export const pagingSavedEpisodeObjectSchema: Schema<PagingSavedEpisodeObject> =
  s.object<PagingSavedEpisodeObject>({
    href: s.string(),
    limit: s.number(),
    next: s.nullable(s.string()),
    offset: s.number(),
    previous: s.nullable(s.string()),
    total: s.number(),
    items: s.array(s.lazy(() => savedEpisodeObjectSchema)),
  });
