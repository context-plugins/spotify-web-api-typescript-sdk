import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Itemtype = {
  Album: "album",
  Artist: "artist",
  Playlist: "playlist",
  Track: "track",
  Show: "show",
  Episode: "episode",
  Audiobook: "audiobook",
} as const;
export type Itemtype = (typeof Itemtype)[keyof typeof Itemtype] | (string & {});

export const itemtypeSchema: EnumSchema<Itemtype> = s.enumOf<Itemtype>(Itemtype);
