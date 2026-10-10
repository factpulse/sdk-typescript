# SimplifiedInvoiceData

Simplified invoice data (minimal format for auto-enrichment).  Any field of the complete `FacturXInvoice` model may be added on top of the fields declared below (`deliveryDate` BT-72, `deliveryParty` BG-15, `paymentReference` BT-83, `payee` BG-10, ...): extra keys are kept and merged by `FacturXInvoice.create_from_simplified_dict`. Whatever the simplified format computes itself (totals, lines, addresses) always wins.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**number** | **string** | Unique invoice number | [default to undefined]
**supplier** | **{ [key: string]: any; }** | Supplier information (siret, iban, bic, routingAddress, ...). For a seller without an intra-community VAT number (VAT franchise, article 293 B of the CGI), provide &#x60;taxRegistrationId&#x60; (BT-32, usually the SIREN): it satisfies BR-E-02 and prevents BT-31 from being auto-calculated. | [default to undefined]
**recipient** | **{ [key: string]: any; }** | Recipient information (siret, vatNumber for BT-48, ...) | [default to undefined]
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

## Example

```typescript
import { SimplifiedInvoiceData } from '@factpulse/sdk';

const instance: SimplifiedInvoiceData = {
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
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
