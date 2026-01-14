
# AFNORSearchFlowContent

A set of flows matching criterias, provided into the request

## Properties

Name | Type
------------ | -------------
`limit` | number
`filters` | [AFNORSearchFlowFilters](AFNORSearchFlowFilters.md)
`results` | [Array&lt;AFNORFlow&gt;](AFNORFlow.md)

## Example

```typescript
import type { AFNORSearchFlowContent } from ''

// TODO: Update the object below with actual values
const example = {
  "limit": null,
  "filters": null,
  "results": null,
} satisfies AFNORSearchFlowContent

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AFNORSearchFlowContent
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


