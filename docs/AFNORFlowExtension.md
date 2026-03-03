# AFNORFlowExtension

Extension schema to build Flow schema

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**updatedAt** | **string** | The last update date and time of the flow. When the flow is submitted updatedAt is equal to submittedAt. When the flow acknowledgment status is changed updatedAt date and time is updated.  | [default to undefined]
**flowType** | [**AFNORFlowType**](AFNORFlowType.md) |  | [default to undefined]
**processingRuleSource** | **string** | Says whether the processing rule has been computed or the processing rule was an input parameter | [default to undefined]
**flowDirection** | [**AFNORFlowDirection**](AFNORFlowDirection.md) |  | [default to undefined]
**acknowledgement** | [**AFNORAcknowledgement**](AFNORAcknowledgement.md) |  | [default to undefined]

## Example

```typescript
import { AFNORFlowExtension } from '@factpulse/sdk';

const instance: AFNORFlowExtension = {
    updatedAt,
    flowType,
    processingRuleSource,
    flowDirection,
    acknowledgement,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
