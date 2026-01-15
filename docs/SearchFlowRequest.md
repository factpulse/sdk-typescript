# SearchFlowRequest

Request to search submitted flows.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**updatedAfter** | **string** |  | [optional] [default to undefined]
**updatedBefore** | **string** |  | [optional] [default to undefined]
**flowTypes** | [**Array&lt;FlowType&gt;**](FlowType.md) |  | [optional] [default to undefined]
**flowDirections** | [**Array&lt;FlowDirection&gt;**](FlowDirection.md) |  | [optional] [default to undefined]
**trackingId** | **string** |  | [optional] [default to undefined]
**flowId** | **string** |  | [optional] [default to undefined]
**acknowledgmentStatus** | [**AcknowledgmentStatus**](AcknowledgmentStatus.md) |  | [optional] [default to undefined]
**offset** | **number** | Offset for pagination | [optional] [default to 0]
**limit** | **number** | Maximum number of results (max 100) | [optional] [default to 25]

## Example

```typescript
import { SearchFlowRequest } from '@factpulse/sdk';

const instance: SearchFlowRequest = {
    updatedAfter,
    updatedBefore,
    flowTypes,
    flowDirections,
    trackingId,
    flowId,
    acknowledgmentStatus,
    offset,
    limit,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
