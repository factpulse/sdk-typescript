
# DeliveryParty

Delivery location information (BG-15 Deliver to).  Represents the party or location where goods/services are delivered.

## Properties

Name | Type
------------ | -------------
`id` | string
`globalId` | [ElectronicAddress](ElectronicAddress.md)
`name` | string
`postalAddress` | [PostalAddress](PostalAddress.md)

## Example

```typescript
import type { DeliveryParty } from ''

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "globalId": null,
  "name": null,
  "postalAddress": null,
} satisfies DeliveryParty

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DeliveryParty
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


