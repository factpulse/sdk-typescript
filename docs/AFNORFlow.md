# AFNORFlow

The properties of a Flow resource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**trackingId** | **string** | The tracking id is an external identifier and is used to track the flow by the sender | [optional] [default to undefined]
**name** | **string** | Name of the file | [default to undefined]
**processingRule** | [**AFNORProcessingRule**](AFNORProcessingRule.md) |  | [default to undefined]
**flowSyntax** | [**AFNORFlowSyntax**](AFNORFlowSyntax.md) |  | [default to undefined]
**flowProfile** | [**AFNORFlowProfile**](AFNORFlowProfile.md) |  | [default to undefined]
**flowId** | **string** | Unique identifier supporting UUID but not only, for flexibility purpose | [default to undefined]
**submittedAt** | **string** | The flow submission date and time (the date and time when the flow was created on the system) This property should be used by the API consumer as a time reference to avoid clock synchronization issues  | [default to undefined]
**updatedAt** | **string** | The last update date and time of the flow. When the flow is submitted updatedAt is equal to submittedAt. When the flow acknowledgment status is changed updatedAt date and time is updated.  | [default to undefined]
**flowType** | [**AFNORFlowType**](AFNORFlowType.md) |  | [default to undefined]
**processingRuleSource** | **string** | Says whether the processing rule has been computed or the processing rule was an input parameter | [default to undefined]
**flowDirection** | [**AFNORFlowDirection**](AFNORFlowDirection.md) |  | [default to undefined]
**acknowledgement** | [**AFNORAcknowledgement**](AFNORAcknowledgement.md) |  | [default to undefined]

## Example

```typescript
import { AFNORFlow } from '@factpulse/sdk';

const instance: AFNORFlow = {
    trackingId,
    name,
    processingRule,
    flowSyntax,
    flowProfile,
    flowId,
    submittedAt,
    updatedAt,
    flowType,
    processingRuleSource,
    flowDirection,
    acknowledgement,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
