# SearchServicesResponse

Structure services list.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**returnCode** | **number** |  | [default to undefined]
**message** | **string** |  | [default to undefined]
**services** | [**Array&lt;StructureService&gt;**](StructureService.md) |  | [optional] [default to undefined]
**total** | **number** | Number of services | [optional] [default to 0]

## Example

```typescript
import { SearchServicesResponse } from '@factpulse/sdk';

const instance: SearchServicesResponse = {
    returnCode,
    message,
    services,
    total,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
