# SearchFlowRequest

Request to search submitted flows.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**updated_after** | **string** |  | [optional] [default to undefined]
**updated_before** | **string** |  | [optional] [default to undefined]
**flow_types** | [**Array&lt;FlowType&gt;**](FlowType.md) |  | [optional] [default to undefined]
**flow_directions** | [**Array&lt;FlowDirection&gt;**](FlowDirection.md) |  | [optional] [default to undefined]
**tracking_id** | **string** |  | [optional] [default to undefined]
**flow_id** | **string** |  | [optional] [default to undefined]
**acknowledgment_status** | [**AcknowledgmentStatus**](AcknowledgmentStatus.md) |  | [optional] [default to undefined]
**offset** | **number** | Offset for pagination | [optional] [default to 0]
**limit** | **number** | Maximum number of results (max 100) | [optional] [default to 25]

## Example

```typescript
import { SearchFlowRequest } from '@factpulse/sdk';

const instance: SearchFlowRequest = {
    updated_after,
    updated_before,
    flow_types,
    flow_directions,
    tracking_id,
    flow_id,
    acknowledgment_status,
    offset,
    limit,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
