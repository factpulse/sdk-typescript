# GenerationTaskStatus

Typed task status for invoice generation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**taskId** | **string** |  | [default to undefined]
**status** | [**CeleryStatus**](CeleryStatus.md) |  | [default to undefined]
**result** | [**GenerationTaskStatusResult**](GenerationTaskStatusResult.md) |  | [optional] [default to undefined]

## Example

```typescript
import { GenerationTaskStatus } from '@factpulse/sdk';

const instance: GenerationTaskStatus = {
    taskId,
    status,
    result,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
