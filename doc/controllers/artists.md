# Artists

```ts
const artistsApi = new ArtistsApi(client);
```

## Class Name

`ArtistsApi`

## Methods

* [Get-an-Artist](../../doc/controllers/artists.md#get-an-artist)
* [Get-Multiple-Artists](../../doc/controllers/artists.md#get-multiple-artists)
* [Get-an-Artists-Albums](../../doc/controllers/artists.md#get-an-artists-albums)
* [Get-an-Artists-Top-Tracks](../../doc/controllers/artists.md#get-an-artists-top-tracks)
* [Get-an-Artists-Related-Artists](../../doc/controllers/artists.md#get-an-artists-related-artists)


# Get-an-Artist

Get Spotify catalog information for a single artist identified by their unique Spotify ID.

```ts
async getAnArtist(
  id: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ArtistObject>>
```

## Authentication

This endpoint requires [oauth_2_0](../../doc/auth/oauth-2-authorization-code-grant.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: An artist

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`ArtistObject`](../../doc/models/artist-object.md).

## Example Usage

```ts
const id = '0TnOYISbd1XYRBk9myaseg';

try {
  const response = await artistsApi.getAnArtist(id);

  // Extracting fully parsed response body.
  console.log(response.result);

  // Extracting response status code.
  console.log(response.statusCode);
  // Extracting response headers.
  console.log(response.headers);
  // Extracting response body of type `string | Stream`
  console.log(response.body);
} catch (error) {
  if (error instanceof ApiError) {
    // Extracting response error status code.
    console.log(error.statusCode);
    // Extracting response error headers.
    console.log(error.headers);
    // Extracting response error body of type `string | Stream`.
    console.log(error.body);
    if (error instanceof Unauthorized1Error) {
      console.log(error.result);
    } else if (error instanceof Forbidden1Error) {
      console.log(error.result);
    } else if (error instanceof TooManyRequests1Error) {
      console.log(error.result);
    }
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 401 | Bad or expired token. This can happen if the user revoked a token or<br>the access token has expired. You should re-authenticate the user. | [`Unauthorized1Error`](../../doc/models/unauthorized-1-error.md) |
| 403 | Bad OAuth request (wrong consumer key, bad nonce, expired<br>timestamp...). Unfortunately, re-authenticating the user won't help here. | [`Forbidden1Error`](../../doc/models/forbidden-1-error.md) |
| 429 | The app has exceeded its rate limits. | [`TooManyRequests1Error`](../../doc/models/too-many-requests-1-error.md) |


# Get-Multiple-Artists

Get Spotify catalog information for several artists based on their Spotify IDs.

```ts
async getMultipleArtists(
  ids: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ManyArtists>>
```

## Authentication

This endpoint requires [oauth_2_0](../../doc/auth/oauth-2-authorization-code-grant.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `ids` | `string` | Query, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: A set of artists

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`ManyArtists`](../../doc/models/many-artists.md).

## Example Usage

```ts
const ids = '2CIMQHirSU0MQqyYHq0eOx,57dN52uHvrHOxijzpIgu3E,1vCWHaC5f2uS3yhpwWbIA6';

try {
  const response = await artistsApi.getMultipleArtists(ids);

  // Extracting fully parsed response body.
  console.log(response.result);

  // Extracting response status code.
  console.log(response.statusCode);
  // Extracting response headers.
  console.log(response.headers);
  // Extracting response body of type `string | Stream`
  console.log(response.body);
} catch (error) {
  if (error instanceof ApiError) {
    // Extracting response error status code.
    console.log(error.statusCode);
    // Extracting response error headers.
    console.log(error.headers);
    // Extracting response error body of type `string | Stream`.
    console.log(error.body);
    if (error instanceof Unauthorized1Error) {
      console.log(error.result);
    } else if (error instanceof Forbidden1Error) {
      console.log(error.result);
    } else if (error instanceof TooManyRequests1Error) {
      console.log(error.result);
    }
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 401 | Bad or expired token. This can happen if the user revoked a token or<br>the access token has expired. You should re-authenticate the user. | [`Unauthorized1Error`](../../doc/models/unauthorized-1-error.md) |
| 403 | Bad OAuth request (wrong consumer key, bad nonce, expired<br>timestamp...). Unfortunately, re-authenticating the user won't help here. | [`Forbidden1Error`](../../doc/models/forbidden-1-error.md) |
| 429 | The app has exceeded its rate limits. | [`TooManyRequests1Error`](../../doc/models/too-many-requests-1-error.md) |


# Get-an-Artists-Albums

Get Spotify catalog information about an artist's albums.

```ts
async getAnArtistsAlbums(
  id: string,
  includeGroups?: string,
  market?: string,
  limit?: number,
  offset?: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PagingArtistDiscographyAlbumObject>>
```

## Authentication

This endpoint requires [oauth_2_0](../../doc/auth/oauth-2-authorization-code-grant.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | - |
| `includeGroups` | `string \| undefined` | Query, Optional | - |
| `market` | `string \| undefined` | Query, Optional | - |
| `limit` | `number \| undefined` | Query, Optional | **Default**: `20`<br><br>**Constraints**: `>= 1`, `<= 50` |
| `offset` | `number \| undefined` | Query, Optional | **Default**: `0` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: Pages of albums

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`PagingArtistDiscographyAlbumObject`](../../doc/models/paging-artist-discography-album-object.md).

## Example Usage

```ts
const id = '0TnOYISbd1XYRBk9myaseg';

const includeGroups = 'single,appears_on';

const market = 'ES';

const limit = 10;

const offset = 5;

try {
  const response = await artistsApi.getAnArtistsAlbums(
    id,
    includeGroups,
    market,
    limit,
    offset
  );

  // Extracting fully parsed response body.
  console.log(response.result);

  // Extracting response status code.
  console.log(response.statusCode);
  // Extracting response headers.
  console.log(response.headers);
  // Extracting response body of type `string | Stream`
  console.log(response.body);
} catch (error) {
  if (error instanceof ApiError) {
    // Extracting response error status code.
    console.log(error.statusCode);
    // Extracting response error headers.
    console.log(error.headers);
    // Extracting response error body of type `string | Stream`.
    console.log(error.body);
    if (error instanceof Unauthorized1Error) {
      console.log(error.result);
    } else if (error instanceof Forbidden1Error) {
      console.log(error.result);
    } else if (error instanceof TooManyRequests1Error) {
      console.log(error.result);
    }
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 401 | Bad or expired token. This can happen if the user revoked a token or<br>the access token has expired. You should re-authenticate the user. | [`Unauthorized1Error`](../../doc/models/unauthorized-1-error.md) |
| 403 | Bad OAuth request (wrong consumer key, bad nonce, expired<br>timestamp...). Unfortunately, re-authenticating the user won't help here. | [`Forbidden1Error`](../../doc/models/forbidden-1-error.md) |
| 429 | The app has exceeded its rate limits. | [`TooManyRequests1Error`](../../doc/models/too-many-requests-1-error.md) |


# Get-an-Artists-Top-Tracks

Get Spotify catalog information about an artist's top tracks by country.

```ts
async getAnArtistsTopTracks(
  id: string,
  market?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ManyTracks>>
```

## Authentication

This endpoint requires [oauth_2_0](../../doc/auth/oauth-2-authorization-code-grant.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | - |
| `market` | `string \| undefined` | Query, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: A set of tracks

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`ManyTracks`](../../doc/models/many-tracks.md).

## Example Usage

```ts
const id = '0TnOYISbd1XYRBk9myaseg';

const market = 'ES';

try {
  const response = await artistsApi.getAnArtistsTopTracks(
    id,
    market
  );

  // Extracting fully parsed response body.
  console.log(response.result);

  // Extracting response status code.
  console.log(response.statusCode);
  // Extracting response headers.
  console.log(response.headers);
  // Extracting response body of type `string | Stream`
  console.log(response.body);
} catch (error) {
  if (error instanceof ApiError) {
    // Extracting response error status code.
    console.log(error.statusCode);
    // Extracting response error headers.
    console.log(error.headers);
    // Extracting response error body of type `string | Stream`.
    console.log(error.body);
    if (error instanceof Unauthorized1Error) {
      console.log(error.result);
    } else if (error instanceof Forbidden1Error) {
      console.log(error.result);
    } else if (error instanceof TooManyRequests1Error) {
      console.log(error.result);
    }
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 401 | Bad or expired token. This can happen if the user revoked a token or<br>the access token has expired. You should re-authenticate the user. | [`Unauthorized1Error`](../../doc/models/unauthorized-1-error.md) |
| 403 | Bad OAuth request (wrong consumer key, bad nonce, expired<br>timestamp...). Unfortunately, re-authenticating the user won't help here. | [`Forbidden1Error`](../../doc/models/forbidden-1-error.md) |
| 429 | The app has exceeded its rate limits. | [`TooManyRequests1Error`](../../doc/models/too-many-requests-1-error.md) |


# Get-an-Artists-Related-Artists

Get Spotify catalog information about artists similar to a given artist. Similarity is based on analysis of the Spotify community's listening history.

```ts
async getAnArtistsRelatedArtists(
  id: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ManyArtists>>
```

## Authentication

This endpoint requires [oauth_2_0](../../doc/auth/oauth-2-authorization-code-grant.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: A set of artists

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`ManyArtists`](../../doc/models/many-artists.md).

## Example Usage

```ts
const id = '0TnOYISbd1XYRBk9myaseg';

try {
  const response = await artistsApi.getAnArtistsRelatedArtists(id);

  // Extracting fully parsed response body.
  console.log(response.result);

  // Extracting response status code.
  console.log(response.statusCode);
  // Extracting response headers.
  console.log(response.headers);
  // Extracting response body of type `string | Stream`
  console.log(response.body);
} catch (error) {
  if (error instanceof ApiError) {
    // Extracting response error status code.
    console.log(error.statusCode);
    // Extracting response error headers.
    console.log(error.headers);
    // Extracting response error body of type `string | Stream`.
    console.log(error.body);
    if (error instanceof Unauthorized1Error) {
      console.log(error.result);
    } else if (error instanceof Forbidden1Error) {
      console.log(error.result);
    } else if (error instanceof TooManyRequests1Error) {
      console.log(error.result);
    }
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 401 | Bad or expired token. This can happen if the user revoked a token or<br>the access token has expired. You should re-authenticate the user. | [`Unauthorized1Error`](../../doc/models/unauthorized-1-error.md) |
| 403 | Bad OAuth request (wrong consumer key, bad nonce, expired<br>timestamp...). Unfortunately, re-authenticating the user won't help here. | [`Forbidden1Error`](../../doc/models/forbidden-1-error.md) |
| 429 | The app has exceeded its rate limits. | [`TooManyRequests1Error`](../../doc/models/too-many-requests-1-error.md) |

