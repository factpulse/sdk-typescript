
# GetStructureRequest

Get structure details.

## Properties

Name | Type
------------ | -------------
`credentials` | [ChorusProCredentials](ChorusProCredentials.md)
`structureId` | number
`languageCode` | string

## Example

```typescript
import type { GetStructureRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "credentials": null,
  "structureId": null,
  "languageCode": null,
} satisfies GetStructureRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetStructureRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


