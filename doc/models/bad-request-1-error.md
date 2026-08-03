
# Bad Request 1 Error

*This model accepts additional fields of type unknown.*

## Structure

`BadRequest1Error`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `error` | [`ErrorObject`](../../doc/models/error-object.md) | Required | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
try {
  // make the API call
} catch (error) {
  if (error instanceof BadRequest1Error) {
    console.log(error.result);
  }
}
```

