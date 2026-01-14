
# Payee

Information about the payment beneficiary (BG-10 / PayeeTradeParty).  The payee is the party receiving payment. This block is used only if the payee is different from the seller (supplier).  **Main use case**: Factoring When an invoice is factored, the factor (factoring company) becomes the payment beneficiary instead of the supplier.  **Business Terms (EN16931)**: - BT-59: Payee name (mandatory) - BT-60: Payee identifier (SIRET with schemeID 0009) - BT-61: Payee legal identifier (SIREN with schemeID 0002)  **Reference**: docs/guide_affacturage.md

## Properties

Name | Type
------------ | -------------
`nom` | string
`payeeId` | string
`siret` | string
`siren` | string
`electronicAddress` | [ElectronicAddress](ElectronicAddress.md)
`iban` | string
`bic` | string
`globalIds` | [Array&lt;ElectronicAddress&gt;](ElectronicAddress.md)

## Example

```typescript
import type { Payee } from ''

// TODO: Update the object below with actual values
const example = {
  "nom": null,
  "payeeId": null,
  "siret": null,
  "siren": null,
  "electronicAddress": null,
  "iban": null,
  "bic": null,
  "globalIds": null,
} satisfies Payee

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Payee
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


