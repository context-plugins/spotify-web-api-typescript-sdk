import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PlaylistTracksRefObject = {
  /**
   * A link to the Web API endpoint where full details of the playlist's tracks can be retrieved.
   */
  href?: string;
  /** Number of tracks in the playlist. */
  total?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const playlistTracksRefObjectSchema: Schema<PlaylistTracksRefObject> =
  s.object<PlaylistTracksRefObject>(
    {
      href: s.optional(s.string()),
      total: s.optional(s.int()),
    },
    { additionalProperties: s.json() },
  );
