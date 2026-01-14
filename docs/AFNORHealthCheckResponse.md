
# AFNORHealthCheckResponse

Response from AFNOR services healthcheck.

## Properties

Name | Type
------------ | -------------
`flowServiceOk` | boolean
`directoryServiceOk` | boolean
`message` | string

## Example

```typescript
import type { AFNORHealthCheckResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "flowServiceOk": null,
  "directoryServiceOk": null,
  "message": null,
} satisfies AFNORHealthCheckResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AFNORHealthCheckResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


