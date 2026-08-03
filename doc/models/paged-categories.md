
# Paged Categories

*This model accepts additional fields of type unknown.*

## Structure

`PagedCategories`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `categories` | [`Categories`](../../doc/models/categories.md) | Required | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { PagedCategories } from 'spotify-web-apilib';

const pagedCategories: PagedCategories = {
  categories: {
    href: 'https://api.spotify.com/v1/me/shows?offset=0&limit=20\n',
    limit: 20,
    next: 'https://api.spotify.com/v1/me/shows?offset=1&limit=1',
    offset: 0,
    previous: 'https://api.spotify.com/v1/me/shows?offset=1&limit=1',
    total: 4,
    items: [
      {
        href: 'href0',
        icons: [
          {
            url: 'https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n',
            height: 300,
            width: 300,
            additionalProperties: {
              'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
            },
          }
        ],
        id: 'equal',
        name: 'EQUAL',
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      }
    ],
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

