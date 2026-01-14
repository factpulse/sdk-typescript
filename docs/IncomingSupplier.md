
# IncomingSupplier

Supplier extracted from an incoming invoice.  Unlike the Supplier model in models.py, this model does not have a supplier_id field as this information is not available in Factur-X/CII/UBL XML files.

## Properties

Name | Type
------------ | -------------
`name` | string
`siren` | string
`siret` | string
`vatNumber` | string
`postalAddress` | [PostalAddress](PostalAddress.md)
`electronicAddress` | [ElectronicAddress](ElectronicAddress.md)
`email` | string
`phone` | string

## Example

```typescript
import type { IncomingSupplier } from ''

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "siren": null,
  "siret": null,
  "vatNumber": null,
  "postalAddress": null,
  "electronicAddress": null,
  "email": null,
  "phone": null,
} satisfies IncomingSupplier

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as IncomingSupplier
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


