
# SubmitInvoiceRequest

Submit an invoice to Chorus Pro.

## Properties

Name | Type
------------ | -------------
`credentials` | [ChorusProCredentials](ChorusProCredentials.md)
`invoiceNumber` | string
`invoiceDate` | string
`paymentDueDate` | string
`structureId` | number
`serviceCode` | string
`engagementNumber` | string
`totalNetAmount` | [SubmitNetAmount](SubmitNetAmount.md)
`vatAmount` | [SubmitVatAmount](SubmitVatAmount.md)
`totalGrossAmount` | [SubmitGrossAmount](SubmitGrossAmount.md)
`mainAttachmentId` | number
`mainAttachmentLabel` | string
`comment` | string
`purchaseOrderReference` | string
`contractReference` | string

## Example

```typescript
import type { SubmitInvoiceRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "credentials": null,
  "invoiceNumber": null,
  "invoiceDate": null,
  "paymentDueDate": null,
  "structureId": null,
  "serviceCode": null,
  "engagementNumber": null,
  "totalNetAmount": null,
  "vatAmount": null,
  "totalGrossAmount": null,
  "mainAttachmentId": null,
  "mainAttachmentLabel": null,
  "comment": null,
  "purchaseOrderReference": null,
  "contractReference": null,
} satisfies SubmitInvoiceRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SubmitInvoiceRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


