
# FlowSummary

Summary of a flow in search results.

## Properties

Name | Type
------------ | -------------
`flowId` | string
`trackingId` | string
`name` | string
`flowType` | string
`flowDirection` | string
`acknowledgmentStatus` | string
`createdAt` | string
`updatedAt` | string

## Example

```typescript
import type { FlowSummary } from ''

// TODO: Update the object below with actual values
const example = {
  "flowId": null,
  "trackingId": null,
  "name": null,
  "flowType": null,
  "flowDirection": null,
  "acknowledgmentStatus": null,
  "createdAt": null,
  "updatedAt": null,
} satisfies FlowSummary

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FlowSummary
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


