
# EnrichedInvoiceInfo

Information about the enriched invoice.

## Properties

Name | Type
------------ | -------------
`invoiceNumber` | string
`supplierId` | number
`recipientId` | number
`supplierName` | string
`recipientName` | string
`totalNetAmount` | string
`vatAmount` | string
`totalGrossAmount` | string

## Example

```typescript
import type { EnrichedInvoiceInfo } from ''

// TODO: Update the object below with actual values
const example = {
  "invoiceNumber": null,
  "supplierId": null,
  "recipientId": null,
  "supplierName": null,
  "recipientName": null,
  "totalNetAmount": null,
  "vatAmount": null,
  "totalGrossAmount": null,
} satisfies EnrichedInvoiceInfo

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as EnrichedInvoiceInfo
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


