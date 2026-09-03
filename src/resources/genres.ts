import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import { forbidden1Schema, type Forbidden1 } from "../models/forbidden1.js";
import { manyGenresSchema, type ManyGenres } from "../models/many-genres.js";
import { tooManyRequests1Schema, type TooManyRequests1 } from "../models/too-many-requests1.js";
import { unauthorized1Schema, type Unauthorized1 } from "../models/unauthorized1.js";
import type { Servers } from "../servers.js";

export class Genres {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  getRecommendationGenres(
    options?: RequestOptions,
  ): ApiPromise<ManyGenres, Genres.GetRecommendationGenresError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/recommendations/available-genre-seeds"),
        auth: this.#auth.oauth20,
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: manyGenresSchema },
        errorFactory: Genres.GetRecommendationGenresError,
      },
      options,
    );
  }
}

export namespace Genres {
  export class GetRecommendationGenresError extends ResponseError<
    | Declared<"unauthorized1", Unauthorized1>
    | Declared<"forbidden1", Forbidden1>
    | Declared<"tooManyRequests1", TooManyRequests1>
  > {
    static readonly errors: ErrorDecoders<GetRecommendationGenresError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }
}
