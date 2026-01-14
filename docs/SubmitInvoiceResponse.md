
# SubmitInvoiceResponse

Response after invoice submission.

## Properties

Name | Type
------------ | -------------
`returnCode` | number
`message` | string
`chorusInvoiceId` | number
`depositFlowNumber` | string

## Example

```typescript
import type { SubmitInvoiceResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "returnCode": null,
  "message": null,
  "chorusInvoiceId": null,
  "depositFlowNumber": null,
} satisfies SubmitInvoiceResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SubmitInvoiceResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


