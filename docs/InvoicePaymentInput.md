# InvoicePaymentInput

Payment linked to a specific invoice (flux 10.2).  Used for B2B international invoice payments.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**invoiceId** | **string** | Invoice identifier | [default to undefined]
**invoiceDate** | **string** | Original invoice date | [default to undefined]
**paymentDate** | **string** | Payment date | [default to undefined]
**currency** | [**Currency**](Currency.md) |  | [optional] [default to undefined]
**amountsByRate** | [**Array&lt;PaymentAmountByRate&gt;**](PaymentAmountByRate.md) | Payment amounts by VAT rate | [default to undefined]

## Example

```typescript
import { InvoicePaymentInput } from '@factpulse/sdk';

const instance: InvoicePaymentInput = {
    invoiceId,
    invoiceDate,
    paymentDate,
    currency,
    amountsByRate,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
