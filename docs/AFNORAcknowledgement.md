
# AFNORAcknowledgement


## Properties

Name | Type
------------ | -------------
`status` | [AFNORFlowAckStatus](AFNORFlowAckStatus.md)
`details` | [Array&lt;AFNORAcknowledgementDetail&gt;](AFNORAcknowledgementDetail.md)

## Example

```typescript
import type { AFNORAcknowledgement } from ''

// TODO: Update the object below with actual values
const example = {
  "status": null,
  "details": null,
} satisfies AFNORAcknowledgement

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AFNORAcknowledgement
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


