
# SubmitCompleteInvoiceResponse

Complete response after automated submission.

## Properties

Name | Type
------------ | -------------
`success` | boolean
`destinationType` | string
`chorusResult` | [ChorusProResult](ChorusProResult.md)
`afnorResult` | [AFNORResult](AFNORResult.md)
`enrichedInvoice` | [EnrichedInvoiceInfo](EnrichedInvoiceInfo.md)
`facturxPdf` | [FacturXPDFInfo](FacturXPDFInfo.md)
`signature` | [SignatureInfo](SignatureInfo.md)
`pdfBase64` | string
`message` | string

## Example

```typescript
import type { SubmitCompleteInvoiceResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "success": null,
  "destinationType": null,
  "chorusResult": null,
  "afnorResult": null,
  "enrichedInvoice": null,
  "facturxPdf": null,
  "signature": null,
  "pdfBase64": null,
  "message": null,
} satisfies SubmitCompleteInvoiceResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SubmitCompleteInvoiceResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


