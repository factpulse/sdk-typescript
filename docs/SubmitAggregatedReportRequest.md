
# SubmitAggregatedReportRequest

Request to submit an aggregated e-reporting to a PA/PDP.

## Properties

Name | Type
------------ | -------------
`data` | [CreateAggregatedReportRequest](CreateAggregatedReportRequest.md)
`trackingId` | string
`pdpFlowServiceUrl` | string
`pdpTokenUrl` | string
`pdpClientId` | string
`pdpClientSecret` | string

## Example

```typescript
import type { SubmitAggregatedReportRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "data": null,
  "trackingId": null,
  "pdpFlowServiceUrl": null,
  "pdpTokenUrl": null,
  "pdpClientId": null,
  "pdpClientSecret": null,
} satisfies SubmitAggregatedReportRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SubmitAggregatedReportRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


