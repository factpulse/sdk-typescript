# AFNORDirectoryLineSearchPost200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**search** | [**AFNORSearchDirectoryLine**](AFNORSearchDirectoryLine.md) |  | [optional] [default to undefined]
**totalNumberOfResults** | **number** | The total number of results, if -1 is returned then this value is not managed due to performance issue | [optional] [default to -1]
**results** | [**Array&lt;AFNORDirectoryLinePayloadStatusLegalUnitFacilityRoutingCode&gt;**](AFNORDirectoryLinePayloadStatusLegalUnitFacilityRoutingCode.md) |  | [optional] [default to undefined]

## Example

```typescript
import { AFNORDirectoryLineSearchPost200Response } from '@factpulse/sdk';

const instance: AFNORDirectoryLineSearchPost200Response = {
    search,
    totalNumberOfResults,
    results,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
