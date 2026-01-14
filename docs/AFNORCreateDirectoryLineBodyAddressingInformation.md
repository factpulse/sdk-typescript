
# AFNORCreateDirectoryLineBodyAddressingInformation


## Properties

Name | Type
------------ | -------------
`siren` | string
`siret` | string
`routingIdentifier` | string
`addressingSuffix` | string

## Example

```typescript
import type { AFNORCreateDirectoryLineBodyAddressingInformation } from ''

// TODO: Update the object below with actual values
const example = {
  "siren": 702042755,
  "siret": 70204275500240,
  "routingIdentifier": dcsc456sdcsdcs556,
  "addressingSuffix": dcsc456sdcsdcs556,
} satisfies AFNORCreateDirectoryLineBodyAddressingInformation

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AFNORCreateDirectoryLineBodyAddressingInformation
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


