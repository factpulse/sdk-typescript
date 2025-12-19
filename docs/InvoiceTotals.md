# InvoiceTotals

Contains all invoice total amounts.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total_net_amount** | [**TotalNetAmount**](TotalNetAmount.md) |  | [default to undefined]
**vat_amount** | [**TotalVATAmount**](TotalVATAmount.md) |  | [default to undefined]
**total_gross_amount** | [**TotalGrossAmount**](TotalGrossAmount.md) |  | [default to undefined]
**amount_due** | [**AmountDue**](AmountDue.md) |  | [default to undefined]
**prepayment** | [**InvoiceTotalsPrepayment**](InvoiceTotalsPrepayment.md) |  | [optional] [default to undefined]
**globalAllowanceAmount** | [**GlobalAllowanceAmount**](GlobalAllowanceAmount.md) |  | [optional] [default to undefined]
**globalAllowanceReason** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { InvoiceTotals } from '@factpulse/sdk';

const instance: InvoiceTotals = {
    total_net_amount,
    vat_amount,
    total_gross_amount,
    amount_due,
    prepayment,
    globalAllowanceAmount,
    globalAllowanceReason,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
