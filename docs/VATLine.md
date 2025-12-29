# VATLine

Represents a VAT breakdown line by rate (BG-23).  For exemptions (categories E, AE, K, G, O), the fields `exemption_reason` and `vatex_code` are required per EN16931.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**taxable_amount** | [**TaxableAmount**](TaxableAmount.md) |  | [default to undefined]
**vat_amount** | [**VATAmount**](VATAmount.md) |  | [default to undefined]
**rate** | **string** |  | [optional] [default to undefined]
**manual_rate** | [**ManualRate**](ManualRate.md) |  | [optional] [default to undefined]
**category** | [**VATCategory**](VATCategory.md) |  | [optional] [default to undefined]
**due_date_type_code** | [**VATPointDateCode**](VATPointDateCode.md) |  | [optional] [default to undefined]
**exemption_reason** | **string** |  | [optional] [default to undefined]
**vatex_code** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { VATLine } from '@factpulse/sdk';

const instance: VATLine = {
    taxable_amount,
    vat_amount,
    rate,
    manual_rate,
    category,
    due_date_type_code,
    exemption_reason,
    vatex_code,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
