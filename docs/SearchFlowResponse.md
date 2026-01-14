# SearchFlowResponse

Response from a flow search.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total** | **number** | Total number of results | [default to undefined]
**offset** | **number** | Applied offset | [default to undefined]
**limit** | **number** | Results limit | [default to undefined]
**results** | [**Array&lt;FlowSummary&gt;**](FlowSummary.md) | List of found flows | [default to undefined]

## Example

```typescript
import { SearchFlowResponse } from '@factpulse/sdk';

const instance: SearchFlowResponse = {
    total,
    offset,
    limit,
    results,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
