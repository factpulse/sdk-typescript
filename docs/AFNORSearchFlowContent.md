# AFNORSearchFlowContent

A set of flows matching criterias, provided into the request

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**limit** | **number** | Pagination, Maximum number of results that may be returned | [optional] [default to 25]
**nextCursor** | **string** | Pagination management: - If present, says where to start for next page, set nextCursor as the cursor in the next request - If omitted, says that pagination is finished  | [optional] [default to undefined]
**filters** | [**AFNORSearchFlowFilters**](AFNORSearchFlowFilters.md) |  | [optional] [default to undefined]
**results** | [**Array&lt;AFNORFlow&gt;**](AFNORFlow.md) |  | [optional] [default to undefined]

## Example

```typescript
import { AFNORSearchFlowContent } from '@factpulse/sdk';

const instance: AFNORSearchFlowContent = {
    limit,
    nextCursor,
    filters,
    results,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
