# InvoiceNote

Invoice note (IncludedNote in Factur-X).  Mandatory notes for BR-FR-05 are: - PMT: Fixed recovery fee - PMD: Late payment penalties - AAB: Early payment discount

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**subject_code** | **string** |  | [optional] [default to undefined]
**content** | **string** |  | [default to undefined]

## Example

```typescript
import { InvoiceNote } from '@factpulse/sdk';

const instance: InvoiceNote = {
    subject_code,
    content,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
