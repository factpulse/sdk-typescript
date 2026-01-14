
# InvoiceTotals

Contains all invoice total amounts (BG-22).

## Properties

Name | Type
------------ | -------------
`lineTotalAmount` | [LineTotalAmount](LineTotalAmount.md)
`allowanceTotalAmount` | [AllowanceTotalAmount](AllowanceTotalAmount.md)
`chargeTotalAmount` | [ChargeTotalAmount](ChargeTotalAmount.md)
`totalNetAmount` | [TotalNetAmount](TotalNetAmount.md)
`vatAmount` | [TotalVATAmount](TotalVATAmount.md)
`totalGrossAmount` | [TotalGrossAmount](TotalGrossAmount.md)
`prepayment` | [InvoiceTotalsPrepayment](InvoiceTotalsPrepayment.md)
`roundingAmount` | [RoundingAmount](RoundingAmount.md)
`amountDue` | [AmountDue](AmountDue.md)
`globalAllowanceAmount` | [GlobalAllowanceAmount](GlobalAllowanceAmount.md)
`globalAllowanceReason` | string

## Example

```typescript
import type { InvoiceTotals } from ''

// TODO: Update the object below with actual values
const example = {
  "lineTotalAmount": null,
  "allowanceTotalAmount": null,
  "chargeTotalAmount": null,
  "totalNetAmount": null,
  "vatAmount": null,
  "totalGrossAmount": null,
  "prepayment": null,
  "roundingAmount": null,
  "amountDue": null,
  "globalAllowanceAmount": null,
  "globalAllowanceReason": null,
} satisfies InvoiceTotals

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as InvoiceTotals
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


