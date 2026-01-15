# InvoiceLine

Represents an invoice line item (BG-25).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**line_number** | **number** | Invoice line identifier (BT-126). | [default to undefined]
**line_note** | **string** |  | [optional] [default to undefined]
**parent_line_id** | **string** |  | [optional] [default to undefined]
**line_sub_type** | [**LineSubType**](LineSubType.md) |  | [optional] [default to undefined]
**reference** | **string** |  | [optional] [default to undefined]
**buyer_assigned_id** | **string** |  | [optional] [default to undefined]
**product_global_id** | **string** |  | [optional] [default to undefined]
**product_global_id_scheme** | **string** |  | [optional] [default to undefined]
**item_name** | **string** | Item name (BT-153). | [default to undefined]
**item_description** | **string** |  | [optional] [default to undefined]
**origin_country** | **string** |  | [optional] [default to undefined]
**characteristics** | [**Array&lt;ProductCharacteristic&gt;**](ProductCharacteristic.md) |  | [optional] [default to undefined]
**classifications** | [**Array&lt;ProductClassification&gt;**](ProductClassification.md) |  | [optional] [default to undefined]
**quantity** | [**Quantity**](Quantity.md) |  | [default to undefined]
**unit** | [**UnitOfMeasure**](UnitOfMeasure.md) | Invoiced quantity unit of measure code (BT-130). | [default to undefined]
**gross_unit_price** | [**GrossUnitPrice**](GrossUnitPrice.md) |  | [optional] [default to undefined]
**unit_net_price** | [**UnitNetPrice**](UnitNetPrice.md) |  | [default to undefined]
**price_basis_quantity** | [**PriceBasisQuantity**](PriceBasisQuantity.md) |  | [optional] [default to undefined]
**price_basis_unit** | **string** |  | [optional] [default to undefined]
**price_allowance_amount** | [**PriceAllowanceAmount**](PriceAllowanceAmount.md) |  | [optional] [default to undefined]
**lineNetAmount** | [**LineNetAmount**](LineNetAmount.md) |  | [optional] [default to undefined]
**allowanceAmount** | [**InvoiceLineAllowanceAmount**](InvoiceLineAllowanceAmount.md) |  | [optional] [default to undefined]
**allowanceReasonCode** | [**AllowanceReasonCode**](AllowanceReasonCode.md) |  | [optional] [default to undefined]
**allowanceReason** | **string** |  | [optional] [default to undefined]
**allowances_charges** | [**Array&lt;AllowanceCharge&gt;**](AllowanceCharge.md) |  | [optional] [default to undefined]
**vat_rate** | **string** |  | [optional] [default to undefined]
**manual_vat_rate** | [**ManualVatRate**](ManualVatRate.md) |  | [optional] [default to undefined]
**vat_category** | [**VATCategory**](VATCategory.md) |  | [optional] [default to undefined]
**period_start_date** | **string** |  | [optional] [default to undefined]
**period_end_date** | **string** |  | [optional] [default to undefined]
**purchase_order_line_ref** | **string** |  | [optional] [default to undefined]
**accounting_account** | **string** |  | [optional] [default to undefined]
**additional_documents** | [**Array&lt;AdditionalDocument&gt;**](AdditionalDocument.md) |  | [optional] [default to undefined]
**line_notes** | [**Array&lt;InvoiceNote&gt;**](InvoiceNote.md) |  | [optional] [default to undefined]

## Example

```typescript
import { InvoiceLine } from '@factpulse/sdk';

const instance: InvoiceLine = {
    line_number,
    line_note,
    parent_line_id,
    line_sub_type,
    reference,
    buyer_assigned_id,
    product_global_id,
    product_global_id_scheme,
    item_name,
    item_description,
    origin_country,
    characteristics,
    classifications,
    quantity,
    unit,
    gross_unit_price,
    unit_net_price,
    price_basis_quantity,
    price_basis_unit,
    price_allowance_amount,
    lineNetAmount,
    allowanceAmount,
    allowanceReasonCode,
    allowanceReason,
    allowances_charges,
    vat_rate,
    manual_vat_rate,
    vat_category,
    period_start_date,
    period_end_date,
    purchase_order_line_ref,
    accounting_account,
    additional_documents,
    line_notes,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
