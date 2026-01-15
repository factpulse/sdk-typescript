# AFNORSearchFlowFilters

Filtering criteria, at least one is required

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**updatedAfter** | **string** |  | [optional] [default to undefined]
**updatedBefore** | **string** |  | [optional] [default to undefined]
**processingRule** | [**Array&lt;AFNORProcessingRule&gt;**](AFNORProcessingRule.md) |  | [optional] [default to undefined]
**flowType** | [**Array&lt;AFNORFlowType&gt;**](AFNORFlowType.md) |  | [optional] [default to undefined]
**flowDirection** | [**Array&lt;AFNORFlowDirection&gt;**](AFNORFlowDirection.md) |  | [optional] [default to undefined]
**trackingId** | **string** | Unique identifier supporting UUID but not only, for flexibility purpose | [optional] [default to undefined]
**ackStatus** | [**AFNORFlowAckStatus**](AFNORFlowAckStatus.md) |  | [optional] [default to undefined]

## Example

```typescript
import { AFNORSearchFlowFilters } from '@factpulse/sdk';

const instance: AFNORSearchFlowFilters = {
    updatedAfter,
    updatedBefore,
    processingRule,
    flowType,
    flowDirection,
    trackingId,
    ackStatus,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
