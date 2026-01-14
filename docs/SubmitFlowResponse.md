
# SubmitFlowResponse

Response after submitting a flow.

## Properties

Name | Type
------------ | -------------
`flowId` | string
`trackingId` | string
`name` | string
`flowSyntax` | string
`flowProfile` | string
`sha256` | string
`message` | string

## Example

```typescript
import type { SubmitFlowResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "flowId": null,
  "trackingId": null,
  "name": null,
  "flowSyntax": null,
  "flowProfile": null,
  "sha256": null,
  "message": null,
} satisfies SubmitFlowResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SubmitFlowResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


