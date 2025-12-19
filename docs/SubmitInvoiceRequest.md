# SubmitInvoiceRequest

Submit an invoice to Chorus Pro.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**credentials** | [**FactureElectroniqueRestApiSchemasChorusProChorusProCredentials**](FactureElectroniqueRestApiSchemasChorusProChorusProCredentials.md) |  | [optional] [default to undefined]
**invoice_number** | **string** | Invoice number | [default to undefined]
**invoice_date** | **string** | Invoice date (ISO format: YYYY-MM-DD) | [default to undefined]
**payment_due_date** | **string** |  | [optional] [default to undefined]
**structure_id** | **number** | Chorus Pro recipient structure ID | [default to undefined]
**service_code** | **string** |  | [optional] [default to undefined]
**engagement_number** | **string** |  | [optional] [default to undefined]
**total_net_amount** | [**TotalNetAmount**](TotalNetAmount.md) |  | [default to undefined]
**vat_amount** | [**VatAmount**](VatAmount.md) |  | [default to undefined]
**total_gross_amount** | [**TotalGrossAmount**](TotalGrossAmount.md) |  | [default to undefined]
**main_attachment_id** | **number** |  | [optional] [default to undefined]
**main_attachment_label** | **string** |  | [optional] [default to undefined]
**comment** | **string** |  | [optional] [default to undefined]
**purchase_order_reference** | **string** |  | [optional] [default to undefined]
**contract_reference** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { SubmitInvoiceRequest } from '@factpulse/sdk';

const instance: SubmitInvoiceRequest = {
    credentials,
    invoice_number,
    invoice_date,
    payment_due_date,
    structure_id,
    service_code,
    engagement_number,
    total_net_amount,
    vat_amount,
    total_gross_amount,
    main_attachment_id,
    main_attachment_label,
    comment,
    purchase_order_reference,
    contract_reference,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
