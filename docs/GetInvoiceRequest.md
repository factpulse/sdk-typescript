
# GetInvoiceRequest

Get an invoice.

## Properties

Name | Type
------------ | -------------
`credentials` | [ChorusProCredentials](ChorusProCredentials.md)
`chorusInvoiceId` | number

## Example

```typescript
import type { GetInvoiceRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "credentials": null,
  "chorusInvoiceId": null,
} satisfies GetInvoiceRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetInvoiceRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


