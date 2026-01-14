
# InvoicePaymentInput

Payment linked to a specific invoice (flux 10.2).  Used for B2B international invoice payments.

## Properties

Name | Type
------------ | -------------
`invoiceId` | string
`invoiceDate` | Date
`paymentDate` | Date
`currency` | [Currency](Currency.md)
`amountsByRate` | [Array&lt;PaymentAmountByRate&gt;](PaymentAmountByRate.md)

## Example

```typescript
import type { InvoicePaymentInput } from ''

// TODO: Update the object below with actual values
const example = {
  "invoiceId": FAC-2025-001,
  "invoiceDate": 2025-01-15,
  "paymentDate": 2025-01-25,
  "currency": null,
  "amountsByRate": null,
} satisfies InvoicePaymentInput

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as InvoicePaymentInput
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


