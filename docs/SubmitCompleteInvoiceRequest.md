# SubmitCompleteInvoiceRequest

Request to submit a complete invoice (generation + submission).  Workflow: 1. Auto-enrichment (optional) 2. Factur-X PDF generation 3. Signature (optional) 4. Submission to destination

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**invoiceData** | [**SimplifiedInvoiceData**](SimplifiedInvoiceData.md) | Invoice data in simplified format (see examples) | [default to undefined]
**sourcePdf** | **string** | Base64-encoded source PDF (will be transformed to Factur-X) | [default to undefined]
**destination** | [**Destination**](Destination.md) |  | [default to undefined]
**signature** | [**SignatureParameters**](SignatureParameters.md) |  | [optional] [default to undefined]
**_options** | [**ProcessingOptions**](ProcessingOptions.md) | Processing options | [optional] [default to undefined]

## Example

```typescript
import { SubmitCompleteInvoiceRequest } from '@factpulse/sdk';

const instance: SubmitCompleteInvoiceRequest = {
    invoiceData,
    sourcePdf,
    destination,
    signature,
    _options,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
