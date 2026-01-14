
# TaxBreakdownInput

VAT breakdown for a transaction or invoice.

## Properties

Name | Type
------------ | -------------
`rate` | [Rate1](Rate1.md)
`taxableAmount` | [Taxableamount](Taxableamount.md)
`taxAmount` | [Taxamount2](Taxamount2.md)

## Example

```typescript
import type { TaxBreakdownInput } from ''

// TODO: Update the object below with actual values
const example = {
  "rate": null,
  "taxableAmount": null,
  "taxAmount": null,
} satisfies TaxBreakdownInput

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TaxBreakdownInput
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


