
# AFNORResult

Result of submission to AFNOR PDP.

## Properties

Name | Type
------------ | -------------
`flowId` | string
`trackingId` | string
`sha256` | string
`flowSyntax` | string
`flowProfile` | string
`flowType` | string
`processingRule` | string
`processingRuleSource` | string

## Example

```typescript
import type { AFNORResult } from ''

// TODO: Update the object below with actual values
const example = {
  "flowId": null,
  "trackingId": null,
  "sha256": null,
  "flowSyntax": null,
  "flowProfile": null,
  "flowType": null,
  "processingRule": null,
  "processingRuleSource": null,
} satisfies AFNORResult

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AFNORResult
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


