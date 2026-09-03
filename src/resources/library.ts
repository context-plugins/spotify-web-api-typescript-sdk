import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { cursorPagedArtistsSchema, type CursorPagedArtists } from "../models/cursor-paged-artists.js";
import {
  followArtistsOrUsersRequestSchema,
  type FollowArtistsOrUsersRequest,
} from "../models/follow-artists-or-users-request.js";
import { forbidden1Schema, type Forbidden1 } from "../models/forbidden1.js";
import { itemType1Schema, type ItemType1 } from "../models/item-type1.js";
import { itemType2Schema, type ItemType2 } from "../models/item-type2.js";
import { itemType3Schema, type ItemType3 } from "../models/item-type3.js";
import { pagingArtistObjectSchema, type PagingArtistObject } from "../models/paging-artist-object.js";
import { pagingPlaylistObjectSchema, type PagingPlaylistObject } from "../models/paging-playlist-object.js";
import {
  pagingSavedAlbumObjectSchema,
  type PagingSavedAlbumObject,
} from "../models/paging-saved-album-object.js";
import {
  pagingSavedAudiobookObjectSchema,
  type PagingSavedAudiobookObject,
} from "../models/paging-saved-audiobook-object.js";
import {
  pagingSavedEpisodeObjectSchema,
  type PagingSavedEpisodeObject,
} from "../models/paging-saved-episode-object.js";
import {
  pagingSavedShowObjectSchema,
  type PagingSavedShowObject,
} from "../models/paging-saved-show-object.js";
import {
  pagingSavedTrackObjectSchema,
  type PagingSavedTrackObject,
} from "../models/paging-saved-track-object.js";
import { pagingTrackObjectSchema, type PagingTrackObject } from "../models/paging-track-object.js";
import { playlistObjectSchema, type PlaylistObject } from "../models/playlist-object.js";
import { playlistsRequestSchema, type PlaylistsRequest } from "../models/playlists-request.js";
import { removeAlbumsRequestSchema, type RemoveAlbumsRequest } from "../models/remove-albums-request.js";
import {
  removeEpisodesRequestSchema,
  type RemoveEpisodesRequest,
} from "../models/remove-episodes-request.js";
import { removeShowsRequestSchema, type RemoveShowsRequest } from "../models/remove-shows-request.js";
import { removeTracksRequestSchema, type RemoveTracksRequest } from "../models/remove-tracks-request.js";
import { saveAlbumsRequestSchema, type SaveAlbumsRequest } from "../models/save-albums-request.js";
import { saveEpisodesRequestSchema, type SaveEpisodesRequest } from "../models/save-episodes-request.js";
import { saveShowsRequestSchema, type SaveShowsRequest } from "../models/save-shows-request.js";
import { saveTracksRequestSchema, type SaveTracksRequest } from "../models/save-tracks-request.js";
import { tooManyRequests1Schema, type TooManyRequests1 } from "../models/too-many-requests1.js";
import { unauthorized1Schema, type Unauthorized1 } from "../models/unauthorized1.js";
import {
  unfollowArtistsOrUsersRequestSchema,
  type UnfollowArtistsOrUsersRequest,
} from "../models/unfollow-artists-or-users-request.js";
import {
  usersPlaylistsRequestSchema,
  type UsersPlaylistsRequest,
} from "../models/users-playlists-request.js";
import type { Servers } from "../servers.js";

export class Library {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  changePlaylistDetails(
    request: Library.ChangePlaylistDetailsRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Library.ChangePlaylistDetailsError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        url: this.#servers.default("/playlists/{playlist_id}"),
        auth: this.#auth.oauth20,
        pathParams: [{ name: "playlist_id", value: request.playlistId, schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => playlistsRequestSchema)) },
      },
      {
        success: { kind: "empty" },
        errorFactory: Library.ChangePlaylistDetailsError,
      },
      options,
    );
  }

  checkCurrentUserFollows(
    request: Library.CheckCurrentUserFollowsRequest,
    options?: RequestOptions,
  ): ApiPromise<boolean[], Library.CheckCurrentUserFollowsError> {
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
        errorFactory: Library.CheckCurrentUserFollowsError,
      },
      options,
    );
  }

  checkUsersSavedAlbums(
    request: Library.CheckUsersSavedAlbumsRequest,
    options?: RequestOptions,
  ): ApiPromise<boolean[], Library.CheckUsersSavedAlbumsError> {
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
        errorFactory: Library.CheckUsersSavedAlbumsError,
      },
      options,
    );
  }

  checkUsersSavedAudiobooks(
    request: Library.CheckUsersSavedAudiobooksRequest,
    options?: RequestOptions,
  ): ApiPromise<boolean[], Library.CheckUsersSavedAudiobooksError> {
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
        errorFactory: Library.CheckUsersSavedAudiobooksError,
      },
      options,
    );
  }

  checkUsersSavedEpisodes(
    request: Library.CheckUsersSavedEpisodesRequest,
    options?: RequestOptions,
  ): ApiPromise<boolean[], Library.CheckUsersSavedEpisodesError> {
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
        errorFactory: Library.CheckUsersSavedEpisodesError,
      },
      options,
    );
  }

  checkUsersSavedShows(
    request: Library.CheckUsersSavedShowsRequest,
    options?: RequestOptions,
  ): ApiPromise<boolean[], Library.CheckUsersSavedShowsError> {
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
        errorFactory: Library.CheckUsersSavedShowsError,
      },
      options,
    );
  }

  checkUsersSavedTracks(
    request: Library.CheckUsersSavedTracksRequest,
    options?: RequestOptions,
  ): ApiPromise<boolean[], Library.CheckUsersSavedTracksError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/me/tracks/contains"),
        auth: this.#auth.oauth20,
        query: [{ name: "ids", value: request.ids, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.boolean()) },
        errorFactory: Library.CheckUsersSavedTracksError,
      },
      options,
    );
  }

  createPlaylist(
    request: Library.CreatePlaylistRequest,
    options?: RequestOptions,
  ): ApiPromise<PlaylistObject, Library.CreatePlaylistError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/users/{user_id}/playlists"),
        auth: this.#auth.oauth20,
        pathParams: [{ name: "user_id", value: request.userId, schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => usersPlaylistsRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: playlistObjectSchema },
        errorFactory: Library.CreatePlaylistError,
      },
      options,
    );
  }

  followArtistsUsers(
    request: Library.FollowArtistsUsersRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Library.FollowArtistsUsersError> {
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
        errorFactory: Library.FollowArtistsUsersError,
      },
      options,
    );
  }

  getAListOfCurrentUsersPlaylists(
    request: Library.GetAListOfCurrentUsersPlaylistsRequest,
    options?: RequestOptions,
  ): ApiPromise<PagingPlaylistObject, Library.GetAListOfCurrentUsersPlaylistsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/me/playlists"),
        auth: this.#auth.oauth20,
        query: [
          { name: "limit", value: request.limit, schema: s.defaulted(s.number(), 20) },
          { name: "offset", value: request.offset, schema: s.defaulted(s.number(), 0) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: pagingPlaylistObjectSchema },
        errorFactory: Library.GetAListOfCurrentUsersPlaylistsError,
      },
      options,
    );
  }

  getFollowed(
    request: Library.GetFollowedRequest,
    options?: RequestOptions,
  ): ApiPromise<CursorPagedArtists, Library.GetFollowedError> {
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
        errorFactory: Library.GetFollowedError,
      },
      options,
    );
  }

  getUsersSavedAlbums(
    request: Library.GetUsersSavedAlbumsRequest,
    options?: RequestOptions,
  ): ApiPromise<PagingSavedAlbumObject, Library.GetUsersSavedAlbumsError> {
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
        errorFactory: Library.GetUsersSavedAlbumsError,
      },
      options,
    );
  }

  getUsersSavedAudiobooks(
    request: Library.GetUsersSavedAudiobooksRequest,
    options?: RequestOptions,
  ): ApiPromise<PagingSavedAudiobookObject, Library.GetUsersSavedAudiobooksError> {
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
        errorFactory: Library.GetUsersSavedAudiobooksError,
      },
      options,
    );
  }

  getUsersSavedEpisodes(
    request: Library.GetUsersSavedEpisodesRequest,
    options?: RequestOptions,
  ): ApiPromise<PagingSavedEpisodeObject, Library.GetUsersSavedEpisodesError> {
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
        errorFactory: Library.GetUsersSavedEpisodesError,
      },
      options,
    );
  }

  getUsersSavedShows(
    request: Library.GetUsersSavedShowsRequest,
    options?: RequestOptions,
  ): ApiPromise<PagingSavedShowObject, Library.GetUsersSavedShowsError> {
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
        errorFactory: Library.GetUsersSavedShowsError,
      },
      options,
    );
  }

  getUsersSavedTracks(
    request: Library.GetUsersSavedTracksRequest,
    options?: RequestOptions,
  ): ApiPromise<PagingSavedTrackObject, Library.GetUsersSavedTracksError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/me/tracks"),
        auth: this.#auth.oauth20,
        query: [
          { name: "market", value: request.market, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.number(), 20) },
          { name: "offset", value: request.offset, schema: s.defaulted(s.number(), 0) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: pagingSavedTrackObjectSchema },
        errorFactory: Library.GetUsersSavedTracksError,
      },
      options,
    );
  }

  getUsersTopArtists(
    request: Library.GetUsersTopArtistsRequest,
    options?: RequestOptions,
  ): ApiPromise<PagingArtistObject, Library.GetUsersTopArtistsError> {
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
        errorFactory: Library.GetUsersTopArtistsError,
      },
      options,
    );
  }

  getUsersTopTracks(
    request: Library.GetUsersTopTracksRequest,
    options?: RequestOptions,
  ): ApiPromise<PagingTrackObject, Library.GetUsersTopTracksError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/me/top/tracks"),
        auth: this.#auth.oauth20,
        query: [
          { name: "time_range", value: request.timeRange, schema: s.defaulted(s.string(), "medium_term") },
          { name: "limit", value: request.limit, schema: s.defaulted(s.number(), 20) },
          { name: "offset", value: request.offset, schema: s.defaulted(s.number(), 0) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: pagingTrackObjectSchema },
        errorFactory: Library.GetUsersTopTracksError,
      },
      options,
    );
  }

  removeAlbumsUser(
    request: Library.RemoveAlbumsUserRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Library.RemoveAlbumsUserError> {
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
        errorFactory: Library.RemoveAlbumsUserError,
      },
      options,
    );
  }

  removeAudiobooksUser(
    request: Library.RemoveAudiobooksUserRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Library.RemoveAudiobooksUserError> {
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
        errorFactory: Library.RemoveAudiobooksUserError,
      },
      options,
    );
  }

  removeEpisodesUser(
    request: Library.RemoveEpisodesUserRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Library.RemoveEpisodesUserError> {
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
        errorFactory: Library.RemoveEpisodesUserError,
      },
      options,
    );
  }

  removeShowsUser(
    request: Library.RemoveShowsUserRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Library.RemoveShowsUserError> {
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
        errorFactory: Library.RemoveShowsUserError,
      },
      options,
    );
  }

  removeTracksUser(
    request: Library.RemoveTracksUserRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Library.RemoveTracksUserError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.default("/me/tracks"),
        auth: this.#auth.oauth20,
        query: [{ name: "ids", value: request.ids, schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => removeTracksRequestSchema)),
        },
      },
      {
        success: { kind: "empty" },
        errorFactory: Library.RemoveTracksUserError,
      },
      options,
    );
  }

  saveAlbumsUser(
    request: Library.SaveAlbumsUserRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Library.SaveAlbumsUserError> {
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
        errorFactory: Library.SaveAlbumsUserError,
      },
      options,
    );
  }

  saveAudiobooksUser(
    request: Library.SaveAudiobooksUserRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Library.SaveAudiobooksUserError> {
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
        errorFactory: Library.SaveAudiobooksUserError,
      },
      options,
    );
  }

  saveEpisodesUser(
    request: Library.SaveEpisodesUserRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Library.SaveEpisodesUserError> {
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
        errorFactory: Library.SaveEpisodesUserError,
      },
      options,
    );
  }

  saveShowsUser(
    request: Library.SaveShowsUserRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Library.SaveShowsUserError> {
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
        errorFactory: Library.SaveShowsUserError,
      },
      options,
    );
  }

  saveTracksUser(
    request: Library.SaveTracksUserRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Library.SaveTracksUserError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        url: this.#servers.default("/me/tracks"),
        auth: this.#auth.oauth20,
        query: [{ name: "ids", value: request.ids, schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => saveTracksRequestSchema)),
        },
      },
      {
        success: { kind: "empty" },
        errorFactory: Library.SaveTracksUserError,
      },
      options,
    );
  }

  unfollowArtistsUsers(
    request: Library.UnfollowArtistsUsersRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Library.UnfollowArtistsUsersError> {
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
        errorFactory: Library.UnfollowArtistsUsersError,
      },
      options,
    );
  }
}

export namespace Library {
  export type ChangePlaylistDetailsRequest = {
    playlistId: string;
    body?: PlaylistsRequest;
  };

  export class ChangePlaylistDetailsError extends ResponseError<
    | Declared<"unauthorized1", Unauthorized1>
    | Declared<"forbidden1", Forbidden1>
    | Declared<"tooManyRequests1", TooManyRequests1>
  > {
    static readonly errors: ErrorDecoders<ChangePlaylistDetailsError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }

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

  export type CheckUsersSavedTracksRequest = {
    ids: string;
  };

  export class CheckUsersSavedTracksError extends ResponseError<
    | Declared<"unauthorized1", Unauthorized1>
    | Declared<"forbidden1", Forbidden1>
    | Declared<"tooManyRequests1", TooManyRequests1>
  > {
    static readonly errors: ErrorDecoders<CheckUsersSavedTracksError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }

  export type CreatePlaylistRequest = {
    userId: string;
    body?: UsersPlaylistsRequest;
  };

  export class CreatePlaylistError extends ResponseError<
    | Declared<"unauthorized1", Unauthorized1>
    | Declared<"forbidden1", Forbidden1>
    | Declared<"tooManyRequests1", TooManyRequests1>
  > {
    static readonly errors: ErrorDecoders<CreatePlaylistError> = [
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

  export type GetAListOfCurrentUsersPlaylistsRequest = {
    limit?: number;
    offset?: number;
  };

  export class GetAListOfCurrentUsersPlaylistsError extends ResponseError<
    | Declared<"unauthorized1", Unauthorized1>
    | Declared<"forbidden1", Forbidden1>
    | Declared<"tooManyRequests1", TooManyRequests1>
  > {
    static readonly errors: ErrorDecoders<GetAListOfCurrentUsersPlaylistsError> = [
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

  export type GetUsersSavedTracksRequest = {
    market?: string;
    limit?: number;
    offset?: number;
  };

  export class GetUsersSavedTracksError extends ResponseError<
    | Declared<"unauthorized1", Unauthorized1>
    | Declared<"forbidden1", Forbidden1>
    | Declared<"tooManyRequests1", TooManyRequests1>
  > {
    static readonly errors: ErrorDecoders<GetUsersSavedTracksError> = [
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

  export type GetUsersTopTracksRequest = {
    timeRange?: string;
    limit?: number;
    offset?: number;
  };

  export class GetUsersTopTracksError extends ResponseError<
    | Declared<"unauthorized1", Unauthorized1>
    | Declared<"forbidden1", Forbidden1>
    | Declared<"tooManyRequests1", TooManyRequests1>
  > {
    static readonly errors: ErrorDecoders<GetUsersTopTracksError> = [
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

  export type RemoveTracksUserRequest = {
    ids: string;
    body?: RemoveTracksRequest;
  };

  export class RemoveTracksUserError extends ResponseError<
    | Declared<"unauthorized1", Unauthorized1>
    | Declared<"forbidden1", Forbidden1>
    | Declared<"tooManyRequests1", TooManyRequests1>
  > {
    static readonly errors: ErrorDecoders<RemoveTracksUserError> = [
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

  export type SaveTracksUserRequest = {
    ids: string;
    body?: SaveTracksRequest;
  };

  export class SaveTracksUserError extends ResponseError<
    | Declared<"unauthorized1", Unauthorized1>
    | Declared<"forbidden1", Forbidden1>
    | Declared<"tooManyRequests1", TooManyRequests1>
  > {
    static readonly errors: ErrorDecoders<SaveTracksUserError> = [
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
