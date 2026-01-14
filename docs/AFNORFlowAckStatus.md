
# AFNORFlowAckStatus

- `Ok`: the following checks have passed:   - Anti virus   - Integrity checks   - Technical rules checks   - Unicity checks - `Error`: one of the previous test has failed - `Pending` : the flow is not yet integrated 

## Properties

Name | Type
------------ | -------------

## Example

```typescript
import type { AFNORFlowAckStatus } from ''

// TODO: Update the object below with actual values
const example = {
} satisfies AFNORFlowAckStatus

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AFNORFlowAckStatus
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


