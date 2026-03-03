# AFNORFullFlowInfo

Identified Flow info: flow info + id + timestamp

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**flowId** | **string** | Unique identifier supporting UUID but not only, for flexibility purpose | [default to undefined]
**submittedAt** | **string** | The flow submission date and time (the date and time when the flow was created on the system) This property should be used by the API consumer as a time reference to avoid clock synchronization issues  | [default to undefined]
**trackingId** | **string** | The tracking id is an external identifier and is used to track the flow by the sender | [optional] [default to undefined]
**name** | **string** | Name of the file | [default to undefined]
**processingRule** | [**AFNORProcessingRule**](AFNORProcessingRule.md) |  | [optional] [default to undefined]
**flowSyntax** | [**AFNORFlowSyntax**](AFNORFlowSyntax.md) |  | [default to undefined]
**flowProfile** | [**AFNORFlowProfile**](AFNORFlowProfile.md) |  | [optional] [default to undefined]
**sha256** | **string** | The sha256 is the fingerprint of the attached file: - if provided in the request: it should be checked once received - if not provided in the request: it may be computed and returned in the response  | [optional] [default to undefined]

## Example

```typescript
import { AFNORFullFlowInfo } from '@factpulse/sdk';

const instance: AFNORFullFlowInfo = {
    flowId,
    submittedAt,
    trackingId,
    name,
    processingRule,
    flowSyntax,
    flowProfile,
    sha256,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
