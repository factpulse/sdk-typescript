# InvoiceReferences

Contains various invoice references (currency, type, etc.).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**business_process_id** | **string** |  | [optional] [default to undefined]
**invoice_currency** | **string** | Invoice currency code (BT-5). ISO 4217. | [optional] [default to 'EUR']
**payment_means** | [**PaymentMeans**](PaymentMeans.md) | Payment means type code (BT-81). | [default to undefined]
**payment_means_text** | **string** |  | [optional] [default to undefined]
**invoice_type** | [**InvoiceTypeCode**](InvoiceTypeCode.md) |  | [default to undefined]
**vat_accounting_code** | [**VATAccountingCode**](VATAccountingCode.md) | VAT accounting code. | [default to undefined]
**buyer_reference** | **string** |  | [optional] [default to undefined]
**contract_reference** | **string** |  | [optional] [default to undefined]
**purchase_order_reference** | **string** |  | [optional] [default to undefined]
**seller_order_reference** | **string** |  | [optional] [default to undefined]
**receiving_advice_reference** | **string** |  | [optional] [default to undefined]
**despatch_advice_reference** | **string** |  | [optional] [default to undefined]
**tender_reference** | **string** |  | [optional] [default to undefined]
**preceding_invoice_reference** | **string** |  | [optional] [default to undefined]
**preceding_invoice_date** | **string** |  | [optional] [default to undefined]
**project_reference** | **string** |  | [optional] [default to undefined]
**project_name** | **string** |  | [optional] [default to undefined]
**vat_exemption_reason** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { InvoiceReferences } from '@factpulse/sdk';

const instance: InvoiceReferences = {
    business_process_id,
    invoice_currency,
    payment_means,
    payment_means_text,
    invoice_type,
    vat_accounting_code,
    buyer_reference,
    contract_reference,
    purchase_order_reference,
    seller_order_reference,
    receiving_advice_reference,
    despatch_advice_reference,
    tender_reference,
    preceding_invoice_reference,
    preceding_invoice_date,
    project_reference,
    project_name,
    vat_exemption_reason,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
