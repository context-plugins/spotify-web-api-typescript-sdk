import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { forbidden1Schema, type Forbidden1 } from "../models/forbidden1.js";
import { includeExternalSchema, type IncludeExternal } from "../models/include-external.js";
import { itemtypeSchema, type Itemtype } from "../models/itemtype.js";
import { searchItemsSchema, type SearchItems } from "../models/search-items.js";
import { tooManyRequests1Schema, type TooManyRequests1 } from "../models/too-many-requests1.js";
import { unauthorized1Schema, type Unauthorized1 } from "../models/unauthorized1.js";
import type { Servers } from "../servers.js";

export class Search {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  search(
    request: Search.SearchRequest,
    options?: RequestOptions,
  ): ApiPromise<SearchItems, Search.SearchError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/search"),
        auth: anyAuth(this.#auth.oauth20, this.#auth.oauth20ClientCredentials),
        query: [
          { name: "q", value: request.q, schema: s.string() },
          { name: "type", value: request.type, schema: s.array(s.lazy(() => itemtypeSchema)) },
          { name: "market", value: request.market, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.number(), 20) },
          { name: "offset", value: request.offset, schema: s.defaulted(s.number(), 0) },
          {
            name: "include_external",
            value: request.includeExternal,
            schema: s.optional(s.lazy(() => includeExternalSchema)),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: searchItemsSchema },
        errorFactory: Search.SearchError,
      },
      options,
    );
  }
}

export namespace Search {
  export type SearchRequest = {
    q: string;
    type: Itemtype[];
    market?: string;
    limit?: number;
    offset?: number;
    includeExternal?: IncludeExternal;
  };

  export class SearchError extends ResponseError<
    | Declared<"unauthorized1", Unauthorized1>
    | Declared<"forbidden1", Forbidden1>
    | Declared<"tooManyRequests1", TooManyRequests1>
  > {
    static readonly errors: ErrorDecoders<SearchError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }
}
