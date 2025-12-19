# FacturXInvoice

Data model for an invoice to be converted to Factur-X.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**invoice_number** | **string** |  | [default to undefined]
**payment_due_date** | **string** |  | [default to undefined]
**invoice_date** | **string** |  | [optional] [default to undefined]
**submission_mode** | [**SubmissionMode**](SubmissionMode.md) |  | [default to undefined]
**recipient** | [**Recipient**](Recipient.md) |  | [default to undefined]
**supplier** | [**Supplier**](Supplier.md) |  | [default to undefined]
**invoicing_framework** | [**InvoicingFramework**](InvoicingFramework.md) |  | [default to undefined]
**references** | [**InvoiceReferences**](InvoiceReferences.md) |  | [default to undefined]
**totals** | [**InvoiceTotals**](InvoiceTotals.md) |  | [default to undefined]
**invoice_lines** | [**Array&lt;InvoiceLine&gt;**](InvoiceLine.md) |  | [optional] [default to undefined]
**vat_lines** | [**Array&lt;VATLine&gt;**](VATLine.md) |  | [optional] [default to undefined]
**notes** | [**Array&lt;InvoiceNote&gt;**](InvoiceNote.md) |  | [optional] [default to undefined]
**comment** | **string** |  | [optional] [default to undefined]
**current_user_id** | **number** |  | [optional] [default to undefined]
**supplementary_attachments** | [**Array&lt;SupplementaryAttachment&gt;**](SupplementaryAttachment.md) |  | [optional] [default to undefined]
**payee** | [**Payee**](Payee.md) |  | [optional] [default to undefined]

## Example

```typescript
import { FacturXInvoice } from '@factpulse/sdk';

const instance: FacturXInvoice = {
    invoice_number,
    payment_due_date,
    invoice_date,
    submission_mode,
    recipient,
    supplier,
    invoicing_framework,
    references,
    totals,
    invoice_lines,
    vat_lines,
    notes,
    comment,
    current_user_id,
    supplementary_attachments,
    payee,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
