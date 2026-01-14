# VerifiedFieldSchema

A verified field with all its information (extraction + compliance + location).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**businessTerm** | **string** | EN16931 Business Term (e.g., BT-1) | [default to undefined]
**label** | **string** | Field label (e.g., Invoice Number) | [default to undefined]
**pdfValue** | **string** |  | [optional] [default to undefined]
**xmlValue** | **string** |  | [optional] [default to undefined]
**status** | [**FieldStatus**](FieldStatus.md) | Compliance status | [default to undefined]
**message** | **string** |  | [optional] [default to undefined]
**confidence** | **number** | Confidence score (0-1) | [optional] [default to 1.0]
**source** | **string** | Extraction source | [optional] [default to 'native_pdf']
**bbox** | [**BoundingBoxSchema**](BoundingBoxSchema.md) |  | [optional] [default to undefined]

## Example

```typescript
import { VerifiedFieldSchema } from '@factpulse/sdk';

const instance: VerifiedFieldSchema = {
    businessTerm,
    label,
    pdfValue,
    xmlValue,
    status,
    message,
    confidence,
    source,
    bbox,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
