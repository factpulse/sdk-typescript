
# InvoiceReferences

Contains various invoice references (currency, type, etc.).

## Properties

Name | Type
------------ | -------------
`businessProcessId` | string
`invoiceCurrency` | string
`paymentMeans` | [PaymentMeans](PaymentMeans.md)
`paymentMeansText` | string
`invoiceType` | [InvoiceTypeCode](InvoiceTypeCode.md)
`vatAccountingCode` | [VATAccountingCode](VATAccountingCode.md)
`buyerReference` | string
`contractReference` | string
`purchaseOrderReference` | string
`sellerOrderReference` | string
`receivingAdviceReference` | string
`despatchAdviceReference` | string
`tenderReference` | string
`precedingInvoiceReference` | string
`precedingInvoiceDate` | string
`projectReference` | string
`projectName` | string
`vatExemptionReason` | string

## Example

```typescript
import type { InvoiceReferences } from ''

// TODO: Update the object below with actual values
const example = {
  "businessProcessId": null,
  "invoiceCurrency": null,
  "paymentMeans": null,
  "paymentMeansText": null,
  "invoiceType": null,
  "vatAccountingCode": null,
  "buyerReference": null,
  "contractReference": null,
  "purchaseOrderReference": null,
  "sellerOrderReference": null,
  "receivingAdviceReference": null,
  "despatchAdviceReference": null,
  "tenderReference": null,
  "precedingInvoiceReference": null,
  "precedingInvoiceDate": null,
  "projectReference": null,
  "projectName": null,
  "vatExemptionReason": null,
} satisfies InvoiceReferences

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as InvoiceReferences
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


