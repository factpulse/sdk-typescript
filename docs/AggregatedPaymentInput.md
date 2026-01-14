
# AggregatedPaymentInput

Aggregated payment for B2C (flux 10.4).  Used for B2C payment aggregates.

## Properties

Name | Type
------------ | -------------
`paymentDate` | Date
`currency` | [Currency](Currency.md)
`amountsByRate` | [Array&lt;PaymentAmountByRate&gt;](PaymentAmountByRate.md)

## Example

```typescript
import type { AggregatedPaymentInput } from ''

// TODO: Update the object below with actual values
const example = {
  "paymentDate": 2025-01-15,
  "currency": null,
  "amountsByRate": null,
} satisfies AggregatedPaymentInput

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AggregatedPaymentInput
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


