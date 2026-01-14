# AFNORFlow

The properties of a Flow resource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**submittedAt** | **string** | The flow submission date and time (the date and time when the flow was created on the system)  | [optional] [default to undefined]
**updatedAt** | **string** | The last update date and time of the flow. When the flow is submitted updatedAt is equal to submittedAt. When the flow acknowledgment status is changed updatedAt date and time is updated.  | [optional] [default to undefined]
**flowId** | **string** | Unique identifier supporting UUID but not only, for flexibility purpose | [optional] [default to undefined]
**trackingId** | **string** | Unique identifier supporting UUID but not only, for flexibility purpose | [optional] [default to undefined]
**flowType** | [**AFNORFlowType**](AFNORFlowType.md) |  | [optional] [default to undefined]
**processingRule** | [**AFNORProcessingRule**](AFNORProcessingRule.md) |  | [optional] [default to undefined]
**processingRuleSource** | **string** | Says whether the processing rule has been computed or the processing rule was an input parameter | [optional] [default to undefined]
**flowDirection** | [**AFNORFlowDirection**](AFNORFlowDirection.md) |  | [optional] [default to undefined]
**flowSyntax** | [**AFNORFlowSyntax**](AFNORFlowSyntax.md) |  | [optional] [default to undefined]
**flowProfile** | [**AFNORFlowProfile**](AFNORFlowProfile.md) |  | [optional] [default to undefined]
**acknowledgement** | [**AFNORAcknowledgement**](AFNORAcknowledgement.md) |  | [optional] [default to undefined]

## Example

```typescript
import { AFNORFlow } from '@factpulse/sdk';

const instance: AFNORFlow = {
    submittedAt,
    updatedAt,
    flowId,
    trackingId,
    flowType,
    processingRule,
    processingRuleSource,
    flowDirection,
    flowSyntax,
    flowProfile,
    acknowledgement,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
