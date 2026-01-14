# AggregatedPaymentInput

Aggregated payment for B2C (flux 10.4).  Used for B2C payment aggregates.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**paymentDate** | **string** | Payment date | [default to undefined]
**currency** | [**Currency**](Currency.md) |  | [optional] [default to undefined]
**amountsByRate** | [**Array&lt;PaymentAmountByRate&gt;**](PaymentAmountByRate.md) | Payment amounts by VAT rate | [default to undefined]

## Example

```typescript
import { AggregatedPaymentInput } from '@factpulse/sdk';

const instance: AggregatedPaymentInput = {
    paymentDate,
    currency,
    amountsByRate,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
