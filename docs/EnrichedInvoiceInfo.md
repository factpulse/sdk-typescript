# EnrichedInvoiceInfo

Information about the enriched invoice.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**invoiceNumber** | **string** | Invoice number | [default to undefined]
**supplierId** | **number** |  | [optional] [default to undefined]
**recipientId** | **number** |  | [optional] [default to undefined]
**supplierName** | **string** | Supplier name | [default to undefined]
**recipientName** | **string** | Recipient name | [default to undefined]
**totalNetAmount** | **string** | Total net amount (HT) | [default to undefined]
**vatAmount** | **string** | VAT amount | [default to undefined]
**totalGrossAmount** | **string** | Total gross amount (TTC) | [default to undefined]

## Example

```typescript
import { EnrichedInvoiceInfo } from '@factpulse/sdk';

const instance: EnrichedInvoiceInfo = {
    invoiceNumber,
    supplierId,
    recipientId,
    supplierName,
    recipientName,
    totalNetAmount,
    vatAmount,
    totalGrossAmount,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
