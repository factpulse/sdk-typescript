# VerificationTypedTaskStatus

Typed task status for PDF/XML verification.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**taskId** | **string** |  | [default to undefined]
**status** | [**CeleryStatus**](CeleryStatus.md) |  | [default to undefined]
**result** | [**VerificationTypedTaskStatusResult**](VerificationTypedTaskStatusResult.md) |  | [optional] [default to undefined]

## Example

```typescript
import { VerificationTypedTaskStatus } from '@factpulse/sdk';

const instance: VerificationTypedTaskStatus = {
    taskId,
    status,
    result,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
