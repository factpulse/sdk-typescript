
# SubmitEReportingResponse

Response after submitting e-reporting to PA/PDP.

## Properties

Name | Type
------------ | -------------
`flowId` | string
`reportId` | string
`trackingId` | string
`flowType` | string
`sha256` | string
`afnorFlowType` | string
`afnorResponse` | { [key: string]: any; }
`message` | string

## Example

```typescript
import type { SubmitEReportingResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "flowId": null,
  "reportId": null,
  "trackingId": null,
  "flowType": null,
  "sha256": null,
  "afnorFlowType": null,
  "afnorResponse": null,
  "message": null,
} satisfies SubmitEReportingResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SubmitEReportingResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


