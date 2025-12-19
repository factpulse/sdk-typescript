# IncomingInvoice

Invoice received from a supplier via PDP/PA.  This model contains essential metadata extracted from incoming invoices, regardless of their source format (CII, UBL, Factur-X).  Amounts are Decimal in Python but will be serialized as strings in JSON to preserve monetary precision.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**flowId** | **string** |  | [optional] [default to undefined]
**sourceFormat** | [**InvoiceFormat**](InvoiceFormat.md) | Invoice source format | [default to undefined]
**supplierReference** | **string** | Invoice number issued by the supplier (BT-1) | [default to undefined]
**documentType** | [**DocumentType**](DocumentType.md) | Document type (BT-3) | [optional] [default to undefined]
**supplier** | [**IncomingSupplier**](IncomingSupplier.md) | Invoice issuer (SellerTradeParty) | [default to undefined]
**billingSiteName** | **string** | Recipient name / your company (BT-44) | [default to undefined]
**billingSiteSiret** | **string** |  | [optional] [default to undefined]
**issueDate** | **string** | Invoice date (BT-2) - YYYY-MM-DD | [default to undefined]
**dueDate** | **string** |  | [optional] [default to undefined]
**currency** | **string** | ISO currency code (BT-5) | [optional] [default to 'EUR']
**netAmount** | **string** | Total net amount (BT-109) | [default to undefined]
**vatAmount** | **string** | Total VAT amount (BT-110) | [default to undefined]
**grossAmount** | **string** | Total gross amount (BT-112) | [default to undefined]
**purchaseOrderNumber** | **string** |  | [optional] [default to undefined]
**contractReference** | **string** |  | [optional] [default to undefined]
**invoiceSubject** | **string** |  | [optional] [default to undefined]
**documentBase64** | **string** |  | [optional] [default to undefined]
**documentContentType** | **string** |  | [optional] [default to undefined]
**documentFilename** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { IncomingInvoice } from '@factpulse/sdk';

const instance: IncomingInvoice = {
    flowId,
    sourceFormat,
    supplierReference,
    documentType,
    supplier,
    billingSiteName,
    billingSiteSiret,
    issueDate,
    dueDate,
    currency,
    netAmount,
    vatAmount,
    grossAmount,
    purchaseOrderNumber,
    contractReference,
    invoiceSubject,
    documentBase64,
    documentContentType,
    documentFilename,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
