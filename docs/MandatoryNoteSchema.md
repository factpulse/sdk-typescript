# MandatoryNoteSchema

Mandatory note detected with location and XML/PDF comparison.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**subjectCode** | **string** | Subject code (PMT, PMD, AAB) | [default to undefined]
**label** | **string** | Label (e.g., Recovery indemnity) | [default to undefined]
**pdfValue** | **string** |  | [optional] [default to undefined]
**xmlValue** | **string** |  | [optional] [default to undefined]
**status** | [**FieldStatus**](FieldStatus.md) | Compliance status (COMPLIANT if XML found in PDF) | [optional] [default to undefined]
**message** | **string** |  | [optional] [default to undefined]
**bbox** | [**BoundingBoxSchema**](BoundingBoxSchema.md) |  | [optional] [default to undefined]

## Example

```typescript
import { MandatoryNoteSchema } from '@factpulse/sdk';

const instance: MandatoryNoteSchema = {
    subjectCode,
    label,
    pdfValue,
    xmlValue,
    status,
    message,
    bbox,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
