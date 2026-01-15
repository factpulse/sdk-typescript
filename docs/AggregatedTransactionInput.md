# AggregatedTransactionInput

Aggregated transaction for B2C reporting (flux 10.3).  Represents daily aggregation by category (TLB1, TPS1, etc.). Each occurrence corresponds to one day + one currency + one category.  Source: Annexe 6 v1.9, bloc TG-31 \"Transactions\"

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**date** | **string** | Transaction date (TT-77) | [default to undefined]
**categoryCode** | [**TransactionCategory**](TransactionCategory.md) | Transaction category code (TT-81). Use TLB1 for goods, TPS1 for services. | [default to undefined]
**currency** | [**Currency**](Currency.md) |  | [optional] [default to undefined]
**taxExclusiveAmount** | [**Taxexclusiveamount**](Taxexclusiveamount.md) |  | [default to undefined]
**taxAmount** | [**Taxamount**](Taxamount.md) |  | [default to undefined]
**taxBreakdown** | [**Array&lt;TaxBreakdownInput&gt;**](TaxBreakdownInput.md) | VAT breakdown by rate | [default to undefined]
**transactionCount** | **number** |  | [optional] [default to undefined]
**taxDueType** | [**TaxDueDateType**](TaxDueDateType.md) |  | [optional] [default to undefined]

## Example

```typescript
import { AggregatedTransactionInput } from '@factpulse/sdk';

const instance: AggregatedTransactionInput = {
    date,
    categoryCode,
    currency,
    taxExclusiveAmount,
    taxAmount,
    taxBreakdown,
    transactionCount,
    taxDueType,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
