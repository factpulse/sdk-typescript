# AFNORFullFlowInfo

Identified Flow info: flow info + id + timestamp

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**trackingId** | **string** | Unique identifier supporting UUID but not only, for flexibility purpose | [optional] [default to undefined]
**name** | **string** | Name of the file | [optional] [default to undefined]
**processingRule** | [**AFNORProcessingRule**](AFNORProcessingRule.md) |  | [optional] [default to undefined]
**flowSyntax** | [**AFNORFlowSyntax**](AFNORFlowSyntax.md) |  | [default to undefined]
**flowProfile** | [**AFNORFlowProfile**](AFNORFlowProfile.md) |  | [optional] [default to undefined]
**sha256** | **string** |  | [optional] [default to undefined]
**flowId** | **string** | Unique identifier supporting UUID but not only, for flexibility purpose | [optional] [default to undefined]
**submittedAt** | **string** | The flow submission date and time (the date and time when the flow was created on the system) This property should be used by the API consumer as a time reference to avoid clock synchronization issues  | [optional] [default to undefined]

## Example

```typescript
import { AFNORFullFlowInfo } from '@factpulse/sdk';

const instance: AFNORFullFlowInfo = {
    trackingId,
    name,
    processingRule,
    flowSyntax,
    flowProfile,
    sha256,
    flowId,
    submittedAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
