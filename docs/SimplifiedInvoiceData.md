# SimplifiedInvoiceData

Simplified invoice data (minimal format for auto-enrichment).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**number** | **string** | Unique invoice number | [default to undefined]
**supplier** | **{ [key: string]: any; }** | Supplier information (siret, iban, ...) | [default to undefined]
**recipient** | **{ [key: string]: any; }** | Recipient information (siret, ...) | [default to undefined]
**lines** | **Array&lt;{ [key: string]: any; }&gt;** | Invoice lines | [default to undefined]
**date** | **string** |  | [optional] [default to undefined]
**dueDays** | **number** | Due date in days (default: 30) | [optional] [default to 30]
**comment** | **string** |  | [optional] [default to undefined]
**purchaseOrderReference** | **string** |  | [optional] [default to undefined]
**contractReference** | **string** |  | [optional] [default to undefined]

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
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
