# AFNORRoutingCodeSearchPost200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**search** | [**AFNORRoutingCodeSearch**](AFNORRoutingCodeSearch.md) |  | [optional] [default to undefined]
**totalNumberOfResults** | **number** | The total number of results, if -1 is returned then this value is not managed due to performance issue | [optional] [default to -1]
**results** | [**Array&lt;AFNORRoutingCodePayloadHistoryLegalUnitFacility&gt;**](AFNORRoutingCodePayloadHistoryLegalUnitFacility.md) |  | [optional] [default to undefined]

## Example

```typescript
import { AFNORRoutingCodeSearchPost200Response } from '@factpulse/sdk';

const instance: AFNORRoutingCodeSearchPost200Response = {
    search,
    totalNumberOfResults,
    results,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
