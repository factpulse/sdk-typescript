# InvoiceLine

Represents a line item in an invoice.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**line_number** | **number** |  | [default to undefined]
**reference** | **string** |  | [optional] [default to undefined]
**item_name** | **string** |  | [default to undefined]
**quantity** | [**Quantity**](Quantity.md) |  | [default to undefined]
**unit** | [**UnitOfMeasure**](UnitOfMeasure.md) |  | [default to undefined]
**unit_net_price** | [**UnitNetPrice**](UnitNetPrice.md) |  | [default to undefined]
**allowanceAmount** | [**InvoiceLineAllowanceAmount**](InvoiceLineAllowanceAmount.md) |  | [optional] [default to undefined]
**lineNetAmount** | [**LineNetAmount**](LineNetAmount.md) |  | [optional] [default to undefined]
**vat_rate** | **string** |  | [optional] [default to undefined]
**manual_vat_rate** | [**ManualVatRate**](ManualVatRate.md) |  | [optional] [default to undefined]
**vat_category** | [**VATCategory**](VATCategory.md) |  | [optional] [default to undefined]
**periodStartDate** | **string** |  | [optional] [default to undefined]
**periodEndDate** | **string** |  | [optional] [default to undefined]
**allowanceReasonCode** | [**AllowanceReasonCode**](AllowanceReasonCode.md) |  | [optional] [default to undefined]
**allowanceReason** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { InvoiceLine } from '@factpulse/sdk';

const instance: InvoiceLine = {
    line_number,
    reference,
    item_name,
    quantity,
    unit,
    unit_net_price,
    allowanceAmount,
    lineNetAmount,
    vat_rate,
    manual_vat_rate,
    vat_category,
    periodStartDate,
    periodEndDate,
    allowanceReasonCode,
    allowanceReason,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
