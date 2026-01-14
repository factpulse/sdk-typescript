
# IncomingInvoice

Invoice received from a supplier via PDP/PA.  This model contains essential metadata extracted from incoming invoices, regardless of their source format (CII, UBL, Factur-X).  Amounts are Decimal in Python but will be serialized as strings in JSON to preserve monetary precision.

## Properties

Name | Type
------------ | -------------
`flowId` | string
`sourceFormat` | [InvoiceFormat](InvoiceFormat.md)
`supplierReference` | string
`documentType` | [InvoiceTypeCodeOutput](InvoiceTypeCodeOutput.md)
`supplier` | [IncomingSupplier](IncomingSupplier.md)
`billingSiteName` | string
`billingSiteSiret` | string
`issueDate` | string
`dueDate` | string
`currency` | string
`netAmount` | string
`vatAmount` | string
`grossAmount` | string
`purchaseOrderNumber` | string
`contractReference` | string
`invoiceSubject` | string
`documentBase64` | string
`documentContentType` | string
`documentFilename` | string

## Example

```typescript
import type { IncomingInvoice } from ''

// TODO: Update the object below with actual values
const example = {
  "flowId": null,
  "sourceFormat": null,
  "supplierReference": null,
  "documentType": null,
  "supplier": null,
  "billingSiteName": null,
  "billingSiteSiret": null,
  "issueDate": null,
  "dueDate": null,
  "currency": null,
  "netAmount": null,
  "vatAmount": null,
  "grossAmount": null,
  "purchaseOrderNumber": null,
  "contractReference": null,
  "invoiceSubject": null,
  "documentBase64": null,
  "documentContentType": null,
  "documentFilename": null,
} satisfies IncomingInvoice

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as IncomingInvoice
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


