
# APIError

Standardized API error (aligned with AFNOR Error schema).  Unified format for all HTTP error responses.

## Properties

Name | Type
------------ | -------------
`errorCode` | string
`errorMessage` | string
`details` | [Array&lt;ValidationErrorDetail&gt;](ValidationErrorDetail.md)

## Example

```typescript
import type { APIError } from ''

// TODO: Update the object below with actual values
const example = {
  "errorCode": null,
  "errorMessage": null,
  "details": null,
} satisfies APIError

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as APIError
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


