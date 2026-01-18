# SubmitCompleteInvoiceResponse

Complete response after automated submission.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **boolean** | Invoice was successfully submitted | [default to undefined]
**destinationType** | **string** | Destination type | [default to undefined]
**chorusResult** | [**ChorusProResult**](ChorusProResult.md) |  | [optional] [default to undefined]
**afnorResult** | [**AFNORResult**](AFNORResult.md) |  | [optional] [default to undefined]
**enrichedInvoice** | [**EnrichedInvoiceInfo**](EnrichedInvoiceInfo.md) | Enriched invoice data | [default to undefined]
**facturxPdf** | [**FacturXPDFInfo**](FacturXPDFInfo.md) | Generated PDF information | [default to undefined]
**signature** | [**SignatureInfo**](SignatureInfo.md) |  | [optional] [default to undefined]
**contentB64** | **string** | Generated Factur-X PDF (and signed if requested) base64-encoded | [default to undefined]
**message** | **string** | Return message | [default to undefined]

## Example

```typescript
import { SubmitCompleteInvoiceResponse } from '@factpulse/sdk';

const instance: SubmitCompleteInvoiceResponse = {
    success,
    destinationType,
    chorusResult,
    afnorResult,
    enrichedInvoice,
    facturxPdf,
    signature,
    contentB64,
    message,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
