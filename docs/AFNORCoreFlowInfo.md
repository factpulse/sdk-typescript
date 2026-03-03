# AFNORCoreFlowInfo

Core schema to build FlowInfo, FullFlowInfo, Flow schemas

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**trackingId** | **string** | The tracking id is an external identifier and is used to track the flow by the sender | [optional] [default to undefined]
**name** | **string** | Name of the file | [default to undefined]
**processingRule** | [**AFNORProcessingRule**](AFNORProcessingRule.md) |  | [optional] [default to undefined]
**flowSyntax** | [**AFNORFlowSyntax**](AFNORFlowSyntax.md) |  | [default to undefined]
**flowProfile** | [**AFNORFlowProfile**](AFNORFlowProfile.md) |  | [optional] [default to undefined]

## Example

```typescript
import { AFNORCoreFlowInfo } from '@factpulse/sdk';

const instance: AFNORCoreFlowInfo = {
    trackingId,
    name,
    processingRule,
    flowSyntax,
    flowProfile,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
