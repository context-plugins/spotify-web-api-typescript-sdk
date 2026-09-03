import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { episodeObjectSchema, type EpisodeObject } from "../models/episode-object.js";
import { forbidden1Schema, type Forbidden1 } from "../models/forbidden1.js";
import { manyEpisodesSchema, type ManyEpisodes } from "../models/many-episodes.js";
import {
  pagingSavedEpisodeObjectSchema,
  type PagingSavedEpisodeObject,
} from "../models/paging-saved-episode-object.js";
import {
  pagingSimplifiedEpisodeObjectSchema,
  type PagingSimplifiedEpisodeObject,
} from "../models/paging-simplified-episode-object.js";
import {
  removeEpisodesRequestSchema,
  type RemoveEpisodesRequest,
} from "../models/remove-episodes-request.js";
import { saveEpisodesRequestSchema, type SaveEpisodesRequest } from "../models/save-episodes-request.js";
import { tooManyRequests1Schema, type TooManyRequests1 } from "../models/too-many-requests1.js";
import { unauthorized1Schema, type Unauthorized1 } from "../models/unauthorized1.js";
import type { Servers } from "../servers.js";

export class Episodes {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  checkUsersSavedEpisodes(
    request: Episodes.CheckUsersSavedEpisodesRequest,
    options?: RequestOptions,
  ): ApiPromise<boolean[], Episodes.CheckUsersSavedEpisodesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/me/episodes/contains"),
        auth: this.#auth.oauth20,
        query: [{ name: "ids", value: request.ids, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.boolean()) },
        errorFactory: Episodes.CheckUsersSavedEpisodesError,
      },
      options,
    );
  }

  getAShowsEpisodes(
    request: Episodes.GetAShowsEpisodesRequest,
    options?: RequestOptions,
  ): ApiPromise<PagingSimplifiedEpisodeObject, Episodes.GetAShowsEpisodesError> {
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
        errorFactory: Episodes.GetAShowsEpisodesError,
      },
      options,
    );
  }

  getAnEpisode(
    request: Episodes.GetAnEpisodeRequest,
    options?: RequestOptions,
  ): ApiPromise<EpisodeObject, Episodes.GetAnEpisodeError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/episodes/{id}"),
        auth: this.#auth.oauth20,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [{ name: "market", value: request.market, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: episodeObjectSchema },
        errorFactory: Episodes.GetAnEpisodeError,
      },
      options,
    );
  }

  getMultipleEpisodes(
    request: Episodes.GetMultipleEpisodesRequest,
    options?: RequestOptions,
  ): ApiPromise<ManyEpisodes, Episodes.GetMultipleEpisodesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/episodes"),
        auth: this.#auth.oauth20,
        query: [
          { name: "ids", value: request.ids, schema: s.string() },
          { name: "market", value: request.market, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: manyEpisodesSchema },
        errorFactory: Episodes.GetMultipleEpisodesError,
      },
      options,
    );
  }

  getUsersSavedEpisodes(
    request: Episodes.GetUsersSavedEpisodesRequest,
    options?: RequestOptions,
  ): ApiPromise<PagingSavedEpisodeObject, Episodes.GetUsersSavedEpisodesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/me/episodes"),
        auth: this.#auth.oauth20,
        query: [
          { name: "market", value: request.market, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.number(), 20) },
          { name: "offset", value: request.offset, schema: s.defaulted(s.number(), 0) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: pagingSavedEpisodeObjectSchema },
        errorFactory: Episodes.GetUsersSavedEpisodesError,
      },
      options,
    );
  }

  removeEpisodesUser(
    request: Episodes.RemoveEpisodesUserRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Episodes.RemoveEpisodesUserError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.default("/me/episodes"),
        auth: this.#auth.oauth20,
        query: [{ name: "ids", value: request.ids, schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => removeEpisodesRequestSchema)),
        },
      },
      {
        success: { kind: "empty" },
        errorFactory: Episodes.RemoveEpisodesUserError,
      },
      options,
    );
  }

  saveEpisodesUser(
    request: Episodes.SaveEpisodesUserRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Episodes.SaveEpisodesUserError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        url: this.#servers.default("/me/episodes"),
        auth: this.#auth.oauth20,
        query: [{ name: "ids", value: request.ids, schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => saveEpisodesRequestSchema)),
        },
      },
      {
        success: { kind: "empty" },
        errorFactory: Episodes.SaveEpisodesUserError,
      },
      options,
    );
  }
}

export namespace Episodes {
  export type CheckUsersSavedEpisodesRequest = {
    ids: string;
  };

  export class CheckUsersSavedEpisodesError extends ResponseError<
    | Declared<"unauthorized1", Unauthorized1>
    | Declared<"forbidden1", Forbidden1>
    | Declared<"tooManyRequests1", TooManyRequests1>
  > {
    static readonly errors: ErrorDecoders<CheckUsersSavedEpisodesError> = [
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

  export type GetAnEpisodeRequest = {
    id: string;
    market?: string;
  };

  export class GetAnEpisodeError extends ResponseError<
    | Declared<"unauthorized1", Unauthorized1>
    | Declared<"forbidden1", Forbidden1>
    | Declared<"tooManyRequests1", TooManyRequests1>
  > {
    static readonly errors: ErrorDecoders<GetAnEpisodeError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }

  export type GetMultipleEpisodesRequest = {
    ids: string;
    market?: string;
  };

  export class GetMultipleEpisodesError extends ResponseError<
    | Declared<"unauthorized1", Unauthorized1>
    | Declared<"forbidden1", Forbidden1>
    | Declared<"tooManyRequests1", TooManyRequests1>
  > {
    static readonly errors: ErrorDecoders<GetMultipleEpisodesError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }

  export type GetUsersSavedEpisodesRequest = {
    market?: string;
    limit?: number;
    offset?: number;
  };

  export class GetUsersSavedEpisodesError extends ResponseError<
    | Declared<"unauthorized1", Unauthorized1>
    | Declared<"forbidden1", Forbidden1>
    | Declared<"tooManyRequests1", TooManyRequests1>
  > {
    static readonly errors: ErrorDecoders<GetUsersSavedEpisodesError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }

  export type RemoveEpisodesUserRequest = {
    ids: string;
    body?: RemoveEpisodesRequest;
  };

  export class RemoveEpisodesUserError extends ResponseError<
    | Declared<"unauthorized1", Unauthorized1>
    | Declared<"forbidden1", Forbidden1>
    | Declared<"tooManyRequests1", TooManyRequests1>
  > {
    static readonly errors: ErrorDecoders<RemoveEpisodesUserError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }

  export type SaveEpisodesUserRequest = {
    ids: string;
    body?: SaveEpisodesRequest;
  };

  export class SaveEpisodesUserError extends ResponseError<
    | Declared<"unauthorized1", Unauthorized1>
    | Declared<"forbidden1", Forbidden1>
    | Declared<"tooManyRequests1", TooManyRequests1>
  > {
    static readonly errors: ErrorDecoders<SaveEpisodesUserError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }
}
