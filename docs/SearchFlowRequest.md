
# SearchFlowRequest

Request to search submitted flows.

## Properties

Name | Type
------------ | -------------
`updatedAfter` | Date
`updatedBefore` | Date
`flowTypes` | [Array&lt;FlowType&gt;](FlowType.md)
`flowDirections` | [Array&lt;FlowDirection&gt;](FlowDirection.md)
`trackingId` | string
`flowId` | string
`acknowledgmentStatus` | [AcknowledgmentStatus](AcknowledgmentStatus.md)
`offset` | number
`limit` | number

## Example

```typescript
import type { SearchFlowRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "updatedAfter": null,
  "updatedBefore": null,
  "flowTypes": null,
  "flowDirections": null,
  "trackingId": null,
  "flowId": null,
  "acknowledgmentStatus": null,
  "offset": null,
  "limit": null,
} satisfies SearchFlowRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SearchFlowRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


