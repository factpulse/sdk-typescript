
# AFNORFullFlowInfo

Identified Flow info: flow info + id + timestamp

## Properties

Name | Type
------------ | -------------
`trackingId` | string
`name` | string
`processingRule` | [AFNORProcessingRule](AFNORProcessingRule.md)
`flowSyntax` | [AFNORFlowSyntax](AFNORFlowSyntax.md)
`flowProfile` | [AFNORFlowProfile](AFNORFlowProfile.md)
`sha256` | string
`flowId` | string
`submittedAt` | Date

## Example

```typescript
import type { AFNORFullFlowInfo } from ''

// TODO: Update the object below with actual values
const example = {
  "trackingId": null,
  "name": null,
  "processingRule": null,
  "flowSyntax": null,
  "flowProfile": null,
  "sha256": null,
  "flowId": null,
  "submittedAt": null,
} satisfies AFNORFullFlowInfo

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AFNORFullFlowInfo
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


