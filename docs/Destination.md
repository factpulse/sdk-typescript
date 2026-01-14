
# Destination

Destination configuration (Chorus Pro or AFNOR)

## Properties

Name | Type
------------ | -------------
`type` | string
`credentials` | [AFNORCredentials](AFNORCredentials.md)
`flowSyntax` | [FlowSyntax](FlowSyntax.md)
`trackingId` | string
`processingRule` | [ProcessingRule](ProcessingRule.md)

## Example

```typescript
import type { Destination } from ''

// TODO: Update the object below with actual values
const example = {
  "type": null,
  "credentials": null,
  "flowSyntax": null,
  "trackingId": null,
  "processingRule": null,
} satisfies Destination

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Destination
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


