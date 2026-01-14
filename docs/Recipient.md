
# Recipient

Information about the invoice recipient / buyer (BG-7).

## Properties

Name | Type
------------ | -------------
`electronicAddress` | [ElectronicAddress](ElectronicAddress.md)
`executingServiceCode` | string
`name` | string
`siren` | string
`siret` | string
`vatNumber` | string
`postalAddress` | [PostalAddress](PostalAddress.md)
`contact` | [Contact](Contact.md)
`globalIds` | [Array&lt;ElectronicAddress&gt;](ElectronicAddress.md)

## Example

```typescript
import type { Recipient } from ''

// TODO: Update the object below with actual values
const example = {
  "electronicAddress": null,
  "executingServiceCode": null,
  "name": null,
  "siren": null,
  "siret": null,
  "vatNumber": null,
  "postalAddress": null,
  "contact": null,
  "globalIds": null,
} satisfies Recipient

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Recipient
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


