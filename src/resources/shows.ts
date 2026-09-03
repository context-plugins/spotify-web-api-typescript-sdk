import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { forbidden1Schema, type Forbidden1 } from "../models/forbidden1.js";
import { manySimplifiedShowsSchema, type ManySimplifiedShows } from "../models/many-simplified-shows.js";
import {
  pagingSavedShowObjectSchema,
  type PagingSavedShowObject,
} from "../models/paging-saved-show-object.js";
import {
  pagingSimplifiedEpisodeObjectSchema,
  type PagingSimplifiedEpisodeObject,
} from "../models/paging-simplified-episode-object.js";
import { removeShowsRequestSchema, type RemoveShowsRequest } from "../models/remove-shows-request.js";
import { saveShowsRequestSchema, type SaveShowsRequest } from "../models/save-shows-request.js";
import { showObjectSchema, type ShowObject } from "../models/show-object.js";
import { tooManyRequests1Schema, type TooManyRequests1 } from "../models/too-many-requests1.js";
import { unauthorized1Schema, type Unauthorized1 } from "../models/unauthorized1.js";
import type { Servers } from "../servers.js";

export class Shows {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  checkUsersSavedShows(
    request: Shows.CheckUsersSavedShowsRequest,
    options?: RequestOptions,
  ): ApiPromise<boolean[], Shows.CheckUsersSavedShowsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/me/shows/contains"),
        auth: this.#auth.oauth20,
        query: [{ name: "ids", value: request.ids, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.boolean()) },
        errorFactory: Shows.CheckUsersSavedShowsError,
      },
      options,
    );
  }

  getAShow(
    request: Shows.GetAShowRequest,
    options?: RequestOptions,
  ): ApiPromise<ShowObject, Shows.GetAShowError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/shows/{id}"),
        auth: this.#auth.oauth20,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [{ name: "market", value: request.market, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: showObjectSchema },
        errorFactory: Shows.GetAShowError,
      },
      options,
    );
  }

  getAShowsEpisodes(
    request: Shows.GetAShowsEpisodesRequest,
    options?: RequestOptions,
  ): ApiPromise<PagingSimplifiedEpisodeObject, Shows.GetAShowsEpisodesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/shows/{id}/episodes"),
        auth: this.#auth.oauth20,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [
          { name: "market", value: request.market, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.number(), 20) },
          { name: "offset", value: request.offset, schema: s.defaulted(s.number(), 0) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: pagingSimplifiedEpisodeObjectSchema },
        errorFactory: Shows.GetAShowsEpisodesError,
      },
      options,
    );
  }

  getMultipleShows(
    request: Shows.GetMultipleShowsRequest,
    options?: RequestOptions,
  ): ApiPromise<ManySimplifiedShows, Shows.GetMultipleShowsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/shows"),
        auth: this.#auth.oauth20,
        query: [
          { name: "ids", value: request.ids, schema: s.string() },
          { name: "market", value: request.market, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: manySimplifiedShowsSchema },
        errorFactory: Shows.GetMultipleShowsError,
      },
      options,
    );
  }

  getUsersSavedShows(
    request: Shows.GetUsersSavedShowsRequest,
    options?: RequestOptions,
  ): ApiPromise<PagingSavedShowObject, Shows.GetUsersSavedShowsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/me/shows"),
        auth: this.#auth.oauth20,
        query: [
          { name: "limit", value: request.limit, schema: s.defaulted(s.number(), 20) },
          { name: "offset", value: request.offset, schema: s.defaulted(s.number(), 0) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: pagingSavedShowObjectSchema },
        errorFactory: Shows.GetUsersSavedShowsError,
      },
      options,
    );
  }

  removeShowsUser(
    request: Shows.RemoveShowsUserRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Shows.RemoveShowsUserError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.default("/me/shows"),
        auth: this.#auth.oauth20,
        query: [
          { name: "ids", value: request.ids, schema: s.string() },
          { name: "market", value: request.market, schema: s.optional(s.string()) },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => removeShowsRequestSchema)),
        },
      },
      {
        success: { kind: "empty" },
        errorFactory: Shows.RemoveShowsUserError,
      },
      options,
    );
  }

  saveShowsUser(
    request: Shows.SaveShowsUserRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Shows.SaveShowsUserError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        url: this.#servers.default("/me/shows"),
        auth: this.#auth.oauth20,
        query: [{ name: "ids", value: request.ids, schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => saveShowsRequestSchema)) },
      },
      {
        success: { kind: "empty" },
        errorFactory: Shows.SaveShowsUserError,
      },
      options,
    );
  }
}

export namespace Shows {
  export type CheckUsersSavedShowsRequest = {
    ids: string;
  };

  export class CheckUsersSavedShowsError extends ResponseError<
    | Declared<"unauthorized1", Unauthorized1>
    | Declared<"forbidden1", Forbidden1>
    | Declared<"tooManyRequests1", TooManyRequests1>
  > {
    static readonly errors: ErrorDecoders<CheckUsersSavedShowsError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }

  export type GetAShowRequest = {
    id: string;
    market?: string;
  };

  export class GetAShowError extends ResponseError<
    | Declared<"unauthorized1", Unauthorized1>
    | Declared<"forbidden1", Forbidden1>
    | Declared<"tooManyRequests1", TooManyRequests1>
  > {
    static readonly errors: ErrorDecoders<GetAShowError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }

  export type GetAShowsEpisodesRequest = {
    id: string;
    market?: string;
    limit?: number;
    offset?: number;
  };

  export class GetAShowsEpisodesError extends ResponseError<
    | Declared<"unauthorized1", Unauthorized1>
    | Declared<"forbidden1", Forbidden1>
    | Declared<"tooManyRequests1", TooManyRequests1>
  > {
    static readonly errors: ErrorDecoders<GetAShowsEpisodesError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }

  export type GetMultipleShowsRequest = {
    ids: string;
    market?: string;
  };

  export class GetMultipleShowsError extends ResponseError<
    | Declared<"unauthorized1", Unauthorized1>
    | Declared<"forbidden1", Forbidden1>
    | Declared<"tooManyRequests1", TooManyRequests1>
  > {
    static readonly errors: ErrorDecoders<GetMultipleShowsError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }

  export type GetUsersSavedShowsRequest = {
    limit?: number;
    offset?: number;
  };

  export class GetUsersSavedShowsError extends ResponseError<
    | Declared<"unauthorized1", Unauthorized1>
    | Declared<"forbidden1", Forbidden1>
    | Declared<"tooManyRequests1", TooManyRequests1>
  > {
    static readonly errors: ErrorDecoders<GetUsersSavedShowsError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }

  export type RemoveShowsUserRequest = {
    ids: string;
    market?: string;
    body?: RemoveShowsRequest;
  };

  export class RemoveShowsUserError extends ResponseError<
    | Declared<"unauthorized1", Unauthorized1>
    | Declared<"forbidden1", Forbidden1>
    | Declared<"tooManyRequests1", TooManyRequests1>
  > {
    static readonly errors: ErrorDecoders<RemoveShowsUserError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }

  export type SaveShowsUserRequest = {
    ids: string;
    body?: SaveShowsRequest;
  };

  export class SaveShowsUserError extends ResponseError<
    | Declared<"unauthorized1", Unauthorized1>
    | Declared<"forbidden1", Forbidden1>
    | Declared<"tooManyRequests1", TooManyRequests1>
  > {
    static readonly errors: ErrorDecoders<SaveShowsUserError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }
}
