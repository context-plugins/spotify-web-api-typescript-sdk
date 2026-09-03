<!-- Generated file — do not edit; regenerated with the SDK. -->

# SDK map — Spotify Web API (TypeScript)

> A generated table of contents for this SDK. Consult this map and its sub-pages to learn signatures, request-field placement, error types and server wiring **by lookup**. Model shapes are *not* duplicated here — the map names the file declaring each type and the schema value exported beside it; read the shape there. The compiler is the backstop: a wrong name fails to build.

|  |  |
| --- | --- |
| SDK display name | Spotify Web API |
| Package | `spotify-web-api` |
| Package version | `2024.3.3` |
| API spec version | `2024.3.3` |
| Import specifier | `spotify-web-api` — the package root is the **only** entry. Deep imports (`spotify-web-api/models/...`) do not resolve; the `exports` map exposes `.` and `./package.json` and nothing else |
| Module format | dual ESM + CommonJS, as folder dialects (`dist/esm`, `dist/commonjs`), each with its own `package.json` marker. No `.mjs`, `.cjs`, `.d.mts` or `.d.cts` files exist |
| Node floor | `>=20` (`engines.node`) |
| TypeScript floor | a resolver that reads `exports` (4.7+), plus whatever the pinned `zod` requires — `zod@4` needs 5.5 or later. The public `.d.ts` chain reaches `zod/v4-mini`, so this is a real constraint rather than a build-tool version |
| Runtime dependency | `zod` (`^3.25.0 \|\| ^4.0.0`), imported as `zod/v4-mini`. The only runtime dependency |
| Generator | APIMatic |

Staleness check: the API spec version above changes when the SDK is regenerated from a new spec. If a lookup here fails to compile, trust the compiler and re-read the source file named in the row.

All `Source` paths on this map and its sub-pages are relative to the **SDK root** — the directory holding this file and `package.json` — never to the page that carries them: a page two directories deep writes exactly what a page at the root would. The package ships its `src/` tree, so the same paths resolve inside `node_modules/spotify-web-api/` too. An import specifier ending `.js` inside that source is the NodeNext spelling of the sibling `.ts` file.

---

## Getting a client

```ts
import { PkceMethod, ServerEnvironment, SpotifyWebApiClient } from "spotify-web-api";

const client = new SpotifyWebApiClient({
  serverEnvironment: ServerEnvironment.Production,
  oauth20: {
    clientId: "YOUR_CLIENT_ID",
    redirectUri: "YOUR_REDIRECT_URI",
    pkce: PkceMethod.S256,
    promptForAuthorizationCode: (authorizationUrl, signal) => Promise.resolve("YOUR_AUTHORIZATION_CODE"),
  },
  oauth20ClientCredentials: { clientId: "YOUR_CLIENT_ID", clientSecret: "YOUR_CLIENT_SECRET" },
});
```

The only constructor is `new SpotifyWebApiClient(clientOptions: Partial<ClientOptions> = {})`, so `new SpotifyWebApiClient()` is valid. Resources are memoized lazy getters on the client — `client.albums`, `client.tracks`, `client.library`, `client.artists`, `client.audiobooks`, `client.chapters`, `client.categoriesApi`, `client.episodes`, `client.genres`, `client.marketsApi`, `client.player`, `client.playlists`, `client.users`, `client.search`, `client.shows` — and their classes are exported only for their merged namespaces and for `instanceof`; their constructors take engine internals that are not exported, so reach a resource only through its getter.

All `ClientOptions` fields (source: `src/client-options.ts`; every field is `readonly`):

| Field | Type | Default |
| --- | --- | --- |
| `serverEnvironment` | `ServerEnvironment` | `ServerEnvironment.Production` |
| `serverOptions` | `ServerOptions` | `{}` — each resolver merges its own per-environment defaults in |
| `timeout` | `number` (ms) | `60_000` |
| `fetch` | `FetchLike \| undefined` | the global `fetch`, resolved by the transport |
| `oauth20` | `OAuth2AuthorizationCodeCredentials \| undefined` | unset |
| `oauth20Strategy` | `OAuth2RefreshableTokenStrategy<OAuth2AuthorizationCodeCredentials> \| undefined` | the built-in grant |
| `oauth20ClientCredentials` | `OAuth2ClientCredentials \| undefined` | unset |
| `oauth20ClientCredentialsStrategy` | `OAuth2TokenStrategy<OAuth2ClientCredentials> \| undefined` | the built-in grant |

The 4 auth fields are all optional, and an unset one is not an error — the operation that wanted it simply sends no credential. What each one puts on the wire, and which operations require it, are under Servers & auth.

Two engine behaviours the table cannot show. A non-finite or non-positive `timeout` is **not** "no timeout" — the transport (`src/core/raw-client.ts`) falls back to its own ceiling and clamps anything above it. And when no `fetch` is reachable the **constructor** throws `SdkError`, not the first call.

**`ClientOptions.fetch` is the one extension point** — there are no hooks, no middleware and no interceptors, so a proxy, a custom agent, extra headers, retries or request logging all go here. A replacement **must forward `init.signal`** to whatever actually performs the request; spreading `...init` does it. Drop it and both the per-call signal and `timeout` go inert — the call neither aborts nor times out.

**Cancellation.** The `signal` on `RequestOptions` is the whole per-request surface. An already-aborted signal rejects immediately, `err.cause` is whatever was passed to `abort()`, and the client-level `timeout` surfaces through the same branch with `err.kind === "timeout"`. There is no per-request timeout.

The entire per-request surface is the optional second argument of every operation:

| Type | Members | Source |
| --- | --- | --- |
| `RequestOptions` | `signal?: AbortSignal` | `src/core/api-request.ts` |

**Not on this SDK.** These are absent by design, not undocumented. This table ships with `src/core/` and is versioned with it.

| You might reach for | Reality |
| --- | --- |
| `maxRetries`, backoff, `Retry-After` handling | no retries. A failed call rejects once |
| a logger, `logLevel`, request/response logging | none. `src/core/` contains no `console` call |
| hooks, middleware, interceptors, `onRequest`/`onResponse` | none. `fetch` is the one extension point |
| pagination, `for await`, auto-paging helpers | no operation is paginated and nothing is async-iterable |
| SSE, `text/event-stream`, `ReadableStream` | no streaming. Every decoder reads the body to completion |
| `FormData`, `Blob`, `File`, multipart, binary bodies | none. The only body kinds are empty, JSON, form-urlencoded and text |
| per-request `headers`, `timeout`, `baseUrl`, idempotency key | none. `RequestOptions` is `{ signal }` |
| the raw `fetch` `Response` | deliberately unreachable. `status` and `headers` are on `asApiResult()` and on a thrown `ResponseError` |

---

## Error-handling model (read once — applies to every operation)

Operations are **throw-based**, and failures fall into **two disjoint families**. Neither is `instanceof` the other, so the two branches can never overlap and a complete `catch` needs both. `instanceof` is reliable **within one dialect**: a process that loads both — `import` in one file, `require` in another — gets two independent copies of every error class, and `instanceof` across that boundary is `false`. Narrow on `err.kind` or on `err.payload.kind` there, or on `err.name`, which is stable across copies.

- **Family A — the API answered with an error status.** The call rejects with `ResponseError`, or with a subclass of it where the spec declared error bodies for that operation. `err.payload` is a discriminated union whose `kind` names the **response schema the spec declared**, *not* the status code — so two statuses sharing one schema share one arm, and `"undeclared"` is an always-present arm carrying the raw bytes.
- **Family B — no usable response was produced.** The call rejects with a member of the `SpotifyWebApiError` set. `SpotifyWebApiError` is **abstract**: use it for `instanceof`, never construct it.

Core types (public members with their declared types; all are `readonly`):

| Type | Public members | Source |
| --- | --- | --- |
| `ResponseError<P>` | `status: number` · `headers: Headers` · `payload: ErrorPayload<P>`, and a `message` of the form `<status> <statusText>` | `src/core/response-error.ts` |
| `Declared<K, B>` | `kind: K` · `body: B` | `src/core/response-error.ts` |
| `ErrorPayload<P>` | `P` or `{ kind: "undeclared"; rawBody: ArrayBuffer }` | `src/core/response-error.ts` |
| `SpotifyWebApiError` (abstract; declared as `CoreError`) | `kind: ErrorKind` · `message` · `cause` | `src/core/errors.ts` |
| `SchemaError` | `kind: "schema"` · `rawBody: unknown` | `src/core/validation/schema-error.ts` |
| `AuthError` | `kind: "auth"` · `failures: readonly unknown[]` | `src/core/errors.ts` |
| `ApiResult<T, E>` | on success `{ ok: true; status; headers; value: T }`, on failure `{ ok: false; status; headers; errorMessage: string; error }` — `error` carries the **payload**, not the error object | `src/core/api-promise.ts` |

`ErrorKind` is one value per Family B class: `connection` (the `fetch` call rejected, or the body read failed mid-stream), `timeout` (the client-level timeout elapsed), `abort` (the per-call signal aborted, including one that was already aborted), `sdk` (a defect on the SDK side), `schema` (a value failed its schema in **either** direction — inbound the response body was malformed, outbound nothing was sent at all), and `auth` (a credential could not be **obtained**).

**`AuthError` is about obtaining a credential, never about being refused one.** A 401 *from the API* is a Family A `ResponseError` like any other status, so the two are disjoint and one `catch` arm cannot absorb the other. A 401 does have one auth consequence: it invalidates whatever that operation's scheme had cached, so the **next** call re-acquires. The current request is not retried — see Servers & auth.

```ts
try {
  const response = await client.albums.checkUsersSavedAlbums({ ids });
} catch (err) {
  if (err instanceof ResponseError) {
    // TODO: the API answered with an error status — read err.status and err.payload
  }
  if (err instanceof SpotifyWebApiError) {
    // TODO: no usable response was produced — err.kind says which
  }
}
```

A typed subclass narrows further, on `err.payload.kind`. Which arms an operation declares, with the status each covers, is the **Error arms** bullet on its page below.

**Matcher precedence** for a subclass with several arms: an exact numeric status is looked up across the whole table **first**; only then does the first covering wildcard or range win.

**The non-throwing form exists on every operation.** `.asApiResult()` returns `ApiResult<T, E>` and does **not** reject for an HTTP error status — it still rejects for Family B. It must be called on the value the operation returned: `ApiPromise` overrides `Symbol.species`, so `.then()`, `.catch()` and `.finally()` hand back a plain `Promise` and the method is gone.

Of **138 operations**, **138** declare typed error bodies and **0** reject with the base `ResponseError`, whose payload is always the `"undeclared"` arm.

---

## Operations — by resource (15 groups, 138 operations)

Each page below carries one block per operation, with bullets in the fixed order **Server**, **Signature**, **Wire**, **Auth**, **Request body**, **SDK-sent**, **Returns**, **Error**, **Error arms**, then a **Fields** table mapping every request field to the channel it travels on, and a **Type sources** table naming the declaring file and schema value of every type the operation mentions. With `api-reference.md` documenting operations only, that table is the route from an operation to the file declaring what it takes.

**Each block states what is specific to its operation. Everything in the table below holds for EVERY operation unless that operation says otherwise, so a block silent on one of these points is telling you the default here applies — take it and move on rather than opening the source to confirm it.**

| Applies to every operation | Stated where | A block departs from it only by |
| --- | --- | --- |
| **Call shape `op(request, options?)`** — one flat request object first, the per-call options second. There is no positional overload, and no per-call base URL, header, timeout, retry or auth override | here, Getting a client | never — it always holds |
| **The request object is flat and channel-blind.** A field named `body` *is* the whole request body; every other field is fanned out to path, query, header or form by the SDK. Nothing in the object is nested by channel | here | never — the **Fields** table `Channel` column always resolves it |
| **Throw-based, returning `ApiPromise<T, E>`.** `await` it for `T`; call `.asApiResult()` on the returned value for the non-throwing `ApiResult<T, E>`. No operation is result-only | here, Error-handling model | never |
| **`E` is the base `ResponseError`** and the payload is always the `"undeclared"` arm | Error-handling model | the spec declared error bodies — the **Error** bullet names a subclass and an **Error arms** bullet gives each arm's tag, status and body |
| **The request body and its media type are stated on every block**, by a **Request body** bullet that is never omitted. `none` means no body **and no `Content-Type` header** | here | never — the bullet is always present |
| **Resolves once, to one whole value.** No pagination, no streaming, no SSE, no async iterables, no partial results, no multipart and no binary anywhere | here, Not on this SDK | never at this SDK version |
| **Server group `default`** | here, Servers & auth | the operation is on another group — its block carries a **Server** bullet |
| **Every operation states its auth requirement**, by an **Auth** bullet that is never omitted — one scheme, a composition over schemes, or `none` for a public operation | here, Servers & auth | never — the bullet is always present |
| **Every value is schema-encoded before the request is built** — a wrong type or format rejects and nothing is sent. **An omitted field that has a default is still sent, with that default**, filled by the SDK rather than by the server | here, Models | the field has a default — it appears in the **Fields** table `Default` column |
| **Field names are TypeScript camelCase and the wire name is the same** | here | some field differs — the **Fields** table gains a `Wire` column, where an em dash means "same as the field name" |
| **Arrays repeat their key and objects bracket-expand** | the serialization block below | never — this SDK declares no per-field serialization style, so every array takes this one |

**Wire serialization, once, for every channel** (source: `src/core/param-value.ts`, `src/core/url.ts`, `src/core/headers.ts`, `src/core/params.ts`). This block ships with `src/core/` and is versioned with it:

- **`path`** takes no style. An array is comma-joined with each element percent-encoded **separately**; an object becomes one percent-encoded JSON document inside the segment. A field whose encoded value is `undefined` throws `SdkError` naming the unfilled placeholder; `null` collapses the segment.
- **`header`** takes no style. An array is comma-joined un-encoded (OpenAPI `simple`). `undefined` says nothing, while `null` and an empty array are tombstones that remove the header. Later layers win by **lowercased** name, in the order body content type, then client defaults, then operation.
- **`query`** and **`form`** repeat an array's key and bracket-expand an object at any depth (`filter[status]=open`, `ranges[amount][min]=10`). An array of *objects* bracket-expands per element with **no index**, so element boundaries collapse.
- Nullish **fields** are dropped from every channel except `path`, where `null` collapses the segment. A nullish array **element** is dropped, so an all-nullish array emits no key at all.
- `form` bodies use RFC 1866 encoding (space becomes `+`); `query` uses `%20`. On the wire both key and value go through `encodeURIComponent`, plus a further escape of `!`, `'`, `(`, `)` and `*`.

**The verb and route are on the pages below**, where a map for a language whose method names are derived from the route can leave them to the source. A TypeScript method name carries none of it, and a `path` field row is unreadable without the route template it fills.

**Endpoint prose is not on this map.** Where the *semantics* of an operation decide what you must pass — a field whose value changes server-side behaviour, an ordering or exclusivity rule between fields — read `api-reference.md`, whose entries are keyed by the same signature these pages print. Blocks here give you the contract: names, channels, types, defaults, errors.

| Resource (`client.X`) | Ops | Page |
| --- | --- | --- |
| `albums` | 9 | [map/operations/albums.md](map/operations/albums.md) |
| `tracks` | 17 | [map/operations/tracks.md](map/operations/tracks.md) |
| `library` | 29 | [map/operations/library.md](map/operations/library.md) |
| `artists` | 10 | [map/operations/artists.md](map/operations/artists.md) |
| `audiobooks` | 7 | [map/operations/audiobooks.md](map/operations/audiobooks.md) |
| `chapters` | 3 | [map/operations/chapters.md](map/operations/chapters.md) |
| `categoriesApi` | 3 | [map/operations/categories-api.md](map/operations/categories-api.md) |
| `episodes` | 7 | [map/operations/episodes.md](map/operations/episodes.md) |
| `genres` | 1 | [map/operations/genres.md](map/operations/genres.md) |
| `marketsApi` | 1 | [map/operations/markets-api.md](map/operations/markets-api.md) |
| `player` | 15 | [map/operations/player.md](map/operations/player.md) |
| `playlists` | 16 | [map/operations/playlists.md](map/operations/playlists.md) |
| `users` | 12 | [map/operations/users.md](map/operations/users.md) |
| `search` | 1 | [map/operations/search.md](map/operations/search.md) |
| `shows` | 7 | [map/operations/shows.md](map/operations/shows.md) |

---

## Models — where they live, how to build them

**Shapes live only in the source.** Every module under `src/models/` declares exactly one model type and the schema value beside it, and both are re-exported from the package root. So there are two facts per type, and the map gives both: the **names you import** and the **file you read**.

```ts
import { type AlbumBase, albumBaseSchema } from "spotify-web-api";
```

Take the pair from an operation's **Type sources** table. **Do not derive the path from the type name** — the transform is not reversible in general, and the table is the authority. There is no default export.

| Group | Count | Directory |
| --- | --- | --- |
| Objects | 129 | `src/models/` |
| Enums (open; const companion plus schema) | 18 | `src/models/` |
| Unions without a discriminant | 4 | `src/models/unions/` |

**Conventions.** Every model is a plain `type`, not a class — build one with an object literal; there is no constructor and no builder. `f: T` is required, `f?: T` is optional (omit the key), and `f: T | null` is a **required, nullable** field where `null` is a value distinct from an omitted key. Optional properties are declared `f?: T`, not `f?: T | undefined`, so under `exactOptionalPropertyTypes` you must **omit or spread** an absent field rather than assign `undefined` to it.

**Schema companions.** `Schema<T, W = Encoded<T>>` is `{ decode(v: unknown): T; encode(v: unknown): W }`, so a schema value is directly usable both ways. `Encoded<T>` is the wire projection — a `Date` becomes `string | number`, a `Uint8Array` becomes a base64 `string`, recursing through arrays and objects. `EnumSchema<T>` adds `readonly values: readonly T[]`, so an enum's known set is testable at run time.

**Enums are open, and are not TypeScript `enum`s.** Each is a `const` companion object plus a union that includes `(string & {})` or `(number & {})`, so **any** value of the right base type is assignable and the schema validates the base type only, never membership. That is deliberate: an unrecognized server value round-trips instead of throwing. Use `.values` to test membership yourself.

| Enum | Members (member to wire value) | Schema value |
| --- | --- | --- |
| `AlbumGroup` | `Album` to `"album"` · `Single` to `"single"` · `Compilation` to `"compilation"` · `AppearsOn` to `"appears_on"` | `albumGroupSchema` |
| `AlbumType` | `Album` to `"album"` · `Single` to `"single"` · `Compilation` to `"compilation"` | `albumTypeSchema` |
| `IncludeExternal` | `Audio` to `"audio"` | `includeExternalSchema` |
| `ItemType1` | `Artist` to `"artist"` | `itemType1Schema` |
| `ItemType2` | `Artist` to `"artist"` · `User` to `"user"` | `itemType2Schema` |
| `ItemType3` | `Artist` to `"artist"` · `User` to `"user"` | `itemType3Schema` |
| `Itemtype` | `Album` to `"album"` · `Artist` to `"artist"` · `Playlist` to `"playlist"` · `Track` to `"track"` · `Show` to `"show"` · `Episode` to `"episode"` · `Audiobook` to `"audiobook"` | `itemtypeSchema` |
| `Mode` | `_Minus1` to `-1` · `_0` to `0` · `_1` to `1` | `modeSchema` |
| `Reason` | `Market` to `"market"` · `Product` to `"product"` · `Explicit` to `"explicit"` | `reasonSchema` |
| `ReleaseDatePrecision` | `Year` to `"year"` · `Month` to `"month"` · `Day` to `"day"` | `releaseDatePrecisionSchema` |
| `Type` | `Artist` to `"artist"` | `typeSchema` |
| `Type2` | `Album` to `"album"` | `type2Schema` |
| `Type3` | `Track` to `"track"` | `type3Schema` |
| `Type4` | `User` to `"user"` | `type4Schema` |
| `Type5` | `Episode` to `"episode"` | `type5Schema` |
| `Type6` | `Show` to `"show"` | `type6Schema` |
| `Type8` | `AudioFeatures` to `"audio_features"` | `type8Schema` |
| `Type9` | `Audiobook` to `"audiobook"` | `type9Schema` |

**Unions.** A discriminated union is narrowed with an exhaustive `switch` on its tag, with no fallback arm and no type guard to import. One without a discriminant is narrowed on the shape of its arms.

| Union | Variants | Narrow with | Source |
| --- | --- | --- | --- |
| `CurrentlyPlaying` | no discriminant | `typeof`, or an `in` check | `src/models/unions/currently-playing.ts` |
| `Item` | no discriminant | `typeof`, or an `in` check | `src/models/unions/item.ts` |
| `Queue` | no discriminant | `typeof`, or an `in` check | `src/models/unions/queue.ts` |
| `Track11` | no discriminant | `typeof`, or an `in` check | `src/models/unions/track11.ts` |

**Wire-name divergences.** Only these model properties are sent and received under a different name; every other property uses its TypeScript name verbatim.

| Type | Property | Wire key |
| --- | --- | --- |
| `AlbumBase` | `albumType` | `album_type` |
| `AlbumBase` | `totalTracks` | `total_tracks` |
| `AlbumBase` | `availableMarkets` | `available_markets` |
| `AlbumBase` | `externalUrls` | `external_urls` |
| `AlbumBase` | `releaseDate` | `release_date` |
| `AlbumBase` | `releaseDatePrecision` | `release_date_precision` |
| `AlbumObject` | `albumType` | `album_type` |
| `AlbumObject` | `totalTracks` | `total_tracks` |
| `AlbumObject` | `availableMarkets` | `available_markets` |
| `AlbumObject` | `externalUrls` | `external_urls` |
| `AlbumObject` | `releaseDate` | `release_date` |
| `AlbumObject` | `releaseDatePrecision` | `release_date_precision` |
| `AlbumObject` | `externalIds` | `external_ids` |
| `ArtistDiscographyAlbumObject` | `albumType` | `album_type` |
| `ArtistDiscographyAlbumObject` | `totalTracks` | `total_tracks` |
| `ArtistDiscographyAlbumObject` | `availableMarkets` | `available_markets` |
| `ArtistDiscographyAlbumObject` | `externalUrls` | `external_urls` |
| `ArtistDiscographyAlbumObject` | `releaseDate` | `release_date` |
| `ArtistDiscographyAlbumObject` | `releaseDatePrecision` | `release_date_precision` |
| `ArtistDiscographyAlbumObject` | `albumGroup` | `album_group` |
| `ArtistObject` | `externalUrls` | `external_urls` |
| `AudioFeaturesObject` | `analysisUrl` | `analysis_url` |
| `AudioFeaturesObject` | `durationMs` | `duration_ms` |
| `AudioFeaturesObject` | `timeSignature` | `time_signature` |
| `AudioFeaturesObject` | `trackHref` | `track_href` |
| `AudiobookBase` | `availableMarkets` | `available_markets` |
| `AudiobookBase` | `htmlDescription` | `html_description` |
| `AudiobookBase` | `externalUrls` | `external_urls` |
| `AudiobookBase` | `mediaType` | `media_type` |
| `AudiobookBase` | `totalChapters` | `total_chapters` |
| `AudiobookObject` | `availableMarkets` | `available_markets` |
| `AudiobookObject` | `htmlDescription` | `html_description` |
| `AudiobookObject` | `externalUrls` | `external_urls` |
| `AudiobookObject` | `mediaType` | `media_type` |
| `AudiobookObject` | `totalChapters` | `total_chapters` |
| `ChapterBase` | `audioPreviewUrl` | `audio_preview_url` |
| `ChapterBase` | `availableMarkets` | `available_markets` |
| `ChapterBase` | `chapterNumber` | `chapter_number` |
| `ChapterBase` | `htmlDescription` | `html_description` |
| `ChapterBase` | `durationMs` | `duration_ms` |
| `ChapterBase` | `externalUrls` | `external_urls` |
| `ChapterBase` | `isPlayable` | `is_playable` |
| `ChapterBase` | `releaseDate` | `release_date` |
| `ChapterBase` | `releaseDatePrecision` | `release_date_precision` |
| `ChapterBase` | `resumePoint` | `resume_point` |
| `ChapterObject` | `audioPreviewUrl` | `audio_preview_url` |
| `ChapterObject` | `availableMarkets` | `available_markets` |
| `ChapterObject` | `chapterNumber` | `chapter_number` |
| `ChapterObject` | `htmlDescription` | `html_description` |
| `ChapterObject` | `durationMs` | `duration_ms` |
| `ChapterObject` | `externalUrls` | `external_urls` |
| `ChapterObject` | `isPlayable` | `is_playable` |
| `ChapterObject` | `releaseDate` | `release_date` |
| `ChapterObject` | `releaseDatePrecision` | `release_date_precision` |
| `ChapterObject` | `resumePoint` | `resume_point` |
| `ContextObject` | `externalUrls` | `external_urls` |
| `CurrentlyPlayingContextObject` | `repeatState` | `repeat_state` |
| `CurrentlyPlayingContextObject` | `shuffleState` | `shuffle_state` |
| `CurrentlyPlayingContextObject` | `progressMs` | `progress_ms` |
| `CurrentlyPlayingContextObject` | `isPlaying` | `is_playing` |
| `CurrentlyPlayingContextObject` | `currentlyPlayingType` | `currently_playing_type` |
| `CurrentlyPlayingObject` | `progressMs` | `progress_ms` |
| `CurrentlyPlayingObject` | `isPlaying` | `is_playing` |
| `CurrentlyPlayingObject` | `currentlyPlayingType` | `currently_playing_type` |
| `DeviceObject` | `isActive` | `is_active` |
| `DeviceObject` | `isPrivateSession` | `is_private_session` |
| `DeviceObject` | `isRestricted` | `is_restricted` |
| `DeviceObject` | `volumePercent` | `volume_percent` |
| `DeviceObject` | `supportsVolume` | `supports_volume` |
| `DisallowsObject` | `interruptingPlayback` | `interrupting_playback` |
| `DisallowsObject` | `skippingNext` | `skipping_next` |
| `DisallowsObject` | `skippingPrev` | `skipping_prev` |
| `DisallowsObject` | `togglingRepeatContext` | `toggling_repeat_context` |
| `DisallowsObject` | `togglingShuffle` | `toggling_shuffle` |
| `DisallowsObject` | `togglingRepeatTrack` | `toggling_repeat_track` |
| `DisallowsObject` | `transferringPlayback` | `transferring_playback` |
| `EpisodeBase` | `audioPreviewUrl` | `audio_preview_url` |
| `EpisodeBase` | `htmlDescription` | `html_description` |
| `EpisodeBase` | `durationMs` | `duration_ms` |
| `EpisodeBase` | `externalUrls` | `external_urls` |
| `EpisodeBase` | `isExternallyHosted` | `is_externally_hosted` |
| `EpisodeBase` | `isPlayable` | `is_playable` |
| `EpisodeBase` | `releaseDate` | `release_date` |
| `EpisodeBase` | `releaseDatePrecision` | `release_date_precision` |
| `EpisodeBase` | `resumePoint` | `resume_point` |
| `EpisodeObject` | `audioPreviewUrl` | `audio_preview_url` |
| `EpisodeObject` | `htmlDescription` | `html_description` |
| `EpisodeObject` | `durationMs` | `duration_ms` |
| `EpisodeObject` | `externalUrls` | `external_urls` |
| `EpisodeObject` | `isExternallyHosted` | `is_externally_hosted` |
| `EpisodeObject` | `isPlayable` | `is_playable` |
| `EpisodeObject` | `releaseDate` | `release_date` |
| `EpisodeObject` | `releaseDatePrecision` | `release_date_precision` |
| `EpisodeObject` | `resumePoint` | `resume_point` |
| `ExplicitContentSettingsObject` | `filterEnabled` | `filter_enabled` |
| `ExplicitContentSettingsObject` | `filterLocked` | `filter_locked` |
| `LinkedTrackObject` | `externalUrls` | `external_urls` |
| `ManyAudioFeatures` | `audioFeatures` | `audio_features` |
| `MePlayerRequest` | `deviceIds` | `device_ids` |
| `Meta` | `analyzerVersion` | `analyzer_version` |
| `Meta` | `detailedStatus` | `detailed_status` |
| `Meta` | `statusCode` | `status_code` |
| `Meta` | `analysisTime` | `analysis_time` |
| `Meta` | `inputProcess` | `input_process` |
| `PlayHistoryObject` | `playedAt` | `played_at` |
| `PlaylistObject` | `externalUrls` | `external_urls` |
| `PlaylistObject` | `snapshotId` | `snapshot_id` |
| `PlaylistOwnerObject` | `externalUrls` | `external_urls` |
| `PlaylistOwnerObject` | `displayName` | `display_name` |
| `PlaylistSnapshotId` | `snapshotId` | `snapshot_id` |
| `PlaylistTrackObject` | `addedAt` | `added_at` |
| `PlaylistTrackObject` | `addedBy` | `added_by` |
| `PlaylistTrackObject` | `isLocal` | `is_local` |
| `PlaylistUserObject` | `externalUrls` | `external_urls` |
| `PlaylistsTracksRequest1` | `rangeStart` | `range_start` |
| `PlaylistsTracksRequest1` | `insertBefore` | `insert_before` |
| `PlaylistsTracksRequest1` | `rangeLength` | `range_length` |
| `PlaylistsTracksRequest1` | `snapshotId` | `snapshot_id` |
| `PlaylistsTracksRequest2` | `snapshotId` | `snapshot_id` |
| `PrivateUserObject` | `displayName` | `display_name` |
| `PrivateUserObject` | `explicitContent` | `explicit_content` |
| `PrivateUserObject` | `externalUrls` | `external_urls` |
| `PublicUserObject` | `displayName` | `display_name` |
| `PublicUserObject` | `externalUrls` | `external_urls` |
| `QueueObject` | `currentlyPlaying` | `currently_playing` |
| `ResumePointObject` | `fullyPlayed` | `fully_played` |
| `ResumePointObject` | `resumePositionMs` | `resume_position_ms` |
| `SavedAlbumObject` | `addedAt` | `added_at` |
| `SavedAudiobookObject` | `addedAt` | `added_at` |
| `SavedEpisodeObject` | `addedAt` | `added_at` |
| `SavedShowObject` | `addedAt` | `added_at` |
| `SavedTrackObject` | `addedAt` | `added_at` |
| `SectionObject` | `tempoConfidence` | `tempo_confidence` |
| `SectionObject` | `keyConfidence` | `key_confidence` |
| `SectionObject` | `modeConfidence` | `mode_confidence` |
| `SectionObject` | `timeSignature` | `time_signature` |
| `SectionObject` | `timeSignatureConfidence` | `time_signature_confidence` |
| `SegmentObject` | `loudnessStart` | `loudness_start` |
| `SegmentObject` | `loudnessMax` | `loudness_max` |
| `SegmentObject` | `loudnessMaxTime` | `loudness_max_time` |
| `SegmentObject` | `loudnessEnd` | `loudness_end` |
| `ShowBase` | `availableMarkets` | `available_markets` |
| `ShowBase` | `htmlDescription` | `html_description` |
| `ShowBase` | `externalUrls` | `external_urls` |
| `ShowBase` | `isExternallyHosted` | `is_externally_hosted` |
| `ShowBase` | `mediaType` | `media_type` |
| `ShowBase` | `totalEpisodes` | `total_episodes` |
| `ShowObject` | `availableMarkets` | `available_markets` |
| `ShowObject` | `htmlDescription` | `html_description` |
| `ShowObject` | `externalUrls` | `external_urls` |
| `ShowObject` | `isExternallyHosted` | `is_externally_hosted` |
| `ShowObject` | `mediaType` | `media_type` |
| `ShowObject` | `totalEpisodes` | `total_episodes` |
| `SimplifiedAlbumObject` | `albumType` | `album_type` |
| `SimplifiedAlbumObject` | `totalTracks` | `total_tracks` |
| `SimplifiedAlbumObject` | `availableMarkets` | `available_markets` |
| `SimplifiedAlbumObject` | `externalUrls` | `external_urls` |
| `SimplifiedAlbumObject` | `releaseDate` | `release_date` |
| `SimplifiedAlbumObject` | `releaseDatePrecision` | `release_date_precision` |
| `SimplifiedArtistObject` | `externalUrls` | `external_urls` |
| `SimplifiedPlaylistObject` | `externalUrls` | `external_urls` |
| `SimplifiedPlaylistObject` | `snapshotId` | `snapshot_id` |
| `SimplifiedTrackObject` | `availableMarkets` | `available_markets` |
| `SimplifiedTrackObject` | `discNumber` | `disc_number` |
| `SimplifiedTrackObject` | `durationMs` | `duration_ms` |
| `SimplifiedTrackObject` | `externalUrls` | `external_urls` |
| `SimplifiedTrackObject` | `isPlayable` | `is_playable` |
| `SimplifiedTrackObject` | `linkedFrom` | `linked_from` |
| `SimplifiedTrackObject` | `previewUrl` | `preview_url` |
| `SimplifiedTrackObject` | `trackNumber` | `track_number` |
| `SimplifiedTrackObject` | `isLocal` | `is_local` |
| `StartOrResumePlaybackRequest` | `contextUri` | `context_uri` |
| `StartOrResumePlaybackRequest` | `positionMs` | `position_ms` |
| `Track` | `numSamples` | `num_samples` |
| `Track` | `sampleMd5` | `sample_md5` |
| `Track` | `offsetSeconds` | `offset_seconds` |
| `Track` | `windowSeconds` | `window_seconds` |
| `Track` | `analysisSampleRate` | `analysis_sample_rate` |
| `Track` | `analysisChannels` | `analysis_channels` |
| `Track` | `endOfFadeIn` | `end_of_fade_in` |
| `Track` | `startOfFadeOut` | `start_of_fade_out` |
| `Track` | `tempoConfidence` | `tempo_confidence` |
| `Track` | `timeSignature` | `time_signature` |
| `Track` | `timeSignatureConfidence` | `time_signature_confidence` |
| `Track` | `keyConfidence` | `key_confidence` |
| `Track` | `modeConfidence` | `mode_confidence` |
| `Track` | `codeVersion` | `code_version` |
| `Track` | `echoprintVersion` | `echoprint_version` |
| `Track` | `synchVersion` | `synch_version` |
| `Track` | `rhythmVersion` | `rhythm_version` |
| `TrackObject` | `availableMarkets` | `available_markets` |
| `TrackObject` | `discNumber` | `disc_number` |
| `TrackObject` | `durationMs` | `duration_ms` |
| `TrackObject` | `externalIds` | `external_ids` |
| `TrackObject` | `externalUrls` | `external_urls` |
| `TrackObject` | `isPlayable` | `is_playable` |
| `TrackObject` | `linkedFrom` | `linked_from` |
| `TrackObject` | `previewUrl` | `preview_url` |
| `TrackObject` | `trackNumber` | `track_number` |
| `TrackObject` | `isLocal` | `is_local` |

---

## Servers & auth

**Authentication is per operation.** Every operation declares the requirement it enforces and the SDK sends exactly that: **138 of the 138 operations** require a credential and **0** are public. Each block on a page above carries an **Auth** bullet naming its requirement, `none` included. There is no client-global switch and no per-call override.

| Scheme (as an **Auth** bullet names it) | Configured with | What the SDK sends |
| --- | --- | --- |
| `oauth20` | `oauth20: { clientId, clientSecret?, redirectUri, scope?, state?, pkce?, promptForAuthorizationCode }` | `Authorization: Bearer <access token>` |
| `oauth20ClientCredentials` | `oauth20ClientCredentials: { clientId, clientSecret, scope? }` | `Authorization: Bearer <access token>` |

A scheme **contributes** headers, query parameters and cookies rather than mutating the request, so a credential is encoded by exactly the code that encodes an operation's own parameters. The auth layer goes on **last**, which means a scheme's `Authorization` wins over one the operation declared.

**Composition is emitted, not configured.** Where the spec puts two schemes in one requirement the SDK sends **both**; where it lists alternatives the SDK sends the **first configured** one, in the order the **Auth** bullet prints them. The combinators that express this (`allAuth`, `anyAuth`, `noneAuth`) live in the generated resource modules and are **not exported**.

**A credential may be a function.** Every field typed `TokenProvider` is re-read on **every** request with no caching, so a key can rotate without rebuilding the client. An empty string counts as absent, and a function is treated as present without being invoked.

**An unconfigured scheme does not throw.** The request goes out without that credential and the server decides. So a 401 on a call you believed was authenticated is usually an unset credential field rather than an SDK failure — check the operation's **Auth** bullet against what the client was given.

**OAuth2 fetches and caches its own token.** The token request goes through the same client as every other call — same timeout, same `fetch` — sends a form-urlencoded body, and **decodes** the response against a schema rather than casting it. An access token is cached until shortly before it expires; a response carrying no `expires_in` is treated as never expiring (RFC 6749 §5.1); concurrent callers share one in-flight fetch. A refused token endpoint rejects with `AuthError` wrapping the underlying `ResponseError` as `cause`, so it never looks like the business call failing.

| Flow | Token endpoint | Client credentials travel |
| --- | --- | --- |
| `oauth20` | `default` + `/api/token` | as `Authorization: Basic` |
| `oauth20ClientCredentials` | `default` + `/api/token` | as `Authorization: Basic` |

The authorization-code grant differs in three ways. It needs a human, so `promptForAuthorizationCode` is a **required** member of its credentials: the SDK builds the authorization URL from `default` + `/authorize` and hands it over, and never opens it itself. PKCE is on by default — `pkce` defaults to `PkceMethod.S256`, and `null` disables it, which then requires a client secret or the scheme throws `AuthError` before prompting. And it is the only grant that can refresh, so acquisition is a ladder: live cache, then a refresh attempt, then a full re-authorization.

**Replacing a grant.** Each OAuth2 scheme's token request is a strategy you can substitute — `oauth20Strategy`, `oauth20ClientCredentialsStrategy` on `ClientOptions`. A strategy is one method, `getToken(credentials, signal)`, plus `tryRefreshToken(...)` for the refreshable one. Supply it and the built-in token request is not used, while the caching, the expiry buffer and the single-flight behaviour above still apply.

**The auth types you can name.** Every row below is exported from the package root. `Source` is where to read the declaration, never what to import — the credential shapes themselves are already spelled in the scheme table above.

| Type | Source |
| --- | --- |
| `OAuthToken` | `src/core/auth/oauth2-strategies.ts` |
| `OAuth2CredentialPlacement` | `src/core/auth/oauth2-strategies.ts` |
| `OAuthTokenRefreshable` | `src/core/auth/oauth2-strategies.ts` |
| `AuthorizationCodePrompt` | `src/core/auth/credentials.ts` |
| `PkceMethod` | `src/core/auth/credentials.ts` |

**A 401 invalidates, it does not retry.** On a **401** — 401 only, not 403 — the SDK clears whatever that operation's scheme had cached, so the *next* call re-acquires. The current request still rejects with the operation's `ResponseError`. There is no retry loop on this SDK, and the credential fields are on `ClientOptions`.

**Environments.** `ClientOptions.serverEnvironment` selects one for the whole client (source: `src/servers.ts`). `ServerEnvironment` is a `const` object with a derived union type, not a TypeScript `enum` — and unlike the model enums it is **closed**, so only the values below are assignable.

| `ServerEnvironment` member | Value |
| --- | --- |
| `ServerEnvironment.Production` *(default)* | `production` |
| `ServerEnvironment.Environment2` | `environment2` |

**Server groups.** 1 logical server; each operation is bound to one at generation time, and a block carries a **Server** bullet only when its group is not `default`.

| Group | Options type |
| --- | --- |
| `default` | `DefaultServerOptions` |

**Base URLs and overrides.** One row per group-and-environment pair, so the table stays four columns wide however many environments a spec declares. Every cell is overridden at `serverOptions.<group>.<environment>.<name>`, where `<name>` is `baseUrl` for the whole template or the variable name for one substitution. An override merges with the built-in defaults **per pair, key by key**.

| Group | Environment | Base URL template | Template variables (default) |
| --- | --- | --- | --- |
| `default` | `production` | `https://api.spotify.com/v1` | — |
| `default` | `environment2` | `https://accounts.spotify.com` | — |

A `baseUrl` override replaces the template verbatim; variable values are percent-encoded into it, and templates are expanded per request rather than once at construction. An environment value the SDK does not know throws `SdkError` when a server is resolved — at the first call, not at construction. It is the one failure on this surface that throws **synchronously** out of the operation method, so a `try`/`await` catches it but `.asApiResult()` and `.catch()` never see it.

---

## Runtime & packaging

The facts that change what you type, and the floors that decide whether the package loads at all. This section is the home for all of them.

|  |  |
| --- | --- |
| One entry, two dialects | `import` resolves `dist/esm`, `require` resolves `dist/commonjs`, both through the single `.` export. In a TypeScript CommonJS file the typed spelling is `import sdk = require("spotify-web-api")`; a plain `require` destructure works at run time but yields no types. `instanceof` is reliable **within** one dialect — if your app loads both, the two copies declare separate error classes |
| Consumer compiler settings | Under `exactOptionalPropertyTypes`, **omit or spread** an absent optional rather than assigning `undefined` to it. Under `verbatimModuleSyntax`, names that carry no runtime value (the options types, every model type) must be imported with `import type` |
| Required globals, and only these | Always: `fetch` (or a replacement passed as the `fetch` option), `AbortController`, `Headers`, `URL`, `setTimeout` and `clearTimeout`, `JSON`, `BigInt`. Auth adds more, each reached only once the credential needing it is configured. `TextEncoder` and `btoa` build every `Authorization: Basic` value, sent on every OAuth2 token request, whose client credentials travel as Basic by default. `crypto.getRandomValues` and `crypto.subtle.digest` belong to the authorization-code grant's PKCE alone. |
| Values that cross the boundary | `Date` for `date-time`, `string` for `date`, `ArrayBuffer` for an undeclared error body, `Headers` on a result and on a thrown `ResponseError`. The engine also carries a `bigint` int64 path and a base64 `bytes()` codec, reached only where a model uses them |
| Browser distribution | The package ships `dist/esm` and `dist/commonjs` and nothing else — **no bundle, no UMD file, no CDN artifact**. Use it through a bundler, which resolves `zod/v4-mini`, deduplicates it against your own copy and tree-shakes the rest |
| Other runtimes | Deno, Bun, Cloudflare Workers and Vercel Edge are all likely to work — the SDK needs only the globals above and imports no Node built-in — but **none of them is tested for this package**, so nothing here claims support for them |

The browser floor comes from the emitted output rather than the sources: `tshy` builds at `target: ES2022`, so native `#private` fields and methods survive into `dist/`.

| Browser | Minimum | Set by |
| --- | --- | --- |
| Chrome / Edge | **85** | `String.prototype.replaceAll`, logical assignment (`??=`) |
| Firefox | **90** | private class fields and methods |
| Safari / iOS Safari | **15** | private class **methods** |

That table is the **module-load** floor: below it the SDK fails while the module is evaluating, not at the first call. Two things degrade quietly above it. `{ cause }` on the `Error` constructor needs Chrome 93, Firefox 91 or Safari 15, so below that `err.cause` is `undefined`. More consequentially, **cancellation needs `AbortController.abort(reason)` and `AbortSignal.reason`**, which arrived in Chrome 98, Firefox 97 and Safari 15.4 — between the module-load floor and those versions the engine still aborts the request but produces no typed error at all.

One auth floor is not a version at all. `crypto.subtle` is `undefined` on an **insecure origin** in every browser, so the authorization-code grant's default `S256` PKCE fails on a page served over plain `http` — a LAN IP included, since only `localhost` is treated as secure. HTTPS is the fix; `PkceMethod.Plain` avoids `crypto.subtle` entirely.

