# SearchStructureResponse

Structure search response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**returnCode** | **number** | Return code (0 &#x3D; success) | [default to undefined]
**message** | **string** | Return message | [default to undefined]
**structures** | [**Array&lt;StructureInfo&gt;**](StructureInfo.md) |  | [optional] [default to undefined]
**total** | **number** | Total number of results | [optional] [default to 0]

## Example

```typescript
import { SearchStructureResponse } from '@factpulse/sdk';

const instance: SearchStructureResponse = {
    returnCode,
    message,
    structures,
    total,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
