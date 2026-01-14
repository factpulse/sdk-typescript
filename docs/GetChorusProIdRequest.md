
# GetChorusProIdRequest

Get Chorus Pro ID from SIRET.

## Properties

Name | Type
------------ | -------------
`credentials` | [ChorusProCredentials](ChorusProCredentials.md)
`siret` | string
`identifierType` | string

## Example

```typescript
import type { GetChorusProIdRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "credentials": null,
  "siret": null,
  "identifierType": null,
} satisfies GetChorusProIdRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetChorusProIdRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


