
# AFNORFlowInfo

Signaling of the flow: - The tracking id is an external identifier and is used to track the flow by the sender - The sha256 is the fingerprint of the attached file:   - if provided in the request: it should be checked once received   - if not provided in the request: it should be computed and returned in the response 

## Properties

Name | Type
------------ | -------------
`trackingId` | string
`name` | string
`processingRule` | [AFNORProcessingRule](AFNORProcessingRule.md)
`flowSyntax` | [AFNORFlowSyntax](AFNORFlowSyntax.md)
`flowProfile` | [AFNORFlowProfile](AFNORFlowProfile.md)
`sha256` | string

## Example

```typescript
import type { AFNORFlowInfo } from ''

// TODO: Update the object below with actual values
const example = {
  "trackingId": null,
  "name": null,
  "processingRule": null,
  "flowSyntax": null,
  "flowProfile": null,
  "sha256": null,
} satisfies AFNORFlowInfo

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AFNORFlowInfo
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


