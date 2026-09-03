import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { artistObjectSchema, type ArtistObject } from "../models/artist-object.js";
import { cursorPagedArtistsSchema, type CursorPagedArtists } from "../models/cursor-paged-artists.js";
import {
  followArtistsOrUsersRequestSchema,
  type FollowArtistsOrUsersRequest,
} from "../models/follow-artists-or-users-request.js";
import { forbidden1Schema, type Forbidden1 } from "../models/forbidden1.js";
import { itemType1Schema, type ItemType1 } from "../models/item-type1.js";
import { itemType2Schema, type ItemType2 } from "../models/item-type2.js";
import { itemType3Schema, type ItemType3 } from "../models/item-type3.js";
import { manyArtistsSchema, type ManyArtists } from "../models/many-artists.js";
import { manyTracksSchema, type ManyTracks } from "../models/many-tracks.js";
import {
  pagingArtistDiscographyAlbumObjectSchema,
  type PagingArtistDiscographyAlbumObject,
} from "../models/paging-artist-discography-album-object.js";
import { pagingArtistObjectSchema, type PagingArtistObject } from "../models/paging-artist-object.js";
import { tooManyRequests1Schema, type TooManyRequests1 } from "../models/too-many-requests1.js";
import { unauthorized1Schema, type Unauthorized1 } from "../models/unauthorized1.js";
import {
  unfollowArtistsOrUsersRequestSchema,
  type UnfollowArtistsOrUsersRequest,
} from "../models/unfollow-artists-or-users-request.js";
import type { Servers } from "../servers.js";

export class Artists {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  checkCurrentUserFollows(
    request: Artists.CheckCurrentUserFollowsRequest,
    options?: RequestOptions,
  ): ApiPromise<boolean[], Artists.CheckCurrentUserFollowsError> {
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
        errorFactory: Artists.CheckCurrentUserFollowsError,
      },
      options,
    );
  }

  followArtistsUsers(
    request: Artists.FollowArtistsUsersRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Artists.FollowArtistsUsersError> {
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
        errorFactory: Artists.FollowArtistsUsersError,
      },
      options,
    );
  }

  getAnArtist(
    request: Artists.GetAnArtistRequest,
    options?: RequestOptions,
  ): ApiPromise<ArtistObject, Artists.GetAnArtistError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/artists/{id}"),
        auth: anyAuth(this.#auth.oauth20, this.#auth.oauth20ClientCredentials),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: artistObjectSchema },
        errorFactory: Artists.GetAnArtistError,
      },
      options,
    );
  }

  getAnArtistsAlbums(
    request: Artists.GetAnArtistsAlbumsRequest,
    options?: RequestOptions,
  ): ApiPromise<PagingArtistDiscographyAlbumObject, Artists.GetAnArtistsAlbumsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/artists/{id}/albums"),
        auth: anyAuth(this.#auth.oauth20, this.#auth.oauth20ClientCredentials),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [
          { name: "include_groups", value: request.includeGroups, schema: s.optional(s.string()) },
          { name: "market", value: request.market, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.number(), 20) },
          { name: "offset", value: request.offset, schema: s.defaulted(s.number(), 0) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: pagingArtistDiscographyAlbumObjectSchema },
        errorFactory: Artists.GetAnArtistsAlbumsError,
      },
      options,
    );
  }

  getAnArtistsRelatedArtists(
    request: Artists.GetAnArtistsRelatedArtistsRequest,
    options?: RequestOptions,
  ): ApiPromise<ManyArtists, Artists.GetAnArtistsRelatedArtistsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/artists/{id}/related-artists"),
        auth: this.#auth.oauth20,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: manyArtistsSchema },
        errorFactory: Artists.GetAnArtistsRelatedArtistsError,
      },
      options,
    );
  }

  getAnArtistsTopTracks(
    request: Artists.GetAnArtistsTopTracksRequest,
    options?: RequestOptions,
  ): ApiPromise<ManyTracks, Artists.GetAnArtistsTopTracksError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/artists/{id}/top-tracks"),
        auth: this.#auth.oauth20,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [{ name: "market", value: request.market, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: manyTracksSchema },
        errorFactory: Artists.GetAnArtistsTopTracksError,
      },
      options,
    );
  }

  getFollowed(
    request: Artists.GetFollowedRequest,
    options?: RequestOptions,
  ): ApiPromise<CursorPagedArtists, Artists.GetFollowedError> {
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
        errorFactory: Artists.GetFollowedError,
      },
      options,
    );
  }

  getMultipleArtists(
    request: Artists.GetMultipleArtistsRequest,
    options?: RequestOptions,
  ): ApiPromise<ManyArtists, Artists.GetMultipleArtistsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/artists"),
        auth: this.#auth.oauth20,
        query: [{ name: "ids", value: request.ids, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: manyArtistsSchema },
        errorFactory: Artists.GetMultipleArtistsError,
      },
      options,
    );
  }

  getUsersTopArtists(
    request: Artists.GetUsersTopArtistsRequest,
    options?: RequestOptions,
  ): ApiPromise<PagingArtistObject, Artists.GetUsersTopArtistsError> {
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
        errorFactory: Artists.GetUsersTopArtistsError,
      },
      options,
    );
  }

  unfollowArtistsUsers(
    request: Artists.UnfollowArtistsUsersRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Artists.UnfollowArtistsUsersError> {
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
        errorFactory: Artists.UnfollowArtistsUsersError,
      },
      options,
    );
  }
}

export namespace Artists {
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

  export type GetAnArtistRequest = {
    id: string;
  };

  export class GetAnArtistError extends ResponseError<
    | Declared<"unauthorized1", Unauthorized1>
    | Declared<"forbidden1", Forbidden1>
    | Declared<"tooManyRequests1", TooManyRequests1>
  > {
    static readonly errors: ErrorDecoders<GetAnArtistError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }

  export type GetAnArtistsAlbumsRequest = {
    id: string;
    includeGroups?: string;
    market?: string;
    limit?: number;
    offset?: number;
  };

  export class GetAnArtistsAlbumsError extends ResponseError<
    | Declared<"unauthorized1", Unauthorized1>
    | Declared<"forbidden1", Forbidden1>
    | Declared<"tooManyRequests1", TooManyRequests1>
  > {
    static readonly errors: ErrorDecoders<GetAnArtistsAlbumsError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }

  export type GetAnArtistsRelatedArtistsRequest = {
    id: string;
  };

  export class GetAnArtistsRelatedArtistsError extends ResponseError<
    | Declared<"unauthorized1", Unauthorized1>
    | Declared<"forbidden1", Forbidden1>
    | Declared<"tooManyRequests1", TooManyRequests1>
  > {
    static readonly errors: ErrorDecoders<GetAnArtistsRelatedArtistsError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }

  export type GetAnArtistsTopTracksRequest = {
    id: string;
    market?: string;
  };

  export class GetAnArtistsTopTracksError extends ResponseError<
    | Declared<"unauthorized1", Unauthorized1>
    | Declared<"forbidden1", Forbidden1>
    | Declared<"tooManyRequests1", TooManyRequests1>
  > {
    static readonly errors: ErrorDecoders<GetAnArtistsTopTracksError> = [
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

  export type GetMultipleArtistsRequest = {
    ids: string;
  };

  export class GetMultipleArtistsError extends ResponseError<
    | Declared<"unauthorized1", Unauthorized1>
    | Declared<"forbidden1", Forbidden1>
    | Declared<"tooManyRequests1", TooManyRequests1>
  > {
    static readonly errors: ErrorDecoders<GetMultipleArtistsError> = [
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
}
