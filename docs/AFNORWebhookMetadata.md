# AFNORWebhookMetadata


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**processingRule** | [**AFNORProcessingRule**](AFNORProcessingRule.md) |  | [optional] [default to undefined]
**flowType** | [**AFNORFlowType**](AFNORFlowType.md) |  | [default to undefined]
**flowDirection** | [**AFNORFlowDirection**](AFNORFlowDirection.md) |  | [default to undefined]
**ackStatus** | [**AFNORFlowAckStatus**](AFNORFlowAckStatus.md) |  | [optional] [default to undefined]

## Example

```typescript
import { AFNORWebhookMetadata } from '@factpulse/sdk';

const instance: AFNORWebhookMetadata = {
    processingRule,
    flowType,
    flowDirection,
    ackStatus,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
