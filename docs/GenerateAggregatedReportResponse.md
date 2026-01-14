
# GenerateAggregatedReportResponse

Response after generating an aggregated e-reporting XML.

## Properties

Name | Type
------------ | -------------
`reportId` | string
`transmissionType` | string
`flowType` | string
`xml` | string
`xmlSize` | number
`contentSummary` | { [key: string]: any; }
`message` | string

## Example

```typescript
import type { GenerateAggregatedReportResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "reportId": null,
  "transmissionType": null,
  "flowType": null,
  "xml": null,
  "xmlSize": null,
  "contentSummary": null,
  "message": null,
} satisfies GenerateAggregatedReportResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GenerateAggregatedReportResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


