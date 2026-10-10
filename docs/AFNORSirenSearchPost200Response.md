# AFNORSirenSearchPost200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**search** | [**AFNORSearchSiren**](AFNORSearchSiren.md) |  | [optional] [default to undefined]
**totalNumberOfResults** | **number** | The total number of results, if -1 is returned then this value is not managed due to performance issue | [optional] [default to -1]
**results** | [**Array&lt;AFNORLegalUnitPayloadHistory&gt;**](AFNORLegalUnitPayloadHistory.md) |  | [optional] [default to undefined]

## Example

```typescript
import { AFNORSirenSearchPost200Response } from '@factpulse/sdk';

const instance: AFNORSirenSearchPost200Response = {
    search,
    totalNumberOfResults,
    results,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
