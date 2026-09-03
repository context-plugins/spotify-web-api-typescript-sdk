import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { chapterObjectSchema, type ChapterObject } from "../models/chapter-object.js";
import { forbidden1Schema, type Forbidden1 } from "../models/forbidden1.js";
import { manyChaptersSchema, type ManyChapters } from "../models/many-chapters.js";
import {
  pagingSimplifiedChapterObjectSchema,
  type PagingSimplifiedChapterObject,
} from "../models/paging-simplified-chapter-object.js";
import { tooManyRequests1Schema, type TooManyRequests1 } from "../models/too-many-requests1.js";
import { unauthorized1Schema, type Unauthorized1 } from "../models/unauthorized1.js";
import type { Servers } from "../servers.js";

export class Chapters {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  getAChapter(
    request: Chapters.GetAChapterRequest,
    options?: RequestOptions,
  ): ApiPromise<ChapterObject, Chapters.GetAChapterError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/chapters/{id}"),
        auth: this.#auth.oauth20,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [{ name: "market", value: request.market, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: chapterObjectSchema },
        errorFactory: Chapters.GetAChapterError,
      },
      options,
    );
  }

  getAudiobookChapters(
    request: Chapters.GetAudiobookChaptersRequest,
    options?: RequestOptions,
  ): ApiPromise<PagingSimplifiedChapterObject, Chapters.GetAudiobookChaptersError> {
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
        errorFactory: Chapters.GetAudiobookChaptersError,
      },
      options,
    );
  }

  getSeveralChapters(
    request: Chapters.GetSeveralChaptersRequest,
    options?: RequestOptions,
  ): ApiPromise<ManyChapters, Chapters.GetSeveralChaptersError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/chapters"),
        auth: this.#auth.oauth20,
        query: [
          { name: "ids", value: request.ids, schema: s.string() },
          { name: "market", value: request.market, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: manyChaptersSchema },
        errorFactory: Chapters.GetSeveralChaptersError,
      },
      options,
    );
  }
}

export namespace Chapters {
  export type GetAChapterRequest = {
    id: string;
    market?: string;
  };

  export class GetAChapterError extends ResponseError<
    | Declared<"unauthorized1", Unauthorized1>
    | Declared<"forbidden1", Forbidden1>
    | Declared<"tooManyRequests1", TooManyRequests1>
  > {
    static readonly errors: ErrorDecoders<GetAChapterError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
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

  export type GetSeveralChaptersRequest = {
    ids: string;
    market?: string;
  };

  export class GetSeveralChaptersError extends ResponseError<
    | Declared<"unauthorized1", Unauthorized1>
    | Declared<"forbidden1", Forbidden1>
    | Declared<"tooManyRequests1", TooManyRequests1>
  > {
    static readonly errors: ErrorDecoders<GetSeveralChaptersError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }
}
