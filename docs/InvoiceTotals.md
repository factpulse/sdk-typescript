# InvoiceTotals

Contains all invoice total amounts (BG-22).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**line_total_amount** | [**LineTotalAmount**](LineTotalAmount.md) |  | [optional] [default to undefined]
**allowance_total_amount** | [**AllowanceTotalAmount**](AllowanceTotalAmount.md) |  | [optional] [default to undefined]
**charge_total_amount** | [**ChargeTotalAmount**](ChargeTotalAmount.md) |  | [optional] [default to undefined]
**total_net_amount** | [**TotalNetAmount**](TotalNetAmount.md) |  | [default to undefined]
**vat_amount** | [**TotalVATAmount**](TotalVATAmount.md) |  | [default to undefined]
**total_gross_amount** | [**TotalGrossAmount**](TotalGrossAmount.md) |  | [default to undefined]
**prepayment** | [**InvoiceTotalsPrepayment**](InvoiceTotalsPrepayment.md) |  | [optional] [default to undefined]
**rounding_amount** | [**RoundingAmount**](RoundingAmount.md) |  | [optional] [default to undefined]
**amount_due** | [**AmountDue**](AmountDue.md) |  | [default to undefined]
**globalAllowanceAmount** | [**GlobalAllowanceAmount**](GlobalAllowanceAmount.md) |  | [optional] [default to undefined]
**globalAllowanceReason** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { InvoiceTotals } from '@factpulse/sdk';

const instance: InvoiceTotals = {
    line_total_amount,
    allowance_total_amount,
    charge_total_amount,
    total_net_amount,
    vat_amount,
    total_gross_amount,
    prepayment,
    rounding_amount,
    amount_due,
    globalAllowanceAmount,
    globalAllowanceReason,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
