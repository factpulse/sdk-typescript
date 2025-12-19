# GetInvoiceResponse

Invoice details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**returnCode** | **number** |  | [default to undefined]
**message** | **string** |  | [default to undefined]
**chorusInvoiceId** | **number** |  | [optional] [default to undefined]
**invoiceNumber** | **string** |  | [optional] [default to undefined]
**invoiceDate** | **string** |  | [optional] [default to undefined]
**totalGrossAmount** | **string** |  | [optional] [default to undefined]
**currentStatus** | [**InvoiceStatus**](InvoiceStatus.md) |  | [optional] [default to undefined]
**recipientStructureId** | **number** |  | [optional] [default to undefined]
**recipientStructureName** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { GetInvoiceResponse } from '@factpulse/sdk';

const instance: GetInvoiceResponse = {
    returnCode,
    message,
    chorusInvoiceId,
    invoiceNumber,
    invoiceDate,
    totalGrossAmount,
    currentStatus,
    recipientStructureId,
    recipientStructureName,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
