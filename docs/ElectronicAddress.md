
# ElectronicAddress

Represents an electronic invoicing address, composed of an identifier and its scheme (SchemeID) in accordance with EN16931. Example: { \"identifier\": \"123456789\", \"scheme_id\": \"0225\" }

## Properties

Name | Type
------------ | -------------
`identifier` | string
`schemeId` | [SchemeID](SchemeID.md)

## Example

```typescript
import type { ElectronicAddress } from ''

// TODO: Update the object below with actual values
const example = {
  "identifier": null,
  "schemeId": null,
} satisfies ElectronicAddress

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ElectronicAddress
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


