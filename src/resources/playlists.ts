import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { forbidden1Schema, type Forbidden1 } from "../models/forbidden1.js";
import { imageObjectSchema, type ImageObject } from "../models/image-object.js";
import {
  pagingFeaturedPlaylistObjectSchema,
  type PagingFeaturedPlaylistObject,
} from "../models/paging-featured-playlist-object.js";
import { pagingPlaylistObjectSchema, type PagingPlaylistObject } from "../models/paging-playlist-object.js";
import {
  pagingPlaylistTrackObjectSchema,
  type PagingPlaylistTrackObject,
} from "../models/paging-playlist-track-object.js";
import { playlistObjectSchema, type PlaylistObject } from "../models/playlist-object.js";
import { playlistSnapshotIdSchema, type PlaylistSnapshotId } from "../models/playlist-snapshot-id.js";
import {
  playlistsFollowersRequestSchema,
  type PlaylistsFollowersRequest,
} from "../models/playlists-followers-request.js";
import { playlistsRequestSchema, type PlaylistsRequest } from "../models/playlists-request.js";
import {
  playlistsTracksRequestSchema,
  type PlaylistsTracksRequest,
} from "../models/playlists-tracks-request.js";
import {
  playlistsTracksRequest1Schema,
  type PlaylistsTracksRequest1,
} from "../models/playlists-tracks-request1.js";
import {
  playlistsTracksRequest2Schema,
  type PlaylistsTracksRequest2,
} from "../models/playlists-tracks-request2.js";
import { tooManyRequests1Schema, type TooManyRequests1 } from "../models/too-many-requests1.js";
import { unauthorized1Schema, type Unauthorized1 } from "../models/unauthorized1.js";
import {
  usersPlaylistsRequestSchema,
  type UsersPlaylistsRequest,
} from "../models/users-playlists-request.js";
import type { Servers } from "../servers.js";

export class Playlists {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  addTracksToPlaylist(
    request: Playlists.AddTracksToPlaylistRequest,
    options?: RequestOptions,
  ): ApiPromise<PlaylistSnapshotId, Playlists.AddTracksToPlaylistError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/playlists/{playlist_id}/tracks"),
        auth: this.#auth.oauth20,
        pathParams: [{ name: "playlist_id", value: request.playlistId, schema: s.string() }],
        query: [
          { name: "position", value: request.position, schema: s.optional(s.number()) },
          { name: "uris", value: request.uris, schema: s.optional(s.string()) },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => playlistsTracksRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: playlistSnapshotIdSchema },
        errorFactory: Playlists.AddTracksToPlaylistError,
      },
      options,
    );
  }

  changePlaylistDetails(
    request: Playlists.ChangePlaylistDetailsRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Playlists.ChangePlaylistDetailsError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        url: this.#servers.default("/playlists/{playlist_id}"),
        auth: this.#auth.oauth20,
        pathParams: [{ name: "playlist_id", value: request.playlistId, schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => playlistsRequestSchema)) },
      },
      {
        success: { kind: "empty" },
        errorFactory: Playlists.ChangePlaylistDetailsError,
      },
      options,
    );
  }

  checkIfUserFollowsPlaylist(
    request: Playlists.CheckIfUserFollowsPlaylistRequest,
    options?: RequestOptions,
  ): ApiPromise<boolean[], Playlists.CheckIfUserFollowsPlaylistError> {
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
        errorFactory: Playlists.CheckIfUserFollowsPlaylistError,
      },
      options,
    );
  }

  createPlaylist(
    request: Playlists.CreatePlaylistRequest,
    options?: RequestOptions,
  ): ApiPromise<PlaylistObject, Playlists.CreatePlaylistError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/users/{user_id}/playlists"),
        auth: this.#auth.oauth20,
        pathParams: [{ name: "user_id", value: request.userId, schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => usersPlaylistsRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: playlistObjectSchema },
        errorFactory: Playlists.CreatePlaylistError,
      },
      options,
    );
  }

  followPlaylist(
    request: Playlists.FollowPlaylistRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Playlists.FollowPlaylistError> {
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
        errorFactory: Playlists.FollowPlaylistError,
      },
      options,
    );
  }

  getACategoriesPlaylists(
    request: Playlists.GetACategoriesPlaylistsRequest,
    options?: RequestOptions,
  ): ApiPromise<PagingFeaturedPlaylistObject, Playlists.GetACategoriesPlaylistsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/browse/categories/{category_id}/playlists"),
        auth: this.#auth.oauth20,
        pathParams: [{ name: "category_id", value: request.categoryId, schema: s.string() }],
        query: [
          { name: "limit", value: request.limit, schema: s.defaulted(s.number(), 20) },
          { name: "offset", value: request.offset, schema: s.defaulted(s.number(), 0) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: pagingFeaturedPlaylistObjectSchema },
        errorFactory: Playlists.GetACategoriesPlaylistsError,
      },
      options,
    );
  }

  getAListOfCurrentUsersPlaylists(
    request: Playlists.GetAListOfCurrentUsersPlaylistsRequest,
    options?: RequestOptions,
  ): ApiPromise<PagingPlaylistObject, Playlists.GetAListOfCurrentUsersPlaylistsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/me/playlists"),
        auth: this.#auth.oauth20,
        query: [
          { name: "limit", value: request.limit, schema: s.defaulted(s.number(), 20) },
          { name: "offset", value: request.offset, schema: s.defaulted(s.number(), 0) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: pagingPlaylistObjectSchema },
        errorFactory: Playlists.GetAListOfCurrentUsersPlaylistsError,
      },
      options,
    );
  }

  getFeaturedPlaylists(
    request: Playlists.GetFeaturedPlaylistsRequest,
    options?: RequestOptions,
  ): ApiPromise<PagingFeaturedPlaylistObject, Playlists.GetFeaturedPlaylistsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/browse/featured-playlists"),
        auth: this.#auth.oauth20,
        query: [
          { name: "locale", value: request.locale, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.number(), 20) },
          { name: "offset", value: request.offset, schema: s.defaulted(s.number(), 0) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: pagingFeaturedPlaylistObjectSchema },
        errorFactory: Playlists.GetFeaturedPlaylistsError,
      },
      options,
    );
  }

  getListUsersPlaylists(
    request: Playlists.GetListUsersPlaylistsRequest,
    options?: RequestOptions,
  ): ApiPromise<PagingPlaylistObject, Playlists.GetListUsersPlaylistsError> {
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
        errorFactory: Playlists.GetListUsersPlaylistsError,
      },
      options,
    );
  }

  getPlaylist(
    request: Playlists.GetPlaylistRequest,
    options?: RequestOptions,
  ): ApiPromise<PlaylistObject, Playlists.GetPlaylistError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/playlists/{playlist_id}"),
        auth: this.#auth.oauth20,
        pathParams: [{ name: "playlist_id", value: request.playlistId, schema: s.string() }],
        query: [
          { name: "market", value: request.market, schema: s.optional(s.string()) },
          { name: "fields", value: request.fields, schema: s.optional(s.string()) },
          { name: "additional_types", value: request.additionalTypes, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: playlistObjectSchema },
        errorFactory: Playlists.GetPlaylistError,
      },
      options,
    );
  }

  getPlaylistCover(
    request: Playlists.GetPlaylistCoverRequest,
    options?: RequestOptions,
  ): ApiPromise<ImageObject[], Playlists.GetPlaylistCoverError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/playlists/{playlist_id}/images"),
        auth: this.#auth.oauth20,
        pathParams: [{ name: "playlist_id", value: request.playlistId, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => imageObjectSchema)) },
        errorFactory: Playlists.GetPlaylistCoverError,
      },
      options,
    );
  }

  getPlaylistsTracks(
    request: Playlists.GetPlaylistsTracksRequest,
    options?: RequestOptions,
  ): ApiPromise<PagingPlaylistTrackObject, Playlists.GetPlaylistsTracksError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/playlists/{playlist_id}/tracks"),
        auth: this.#auth.oauth20,
        pathParams: [{ name: "playlist_id", value: request.playlistId, schema: s.string() }],
        query: [
          { name: "market", value: request.market, schema: s.optional(s.string()) },
          { name: "fields", value: request.fields, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.number(), 20) },
          { name: "offset", value: request.offset, schema: s.defaulted(s.number(), 0) },
          { name: "additional_types", value: request.additionalTypes, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: pagingPlaylistTrackObjectSchema },
        errorFactory: Playlists.GetPlaylistsTracksError,
      },
      options,
    );
  }

  removeTracksPlaylist(
    request: Playlists.RemoveTracksPlaylistRequest,
    options?: RequestOptions,
  ): ApiPromise<PlaylistSnapshotId, Playlists.RemoveTracksPlaylistError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.default("/playlists/{playlist_id}/tracks"),
        auth: this.#auth.oauth20,
        pathParams: [{ name: "playlist_id", value: request.playlistId, schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => playlistsTracksRequest2Schema)),
        },
      },
      {
        success: { kind: "json", schema: playlistSnapshotIdSchema },
        errorFactory: Playlists.RemoveTracksPlaylistError,
      },
      options,
    );
  }

  reorderOrReplacePlaylistsTracks(
    request: Playlists.ReorderOrReplacePlaylistsTracksRequest,
    options?: RequestOptions,
  ): ApiPromise<PlaylistSnapshotId, Playlists.ReorderOrReplacePlaylistsTracksError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        url: this.#servers.default("/playlists/{playlist_id}/tracks"),
        auth: this.#auth.oauth20,
        pathParams: [{ name: "playlist_id", value: request.playlistId, schema: s.string() }],
        query: [{ name: "uris", value: request.uris, schema: s.optional(s.string()) }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => playlistsTracksRequest1Schema)),
        },
      },
      {
        success: { kind: "json", schema: playlistSnapshotIdSchema },
        errorFactory: Playlists.ReorderOrReplacePlaylistsTracksError,
      },
      options,
    );
  }

  unfollowPlaylist(
    request: Playlists.UnfollowPlaylistRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Playlists.UnfollowPlaylistError> {
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
        errorFactory: Playlists.UnfollowPlaylistError,
      },
      options,
    );
  }

  uploadCustomPlaylistCover(
    request: Playlists.UploadCustomPlaylistCoverRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Playlists.UploadCustomPlaylistCoverError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        url: this.#servers.default("/playlists/{playlist_id}/images"),
        auth: this.#auth.oauth20,
        pathParams: [{ name: "playlist_id", value: request.playlistId, schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.record(s.string(), s.unknown()) },
      },
      {
        success: { kind: "empty" },
        errorFactory: Playlists.UploadCustomPlaylistCoverError,
      },
      options,
    );
  }
}

export namespace Playlists {
  export type AddTracksToPlaylistRequest = {
    playlistId: string;
    position?: number;
    uris?: string;
    body?: PlaylistsTracksRequest;
  };

  export class AddTracksToPlaylistError extends ResponseError<
    | Declared<"unauthorized1", Unauthorized1>
    | Declared<"forbidden1", Forbidden1>
    | Declared<"tooManyRequests1", TooManyRequests1>
  > {
    static readonly errors: ErrorDecoders<AddTracksToPlaylistError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }

  export type ChangePlaylistDetailsRequest = {
    playlistId: string;
    body?: PlaylistsRequest;
  };

  export class ChangePlaylistDetailsError extends ResponseError<
    | Declared<"unauthorized1", Unauthorized1>
    | Declared<"forbidden1", Forbidden1>
    | Declared<"tooManyRequests1", TooManyRequests1>
  > {
    static readonly errors: ErrorDecoders<ChangePlaylistDetailsError> = [
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

  export type CreatePlaylistRequest = {
    userId: string;
    body?: UsersPlaylistsRequest;
  };

  export class CreatePlaylistError extends ResponseError<
    | Declared<"unauthorized1", Unauthorized1>
    | Declared<"forbidden1", Forbidden1>
    | Declared<"tooManyRequests1", TooManyRequests1>
  > {
    static readonly errors: ErrorDecoders<CreatePlaylistError> = [
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

  export type GetACategoriesPlaylistsRequest = {
    categoryId: string;
    limit?: number;
    offset?: number;
  };

  export class GetACategoriesPlaylistsError extends ResponseError<
    | Declared<"unauthorized1", Unauthorized1>
    | Declared<"forbidden1", Forbidden1>
    | Declared<"tooManyRequests1", TooManyRequests1>
  > {
    static readonly errors: ErrorDecoders<GetACategoriesPlaylistsError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }

  export type GetAListOfCurrentUsersPlaylistsRequest = {
    limit?: number;
    offset?: number;
  };

  export class GetAListOfCurrentUsersPlaylistsError extends ResponseError<
    | Declared<"unauthorized1", Unauthorized1>
    | Declared<"forbidden1", Forbidden1>
    | Declared<"tooManyRequests1", TooManyRequests1>
  > {
    static readonly errors: ErrorDecoders<GetAListOfCurrentUsersPlaylistsError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }

  export type GetFeaturedPlaylistsRequest = {
    locale?: string;
    limit?: number;
    offset?: number;
  };

  export class GetFeaturedPlaylistsError extends ResponseError<
    | Declared<"unauthorized1", Unauthorized1>
    | Declared<"forbidden1", Forbidden1>
    | Declared<"tooManyRequests1", TooManyRequests1>
  > {
    static readonly errors: ErrorDecoders<GetFeaturedPlaylistsError> = [
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

  export type GetPlaylistRequest = {
    playlistId: string;
    market?: string;
    fields?: string;
    additionalTypes?: string;
  };

  export class GetPlaylistError extends ResponseError<
    | Declared<"unauthorized1", Unauthorized1>
    | Declared<"forbidden1", Forbidden1>
    | Declared<"tooManyRequests1", TooManyRequests1>
  > {
    static readonly errors: ErrorDecoders<GetPlaylistError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }

  export type GetPlaylistCoverRequest = {
    playlistId: string;
  };

  export class GetPlaylistCoverError extends ResponseError<
    | Declared<"unauthorized1", Unauthorized1>
    | Declared<"forbidden1", Forbidden1>
    | Declared<"tooManyRequests1", TooManyRequests1>
  > {
    static readonly errors: ErrorDecoders<GetPlaylistCoverError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }

  export type GetPlaylistsTracksRequest = {
    playlistId: string;
    market?: string;
    fields?: string;
    limit?: number;
    offset?: number;
    additionalTypes?: string;
  };

  export class GetPlaylistsTracksError extends ResponseError<
    | Declared<"unauthorized1", Unauthorized1>
    | Declared<"forbidden1", Forbidden1>
    | Declared<"tooManyRequests1", TooManyRequests1>
  > {
    static readonly errors: ErrorDecoders<GetPlaylistsTracksError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }

  export type RemoveTracksPlaylistRequest = {
    playlistId: string;
    body?: PlaylistsTracksRequest2;
  };

  export class RemoveTracksPlaylistError extends ResponseError<
    | Declared<"unauthorized1", Unauthorized1>
    | Declared<"forbidden1", Forbidden1>
    | Declared<"tooManyRequests1", TooManyRequests1>
  > {
    static readonly errors: ErrorDecoders<RemoveTracksPlaylistError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }

  export type ReorderOrReplacePlaylistsTracksRequest = {
    playlistId: string;
    uris?: string;
    body?: PlaylistsTracksRequest1;
  };

  export class ReorderOrReplacePlaylistsTracksError extends ResponseError<
    | Declared<"unauthorized1", Unauthorized1>
    | Declared<"forbidden1", Forbidden1>
    | Declared<"tooManyRequests1", TooManyRequests1>
  > {
    static readonly errors: ErrorDecoders<ReorderOrReplacePlaylistsTracksError> = [
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

  export type UploadCustomPlaylistCoverRequest = {
    playlistId: string;
    body: Record<string, unknown>;
  };

  export class UploadCustomPlaylistCoverError extends ResponseError<
    | Declared<"unauthorized1", Unauthorized1>
    | Declared<"forbidden1", Forbidden1>
    | Declared<"tooManyRequests1", TooManyRequests1>
  > {
    static readonly errors: ErrorDecoders<UploadCustomPlaylistCoverError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }
}
