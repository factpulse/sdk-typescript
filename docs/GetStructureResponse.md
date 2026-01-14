
# GetStructureResponse

Structure details.

## Properties

Name | Type
------------ | -------------
`returnCode` | number
`message` | string
`structureId` | number
`structureIdentifier` | string
`structureLabel` | string
`companyName` | string
`vatNumber` | string
`structureEmail` | string
`parameters` | [StructureParameters](StructureParameters.md)

## Example

```typescript
import type { GetStructureResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "returnCode": null,
  "message": null,
  "structureId": null,
  "structureIdentifier": null,
  "structureLabel": null,
  "companyName": null,
  "vatNumber": null,
  "structureEmail": null,
  "parameters": null,
} satisfies GetStructureResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetStructureResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


