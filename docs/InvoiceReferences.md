# InvoiceReferences

Contains various invoice references (currency, type, etc.).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**invoice_currency** | **string** |  | [optional] [default to 'EUR']
**payment_means** | [**PaymentMeans**](PaymentMeans.md) |  | [default to undefined]
**invoice_type** | [**InvoiceTypeCode**](InvoiceTypeCode.md) |  | [default to undefined]
**vat_accounting_code** | [**VATAccountingCode**](VATAccountingCode.md) |  | [default to undefined]
**contract_reference** | **string** |  | [optional] [default to undefined]
**vat_exemption_reason** | **string** |  | [optional] [default to undefined]
**purchase_order_reference** | **string** |  | [optional] [default to undefined]
**preceding_invoice_reference** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { InvoiceReferences } from '@factpulse/sdk';

const instance: InvoiceReferences = {
    invoice_currency,
    payment_means,
    invoice_type,
    vat_accounting_code,
    contract_reference,
    vat_exemption_reason,
    purchase_order_reference,
    preceding_invoice_reference,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
