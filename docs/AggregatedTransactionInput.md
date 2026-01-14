
# AggregatedTransactionInput

Aggregated transaction for B2C reporting (flux 10.3).  Represents daily aggregation by category (TLB1, TPS1, etc.). Each occurrence corresponds to one day + one currency + one category.  Source: Annexe 6 v1.9, bloc TG-31 \"Transactions\"

## Properties

Name | Type
------------ | -------------
`date` | Date
`categoryCode` | [TransactionCategory](TransactionCategory.md)
`currency` | [Currency](Currency.md)
`taxExclusiveAmount` | [Taxexclusiveamount](Taxexclusiveamount.md)
`taxAmount` | [Taxamount](Taxamount.md)
`taxBreakdown` | [Array&lt;TaxBreakdownInput&gt;](TaxBreakdownInput.md)
`transactionCount` | number
`taxDueType` | [TaxDueDateType](TaxDueDateType.md)

## Example

```typescript
import type { AggregatedTransactionInput } from ''

// TODO: Update the object below with actual values
const example = {
  "date": 2025-01-15,
  "categoryCode": null,
  "currency": null,
  "taxExclusiveAmount": null,
  "taxAmount": null,
  "taxBreakdown": null,
  "transactionCount": null,
  "taxDueType": null,
} satisfies AggregatedTransactionInput

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AggregatedTransactionInput
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


