# SubmitInvoiceRequest

Submit an invoice to Chorus Pro.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**credentials** | [**FactureElectroniqueRestApiSchemasChorusProChorusProCredentials**](FactureElectroniqueRestApiSchemasChorusProChorusProCredentials.md) |  | [optional] [default to undefined]
**invoiceNumber** | **string** | Invoice number | [default to undefined]
**invoiceDate** | **string** | Invoice date (ISO format: YYYY-MM-DD) | [default to undefined]
**paymentDueDate** | **string** |  | [optional] [default to undefined]
**structureId** | **number** | Chorus Pro recipient structure ID | [default to undefined]
**serviceCode** | **string** |  | [optional] [default to undefined]
**engagementNumber** | **string** |  | [optional] [default to undefined]
**totalNetAmount** | [**SubmitNetAmount**](SubmitNetAmount.md) |  | [default to undefined]
**vatAmount** | [**SubmitVatAmount**](SubmitVatAmount.md) |  | [default to undefined]
**totalGrossAmount** | [**SubmitGrossAmount**](SubmitGrossAmount.md) |  | [default to undefined]
**mainAttachmentId** | **number** |  | [optional] [default to undefined]
**mainAttachmentLabel** | **string** |  | [optional] [default to undefined]
**comment** | **string** |  | [optional] [default to undefined]
**purchaseOrderReference** | **string** |  | [optional] [default to undefined]
**contractReference** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { SubmitInvoiceRequest } from '@factpulse/sdk';

const instance: SubmitInvoiceRequest = {
    credentials,
    invoiceNumber,
    invoiceDate,
    paymentDueDate,
    structureId,
    serviceCode,
    engagementNumber,
    totalNetAmount,
    vatAmount,
    totalGrossAmount,
    mainAttachmentId,
    mainAttachmentLabel,
    comment,
    purchaseOrderReference,
    contractReference,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
