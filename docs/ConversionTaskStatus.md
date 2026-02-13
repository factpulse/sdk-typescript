# ConversionTaskStatus

Typed task status for document conversion.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**taskId** | **string** |  | [default to undefined]
**status** | [**CeleryStatus**](CeleryStatus.md) |  | [default to undefined]
**result** | [**ConversionTaskStatusResult**](ConversionTaskStatusResult.md) |  | [optional] [default to undefined]

## Example

```typescript
import { ConversionTaskStatus } from '@factpulse/sdk';

const instance: ConversionTaskStatus = {
    taskId,
    status,
    result,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
