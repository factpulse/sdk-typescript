
# GenerateEReportingResponse

Response after generating e-reporting XML.

## Properties

Name | Type
------------ | -------------
`reportId` | string
`flowType` | string
`xml` | string
`xmlSize` | number
`message` | string

## Example

```typescript
import type { GenerateEReportingResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "reportId": null,
  "flowType": null,
  "xml": null,
  "xmlSize": null,
  "message": null,
} satisfies GenerateEReportingResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GenerateEReportingResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


