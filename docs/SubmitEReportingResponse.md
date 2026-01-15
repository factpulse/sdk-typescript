# SubmitEReportingResponse

Response after submitting e-reporting to PA/PDP.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**flowId** | **string** | Flow identifier from PA/PDP | [default to undefined]
**reportId** | **string** | Report identifier | [default to undefined]
**trackingId** | **string** |  | [optional] [default to undefined]
**flowType** | **string** | Flux type | [default to undefined]
**sha256** | **string** | SHA256 hash of submitted XML | [default to undefined]
**afnorFlowType** | **string** |  | [optional] [default to undefined]
**afnorResponse** | **{ [key: string]: any; }** |  | [optional] [default to undefined]
**message** | **string** | Status message | [default to undefined]

## Example

```typescript
import { SubmitEReportingResponse } from '@factpulse/sdk';

const instance: SubmitEReportingResponse = {
    flowId,
    reportId,
    trackingId,
    flowType,
    sha256,
    afnorFlowType,
    afnorResponse,
    message,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
