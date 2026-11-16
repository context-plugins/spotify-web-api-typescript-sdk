import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PlaylistsRequest = {
  /** The new name for the playlist, for example `"My New Playlist Title"` */
  name?: string;
  /** If `true` the playlist will be public, if `false` it will be private. */
  public?: boolean;
  /**
   * If `true`, the playlist will become collaborative and other users will be able to modify the
   * playlist in their Spotify client. <br/> _**Note**: You can only set `collaborative` to `true`
   * on non-public playlists._
   */
  collaborative?: boolean;
  /** Value for playlist description as displayed in Spotify Clients and in the Web API. */
  description?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const playlistsRequestSchema: Schema<PlaylistsRequest> = s.object<PlaylistsRequest>(
  {
    name: s.optional(s.string()),
    public: s.optional(s.boolean()),
    collaborative: s.optional(s.boolean()),
    description: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
