import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { cursorPagedArtistsSchema, type CursorPagedArtists } from "../models/cursor-paged-artists.js";
import {
  followArtistsOrUsersRequestSchema,
  type FollowArtistsOrUsersRequest,
} from "../models/follow-artists-or-users-request.js";
import { forbidden1InternalSchema, type Forbidden1 } from "../models/forbidden1.js";
import { itemType1Schema, type ItemType1 } from "../models/item-type1.js";
import { itemType2Schema, type ItemType2 } from "../models/item-type2.js";
import { itemType3Schema, type ItemType3 } from "../models/item-type3.js";
import { pagingArtistObjectSchema, type PagingArtistObject } from "../models/paging-artist-object.js";
import { pagingPlaylistObjectSchema, type PagingPlaylistObject } from "../models/paging-playlist-object.js";
import { pagingTrackObjectSchema, type PagingTrackObject } from "../models/paging-track-object.js";
import {
  playlistsFollowersRequestSchema,
  type PlaylistsFollowersRequest,
} from "../models/playlists-followers-request.js";
import { privateUserObjectSchema, type PrivateUserObject } from "../models/private-user-object.js";
import { publicUserObjectSchema, type PublicUserObject } from "../models/public-user-object.js";
import { tooManyRequests1InternalSchema, type TooManyRequests1 } from "../models/too-many-requests1.js";
import { unauthorized1InternalSchema, type Unauthorized1 } from "../models/unauthorized1.js";
import {
  unfollowArtistsOrUsersRequestSchema,
  type UnfollowArtistsOrUsersRequest,
} from "../models/unfollow-artists-or-users-request.js";
import type { Servers } from "../servers.js";

export class Users {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * check-current-user-follows
   *
   * @remarks
   * Check to see if the current user is following one or more artists or other Spotify users.
   *
   * @returns Array of booleans
   *
   * @throws {@link Users.CheckCurrentUserFollowsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SpotifyWebApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  checkCurrentUserFollows(
    request: Users.CheckCurrentUserFollowsRequest,
    options?: RequestOptions,
  ): ApiPromise<boolean[], Users.CheckCurrentUserFollowsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/me/following/contains"),
        auth: this.#auth.oauth20,
        pathParams: [],
        query: [
          { name: "type", value: request.type, schema: itemType3Schema },
          { name: "ids", value: request.ids, schema: s.string() },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.boolean()) },
        errorFactory: Users.CheckCurrentUserFollowsError,
      },
      options,
    );
  }

  /**
   * check-if-user-follows-playlist
   *
   * @remarks
   * Check to see if one or more Spotify users are following a specified playlist.
   *
   * @returns Array of booleans
   *
   * @throws {@link Users.CheckIfUserFollowsPlaylistError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link SpotifyWebApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  checkIfUserFollowsPlaylist(
    request: Users.CheckIfUserFollowsPlaylistRequest,
    options?: RequestOptions,
  ): ApiPromise<boolean[], Users.CheckIfUserFollowsPlaylistError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/playlists/{playlist_id}/followers/contains"),
        auth: this.#auth.oauth20,
        pathParams: [{ name: "playlist_id", value: request.playlistId, schema: s.string() }],
        query: [{ name: "ids", value: request.ids, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.boolean()) },
        errorFactory: Users.CheckIfUserFollowsPlaylistError,
      },
      options,
    );
  }

  /**
   * follow-artists-users
   *
   * @remarks
   * Add the current user as a follower of one or more artists or other Spotify users.
   *
   * @returns Artist or user followed
   *
   * @throws {@link Users.FollowArtistsUsersError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SpotifyWebApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  followArtistsUsers(
    request: Users.FollowArtistsUsersRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Users.FollowArtistsUsersError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/me/following"),
        auth: this.#auth.oauth20,
        pathParams: [],
        query: [
          { name: "type", value: request.type, schema: itemType2Schema },
          { name: "ids", value: request.ids, schema: s.string() },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => followArtistsOrUsersRequestSchema)),
        },
      },
      {
        success: { kind: "empty" },
        errorFactory: Users.FollowArtistsUsersError,
      },
      options,
    );
  }

  /**
   * follow-playlist
   *
   * @remarks
   * Add the current user as a follower of a playlist.
   *
   * @returns Playlist followed
   *
   * @throws {@link Users.FollowPlaylistError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link SpotifyWebApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  followPlaylist(
    request: Users.FollowPlaylistRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Users.FollowPlaylistError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/playlists/{playlist_id}/followers"),
        auth: this.#auth.oauth20,
        pathParams: [{ name: "playlist_id", value: request.playlistId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => playlistsFollowersRequestSchema)),
        },
      },
      {
        success: { kind: "empty" },
        errorFactory: Users.FollowPlaylistError,
      },
      options,
    );
  }

  /**
   * get-current-users-profile
   *
   * @remarks
   * Get detailed profile information about the current user (including the current user's
   * username).
   *
   * @returns A user
   *
   * @throws {@link Users.GetCurrentUsersProfileError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SpotifyWebApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCurrentUsersProfile(
    options?: RequestOptions,
  ): ApiPromise<PrivateUserObject, Users.GetCurrentUsersProfileError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/me"),
        auth: this.#auth.oauth20,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: privateUserObjectSchema },
        errorFactory: Users.GetCurrentUsersProfileError,
      },
      options,
    );
  }

  /**
   * get-followed
   *
   * @remarks
   * Get the current user's followed artists.
   *
   * @returns A paged set of artists
   *
   * @throws {@link Users.GetFollowedError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link SpotifyWebApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getFollowed(
    request: Users.GetFollowedRequest,
    options?: RequestOptions,
  ): ApiPromise<CursorPagedArtists, Users.GetFollowedError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/me/following"),
        auth: this.#auth.oauth20,
        pathParams: [],
        query: [
          { name: "type", value: request.type, schema: itemType1Schema },
          { name: "after", value: request.after, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 20) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: cursorPagedArtistsSchema },
        errorFactory: Users.GetFollowedError,
      },
      options,
    );
  }

  /**
   * get-list-users-playlists
   *
   * @remarks
   * Get a list of the playlists owned or followed by a Spotify user.
   *
   * @returns A paged set of playlists
   *
   * @throws {@link Users.GetListUsersPlaylistsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SpotifyWebApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getListUsersPlaylists(
    request: Users.GetListUsersPlaylistsRequest,
    options?: RequestOptions,
  ): ApiPromise<PagingPlaylistObject, Users.GetListUsersPlaylistsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/users/{user_id}/playlists"),
        auth: this.#auth.oauth20,
        pathParams: [{ name: "user_id", value: request.userId, schema: s.string() }],
        query: [
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 20) },
          { name: "offset", value: request.offset, schema: s.defaulted(s.int(), 0) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: pagingPlaylistObjectSchema },
        errorFactory: Users.GetListUsersPlaylistsError,
      },
      options,
    );
  }

  /**
   * get-users-profile
   *
   * @remarks
   * Get public profile information about a Spotify user.
   *
   * @returns A user
   *
   * @throws {@link Users.GetUsersProfileError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link SpotifyWebApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getUsersProfile(
    request: Users.GetUsersProfileRequest,
    options?: RequestOptions,
  ): ApiPromise<PublicUserObject, Users.GetUsersProfileError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/users/{user_id}"),
        auth: this.#auth.oauth20,
        pathParams: [{ name: "user_id", value: request.userId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: publicUserObjectSchema },
        errorFactory: Users.GetUsersProfileError,
      },
      options,
    );
  }

  /**
   * get-users-top-artists
   *
   * @remarks
   * Get the current user's top artists based on calculated affinity.
   *
   * @returns Pages of artists
   *
   * @throws {@link Users.GetUsersTopArtistsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SpotifyWebApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getUsersTopArtists(
    request: Users.GetUsersTopArtistsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<PagingArtistObject, Users.GetUsersTopArtistsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/me/top/artists"),
        auth: this.#auth.oauth20,
        pathParams: [],
        query: [
          { name: "time_range", value: request.timeRange, schema: s.defaulted(s.string(), "medium_term") },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 20) },
          { name: "offset", value: request.offset, schema: s.defaulted(s.int(), 0) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: pagingArtistObjectSchema },
        errorFactory: Users.GetUsersTopArtistsError,
      },
      options,
    );
  }

  /**
   * get-users-top-tracks
   *
   * @remarks
   * Get the current user's top tracks based on calculated affinity.
   *
   * @returns Pages of tracks
   *
   * @throws {@link Users.GetUsersTopTracksError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link SpotifyWebApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getUsersTopTracks(
    request: Users.GetUsersTopTracksRequest = {},
    options?: RequestOptions,
  ): ApiPromise<PagingTrackObject, Users.GetUsersTopTracksError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/me/top/tracks"),
        auth: this.#auth.oauth20,
        pathParams: [],
        query: [
          { name: "time_range", value: request.timeRange, schema: s.defaulted(s.string(), "medium_term") },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 20) },
          { name: "offset", value: request.offset, schema: s.defaulted(s.int(), 0) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: pagingTrackObjectSchema },
        errorFactory: Users.GetUsersTopTracksError,
      },
      options,
    );
  }

  /**
   * unfollow-artists-users
   *
   * @remarks
   * Remove the current user as a follower of one or more artists or other Spotify users.
   *
   * @returns Artist or user unfollowed
   *
   * @throws {@link Users.UnfollowArtistsUsersError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SpotifyWebApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  unfollowArtistsUsers(
    request: Users.UnfollowArtistsUsersRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Users.UnfollowArtistsUsersError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/me/following"),
        auth: this.#auth.oauth20,
        pathParams: [],
        query: [
          { name: "type", value: request.type, schema: itemType3Schema },
          { name: "ids", value: request.ids, schema: s.string() },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => unfollowArtistsOrUsersRequestSchema)),
        },
      },
      {
        success: { kind: "empty" },
        errorFactory: Users.UnfollowArtistsUsersError,
      },
      options,
    );
  }

  /**
   * unfollow-playlist
   *
   * @remarks
   * Remove the current user as a follower of a playlist.
   *
   * @returns Playlist unfollowed
   *
   * @throws {@link Users.UnfollowPlaylistError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link SpotifyWebApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  unfollowPlaylist(
    request: Users.UnfollowPlaylistRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Users.UnfollowPlaylistError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/playlists/{playlist_id}/followers"),
        auth: this.#auth.oauth20,
        pathParams: [{ name: "playlist_id", value: request.playlistId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Users.UnfollowPlaylistError,
      },
      options,
    );
  }
}

export namespace Users {
  export type CheckCurrentUserFollowsRequest = {
    type: ItemType3;
    ids: string;
  };

  export class CheckCurrentUserFollowsError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorized1", Unauthorized1>
      | Declared<"forbidden1", Forbidden1>
      | Declared<"tooManyRequests1", TooManyRequests1>
      | Undeclared;

    static readonly errors: ErrorDecoders<CheckCurrentUserFollowsError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1InternalSchema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1InternalSchema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1InternalSchema } },
    ];
  }

  export type CheckIfUserFollowsPlaylistRequest = {
    playlistId: string;
    ids: string;
  };

  export class CheckIfUserFollowsPlaylistError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorized1", Unauthorized1>
      | Declared<"forbidden1", Forbidden1>
      | Declared<"tooManyRequests1", TooManyRequests1>
      | Undeclared;

    static readonly errors: ErrorDecoders<CheckIfUserFollowsPlaylistError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1InternalSchema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1InternalSchema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1InternalSchema } },
    ];
  }

  export type FollowArtistsUsersRequest = {
    type: ItemType2;
    ids: string;
    body?: FollowArtistsOrUsersRequest;
  };

  export class FollowArtistsUsersError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorized1", Unauthorized1>
      | Declared<"forbidden1", Forbidden1>
      | Declared<"tooManyRequests1", TooManyRequests1>
      | Undeclared;

    static readonly errors: ErrorDecoders<FollowArtistsUsersError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1InternalSchema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1InternalSchema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1InternalSchema } },
    ];
  }

  export type FollowPlaylistRequest = {
    playlistId: string;
    body?: PlaylistsFollowersRequest;
  };

  export class FollowPlaylistError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorized1", Unauthorized1>
      | Declared<"forbidden1", Forbidden1>
      | Declared<"tooManyRequests1", TooManyRequests1>
      | Undeclared;

    static readonly errors: ErrorDecoders<FollowPlaylistError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1InternalSchema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1InternalSchema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1InternalSchema } },
    ];
  }

  export class GetCurrentUsersProfileError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorized1", Unauthorized1>
      | Declared<"forbidden1", Forbidden1>
      | Declared<"tooManyRequests1", TooManyRequests1>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetCurrentUsersProfileError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1InternalSchema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1InternalSchema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1InternalSchema } },
    ];
  }

  export type GetFollowedRequest = {
    type: ItemType1;
    after?: string;
    /** @default 20 */
    limit?: number;
  };

  export const getFollowedRequestSchema: Schema<GetFollowedRequest> = s.lazySchema(() =>
    s.object<GetFollowedRequest>({
      type: itemType1Schema,
      after: s.optional(s.string()),
      limit: s.defaulted(s.int().check(s.gte(1), s.lte(50)), 20),
    }),
  );

  export class GetFollowedError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorized1", Unauthorized1>
      | Declared<"forbidden1", Forbidden1>
      | Declared<"tooManyRequests1", TooManyRequests1>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetFollowedError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1InternalSchema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1InternalSchema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1InternalSchema } },
    ];
  }

  export type GetListUsersPlaylistsRequest = {
    userId: string;
    /** @default 20 */
    limit?: number;
    /** @default 0 */
    offset?: number;
  };

  export const getListUsersPlaylistsRequestSchema: Schema<GetListUsersPlaylistsRequest> = s.lazySchema(() =>
    s.object<GetListUsersPlaylistsRequest>({
      userId: s.string(),
      limit: s.defaulted(s.int().check(s.gte(1), s.lte(50)), 20),
      offset: s.defaulted(s.int(), 0),
    }),
  );

  export class GetListUsersPlaylistsError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorized1", Unauthorized1>
      | Declared<"forbidden1", Forbidden1>
      | Declared<"tooManyRequests1", TooManyRequests1>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetListUsersPlaylistsError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1InternalSchema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1InternalSchema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1InternalSchema } },
    ];
  }

  export type GetUsersProfileRequest = {
    userId: string;
  };

  export class GetUsersProfileError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorized1", Unauthorized1>
      | Declared<"forbidden1", Forbidden1>
      | Declared<"tooManyRequests1", TooManyRequests1>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetUsersProfileError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1InternalSchema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1InternalSchema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1InternalSchema } },
    ];
  }

  export type GetUsersTopArtistsRequest = {
    /** @default "medium_term" */
    timeRange?: string;
    /** @default 20 */
    limit?: number;
    /** @default 0 */
    offset?: number;
  };

  export const getUsersTopArtistsRequestSchema: Schema<GetUsersTopArtistsRequest> = s.lazySchema(() =>
    s.object<GetUsersTopArtistsRequest>({
      timeRange: s.defaulted(s.string(), "medium_term"),
      limit: s.defaulted(s.int().check(s.gte(1), s.lte(50)), 20),
      offset: s.defaulted(s.int(), 0),
    }),
  );

  export class GetUsersTopArtistsError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorized1", Unauthorized1>
      | Declared<"forbidden1", Forbidden1>
      | Declared<"tooManyRequests1", TooManyRequests1>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetUsersTopArtistsError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1InternalSchema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1InternalSchema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1InternalSchema } },
    ];
  }

  export type GetUsersTopTracksRequest = {
    /** @default "medium_term" */
    timeRange?: string;
    /** @default 20 */
    limit?: number;
    /** @default 0 */
    offset?: number;
  };

  export const getUsersTopTracksRequestSchema: Schema<GetUsersTopTracksRequest> = s.lazySchema(() =>
    s.object<GetUsersTopTracksRequest>({
      timeRange: s.defaulted(s.string(), "medium_term"),
      limit: s.defaulted(s.int().check(s.gte(1), s.lte(50)), 20),
      offset: s.defaulted(s.int(), 0),
    }),
  );

  export class GetUsersTopTracksError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorized1", Unauthorized1>
      | Declared<"forbidden1", Forbidden1>
      | Declared<"tooManyRequests1", TooManyRequests1>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetUsersTopTracksError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1InternalSchema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1InternalSchema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1InternalSchema } },
    ];
  }

  export type UnfollowArtistsUsersRequest = {
    type: ItemType3;
    ids: string;
    body?: UnfollowArtistsOrUsersRequest;
  };

  export class UnfollowArtistsUsersError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorized1", Unauthorized1>
      | Declared<"forbidden1", Forbidden1>
      | Declared<"tooManyRequests1", TooManyRequests1>
      | Undeclared;

    static readonly errors: ErrorDecoders<UnfollowArtistsUsersError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1InternalSchema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1InternalSchema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1InternalSchema } },
    ];
  }

  export type UnfollowPlaylistRequest = {
    playlistId: string;
  };

  export class UnfollowPlaylistError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorized1", Unauthorized1>
      | Declared<"forbidden1", Forbidden1>
      | Declared<"tooManyRequests1", TooManyRequests1>
      | Undeclared;

    static readonly errors: ErrorDecoders<UnfollowPlaylistError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1InternalSchema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1InternalSchema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1InternalSchema } },
    ];
  }
}
