import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { track1Schema, type Track1 } from "./track1.js";

export type PlaylistsTracksRequest2 = {
  /**
   * An array of objects containing [Spotify
   * URIs](https://developer.spotify.com/documentation/web-api/concepts/spotify-uris-ids) of the
   * tracks or episodes to remove. For example: `{ "tracks": [{ "uri":
   * "spotify:track:4iV5W9uYEdYUVa79Axb7Rh" },{ "uri": "spotify:track:1301WleyT98MSxVHPZCA6M" }] }`.
   * A maximum of 100 objects can be sent at once.
   */
  tracks: Track1[];
  /**
   * The playlist's snapshot ID against which you want to make the changes. The API will validate
   * that the specified items exist and in the specified positions and make the changes, even if
   * more recent changes have been made to the playlist.
   */
  snapshotId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const playlistsTracksRequest2Schema: Schema<PlaylistsTracksRequest2> =
  s.object<PlaylistsTracksRequest2>(
    {
      tracks: s.array(s.lazy(() => track1Schema)),
      snapshotId: s.optional(s.string()),
      _keysMap: {
        snapshotId: "snapshot_id",
      },
    },
    { additionalProperties: s.json() },
  );
