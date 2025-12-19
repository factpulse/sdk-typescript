# SubmitInvoiceResponse

Response after invoice submission.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**returnCode** | **number** | Return code (0 &#x3D; success) | [default to undefined]
**message** | **string** | Return message | [default to undefined]
**chorusInvoiceId** | **number** |  | [optional] [default to undefined]
**depositFlowNumber** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { SubmitInvoiceResponse } from '@factpulse/sdk';

const instance: SubmitInvoiceResponse = {
    returnCode,
    message,
    chorusInvoiceId,
    depositFlowNumber,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
