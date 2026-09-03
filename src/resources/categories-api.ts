import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { categoryObjectSchema, type CategoryObject } from "../models/category-object.js";
import { forbidden1Schema, type Forbidden1 } from "../models/forbidden1.js";
import { pagedCategoriesSchema, type PagedCategories } from "../models/paged-categories.js";
import {
  pagingFeaturedPlaylistObjectSchema,
  type PagingFeaturedPlaylistObject,
} from "../models/paging-featured-playlist-object.js";
import { tooManyRequests1Schema, type TooManyRequests1 } from "../models/too-many-requests1.js";
import { unauthorized1Schema, type Unauthorized1 } from "../models/unauthorized1.js";
import type { Servers } from "../servers.js";

export class CategoriesApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  getACategoriesPlaylists(
    request: CategoriesApi.GetACategoriesPlaylistsRequest,
    options?: RequestOptions,
  ): ApiPromise<PagingFeaturedPlaylistObject, CategoriesApi.GetACategoriesPlaylistsError> {
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
        errorFactory: CategoriesApi.GetACategoriesPlaylistsError,
      },
      options,
    );
  }

  getACategory(
    request: CategoriesApi.GetACategoryRequest,
    options?: RequestOptions,
  ): ApiPromise<CategoryObject, CategoriesApi.GetACategoryError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/browse/categories/{category_id}"),
        auth: this.#auth.oauth20,
        pathParams: [{ name: "category_id", value: request.categoryId, schema: s.string() }],
        query: [{ name: "locale", value: request.locale, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: categoryObjectSchema },
        errorFactory: CategoriesApi.GetACategoryError,
      },
      options,
    );
  }

  getCategories(
    request: CategoriesApi.GetCategoriesRequest,
    options?: RequestOptions,
  ): ApiPromise<PagedCategories, CategoriesApi.GetCategoriesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/browse/categories"),
        auth: this.#auth.oauth20,
        query: [
          { name: "locale", value: request.locale, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.number(), 20) },
          { name: "offset", value: request.offset, schema: s.defaulted(s.number(), 0) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: pagedCategoriesSchema },
        errorFactory: CategoriesApi.GetCategoriesError,
      },
      options,
    );
  }
}

export namespace CategoriesApi {
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

  export type GetACategoryRequest = {
    categoryId: string;
    locale?: string;
  };

  export class GetACategoryError extends ResponseError<
    | Declared<"unauthorized1", Unauthorized1>
    | Declared<"forbidden1", Forbidden1>
    | Declared<"tooManyRequests1", TooManyRequests1>
  > {
    static readonly errors: ErrorDecoders<GetACategoryError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }

  export type GetCategoriesRequest = {
    locale?: string;
    limit?: number;
    offset?: number;
  };

  export class GetCategoriesError extends ResponseError<
    | Declared<"unauthorized1", Unauthorized1>
    | Declared<"forbidden1", Forbidden1>
    | Declared<"tooManyRequests1", TooManyRequests1>
  > {
    static readonly errors: ErrorDecoders<GetCategoriesError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }
}
