
# SearchStructureRequest

Search structures by criteria.

## Properties

Name | Type
------------ | -------------
`credentials` | [ChorusProCredentials](ChorusProCredentials.md)
`structureIdentifier` | string
`structureIdentifierType` | string
`companyName` | string
`restrictPrivateStructures` | boolean

## Example

```typescript
import type { SearchStructureRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "credentials": null,
  "structureIdentifier": null,
  "structureIdentifierType": null,
  "companyName": null,
  "restrictPrivateStructures": null,
} satisfies SearchStructureRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SearchStructureRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


