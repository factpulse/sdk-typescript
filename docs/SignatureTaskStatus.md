# SignatureTaskStatus

Typed task status for PDF signing.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**taskId** | **string** |  | [default to undefined]
**status** | [**CeleryStatus**](CeleryStatus.md) |  | [default to undefined]
**result** | [**SignatureTaskStatusResult**](SignatureTaskStatusResult.md) |  | [optional] [default to undefined]

## Example

```typescript
import { SignatureTaskStatus } from '@factpulse/sdk';

const instance: SignatureTaskStatus = {
    taskId,
    status,
    result,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
