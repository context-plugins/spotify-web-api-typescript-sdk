import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { audiobookObjectSchema, type AudiobookObject } from "../models/audiobook-object.js";
import { badRequest1Schema, type BadRequest1 } from "../models/bad-request1.js";
import { forbidden1Schema, type Forbidden1 } from "../models/forbidden1.js";
import { manyAudiobooksSchema, type ManyAudiobooks } from "../models/many-audiobooks.js";
import { notFound1Schema, type NotFound1 } from "../models/not-found1.js";
import {
  pagingSavedAudiobookObjectSchema,
  type PagingSavedAudiobookObject,
} from "../models/paging-saved-audiobook-object.js";
import {
  pagingSimplifiedChapterObjectSchema,
  type PagingSimplifiedChapterObject,
} from "../models/paging-simplified-chapter-object.js";
import { tooManyRequests1Schema, type TooManyRequests1 } from "../models/too-many-requests1.js";
import { unauthorized1Schema, type Unauthorized1 } from "../models/unauthorized1.js";
import type { Servers } from "../servers.js";

export class Audiobooks {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  checkUsersSavedAudiobooks(
    request: Audiobooks.CheckUsersSavedAudiobooksRequest,
    options?: RequestOptions,
  ): ApiPromise<boolean[], Audiobooks.CheckUsersSavedAudiobooksError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/me/audiobooks/contains"),
        auth: this.#auth.oauth20,
        query: [{ name: "ids", value: request.ids, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.boolean()) },
        errorFactory: Audiobooks.CheckUsersSavedAudiobooksError,
      },
      options,
    );
  }

  getAnAudiobook(
    request: Audiobooks.GetAnAudiobookRequest,
    options?: RequestOptions,
  ): ApiPromise<AudiobookObject, Audiobooks.GetAnAudiobookError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/audiobooks/{id}"),
        auth: this.#auth.oauth20,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [{ name: "market", value: request.market, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: audiobookObjectSchema },
        errorFactory: Audiobooks.GetAnAudiobookError,
      },
      options,
    );
  }

  getAudiobookChapters(
    request: Audiobooks.GetAudiobookChaptersRequest,
    options?: RequestOptions,
  ): ApiPromise<PagingSimplifiedChapterObject, Audiobooks.GetAudiobookChaptersError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/audiobooks/{id}/chapters"),
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
        success: { kind: "json", schema: pagingSimplifiedChapterObjectSchema },
        errorFactory: Audiobooks.GetAudiobookChaptersError,
      },
      options,
    );
  }

  getMultipleAudiobooks(
    request: Audiobooks.GetMultipleAudiobooksRequest,
    options?: RequestOptions,
  ): ApiPromise<ManyAudiobooks, Audiobooks.GetMultipleAudiobooksError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/audiobooks"),
        auth: this.#auth.oauth20,
        query: [
          { name: "ids", value: request.ids, schema: s.string() },
          { name: "market", value: request.market, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: manyAudiobooksSchema },
        errorFactory: Audiobooks.GetMultipleAudiobooksError,
      },
      options,
    );
  }

  getUsersSavedAudiobooks(
    request: Audiobooks.GetUsersSavedAudiobooksRequest,
    options?: RequestOptions,
  ): ApiPromise<PagingSavedAudiobookObject, Audiobooks.GetUsersSavedAudiobooksError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/me/audiobooks"),
        auth: this.#auth.oauth20,
        query: [
          { name: "limit", value: request.limit, schema: s.defaulted(s.number(), 20) },
          { name: "offset", value: request.offset, schema: s.defaulted(s.number(), 0) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: pagingSavedAudiobookObjectSchema },
        errorFactory: Audiobooks.GetUsersSavedAudiobooksError,
      },
      options,
    );
  }

  removeAudiobooksUser(
    request: Audiobooks.RemoveAudiobooksUserRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Audiobooks.RemoveAudiobooksUserError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.default("/me/audiobooks"),
        auth: this.#auth.oauth20,
        query: [{ name: "ids", value: request.ids, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Audiobooks.RemoveAudiobooksUserError,
      },
      options,
    );
  }

  saveAudiobooksUser(
    request: Audiobooks.SaveAudiobooksUserRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Audiobooks.SaveAudiobooksUserError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        url: this.#servers.default("/me/audiobooks"),
        auth: this.#auth.oauth20,
        query: [{ name: "ids", value: request.ids, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Audiobooks.SaveAudiobooksUserError,
      },
      options,
    );
  }
}

export namespace Audiobooks {
  export type CheckUsersSavedAudiobooksRequest = {
    ids: string;
  };

  export class CheckUsersSavedAudiobooksError extends ResponseError<
    | Declared<"unauthorized1", Unauthorized1>
    | Declared<"forbidden1", Forbidden1>
    | Declared<"tooManyRequests1", TooManyRequests1>
  > {
    static readonly errors: ErrorDecoders<CheckUsersSavedAudiobooksError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }

  export type GetAnAudiobookRequest = {
    id: string;
    market?: string;
  };

  export class GetAnAudiobookError extends ResponseError<
    | Declared<"badRequest1", BadRequest1>
    | Declared<"unauthorized1", Unauthorized1>
    | Declared<"forbidden1", Forbidden1>
    | Declared<"notFound1", NotFound1>
    | Declared<"tooManyRequests1", TooManyRequests1>
  > {
    static readonly errors: ErrorDecoders<GetAnAudiobookError> = [
      { on: 400, kind: "badRequest1", decode: { kind: "json", schema: badRequest1Schema } },
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 404, kind: "notFound1", decode: { kind: "json", schema: notFound1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }

  export type GetAudiobookChaptersRequest = {
    id: string;
    market?: string;
    limit?: number;
    offset?: number;
  };

  export class GetAudiobookChaptersError extends ResponseError<
    | Declared<"unauthorized1", Unauthorized1>
    | Declared<"forbidden1", Forbidden1>
    | Declared<"tooManyRequests1", TooManyRequests1>
  > {
    static readonly errors: ErrorDecoders<GetAudiobookChaptersError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }

  export type GetMultipleAudiobooksRequest = {
    ids: string;
    market?: string;
  };

  export class GetMultipleAudiobooksError extends ResponseError<
    | Declared<"unauthorized1", Unauthorized1>
    | Declared<"forbidden1", Forbidden1>
    | Declared<"tooManyRequests1", TooManyRequests1>
  > {
    static readonly errors: ErrorDecoders<GetMultipleAudiobooksError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }

  export type GetUsersSavedAudiobooksRequest = {
    limit?: number;
    offset?: number;
  };

  export class GetUsersSavedAudiobooksError extends ResponseError<
    | Declared<"unauthorized1", Unauthorized1>
    | Declared<"forbidden1", Forbidden1>
    | Declared<"tooManyRequests1", TooManyRequests1>
  > {
    static readonly errors: ErrorDecoders<GetUsersSavedAudiobooksError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }

  export type RemoveAudiobooksUserRequest = {
    ids: string;
  };

  export class RemoveAudiobooksUserError extends ResponseError<
    | Declared<"unauthorized1", Unauthorized1>
    | Declared<"forbidden1", Forbidden1>
    | Declared<"tooManyRequests1", TooManyRequests1>
  > {
    static readonly errors: ErrorDecoders<RemoveAudiobooksUserError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }

  export type SaveAudiobooksUserRequest = {
    ids: string;
  };

  export class SaveAudiobooksUserError extends ResponseError<
    | Declared<"unauthorized1", Unauthorized1>
    | Declared<"forbidden1", Forbidden1>
    | Declared<"tooManyRequests1", TooManyRequests1>
  > {
    static readonly errors: ErrorDecoders<SaveAudiobooksUserError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }
}
