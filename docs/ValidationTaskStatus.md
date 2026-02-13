# ValidationTaskStatus

Typed task status for Factur-X validation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**taskId** | **string** |  | [default to undefined]
**status** | [**CeleryStatus**](CeleryStatus.md) |  | [default to undefined]
**result** | [**ValidationTaskStatusResult**](ValidationTaskStatusResult.md) |  | [optional] [default to undefined]

## Example

```typescript
import { ValidationTaskStatus } from '@factpulse/sdk';

const instance: ValidationTaskStatus = {
    taskId,
    status,
    result,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
