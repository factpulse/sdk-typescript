# EnrichedInvoiceInfo

Information about the enriched invoice.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**invoiceNumber** | **string** |  | [default to undefined]
**supplierId** | **number** |  | [optional] [default to undefined]
**recipientId** | **number** |  | [optional] [default to undefined]
**supplierName** | **string** |  | [default to undefined]
**recipientName** | **string** |  | [default to undefined]
**totalNetAmount** | **string** |  | [default to undefined]
**vatAmount** | **string** |  | [default to undefined]
**totalGrossAmount** | **string** |  | [default to undefined]

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
