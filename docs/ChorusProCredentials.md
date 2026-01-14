
# ChorusProCredentials

Chorus Pro credentials for Zero-Trust mode.  **Zero-Trust Mode**: Credentials are passed in each request and are NEVER stored.  **Security**: - Credentials are never persisted in the database - They are used only for the duration of the request - Secure transmission via HTTPS  **Use cases**: - High-security environments (banks, administrations) - Strict GDPR compliance - Tests with temporary credentials - Users who don\'t want to store their credentials

## Properties

Name | Type
------------ | -------------
`pisteClientId` | string
`pisteClientSecret` | string
`chorusProLogin` | string
`chorusProPassword` | string
`sandbox` | boolean

## Example

```typescript
import type { ChorusProCredentials } from ''

// TODO: Update the object below with actual values
const example = {
  "pisteClientId": null,
  "pisteClientSecret": null,
  "chorusProLogin": null,
  "chorusProPassword": null,
  "sandbox": null,
} satisfies ChorusProCredentials

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ChorusProCredentials
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


