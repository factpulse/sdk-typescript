
# StructureService

Structure service.

## Properties

Name | Type
------------ | -------------
`serviceId` | number
`serviceCode` | string
`serviceLabel` | string
`isActive` | boolean

## Example

```typescript
import type { StructureService } from ''

// TODO: Update the object below with actual values
const example = {
  "serviceId": null,
  "serviceCode": null,
  "serviceLabel": null,
  "isActive": null,
} satisfies StructureService

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as StructureService
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


