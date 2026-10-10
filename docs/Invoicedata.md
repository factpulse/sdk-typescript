# Invoicedata

Invoice data, in either of the two accepted formats (detected automatically, same rule as /generate-invoice): 1. **Simplified format**: `number` + `lines`, with auto-enrichment. Any field of the complete model may be added on top. 2. **Complete format**: full `FacturXInvoice` structure, recognised by the presence of `invoiceLines`. No auto-enrichment of totals.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**number** | **string** | Unique invoice number | [default to undefined]
**supplier** | [**Supplier**](Supplier.md) |  | [default to undefined]
**recipient** | [**Recipient**](Recipient.md) |  | [default to undefined]
**lines** | **Array&lt;{ [key: string]: any; }&gt;** | Invoice lines | [default to undefined]
**date** | **string** |  | [optional] [default to undefined]
**dueDays** | **number** | Due date in days (default: 30) | [optional] [default to 30]
**comment** | **string** |  | [optional] [default to undefined]
**purchaseOrderReference** | **string** |  | [optional] [default to undefined]
**contractReference** | **string** |  | [optional] [default to undefined]
**invoiceType** | [**FactureElectroniqueModelsInvoiceTypeCode**](FactureElectroniqueModelsInvoiceTypeCode.md) | Document type (UNTDID 1001). Default: 380 (Invoice). | [optional] [default to undefined]
**precedingInvoiceReference** | **string** |  | [optional] [default to undefined]
**operationNature** | [**OperationNature**](OperationNature.md) |  | [optional] [default to undefined]
**invoicingFramework** | [**InvoicingFrameworkCode**](InvoicingFrameworkCode.md) |  | [optional] [default to undefined]
**invoice_number** | **string** |  | [default to undefined]
**payment_due_date** | **string** |  | [default to undefined]
**invoice_date** | **string** |  | [optional] [default to undefined]
**submission_mode** | [**SubmissionMode**](SubmissionMode.md) |  | [optional] [default to undefined]
**invoicing_framework** | [**InvoicingFramework**](InvoicingFramework.md) |  | [optional] [default to undefined]
**references** | [**InvoiceReferences**](InvoiceReferences.md) |  | [default to undefined]
**totals** | [**InvoiceTotals**](InvoiceTotals.md) |  | [default to undefined]
**invoice_lines** | [**Array&lt;InvoiceLine&gt;**](InvoiceLine.md) |  | [optional] [default to undefined]
**vat_lines** | [**Array&lt;VATLine&gt;**](VATLine.md) |  | [optional] [default to undefined]
**notes** | [**Array&lt;InvoiceNote&gt;**](InvoiceNote.md) |  | [optional] [default to undefined]
**current_user_id** | **number** |  | [optional] [default to undefined]
**supplementary_attachments** | [**Array&lt;SupplementaryAttachment&gt;**](SupplementaryAttachment.md) |  | [optional] [default to undefined]
**payee** | [**Payee**](Payee.md) |  | [optional] [default to undefined]
**delivery_party** | [**DeliveryParty**](DeliveryParty.md) |  | [optional] [default to undefined]
**tax_representative** | [**TaxRepresentative**](TaxRepresentative.md) |  | [optional] [default to undefined]
**delivery_date** | **string** |  | [optional] [default to undefined]
**billing_period_start** | **string** |  | [optional] [default to undefined]
**billing_period_end** | **string** |  | [optional] [default to undefined]
**payment_reference** | **string** |  | [optional] [default to undefined]
**creditor_reference_id** | **string** |  | [optional] [default to undefined]
**direct_debit_mandate_id** | **string** |  | [optional] [default to undefined]
**debtor_iban** | **string** |  | [optional] [default to undefined]
**payment_terms** | **string** |  | [optional] [default to undefined]
**allowances_charges** | [**Array&lt;AllowanceCharge&gt;**](AllowanceCharge.md) |  | [optional] [default to undefined]
**additional_documents** | [**Array&lt;AdditionalDocument&gt;**](AdditionalDocument.md) |  | [optional] [default to undefined]
**buyer_accounting_reference** | **string** |  | [optional] [default to undefined]
**payment_card** | [**PaymentCard**](PaymentCard.md) |  | [optional] [default to undefined]

## Example

```typescript
import { Invoicedata } from '@factpulse/sdk';

const instance: Invoicedata = {
    number,
    supplier,
    recipient,
    lines,
    date,
    dueDays,
    comment,
    purchaseOrderReference,
    contractReference,
    invoiceType,
    precedingInvoiceReference,
    operationNature,
    invoicingFramework,
    invoice_number,
    payment_due_date,
    invoice_date,
    submission_mode,
    invoicing_framework,
    references,
    totals,
    invoice_lines,
    vat_lines,
    notes,
    current_user_id,
    supplementary_attachments,
    payee,
    delivery_party,
    tax_representative,
    delivery_date,
    billing_period_start,
    billing_period_end,
    payment_reference,
    creditor_reference_id,
    direct_debit_mandate_id,
    debtor_iban,
    payment_terms,
    allowances_charges,
    additional_documents,
    buyer_accounting_reference,
    payment_card,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
