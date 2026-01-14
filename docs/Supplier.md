
# Supplier

Information about the supplier / seller (BG-4).

## Properties

Name | Type
------------ | -------------
`electronicAddress` | [ElectronicAddress](ElectronicAddress.md)
`supplierId` | number
`privateId` | string
`supplierBankAccountCode` | number
`supplierServiceId` | number
`name` | string
`tradingBusinessName` | string
`legalDescription` | string
`siren` | string
`siret` | string
`vatNumber` | string
`iban` | string
`bic` | string
`bankAccountName` | string
`proprietaryId` | string
`postalAddress` | [PostalAddress](PostalAddress.md)
`contact` | [Contact](Contact.md)
`globalIds` | [Array&lt;ElectronicAddress&gt;](ElectronicAddress.md)

## Example

```typescript
import type { Supplier } from ''

// TODO: Update the object below with actual values
const example = {
  "electronicAddress": null,
  "supplierId": null,
  "privateId": null,
  "supplierBankAccountCode": null,
  "supplierServiceId": null,
  "name": null,
  "tradingBusinessName": null,
  "legalDescription": null,
  "siren": null,
  "siret": null,
  "vatNumber": null,
  "iban": null,
  "bic": null,
  "bankAccountName": null,
  "proprietaryId": null,
  "postalAddress": null,
  "contact": null,
  "globalIds": null,
} satisfies Supplier

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Supplier
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


