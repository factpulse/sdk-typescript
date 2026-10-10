# AFNORWebhookParams


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**callbackUrl** | **string** |  | [default to undefined]
**flowTypes** | [**Array&lt;AFNORFlowType&gt;**](AFNORFlowType.md) |  | [optional] [default to undefined]
**flowDirection** | [**AFNORFlowDirection**](AFNORFlowDirection.md) |  | [optional] [default to undefined]
**ackStatus** | [**AFNORFlowAckStatus**](AFNORFlowAckStatus.md) |  | [optional] [default to undefined]

## Example

```typescript
import { AFNORWebhookParams } from '@factpulse/sdk';

const instance: AFNORWebhookParams = {
    callbackUrl,
    flowTypes,
    flowDirection,
    ackStatus,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
