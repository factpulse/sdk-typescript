# AFNORSearchDirectoryLine


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filters** | [**AFNORSearchDirectoryLineFilters**](AFNORSearchDirectoryLineFilters.md) |  | [optional] [default to undefined]
**sorting** | [**Array&lt;AFNORSearchDirectoryLineSortingInner&gt;**](AFNORSearchDirectoryLineSortingInner.md) | Sorting criteria on a field and an order (ascending or descending). | [optional] [default to undefined]
**fields** | [**Array&lt;AFNORDirectoryLineField&gt;**](AFNORDirectoryLineField.md) | Allows you to filter the desired fields in the response. | [optional] [default to undefined]
**limit** | **number** | Maximum number of results | [optional] [default to undefined]
**ignore** | **number** | Number of results to skip | [optional] [default to undefined]

## Example

```typescript
import { AFNORSearchDirectoryLine } from '@factpulse/sdk';

const instance: AFNORSearchDirectoryLine = {
    filters,
    sorting,
    fields,
    limit,
    ignore,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
