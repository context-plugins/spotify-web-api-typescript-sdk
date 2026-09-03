import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { episodeBaseSchema, type EpisodeBase } from "./episode-base.js";

export type PagingSimplifiedEpisodeObject = {
  href: string;
  limit: number;
  next: string | null;
  offset: number;
  previous: string | null;
  total: number;
  items: EpisodeBase[];
};

export const pagingSimplifiedEpisodeObjectSchema: Schema<PagingSimplifiedEpisodeObject> =
  s.object<PagingSimplifiedEpisodeObject>({
    href: s.string(),
    limit: s.number(),
    next: s.nullable(s.string()),
    offset: s.number(),
    previous: s.nullable(s.string()),
    total: s.number(),
    items: s.array(s.lazy(() => episodeBaseSchema)),
  });
