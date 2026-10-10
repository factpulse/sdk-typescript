# AFNORSearchFlowParams


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**limit** | **number** | Pagination, Maximum number of results that may be returned | [optional] [default to 25]
**cursor** | **string** | If cursor is provided, then start search starting from that cursor | [optional] [default to undefined]
**where** | [**AFNORSearchFlowFilters**](AFNORSearchFlowFilters.md) |  | [default to undefined]

## Example

```typescript
import { AFNORSearchFlowParams } from '@factpulse/sdk';

const instance: AFNORSearchFlowParams = {
    limit,
    cursor,
    where,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
