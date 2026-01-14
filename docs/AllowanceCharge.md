# AllowanceCharge

Document-level or line-level allowance/charge.  Represents BG-20 (Document level allowances), BG-21 (Document level charges), BG-27 (Invoice line allowances), or BG-28 (Invoice line charges).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_charge** | **boolean** | True for charge, False for allowance (ChargeIndicator). | [default to undefined]
**amount** | [**Amount1**](Amount1.md) |  | [default to undefined]
**base_amount** | [**BaseAmount**](BaseAmount.md) |  | [optional] [default to undefined]
**percentage** | [**Percentage**](Percentage.md) |  | [optional] [default to undefined]
**reason** | **string** |  | [optional] [default to undefined]
**reason_code** | [**AllowanceChargeReasonCode**](AllowanceChargeReasonCode.md) |  | [optional] [default to undefined]
**vat_category** | [**VATCategory**](VATCategory.md) |  | [optional] [default to undefined]
**vat_rate** | [**VatRate**](VatRate.md) |  | [optional] [default to undefined]

## Example

```typescript
import { AllowanceCharge } from '@factpulse/sdk';

const instance: AllowanceCharge = {
    is_charge,
    amount,
    base_amount,
    percentage,
    reason,
    reason_code,
    vat_category,
    vat_rate,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
