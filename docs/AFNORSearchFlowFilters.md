
# AFNORSearchFlowFilters

Filtering criteria, at least one is required

## Properties

Name | Type
------------ | -------------
`updatedAfter` | Date
`updatedBefore` | Date
`processingRule` | [Array&lt;AFNORProcessingRule&gt;](AFNORProcessingRule.md)
`flowType` | [Array&lt;AFNORFlowType&gt;](AFNORFlowType.md)
`flowDirection` | [Array&lt;AFNORFlowDirection&gt;](AFNORFlowDirection.md)
`trackingId` | string
`ackStatus` | [AFNORFlowAckStatus](AFNORFlowAckStatus.md)

## Example

```typescript
import type { AFNORSearchFlowFilters } from ''

// TODO: Update the object below with actual values
const example = {
  "updatedAfter": null,
  "updatedBefore": null,
  "processingRule": null,
  "flowType": null,
  "flowDirection": null,
  "trackingId": null,
  "ackStatus": null,
} satisfies AFNORSearchFlowFilters

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AFNORSearchFlowFilters
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


