# Search

```ts
const searchApi = new SearchApi(client);
```

## Class Name

`SearchApi`


# Search

Get Spotify catalog information about albums, artists, playlists, tracks, shows, episodes or audiobooks
that match a keyword string. Audiobooks are only available within the US, UK, Canada, Ireland, New Zealand and Australia markets.

```ts
async search(
  q: string,
  type: Itemtype[],
  market?: string,
  limit?: number,
  offset?: number,
  includeExternal?: IncludeExternal,
  requestOptions?: RequestOptions
): Promise<ApiResponse<SearchItems>>
```

## Authentication

This endpoint requires [oauth_2_0](../../doc/auth/oauth-2-authorization-code-grant.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `q` | `string` | Query, Required | - |
| `type` | [`Itemtype[]`](../../doc/models/itemtype.md) | Query, Required | - |
| `market` | `string \| undefined` | Query, Optional | - |
| `limit` | `number \| undefined` | Query, Optional | **Default**: `20`<br><br>**Constraints**: `>= 1`, `<= 50` |
| `offset` | `number \| undefined` | Query, Optional | **Default**: `0`<br><br>**Constraints**: `>= 0`, `<= 1000` |
| `includeExternal` | [`IncludeExternal \| undefined`](../../doc/models/include-external.md) | Query, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: Search response

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`SearchItems`](../../doc/models/search-items.md).

## Example Usage

```ts
const q = 'remaster%20track:Doxy%20artist:Miles%20Davis';

const type: Itemtype[] = [
  Itemtype.Audiobook,
  Itemtype.Album,
  Itemtype.Artist
];

const market = 'ES';

const limit = 10;

const offset = 5;

try {
  const response = await searchApi.search(
    q,
    type,
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

