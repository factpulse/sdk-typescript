
# AFNORCredentials

Optional AFNOR PDP credentials.  **MODE 1 - JWT retrieval (recommended):** Do not provide this `credentials` field in the payload. PDP credentials will be automatically retrieved via client_uid from JWT (0-trust).  **MODE 2 - Credentials in payload (zero-storage):** Provide all required fields below. Useful for tests or third-party integrations.

## Properties

Name | Type
------------ | -------------
`clientId` | string
`clientSecret` | string
`flowServiceUrl` | string

## Example

```typescript
import type { AFNORCredentials } from ''

// TODO: Update the object below with actual values
const example = {
  "clientId": null,
  "clientSecret": null,
  "flowServiceUrl": null,
} satisfies AFNORCredentials

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AFNORCredentials
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


