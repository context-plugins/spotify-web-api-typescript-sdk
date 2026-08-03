# Episodes

```ts
const episodesApi = new EpisodesApi(client);
```

## Class Name

`EpisodesApi`

## Methods

* [Get-an-Episode](../../doc/controllers/episodes.md#get-an-episode)
* [Get-Multiple-Episodes](../../doc/controllers/episodes.md#get-multiple-episodes)
* [Get-Users-Saved-Episodes](../../doc/controllers/episodes.md#get-users-saved-episodes)
* [Save-Episodes-User](../../doc/controllers/episodes.md#save-episodes-user)
* [Remove-Episodes-User](../../doc/controllers/episodes.md#remove-episodes-user)
* [Check-Users-Saved-Episodes](../../doc/controllers/episodes.md#check-users-saved-episodes)


# Get-an-Episode

Get Spotify catalog information for a single episode identified by its
unique Spotify ID.

```ts
async getAnEpisode(
  id: string,
  market?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<EpisodeObject>>
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

**200**: An episode

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`EpisodeObject`](../../doc/models/episode-object.md).

## Example Usage

```ts
const id = '512ojhOuo1ktJprKbVcKyQ';

const market = 'ES';

try {
  const response = await episodesApi.getAnEpisode(
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


# Get-Multiple-Episodes

Get Spotify catalog information for several episodes based on their Spotify IDs.

```ts
async getMultipleEpisodes(
  ids: string,
  market?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ManyEpisodes>>
```

## Authentication

This endpoint requires [oauth_2_0](../../doc/auth/oauth-2-authorization-code-grant.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `ids` | `string` | Query, Required | - |
| `market` | `string \| undefined` | Query, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Requires scope

### oauth_2_0

`user-read-playback-position`

## Response Type

**200**: A set of episodes

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`ManyEpisodes`](../../doc/models/many-episodes.md).

## Example Usage

```ts
const ids = '77o6BIVlYM3msb4MMIL1jH,0Q86acNRm6V9GYx55SXKwf';

const market = 'ES';

try {
  const response = await episodesApi.getMultipleEpisodes(
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


# Get-Users-Saved-Episodes

Get a list of the episodes saved in the current Spotify user's library.<br/>
This API endpoint is in __beta__ and could change without warning. Please share any feedback that you have, or issues that you discover, in our [developer community forum](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer).

```ts
async getUsersSavedEpisodes(
  market?: string,
  limit?: number,
  offset?: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PagingSavedEpisodeObject>>
```

## Authentication

This endpoint requires [oauth_2_0](../../doc/auth/oauth-2-authorization-code-grant.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `market` | `string \| undefined` | Query, Optional | - |
| `limit` | `number \| undefined` | Query, Optional | **Default**: `20`<br><br>**Constraints**: `>= 1`, `<= 50` |
| `offset` | `number \| undefined` | Query, Optional | **Default**: `0` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Requires scope

### oauth_2_0

`user-library-read`, `user-read-playback-position`

## Response Type

**200**: Pages of episodes

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`PagingSavedEpisodeObject`](../../doc/models/paging-saved-episode-object.md).

## Example Usage

```ts
const market = 'ES';

const limit = 10;

const offset = 5;

try {
  const response = await episodesApi.getUsersSavedEpisodes(
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


# Save-Episodes-User

Save one or more episodes to the current user's library.<br/>
This API endpoint is in __beta__ and could change without warning. Please share any feedback that you have, or issues that you discover, in our [developer community forum](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer).

```ts
async saveEpisodesUser(
  ids: string,
  body?: SaveEpisodesRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Authentication

This endpoint requires [oauth_2_0](../../doc/auth/oauth-2-authorization-code-grant.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `ids` | `string` | Query, Required | - |
| `body` | [`SaveEpisodesRequest \| undefined`](../../doc/models/save-episodes-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Requires scope

### oauth_2_0

`user-library-modify`

## Response Type

**200**: Episode saved

This method returns an [`ApiResponse`](../../doc/api-response.md) instance.

## Example Usage

```ts
const ids = '77o6BIVlYM3msb4MMIL1jH,0Q86acNRm6V9GYx55SXKwf';

try {
  const response = await episodesApi.saveEpisodesUser(ids);

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


# Remove-Episodes-User

Remove one or more episodes from the current user's library.<br/>
This API endpoint is in __beta__ and could change without warning. Please share any feedback that you have, or issues that you discover, in our [developer community forum](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer).

```ts
async removeEpisodesUser(
  ids: string,
  body?: RemoveEpisodesRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Authentication

This endpoint requires [oauth_2_0](../../doc/auth/oauth-2-authorization-code-grant.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `ids` | `string` | Query, Required | - |
| `body` | [`RemoveEpisodesRequest \| undefined`](../../doc/models/remove-episodes-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Requires scope

### oauth_2_0

`user-library-modify`

## Response Type

**200**: Episode removed

This method returns an [`ApiResponse`](../../doc/api-response.md) instance.

## Example Usage

```ts
const ids = '7ouMYWpwJ422jRcDASZB7P,4VqPOruhp5EdPBeR92t6lQ,2takcwOaAZWiXQijPHIx7B';

try {
  const response = await episodesApi.removeEpisodesUser(ids);

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


# Check-Users-Saved-Episodes

Check if one or more episodes is already saved in the current Spotify user's 'Your Episodes' library.<br/>
This API endpoint is in __beta__ and could change without warning. Please share any feedback that you have, or issues that you discover, in our [developer community forum](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer)..

```ts
async checkUsersSavedEpisodes(
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
const ids = '77o6BIVlYM3msb4MMIL1jH,0Q86acNRm6V9GYx55SXKwf';

try {
  const response = await episodesApi.checkUsersSavedEpisodes(ids);

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

