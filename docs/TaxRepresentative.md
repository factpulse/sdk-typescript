
# TaxRepresentative

Seller tax representative (BG-11).  The tax representative is required when the seller is not established in the country where VAT is due.

## Properties

Name | Type
------------ | -------------
`name` | string
`vatNumber` | string
`postalAddress` | [PostalAddress](PostalAddress.md)

## Example

```typescript
import type { TaxRepresentative } from ''

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "vatNumber": null,
  "postalAddress": null,
} satisfies TaxRepresentative

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TaxRepresentative
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


