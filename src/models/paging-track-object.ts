import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { trackObjectSchema, type TrackObject } from "./track-object.js";

export type PagingTrackObject = {
  href: string;
  limit: number;
  next: string | null;
  offset: number;
  previous: string | null;
  total: number;
  items: TrackObject[];
};

export const pagingTrackObjectSchema: Schema<PagingTrackObject> = s.object<PagingTrackObject>({
  href: s.string(),
  limit: s.number(),
  next: s.nullable(s.string()),
  offset: s.number(),
  previous: s.nullable(s.string()),
  total: s.number(),
  items: s.array(s.lazy(() => trackObjectSchema)),
});
