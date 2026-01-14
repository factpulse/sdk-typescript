
# SearchFlowResponse

Response from a flow search.

## Properties

Name | Type
------------ | -------------
`total` | number
`offset` | number
`limit` | number
`results` | [Array&lt;FlowSummary&gt;](FlowSummary.md)

## Example

```typescript
import type { SearchFlowResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "total": null,
  "offset": null,
  "limit": null,
  "results": null,
} satisfies SearchFlowResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SearchFlowResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


