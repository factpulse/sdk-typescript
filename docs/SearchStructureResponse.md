
# SearchStructureResponse

Structure search response.

## Properties

Name | Type
------------ | -------------
`returnCode` | number
`message` | string
`structures` | [Array&lt;StructureInfo&gt;](StructureInfo.md)
`total` | number

## Example

```typescript
import type { SearchStructureResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "returnCode": null,
  "message": null,
  "structures": null,
  "total": null,
} satisfies SearchStructureResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SearchStructureResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


