
# AFNORFlow

The properties of a Flow resource

## Properties

Name | Type
------------ | -------------
`submittedAt` | Date
`updatedAt` | Date
`flowId` | string
`trackingId` | string
`flowType` | [AFNORFlowType](AFNORFlowType.md)
`processingRule` | [AFNORProcessingRule](AFNORProcessingRule.md)
`processingRuleSource` | string
`flowDirection` | [AFNORFlowDirection](AFNORFlowDirection.md)
`flowSyntax` | [AFNORFlowSyntax](AFNORFlowSyntax.md)
`flowProfile` | [AFNORFlowProfile](AFNORFlowProfile.md)
`acknowledgement` | [AFNORAcknowledgement](AFNORAcknowledgement.md)

## Example

```typescript
import type { AFNORFlow } from ''

// TODO: Update the object below with actual values
const example = {
  "submittedAt": null,
  "updatedAt": null,
  "flowId": null,
  "trackingId": null,
  "flowType": null,
  "processingRule": null,
  "processingRuleSource": null,
  "flowDirection": null,
  "flowSyntax": null,
  "flowProfile": null,
  "acknowledgement": null,
} satisfies AFNORFlow

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AFNORFlow
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


