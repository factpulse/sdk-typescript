
# StructureInfo

Structure information.

## Properties

Name | Type
------------ | -------------
`structureId` | number
`structureIdentifier` | string
`structureName` | string
`structureIdentifierType` | string
`status` | string

## Example

```typescript
import type { StructureInfo } from ''

// TODO: Update the object below with actual values
const example = {
  "structureId": null,
  "structureIdentifier": null,
  "structureName": null,
  "structureIdentifierType": null,
  "status": null,
} satisfies StructureInfo

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as StructureInfo
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


