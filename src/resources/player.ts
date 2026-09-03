import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  currentlyPlayingContextObjectSchema,
  type CurrentlyPlayingContextObject,
} from "../models/currently-playing-context-object.js";
import {
  currentlyPlayingObjectSchema,
  type CurrentlyPlayingObject,
} from "../models/currently-playing-object.js";
import {
  cursorPagingPlayHistoryObjectSchema,
  type CursorPagingPlayHistoryObject,
} from "../models/cursor-paging-play-history-object.js";
import { forbidden1Schema, type Forbidden1 } from "../models/forbidden1.js";
import { manyDevicesSchema, type ManyDevices } from "../models/many-devices.js";
import { mePlayerRequestSchema, type MePlayerRequest } from "../models/me-player-request.js";
import { queueObjectSchema, type QueueObject } from "../models/queue-object.js";
import {
  startOrResumePlaybackRequestSchema,
  type StartOrResumePlaybackRequest,
} from "../models/start-or-resume-playback-request.js";
import { tooManyRequests1Schema, type TooManyRequests1 } from "../models/too-many-requests1.js";
import { unauthorized1Schema, type Unauthorized1 } from "../models/unauthorized1.js";
import type { Servers } from "../servers.js";

export class Player {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  addToQueue(
    request: Player.AddToQueueRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Player.AddToQueueError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/me/player/queue"),
        auth: this.#auth.oauth20,
        query: [
          { name: "uri", value: request.uri, schema: s.string() },
          { name: "device_id", value: request.deviceId, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Player.AddToQueueError,
      },
      options,
    );
  }

  getAUsersAvailableDevices(
    options?: RequestOptions,
  ): ApiPromise<ManyDevices, Player.GetAUsersAvailableDevicesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/me/player/devices"),
        auth: this.#auth.oauth20,
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: manyDevicesSchema },
        errorFactory: Player.GetAUsersAvailableDevicesError,
      },
      options,
    );
  }

  getInformationAboutTheUsersCurrentPlayback(
    request: Player.GetInformationAboutTheUsersCurrentPlaybackRequest,
    options?: RequestOptions,
  ): ApiPromise<CurrentlyPlayingContextObject, Player.GetInformationAboutTheUsersCurrentPlaybackError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/me/player"),
        auth: this.#auth.oauth20,
        query: [
          { name: "market", value: request.market, schema: s.optional(s.string()) },
          { name: "additional_types", value: request.additionalTypes, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: currentlyPlayingContextObjectSchema },
        errorFactory: Player.GetInformationAboutTheUsersCurrentPlaybackError,
      },
      options,
    );
  }

  getQueue(options?: RequestOptions): ApiPromise<QueueObject, Player.GetQueueError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/me/player/queue"),
        auth: this.#auth.oauth20,
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: queueObjectSchema },
        errorFactory: Player.GetQueueError,
      },
      options,
    );
  }

  getRecentlyPlayed(
    request: Player.GetRecentlyPlayedRequest,
    options?: RequestOptions,
  ): ApiPromise<CursorPagingPlayHistoryObject, Player.GetRecentlyPlayedError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/me/player/recently-played"),
        auth: this.#auth.oauth20,
        query: [
          { name: "limit", value: request.limit, schema: s.defaulted(s.number(), 20) },
          { name: "after", value: request.after, schema: s.optional(s.number()) },
          { name: "before", value: request.before, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: cursorPagingPlayHistoryObjectSchema },
        errorFactory: Player.GetRecentlyPlayedError,
      },
      options,
    );
  }

  getTheUsersCurrentlyPlayingTrack(
    request: Player.GetTheUsersCurrentlyPlayingTrackRequest,
    options?: RequestOptions,
  ): ApiPromise<CurrentlyPlayingObject, Player.GetTheUsersCurrentlyPlayingTrackError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/me/player/currently-playing"),
        auth: this.#auth.oauth20,
        query: [
          { name: "market", value: request.market, schema: s.optional(s.string()) },
          { name: "additional_types", value: request.additionalTypes, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: currentlyPlayingObjectSchema },
        errorFactory: Player.GetTheUsersCurrentlyPlayingTrackError,
      },
      options,
    );
  }

  pauseAUsersPlayback(
    request: Player.PauseAUsersPlaybackRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Player.PauseAUsersPlaybackError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        url: this.#servers.default("/me/player/pause"),
        auth: this.#auth.oauth20,
        query: [{ name: "device_id", value: request.deviceId, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Player.PauseAUsersPlaybackError,
      },
      options,
    );
  }

  seekToPositionInCurrentlyPlayingTrack(
    request: Player.SeekToPositionInCurrentlyPlayingTrackRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Player.SeekToPositionInCurrentlyPlayingTrackError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        url: this.#servers.default("/me/player/seek"),
        auth: this.#auth.oauth20,
        query: [
          { name: "position_ms", value: request.positionMs, schema: s.number() },
          { name: "device_id", value: request.deviceId, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Player.SeekToPositionInCurrentlyPlayingTrackError,
      },
      options,
    );
  }

  setRepeatModeOnUsersPlayback(
    request: Player.SetRepeatModeOnUsersPlaybackRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Player.SetRepeatModeOnUsersPlaybackError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        url: this.#servers.default("/me/player/repeat"),
        auth: this.#auth.oauth20,
        query: [
          { name: "state", value: request.state, schema: s.string() },
          { name: "device_id", value: request.deviceId, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Player.SetRepeatModeOnUsersPlaybackError,
      },
      options,
    );
  }

  setVolumeForUsersPlayback(
    request: Player.SetVolumeForUsersPlaybackRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Player.SetVolumeForUsersPlaybackError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        url: this.#servers.default("/me/player/volume"),
        auth: this.#auth.oauth20,
        query: [
          { name: "volume_percent", value: request.volumePercent, schema: s.number() },
          { name: "device_id", value: request.deviceId, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Player.SetVolumeForUsersPlaybackError,
      },
      options,
    );
  }

  skipUsersPlaybackToNextTrack(
    request: Player.SkipUsersPlaybackToNextTrackRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Player.SkipUsersPlaybackToNextTrackError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/me/player/next"),
        auth: this.#auth.oauth20,
        query: [{ name: "device_id", value: request.deviceId, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Player.SkipUsersPlaybackToNextTrackError,
      },
      options,
    );
  }

  skipUsersPlaybackToPreviousTrack(
    request: Player.SkipUsersPlaybackToPreviousTrackRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Player.SkipUsersPlaybackToPreviousTrackError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/me/player/previous"),
        auth: this.#auth.oauth20,
        query: [{ name: "device_id", value: request.deviceId, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Player.SkipUsersPlaybackToPreviousTrackError,
      },
      options,
    );
  }

  startAUsersPlayback(
    request: Player.StartAUsersPlaybackRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Player.StartAUsersPlaybackError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        url: this.#servers.default("/me/player/play"),
        auth: this.#auth.oauth20,
        query: [{ name: "device_id", value: request.deviceId, schema: s.optional(s.string()) }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => startOrResumePlaybackRequestSchema)),
        },
      },
      {
        success: { kind: "empty" },
        errorFactory: Player.StartAUsersPlaybackError,
      },
      options,
    );
  }

  toggleShuffleForUsersPlayback(
    request: Player.ToggleShuffleForUsersPlaybackRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Player.ToggleShuffleForUsersPlaybackError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        url: this.#servers.default("/me/player/shuffle"),
        auth: this.#auth.oauth20,
        query: [
          { name: "state", value: request.state, schema: s.boolean() },
          { name: "device_id", value: request.deviceId, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Player.ToggleShuffleForUsersPlaybackError,
      },
      options,
    );
  }

  transferAUsersPlayback(
    request: Player.TransferAUsersPlaybackRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Player.TransferAUsersPlaybackError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        url: this.#servers.default("/me/player"),
        auth: this.#auth.oauth20,
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => mePlayerRequestSchema)) },
      },
      {
        success: { kind: "empty" },
        errorFactory: Player.TransferAUsersPlaybackError,
      },
      options,
    );
  }
}

export namespace Player {
  export type AddToQueueRequest = {
    uri: string;
    deviceId?: string;
  };

  export class AddToQueueError extends ResponseError<
    | Declared<"unauthorized1", Unauthorized1>
    | Declared<"forbidden1", Forbidden1>
    | Declared<"tooManyRequests1", TooManyRequests1>
  > {
    static readonly errors: ErrorDecoders<AddToQueueError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }

  export class GetAUsersAvailableDevicesError extends ResponseError<
    | Declared<"unauthorized1", Unauthorized1>
    | Declared<"forbidden1", Forbidden1>
    | Declared<"tooManyRequests1", TooManyRequests1>
  > {
    static readonly errors: ErrorDecoders<GetAUsersAvailableDevicesError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }

  export type GetInformationAboutTheUsersCurrentPlaybackRequest = {
    market?: string;
    additionalTypes?: string;
  };

  export class GetInformationAboutTheUsersCurrentPlaybackError extends ResponseError<
    | Declared<"unauthorized1", Unauthorized1>
    | Declared<"forbidden1", Forbidden1>
    | Declared<"tooManyRequests1", TooManyRequests1>
  > {
    static readonly errors: ErrorDecoders<GetInformationAboutTheUsersCurrentPlaybackError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }

  export class GetQueueError extends ResponseError<
    | Declared<"unauthorized1", Unauthorized1>
    | Declared<"forbidden1", Forbidden1>
    | Declared<"tooManyRequests1", TooManyRequests1>
  > {
    static readonly errors: ErrorDecoders<GetQueueError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }

  export type GetRecentlyPlayedRequest = {
    limit?: number;
    after?: number;
    before?: number;
  };

  export class GetRecentlyPlayedError extends ResponseError<
    | Declared<"unauthorized1", Unauthorized1>
    | Declared<"forbidden1", Forbidden1>
    | Declared<"tooManyRequests1", TooManyRequests1>
  > {
    static readonly errors: ErrorDecoders<GetRecentlyPlayedError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }

  export type GetTheUsersCurrentlyPlayingTrackRequest = {
    market?: string;
    additionalTypes?: string;
  };

  export class GetTheUsersCurrentlyPlayingTrackError extends ResponseError<
    | Declared<"unauthorized1", Unauthorized1>
    | Declared<"forbidden1", Forbidden1>
    | Declared<"tooManyRequests1", TooManyRequests1>
  > {
    static readonly errors: ErrorDecoders<GetTheUsersCurrentlyPlayingTrackError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }

  export type PauseAUsersPlaybackRequest = {
    deviceId?: string;
  };

  export class PauseAUsersPlaybackError extends ResponseError<
    | Declared<"unauthorized1", Unauthorized1>
    | Declared<"forbidden1", Forbidden1>
    | Declared<"tooManyRequests1", TooManyRequests1>
  > {
    static readonly errors: ErrorDecoders<PauseAUsersPlaybackError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }

  export type SeekToPositionInCurrentlyPlayingTrackRequest = {
    positionMs: number;
    deviceId?: string;
  };

  export class SeekToPositionInCurrentlyPlayingTrackError extends ResponseError<
    | Declared<"unauthorized1", Unauthorized1>
    | Declared<"forbidden1", Forbidden1>
    | Declared<"tooManyRequests1", TooManyRequests1>
  > {
    static readonly errors: ErrorDecoders<SeekToPositionInCurrentlyPlayingTrackError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }

  export type SetRepeatModeOnUsersPlaybackRequest = {
    state: string;
    deviceId?: string;
  };

  export class SetRepeatModeOnUsersPlaybackError extends ResponseError<
    | Declared<"unauthorized1", Unauthorized1>
    | Declared<"forbidden1", Forbidden1>
    | Declared<"tooManyRequests1", TooManyRequests1>
  > {
    static readonly errors: ErrorDecoders<SetRepeatModeOnUsersPlaybackError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }

  export type SetVolumeForUsersPlaybackRequest = {
    volumePercent: number;
    deviceId?: string;
  };

  export class SetVolumeForUsersPlaybackError extends ResponseError<
    | Declared<"unauthorized1", Unauthorized1>
    | Declared<"forbidden1", Forbidden1>
    | Declared<"tooManyRequests1", TooManyRequests1>
  > {
    static readonly errors: ErrorDecoders<SetVolumeForUsersPlaybackError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }

  export type SkipUsersPlaybackToNextTrackRequest = {
    deviceId?: string;
  };

  export class SkipUsersPlaybackToNextTrackError extends ResponseError<
    | Declared<"unauthorized1", Unauthorized1>
    | Declared<"forbidden1", Forbidden1>
    | Declared<"tooManyRequests1", TooManyRequests1>
  > {
    static readonly errors: ErrorDecoders<SkipUsersPlaybackToNextTrackError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }

  export type SkipUsersPlaybackToPreviousTrackRequest = {
    deviceId?: string;
  };

  export class SkipUsersPlaybackToPreviousTrackError extends ResponseError<
    | Declared<"unauthorized1", Unauthorized1>
    | Declared<"forbidden1", Forbidden1>
    | Declared<"tooManyRequests1", TooManyRequests1>
  > {
    static readonly errors: ErrorDecoders<SkipUsersPlaybackToPreviousTrackError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }

  export type StartAUsersPlaybackRequest = {
    deviceId?: string;
    body?: StartOrResumePlaybackRequest;
  };

  export class StartAUsersPlaybackError extends ResponseError<
    | Declared<"unauthorized1", Unauthorized1>
    | Declared<"forbidden1", Forbidden1>
    | Declared<"tooManyRequests1", TooManyRequests1>
  > {
    static readonly errors: ErrorDecoders<StartAUsersPlaybackError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }

  export type ToggleShuffleForUsersPlaybackRequest = {
    state: boolean;
    deviceId?: string;
  };

  export class ToggleShuffleForUsersPlaybackError extends ResponseError<
    | Declared<"unauthorized1", Unauthorized1>
    | Declared<"forbidden1", Forbidden1>
    | Declared<"tooManyRequests1", TooManyRequests1>
  > {
    static readonly errors: ErrorDecoders<ToggleShuffleForUsersPlaybackError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }

  export type TransferAUsersPlaybackRequest = {
    body?: MePlayerRequest;
  };

  export class TransferAUsersPlaybackError extends ResponseError<
    | Declared<"unauthorized1", Unauthorized1>
    | Declared<"forbidden1", Forbidden1>
    | Declared<"tooManyRequests1", TooManyRequests1>
  > {
    static readonly errors: ErrorDecoders<TransferAUsersPlaybackError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }
}
