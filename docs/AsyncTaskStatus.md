
# AsyncTaskStatus

Complete description of an async task status.  The `status` field indicates the Celery state of the task. When `status=\"SUCCESS\"`, check `result.status` for the business result (\"SUCCESS\" or \"ERROR\").

## Properties

Name | Type
------------ | -------------
`taskId` | string
`status` | [CeleryStatus](CeleryStatus.md)
`result` | { [key: string]: any; }

## Example

```typescript
import type { AsyncTaskStatus } from ''

// TODO: Update the object below with actual values
const example = {
  "taskId": null,
  "status": null,
  "result": null,
} satisfies AsyncTaskStatus

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AsyncTaskStatus
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


