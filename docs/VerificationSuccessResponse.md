
# VerificationSuccessResponse

Successful verification response with unified data.

## Properties

Name | Type
------------ | -------------
`isCompliant` | boolean
`complianceScore` | number
`verifiedFieldsCount` | number
`compliantFieldsCount` | number
`isFacturx` | boolean
`facturxProfile` | string
`fields` | [Array&lt;VerifiedFieldSchema&gt;](VerifiedFieldSchema.md)
`mandatoryNotes` | [Array&lt;MandatoryNoteSchema&gt;](MandatoryNoteSchema.md)
`pageDimensions` | [Array&lt;PageDimensionsSchema&gt;](PageDimensionsSchema.md)
`warnings` | Array&lt;string&gt;

## Example

```typescript
import type { VerificationSuccessResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "isCompliant": null,
  "complianceScore": null,
  "verifiedFieldsCount": null,
  "compliantFieldsCount": null,
  "isFacturx": null,
  "facturxProfile": null,
  "fields": null,
  "mandatoryNotes": null,
  "pageDimensions": null,
  "warnings": null,
} satisfies VerificationSuccessResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as VerificationSuccessResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


