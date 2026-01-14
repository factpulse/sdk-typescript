
# SubmitCompleteInvoiceRequest

Request to submit a complete invoice (generation + submission).  Workflow: 1. Auto-enrichment (optional) 2. Factur-X PDF generation 3. Signature (optional) 4. Submission to destination

## Properties

Name | Type
------------ | -------------
`invoiceData` | [SimplifiedInvoiceData](SimplifiedInvoiceData.md)
`sourcePdf` | string
`destination` | [Destination](Destination.md)
`signature` | [SignatureParameters](SignatureParameters.md)
`options` | [ProcessingOptions](ProcessingOptions.md)

## Example

```typescript
import type { SubmitCompleteInvoiceRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "invoiceData": null,
  "sourcePdf": null,
  "destination": null,
  "signature": null,
  "options": null,
} satisfies SubmitCompleteInvoiceRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SubmitCompleteInvoiceRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


