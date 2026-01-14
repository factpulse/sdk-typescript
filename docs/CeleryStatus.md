
# CeleryStatus

Possible states of a Celery task during polling.  **Possible values:** - `PENDING`: Task waiting for processing - `STARTED`: Task currently executing - `SUCCESS`: Task completed successfully (check `result.status` for business result) - `FAILURE`: System error during execution (crash, unhandled exception) - `RETRY`: Retry attempt in progress (after temporary failure)

## Properties

Name | Type
------------ | -------------

## Example

```typescript
import type { CeleryStatus } from ''

// TODO: Update the object below with actual values
const example = {
} satisfies CeleryStatus

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CeleryStatus
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


