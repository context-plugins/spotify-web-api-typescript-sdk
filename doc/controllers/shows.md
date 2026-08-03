# Shows

```ts
const showsApi = new ShowsApi(client);
```

## Class Name

`ShowsApi`

## Methods

* [Get-a-Show](../../doc/controllers/shows.md#get-a-show)
* [Get-Multiple-Shows](../../doc/controllers/shows.md#get-multiple-shows)
* [Get-a-Shows-Episodes](../../doc/controllers/shows.md#get-a-shows-episodes)
* [Get-Users-Saved-Shows](../../doc/controllers/shows.md#get-users-saved-shows)
* [Save-Shows-User](../../doc/controllers/shows.md#save-shows-user)
* [Remove-Shows-User](../../doc/controllers/shows.md#remove-shows-user)
* [Check-Users-Saved-Shows](../../doc/controllers/shows.md#check-users-saved-shows)


# Get-a-Show

Get Spotify catalog information for a single show identified by its
unique Spotify ID.

```ts
async getAShow(
  id: string,
  market?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ShowObject>>
```

## Authentication

This endpoint requires [oauth_2_0](../../doc/auth/oauth-2-authorization-code-grant.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | - |
| `market` | `string \| undefined` | Query, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Requires scope

### oauth_2_0

`user-read-playback-position`

## Response Type

**200**: A show

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`ShowObject`](../../doc/models/show-object.md).

## Example Usage

```ts
const id = '38bS44xjbVVZ3No3ByF1dJ';

const market = 'ES';

try {
  const response = await showsApi.getAShow(
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


# Get-Multiple-Shows

Get Spotify catalog information for several shows based on their Spotify IDs.

```ts
async getMultipleShows(
  ids: string,
  market?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ManySimplifiedShows>>
```

## Authentication

This endpoint requires [oauth_2_0](../../doc/auth/oauth-2-authorization-code-grant.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `ids` | `string` | Query, Required | - |
| `market` | `string \| undefined` | Query, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: A set of shows

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`ManySimplifiedShows`](../../doc/models/many-simplified-shows.md).

## Example Usage

```ts
const ids = '5CfCWKI5pZ28U0uOzXkDHe,5as3aKmN2k11yfDDDSrvaZ';

const market = 'ES';

try {
  const response = await showsApi.getMultipleShows(
    ids,
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


# Get-a-Shows-Episodes

Get Spotify catalog information about an show’s episodes. Optional parameters can be used to limit the number of episodes returned.

```ts
async getAShowsEpisodes(
  id: string,
  market?: string,
  limit?: number,
  offset?: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PagingSimplifiedEpisodeObject>>
```

## Authentication

This endpoint requires [oauth_2_0](../../doc/auth/oauth-2-authorization-code-grant.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | - |
| `market` | `string \| undefined` | Query, Optional | - |
| `limit` | `number \| undefined` | Query, Optional | **Default**: `20`<br><br>**Constraints**: `>= 1`, `<= 50` |
| `offset` | `number \| undefined` | Query, Optional | **Default**: `0` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Requires scope

### oauth_2_0

`user-read-playback-position`

## Response Type

**200**: Pages of episodes

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`PagingSimplifiedEpisodeObject`](../../doc/models/paging-simplified-episode-object.md).

## Example Usage

```ts
const id = '38bS44xjbVVZ3No3ByF1dJ';

const market = 'ES';

const limit = 10;

const offset = 5;

try {
  const response = await showsApi.getAShowsEpisodes(
    id,
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


# Get-Users-Saved-Shows

Get a list of shows saved in the current Spotify user's library. Optional parameters can be used to limit the number of shows returned.

```ts
async getUsersSavedShows(
  limit?: number,
  offset?: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PagingSavedShowObject>>
```

## Authentication

This endpoint requires [oauth_2_0](../../doc/auth/oauth-2-authorization-code-grant.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `limit` | `number \| undefined` | Query, Optional | **Default**: `20`<br><br>**Constraints**: `>= 1`, `<= 50` |
| `offset` | `number \| undefined` | Query, Optional | **Default**: `0` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Requires scope

### oauth_2_0

`user-library-read`

## Response Type

**200**: Pages of shows

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`PagingSavedShowObject`](../../doc/models/paging-saved-show-object.md).

## Example Usage

```ts
const limit = 10;

const offset = 5;

try {
  const response = await showsApi.getUsersSavedShows(
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


# Save-Shows-User

Save one or more shows to current Spotify user's library.

```ts
async saveShowsUser(
  ids: string,
  body?: SaveShowsRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Authentication

This endpoint requires [oauth_2_0](../../doc/auth/oauth-2-authorization-code-grant.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `ids` | `string` | Query, Required | - |
| `body` | [`SaveShowsRequest \| undefined`](../../doc/models/save-shows-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Requires scope

### oauth_2_0

`user-library-modify`

## Response Type

**200**: Show saved

This method returns an [`ApiResponse`](../../doc/api-response.md) instance.

## Example Usage

```ts
const ids = '5CfCWKI5pZ28U0uOzXkDHe,5as3aKmN2k11yfDDDSrvaZ';

try {
  const response = await showsApi.saveShowsUser(ids);

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


# Remove-Shows-User

Delete one or more shows from current Spotify user's library.

```ts
async removeShowsUser(
  ids: string,
  market?: string,
  body?: RemoveShowsRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Authentication

This endpoint requires [oauth_2_0](../../doc/auth/oauth-2-authorization-code-grant.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `ids` | `string` | Query, Required | - |
| `market` | `string \| undefined` | Query, Optional | - |
| `body` | [`RemoveShowsRequest \| undefined`](../../doc/models/remove-shows-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Requires scope

### oauth_2_0

`user-library-modify`

## Response Type

**200**: Show removed

This method returns an [`ApiResponse`](../../doc/api-response.md) instance.

## Example Usage

```ts
const ids = '5CfCWKI5pZ28U0uOzXkDHe,5as3aKmN2k11yfDDDSrvaZ';

const market = 'ES';

try {
  const response = await showsApi.removeShowsUser(
    ids,
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


# Check-Users-Saved-Shows

Check if one or more shows is already saved in the current Spotify user's library.

```ts
async checkUsersSavedShows(
  ids: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<boolean[]>>
```

## Authentication

This endpoint requires [oauth_2_0](../../doc/auth/oauth-2-authorization-code-grant.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `ids` | `string` | Query, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Requires scope

### oauth_2_0

`user-library-read`

## Response Type

**200**: Array of booleans

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type `boolean[]`.

## Example Usage

```ts
const ids = '5CfCWKI5pZ28U0uOzXkDHe,5as3aKmN2k11yfDDDSrvaZ';

try {
  const response = await showsApi.checkUsersSavedShows(ids);

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

## Example Response

```
[
  false,
  true
]
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 401 | Bad or expired token. This can happen if the user revoked a token or<br>the access token has expired. You should re-authenticate the user. | [`Unauthorized1Error`](../../doc/models/unauthorized-1-error.md) |
| 403 | Bad OAuth request (wrong consumer key, bad nonce, expired<br>timestamp...). Unfortunately, re-authenticating the user won't help here. | [`Forbidden1Error`](../../doc/models/forbidden-1-error.md) |
| 429 | The app has exceeded its rate limits. | [`TooManyRequests1Error`](../../doc/models/too-many-requests-1-error.md) |

