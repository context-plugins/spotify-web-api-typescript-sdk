import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { cursorPagedArtistsSchema, type CursorPagedArtists } from "../models/cursor-paged-artists.js";
import {
  followArtistsOrUsersRequestSchema,
  type FollowArtistsOrUsersRequest,
} from "../models/follow-artists-or-users-request.js";
import { forbidden1Schema, type Forbidden1 } from "../models/forbidden1.js";
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
import { tooManyRequests1Schema, type TooManyRequests1 } from "../models/too-many-requests1.js";
import { unauthorized1Schema, type Unauthorized1 } from "../models/unauthorized1.js";
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

  checkCurrentUserFollows(
    request: Users.CheckCurrentUserFollowsRequest,
    options?: RequestOptions,
  ): ApiPromise<boolean[], Users.CheckCurrentUserFollowsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/me/following/contains"),
        auth: this.#auth.oauth20,
        query: [
          { name: "type", value: request.type, schema: itemType3Schema },
          { name: "ids", value: request.ids, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.boolean()) },
        errorFactory: Users.CheckCurrentUserFollowsError,
      },
      options,
    );
  }

  checkIfUserFollowsPlaylist(
    request: Users.CheckIfUserFollowsPlaylistRequest,
    options?: RequestOptions,
  ): ApiPromise<boolean[], Users.CheckIfUserFollowsPlaylistError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/playlists/{playlist_id}/followers/contains"),
        auth: this.#auth.oauth20,
        pathParams: [{ name: "playlist_id", value: request.playlistId, schema: s.string() }],
        query: [{ name: "ids", value: request.ids, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.boolean()) },
        errorFactory: Users.CheckIfUserFollowsPlaylistError,
      },
      options,
    );
  }

  followArtistsUsers(
    request: Users.FollowArtistsUsersRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Users.FollowArtistsUsersError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        url: this.#servers.default("/me/following"),
        auth: this.#auth.oauth20,
        query: [
          { name: "type", value: request.type, schema: itemType2Schema },
          { name: "ids", value: request.ids, schema: s.string() },
        ],
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

  followPlaylist(
    request: Users.FollowPlaylistRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Users.FollowPlaylistError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        url: this.#servers.default("/playlists/{playlist_id}/followers"),
        auth: this.#auth.oauth20,
        pathParams: [{ name: "playlist_id", value: request.playlistId, schema: s.string() }],
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

  getCurrentUsersProfile(
    options?: RequestOptions,
  ): ApiPromise<PrivateUserObject, Users.GetCurrentUsersProfileError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/me"),
        auth: this.#auth.oauth20,
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: privateUserObjectSchema },
        errorFactory: Users.GetCurrentUsersProfileError,
      },
      options,
    );
  }

  getFollowed(
    request: Users.GetFollowedRequest,
    options?: RequestOptions,
  ): ApiPromise<CursorPagedArtists, Users.GetFollowedError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/me/following"),
        auth: this.#auth.oauth20,
        query: [
          { name: "type", value: request.type, schema: itemType1Schema },
          { name: "after", value: request.after, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.number(), 20) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: cursorPagedArtistsSchema },
        errorFactory: Users.GetFollowedError,
      },
      options,
    );
  }

  getListUsersPlaylists(
    request: Users.GetListUsersPlaylistsRequest,
    options?: RequestOptions,
  ): ApiPromise<PagingPlaylistObject, Users.GetListUsersPlaylistsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/users/{user_id}/playlists"),
        auth: this.#auth.oauth20,
        pathParams: [{ name: "user_id", value: request.userId, schema: s.string() }],
        query: [
          { name: "limit", value: request.limit, schema: s.defaulted(s.number(), 20) },
          { name: "offset", value: request.offset, schema: s.defaulted(s.number(), 0) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: pagingPlaylistObjectSchema },
        errorFactory: Users.GetListUsersPlaylistsError,
      },
      options,
    );
  }

  getUsersProfile(
    request: Users.GetUsersProfileRequest,
    options?: RequestOptions,
  ): ApiPromise<PublicUserObject, Users.GetUsersProfileError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/users/{user_id}"),
        auth: this.#auth.oauth20,
        pathParams: [{ name: "user_id", value: request.userId, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: publicUserObjectSchema },
        errorFactory: Users.GetUsersProfileError,
      },
      options,
    );
  }

  getUsersTopArtists(
    request: Users.GetUsersTopArtistsRequest,
    options?: RequestOptions,
  ): ApiPromise<PagingArtistObject, Users.GetUsersTopArtistsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/me/top/artists"),
        auth: this.#auth.oauth20,
        query: [
          { name: "time_range", value: request.timeRange, schema: s.defaulted(s.string(), "medium_term") },
          { name: "limit", value: request.limit, schema: s.defaulted(s.number(), 20) },
          { name: "offset", value: request.offset, schema: s.defaulted(s.number(), 0) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: pagingArtistObjectSchema },
        errorFactory: Users.GetUsersTopArtistsError,
      },
      options,
    );
  }

  getUsersTopTracks(
    request: Users.GetUsersTopTracksRequest,
    options?: RequestOptions,
  ): ApiPromise<PagingTrackObject, Users.GetUsersTopTracksError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/me/top/tracks"),
        auth: this.#auth.oauth20,
        query: [
          { name: "time_range", value: request.timeRange, schema: s.defaulted(s.string(), "medium_term") },
          { name: "limit", value: request.limit, schema: s.defaulted(s.number(), 20) },
          { name: "offset", value: request.offset, schema: s.defaulted(s.number(), 0) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: pagingTrackObjectSchema },
        errorFactory: Users.GetUsersTopTracksError,
      },
      options,
    );
  }

  unfollowArtistsUsers(
    request: Users.UnfollowArtistsUsersRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Users.UnfollowArtistsUsersError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.default("/me/following"),
        auth: this.#auth.oauth20,
        query: [
          { name: "type", value: request.type, schema: itemType3Schema },
          { name: "ids", value: request.ids, schema: s.string() },
        ],
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

  unfollowPlaylist(
    request: Users.UnfollowPlaylistRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Users.UnfollowPlaylistError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.default("/playlists/{playlist_id}/followers"),
        auth: this.#auth.oauth20,
        pathParams: [{ name: "playlist_id", value: request.playlistId, schema: s.string() }],
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

  export class CheckCurrentUserFollowsError extends ResponseError<
    | Declared<"unauthorized1", Unauthorized1>
    | Declared<"forbidden1", Forbidden1>
    | Declared<"tooManyRequests1", TooManyRequests1>
  > {
    static readonly errors: ErrorDecoders<CheckCurrentUserFollowsError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }

  export type CheckIfUserFollowsPlaylistRequest = {
    playlistId: string;
    ids: string;
  };

  export class CheckIfUserFollowsPlaylistError extends ResponseError<
    | Declared<"unauthorized1", Unauthorized1>
    | Declared<"forbidden1", Forbidden1>
    | Declared<"tooManyRequests1", TooManyRequests1>
  > {
    static readonly errors: ErrorDecoders<CheckIfUserFollowsPlaylistError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }

  export type FollowArtistsUsersRequest = {
    type: ItemType2;
    ids: string;
    body?: FollowArtistsOrUsersRequest;
  };

  export class FollowArtistsUsersError extends ResponseError<
    | Declared<"unauthorized1", Unauthorized1>
    | Declared<"forbidden1", Forbidden1>
    | Declared<"tooManyRequests1", TooManyRequests1>
  > {
    static readonly errors: ErrorDecoders<FollowArtistsUsersError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }

  export type FollowPlaylistRequest = {
    playlistId: string;
    body?: PlaylistsFollowersRequest;
  };

  export class FollowPlaylistError extends ResponseError<
    | Declared<"unauthorized1", Unauthorized1>
    | Declared<"forbidden1", Forbidden1>
    | Declared<"tooManyRequests1", TooManyRequests1>
  > {
    static readonly errors: ErrorDecoders<FollowPlaylistError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }

  export class GetCurrentUsersProfileError extends ResponseError<
    | Declared<"unauthorized1", Unauthorized1>
    | Declared<"forbidden1", Forbidden1>
    | Declared<"tooManyRequests1", TooManyRequests1>
  > {
    static readonly errors: ErrorDecoders<GetCurrentUsersProfileError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }

  export type GetFollowedRequest = {
    type: ItemType1;
    after?: string;
    limit?: number;
  };

  export class GetFollowedError extends ResponseError<
    | Declared<"unauthorized1", Unauthorized1>
    | Declared<"forbidden1", Forbidden1>
    | Declared<"tooManyRequests1", TooManyRequests1>
  > {
    static readonly errors: ErrorDecoders<GetFollowedError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }

  export type GetListUsersPlaylistsRequest = {
    userId: string;
    limit?: number;
    offset?: number;
  };

  export class GetListUsersPlaylistsError extends ResponseError<
    | Declared<"unauthorized1", Unauthorized1>
    | Declared<"forbidden1", Forbidden1>
    | Declared<"tooManyRequests1", TooManyRequests1>
  > {
    static readonly errors: ErrorDecoders<GetListUsersPlaylistsError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }

  export type GetUsersProfileRequest = {
    userId: string;
  };

  export class GetUsersProfileError extends ResponseError<
    | Declared<"unauthorized1", Unauthorized1>
    | Declared<"forbidden1", Forbidden1>
    | Declared<"tooManyRequests1", TooManyRequests1>
  > {
    static readonly errors: ErrorDecoders<GetUsersProfileError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }

  export type GetUsersTopArtistsRequest = {
    timeRange?: string;
    limit?: number;
    offset?: number;
  };

  export class GetUsersTopArtistsError extends ResponseError<
    | Declared<"unauthorized1", Unauthorized1>
    | Declared<"forbidden1", Forbidden1>
    | Declared<"tooManyRequests1", TooManyRequests1>
  > {
    static readonly errors: ErrorDecoders<GetUsersTopArtistsError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }

  export type GetUsersTopTracksRequest = {
    timeRange?: string;
    limit?: number;
    offset?: number;
  };

  export class GetUsersTopTracksError extends ResponseError<
    | Declared<"unauthorized1", Unauthorized1>
    | Declared<"forbidden1", Forbidden1>
    | Declared<"tooManyRequests1", TooManyRequests1>
  > {
    static readonly errors: ErrorDecoders<GetUsersTopTracksError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }

  export type UnfollowArtistsUsersRequest = {
    type: ItemType3;
    ids: string;
    body?: UnfollowArtistsOrUsersRequest;
  };

  export class UnfollowArtistsUsersError extends ResponseError<
    | Declared<"unauthorized1", Unauthorized1>
    | Declared<"forbidden1", Forbidden1>
    | Declared<"tooManyRequests1", TooManyRequests1>
  > {
    static readonly errors: ErrorDecoders<UnfollowArtistsUsersError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }

  export type UnfollowPlaylistRequest = {
    playlistId: string;
  };

  export class UnfollowPlaylistError extends ResponseError<
    | Declared<"unauthorized1", Unauthorized1>
    | Declared<"forbidden1", Forbidden1>
    | Declared<"tooManyRequests1", TooManyRequests1>
  > {
    static readonly errors: ErrorDecoders<UnfollowPlaylistError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }
}
