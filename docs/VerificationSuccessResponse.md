# VerificationSuccessResponse

Successful verification response with unified data.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**isCompliant** | **boolean** | True if no critical discrepancy | [default to undefined]
**complianceScore** | **number** | Compliance score (0-100%) | [default to undefined]
**verifiedFieldsCount** | **number** | Number of verified fields | [optional] [default to 0]
**compliantFieldsCount** | **number** | Number of compliant fields | [optional] [default to 0]
**isFacturx** | **boolean** | True if PDF contains Factur-X XML | [optional] [default to false]
**facturxProfile** | **string** |  | [optional] [default to undefined]
**fields** | [**Array&lt;VerifiedFieldSchema&gt;**](VerifiedFieldSchema.md) | List of verified fields with values, statuses and PDF coordinates | [optional] [default to undefined]
**mandatoryNotes** | [**Array&lt;MandatoryNoteSchema&gt;**](MandatoryNoteSchema.md) | Mandatory notes (PMT, PMD, AAB) with PDF location | [optional] [default to undefined]
**pageDimensions** | [**Array&lt;PageDimensionsSchema&gt;**](PageDimensionsSchema.md) | Dimensions of each PDF page (width, height) | [optional] [default to undefined]
**warnings** | **Array&lt;string&gt;** | Non-blocking warnings | [optional] [default to undefined]

## Example

```typescript
import { VerificationSuccessResponse } from '@factpulse/sdk';

const instance: VerificationSuccessResponse = {
    isCompliant,
    complianceScore,
    verifiedFieldsCount,
    compliantFieldsCount,
    isFacturx,
    facturxProfile,
    fields,
    mandatoryNotes,
    pageDimensions,
    warnings,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
