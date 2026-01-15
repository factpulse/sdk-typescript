# TaxBreakdownInput

VAT breakdown for a transaction or invoice.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rate** | [**Rate1**](Rate1.md) |  | [default to undefined]
**taxableAmount** | [**Taxableamount**](Taxableamount.md) |  | [default to undefined]
**taxAmount** | [**Taxamount2**](Taxamount2.md) |  | [default to undefined]

## Example

```typescript
import { TaxBreakdownInput } from '@factpulse/sdk';

const instance: TaxBreakdownInput = {
    rate,
    taxableAmount,
    taxAmount,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
