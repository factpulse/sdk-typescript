
# PDPCredentials

PDP credentials for zero-storage strategy (Strategy B).  Allows providing PDP credentials directly in the request instead of storing them in Django.  Useful for: - Ad-hoc tests without persisting credentials - Temporary integrations - Development environments

## Properties

Name | Type
------------ | -------------
`flowServiceUrl` | string
`directoryServiceUrl` | string
`tokenUrl` | string
`clientId` | string
`clientSecret` | string

## Example

```typescript
import type { PDPCredentials } from ''

// TODO: Update the object below with actual values
const example = {
  "flowServiceUrl": https://api.pdp-example.fr/flow/v1,
  "directoryServiceUrl": null,
  "tokenUrl": https://auth.pdp-example.fr/oauth/token,
  "clientId": factpulse_prod_abc123,
  "clientSecret": secret_xyz789,
} satisfies PDPCredentials

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PDPCredentials
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


