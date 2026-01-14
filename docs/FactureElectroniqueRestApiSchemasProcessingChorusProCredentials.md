
# FactureElectroniqueRestApiSchemasProcessingChorusProCredentials

Optional Chorus Pro credentials.  **MODE 1 - JWT retrieval (recommended):** Do not provide this `credentials` field in the payload. Credentials will be automatically retrieved via client_uid from JWT (0-trust).  **MODE 2 - Credentials in payload:** Provide all required fields below. Useful for tests or third-party integrations.

## Properties

Name | Type
------------ | -------------
`pisteClientId` | string
`pisteClientSecret` | string
`chorusLogin` | string
`chorusPassword` | string
`sandboxMode` | boolean

## Example

```typescript
import type { FactureElectroniqueRestApiSchemasProcessingChorusProCredentials } from ''

// TODO: Update the object below with actual values
const example = {
  "pisteClientId": null,
  "pisteClientSecret": null,
  "chorusLogin": null,
  "chorusPassword": null,
  "sandboxMode": null,
} satisfies FactureElectroniqueRestApiSchemasProcessingChorusProCredentials

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FactureElectroniqueRestApiSchemasProcessingChorusProCredentials
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


