
# SearchServicesResponse

Structure services list.

## Properties

Name | Type
------------ | -------------
`returnCode` | number
`message` | string
`services` | [Array&lt;StructureService&gt;](StructureService.md)
`total` | number

## Example

```typescript
import type { SearchServicesResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "returnCode": null,
  "message": null,
  "services": null,
  "total": null,
} satisfies SearchServicesResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SearchServicesResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


