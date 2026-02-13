# TaskErrorResult

Common error result returned by all task domains.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **string** |  | [optional] [default to StatusEnum_Error]
**errorCode** | **string** |  | [default to undefined]
**errorMessage** | **string** |  | [default to undefined]
**details** | [**Array&lt;AFNORErrorDetail&gt;**](AFNORErrorDetail.md) |  | [optional] [default to undefined]
**traceback** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { TaskErrorResult } from '@factpulse/sdk';

const instance: TaskErrorResult = {
    status,
    errorCode,
    errorMessage,
    details,
    traceback,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
