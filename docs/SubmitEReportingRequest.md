# SubmitEReportingRequest

Request to submit e-reporting to a PA/PDP.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**CreateEReportingRequest**](CreateEReportingRequest.md) | E-Reporting data to submit | [default to undefined]
**trackingId** | **string** |  | [optional] [default to undefined]
**pdpFlowServiceUrl** | **string** |  | [optional] [default to undefined]
**pdpTokenUrl** | **string** |  | [optional] [default to undefined]
**pdpClientId** | **string** |  | [optional] [default to undefined]
**pdpClientSecret** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { SubmitEReportingRequest } from '@factpulse/sdk';

const instance: SubmitEReportingRequest = {
    data,
    trackingId,
    pdpFlowServiceUrl,
    pdpTokenUrl,
    pdpClientId,
    pdpClientSecret,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
