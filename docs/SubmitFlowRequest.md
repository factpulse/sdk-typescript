
# SubmitFlowRequest

Request to submit an invoice to a PDP/PA via AFNOR.

## Properties

Name | Type
------------ | -------------
`flowName` | string
`flowSyntax` | [FlowSyntax](FlowSyntax.md)
`flowProfile` | [FlowProfile](FlowProfile.md)
`trackingId` | string
`requestId` | string
`pdpCredentials` | [PDPCredentials](PDPCredentials.md)

## Example

```typescript
import type { SubmitFlowRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "flowName": Invoice 2025-001,
  "flowSyntax": null,
  "flowProfile": null,
  "trackingId": null,
  "requestId": null,
  "pdpCredentials": null,
} satisfies SubmitFlowRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SubmitFlowRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


