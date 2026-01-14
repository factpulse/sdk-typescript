
# InvoiceInput

Invoice for B2B international reporting (flux 10.1).  Used for unitary declaration of international B2B invoices.

## Properties

Name | Type
------------ | -------------
`invoiceId` | string
`issueDate` | Date
`typeCode` | [FactureElectroniqueRestApiSchemasEreportingInvoiceTypeCode](FactureElectroniqueRestApiSchemasEreportingInvoiceTypeCode.md)
`currency` | [Currency](Currency.md)
`dueDate` | Date
`sellerSiren` | string
`sellerVatId` | string
`sellerCountry` | [Sellercountry](Sellercountry.md)
`buyerId` | string
`buyerVatId` | string
`buyerCountry` | [Buyercountry](Buyercountry.md)
`taxExclusiveAmount` | [Taxexclusiveamount1](Taxexclusiveamount1.md)
`taxAmount` | [Taxamount1](Taxamount1.md)
`taxBreakdown` | [Array&lt;TaxBreakdownInput&gt;](TaxBreakdownInput.md)
`referencedInvoiceId` | string
`referencedInvoiceDate` | Date

## Example

```typescript
import type { InvoiceInput } from ''

// TODO: Update the object below with actual values
const example = {
  "invoiceId": FAC-2025-001,
  "issueDate": 2025-01-15,
  "typeCode": null,
  "currency": null,
  "dueDate": null,
  "sellerSiren": 123456789,
  "sellerVatId": null,
  "sellerCountry": null,
  "buyerId": null,
  "buyerVatId": null,
  "buyerCountry": null,
  "taxExclusiveAmount": null,
  "taxAmount": null,
  "taxBreakdown": null,
  "referencedInvoiceId": null,
  "referencedInvoiceDate": null,
} satisfies InvoiceInput

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as InvoiceInput
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


