import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { albumObjectSchema, type AlbumObject } from "../models/album-object.js";
import { forbidden1Schema, type Forbidden1 } from "../models/forbidden1.js";
import { manyAlbumsSchema, type ManyAlbums } from "../models/many-albums.js";
import { pagedAlbumsSchema, type PagedAlbums } from "../models/paged-albums.js";
import {
  pagingArtistDiscographyAlbumObjectSchema,
  type PagingArtistDiscographyAlbumObject,
} from "../models/paging-artist-discography-album-object.js";
import {
  pagingSavedAlbumObjectSchema,
  type PagingSavedAlbumObject,
} from "../models/paging-saved-album-object.js";
import {
  pagingSimplifiedTrackObjectSchema,
  type PagingSimplifiedTrackObject,
} from "../models/paging-simplified-track-object.js";
import { removeAlbumsRequestSchema, type RemoveAlbumsRequest } from "../models/remove-albums-request.js";
import { saveAlbumsRequestSchema, type SaveAlbumsRequest } from "../models/save-albums-request.js";
import { tooManyRequests1Schema, type TooManyRequests1 } from "../models/too-many-requests1.js";
import { unauthorized1Schema, type Unauthorized1 } from "../models/unauthorized1.js";
import type { Servers } from "../servers.js";

export class Albums {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  checkUsersSavedAlbums(
    request: Albums.CheckUsersSavedAlbumsRequest,
    options?: RequestOptions,
  ): ApiPromise<boolean[], Albums.CheckUsersSavedAlbumsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/me/albums/contains"),
        auth: this.#auth.oauth20,
        query: [{ name: "ids", value: request.ids, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.boolean()) },
        errorFactory: Albums.CheckUsersSavedAlbumsError,
      },
      options,
    );
  }

  getAnAlbum(
    request: Albums.GetAnAlbumRequest,
    options?: RequestOptions,
  ): ApiPromise<AlbumObject, Albums.GetAnAlbumError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/albums/{id}"),
        auth: anyAuth(this.#auth.oauth20, this.#auth.oauth20ClientCredentials),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [{ name: "market", value: request.market, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: albumObjectSchema },
        errorFactory: Albums.GetAnAlbumError,
      },
      options,
    );
  }

  getAnAlbumsTracks(
    request: Albums.GetAnAlbumsTracksRequest,
    options?: RequestOptions,
  ): ApiPromise<PagingSimplifiedTrackObject, Albums.GetAnAlbumsTracksError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/albums/{id}/tracks"),
        auth: anyAuth(this.#auth.oauth20, this.#auth.oauth20ClientCredentials),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [
          { name: "market", value: request.market, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.number(), 20) },
          { name: "offset", value: request.offset, schema: s.defaulted(s.number(), 0) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: pagingSimplifiedTrackObjectSchema },
        errorFactory: Albums.GetAnAlbumsTracksError,
      },
      options,
    );
  }

  getAnArtistsAlbums(
    request: Albums.GetAnArtistsAlbumsRequest,
    options?: RequestOptions,
  ): ApiPromise<PagingArtistDiscographyAlbumObject, Albums.GetAnArtistsAlbumsError> {
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
        errorFactory: Albums.GetAnArtistsAlbumsError,
      },
      options,
    );
  }

  getMultipleAlbums(
    request: Albums.GetMultipleAlbumsRequest,
    options?: RequestOptions,
  ): ApiPromise<ManyAlbums, Albums.GetMultipleAlbumsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/albums"),
        auth: this.#auth.oauth20,
        query: [
          { name: "ids", value: request.ids, schema: s.string() },
          { name: "market", value: request.market, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: manyAlbumsSchema },
        errorFactory: Albums.GetMultipleAlbumsError,
      },
      options,
    );
  }

  getNewReleases(
    request: Albums.GetNewReleasesRequest,
    options?: RequestOptions,
  ): ApiPromise<PagedAlbums, Albums.GetNewReleasesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/browse/new-releases"),
        auth: this.#auth.oauth20,
        query: [
          { name: "limit", value: request.limit, schema: s.defaulted(s.number(), 20) },
          { name: "offset", value: request.offset, schema: s.defaulted(s.number(), 0) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: pagedAlbumsSchema },
        errorFactory: Albums.GetNewReleasesError,
      },
      options,
    );
  }

  getUsersSavedAlbums(
    request: Albums.GetUsersSavedAlbumsRequest,
    options?: RequestOptions,
  ): ApiPromise<PagingSavedAlbumObject, Albums.GetUsersSavedAlbumsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/me/albums"),
        auth: this.#auth.oauth20,
        query: [
          { name: "limit", value: request.limit, schema: s.defaulted(s.number(), 20) },
          { name: "offset", value: request.offset, schema: s.defaulted(s.number(), 0) },
          { name: "market", value: request.market, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: pagingSavedAlbumObjectSchema },
        errorFactory: Albums.GetUsersSavedAlbumsError,
      },
      options,
    );
  }

  removeAlbumsUser(
    request: Albums.RemoveAlbumsUserRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Albums.RemoveAlbumsUserError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.default("/me/albums"),
        auth: this.#auth.oauth20,
        query: [{ name: "ids", value: request.ids, schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => removeAlbumsRequestSchema)),
        },
      },
      {
        success: { kind: "empty" },
        errorFactory: Albums.RemoveAlbumsUserError,
      },
      options,
    );
  }

  saveAlbumsUser(
    request: Albums.SaveAlbumsUserRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Albums.SaveAlbumsUserError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        url: this.#servers.default("/me/albums"),
        auth: this.#auth.oauth20,
        query: [{ name: "ids", value: request.ids, schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => saveAlbumsRequestSchema)),
        },
      },
      {
        success: { kind: "empty" },
        errorFactory: Albums.SaveAlbumsUserError,
      },
      options,
    );
  }
}

export namespace Albums {
  export type CheckUsersSavedAlbumsRequest = {
    ids: string;
  };

  export class CheckUsersSavedAlbumsError extends ResponseError<
    | Declared<"unauthorized1", Unauthorized1>
    | Declared<"forbidden1", Forbidden1>
    | Declared<"tooManyRequests1", TooManyRequests1>
  > {
    static readonly errors: ErrorDecoders<CheckUsersSavedAlbumsError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }

  export type GetAnAlbumRequest = {
    id: string;
    market?: string;
  };

  export class GetAnAlbumError extends ResponseError<
    | Declared<"unauthorized1", Unauthorized1>
    | Declared<"forbidden1", Forbidden1>
    | Declared<"tooManyRequests1", TooManyRequests1>
  > {
    static readonly errors: ErrorDecoders<GetAnAlbumError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }

  export type GetAnAlbumsTracksRequest = {
    id: string;
    market?: string;
    limit?: number;
    offset?: number;
  };

  export class GetAnAlbumsTracksError extends ResponseError<
    | Declared<"unauthorized1", Unauthorized1>
    | Declared<"forbidden1", Forbidden1>
    | Declared<"tooManyRequests1", TooManyRequests1>
  > {
    static readonly errors: ErrorDecoders<GetAnAlbumsTracksError> = [
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

  export type GetMultipleAlbumsRequest = {
    ids: string;
    market?: string;
  };

  export class GetMultipleAlbumsError extends ResponseError<
    | Declared<"unauthorized1", Unauthorized1>
    | Declared<"forbidden1", Forbidden1>
    | Declared<"tooManyRequests1", TooManyRequests1>
  > {
    static readonly errors: ErrorDecoders<GetMultipleAlbumsError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }

  export type GetNewReleasesRequest = {
    limit?: number;
    offset?: number;
  };

  export class GetNewReleasesError extends ResponseError<
    | Declared<"unauthorized1", Unauthorized1>
    | Declared<"forbidden1", Forbidden1>
    | Declared<"tooManyRequests1", TooManyRequests1>
  > {
    static readonly errors: ErrorDecoders<GetNewReleasesError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }

  export type GetUsersSavedAlbumsRequest = {
    limit?: number;
    offset?: number;
    market?: string;
  };

  export class GetUsersSavedAlbumsError extends ResponseError<
    | Declared<"unauthorized1", Unauthorized1>
    | Declared<"forbidden1", Forbidden1>
    | Declared<"tooManyRequests1", TooManyRequests1>
  > {
    static readonly errors: ErrorDecoders<GetUsersSavedAlbumsError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }

  export type RemoveAlbumsUserRequest = {
    ids: string;
    body?: RemoveAlbumsRequest;
  };

  export class RemoveAlbumsUserError extends ResponseError<
    | Declared<"unauthorized1", Unauthorized1>
    | Declared<"forbidden1", Forbidden1>
    | Declared<"tooManyRequests1", TooManyRequests1>
  > {
    static readonly errors: ErrorDecoders<RemoveAlbumsUserError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }

  export type SaveAlbumsUserRequest = {
    ids: string;
    body?: SaveAlbumsRequest;
  };

  export class SaveAlbumsUserError extends ResponseError<
    | Declared<"unauthorized1", Unauthorized1>
    | Declared<"forbidden1", Forbidden1>
    | Declared<"tooManyRequests1", TooManyRequests1>
  > {
    static readonly errors: ErrorDecoders<SaveAlbumsUserError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }
}
