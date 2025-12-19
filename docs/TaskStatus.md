# TaskStatus

Complete description of an async task status.  The `status` field indicates the Celery state of the task. When `status=\"SUCCESS\"`, check `result.status` for the business result (\"SUCCESS\" or \"ERROR\").

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**taskId** | **string** | Unique task identifier | [default to undefined]
**status** | [**CeleryStatus**](CeleryStatus.md) | Celery task status (PENDING, STARTED, SUCCESS, FAILURE, RETRY) | [default to undefined]
**result** | **{ [key: string]: any; }** |  | [optional] [default to undefined]

## Example

```typescript
import { TaskStatus } from '@factpulse/sdk';

const instance: TaskStatus = {
    taskId,
    status,
    result,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
