# AFNORSearchSiret


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filters** | [**AFNORSearchSiretFilters**](AFNORSearchSiretFilters.md) |  | [optional] [default to undefined]
**sorting** | [**Array&lt;AFNORSearchSiretSortingInner&gt;**](AFNORSearchSiretSortingInner.md) | Sorting criteria on a field and an order (ascending or descending). | [optional] [default to undefined]
**fields** | [**Array&lt;AFNORSiretField&gt;**](AFNORSiretField.md) | Allows you to filter the desired fields in the response. | [optional] [default to undefined]
**include** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**limit** | **number** | Maximum number of results | [optional] [default to undefined]
**ignore** | **number** | Number of results to skip | [optional] [default to undefined]

## Example

```typescript
import { AFNORSearchSiret } from '@factpulse/sdk';

const instance: AFNORSearchSiret = {
    filters,
    sorting,
    fields,
    include,
    limit,
    ignore,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
