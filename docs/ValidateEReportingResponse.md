
# ValidateEReportingResponse

Response after validating e-reporting data.

## Properties

Name | Type
------------ | -------------
`valid` | boolean
`reportId` | string
`flowType` | string
`errors` | [Array&lt;FactureElectroniqueRestApiSchemasEreportingValidationError&gt;](FactureElectroniqueRestApiSchemasEreportingValidationError.md)
`warnings` | [Array&lt;FactureElectroniqueRestApiSchemasEreportingValidationError&gt;](FactureElectroniqueRestApiSchemasEreportingValidationError.md)
`message` | string

## Example

```typescript
import type { ValidateEReportingResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "valid": null,
  "reportId": null,
  "flowType": null,
  "errors": null,
  "warnings": null,
  "message": null,
} satisfies ValidateEReportingResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ValidateEReportingResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


