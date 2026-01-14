
# AFNORAddressEdit

Wrapper for postal addresses without country name.

## Properties

Name | Type
------------ | -------------
`ligneAdresse1` | string
`ligneAdresse2` | string
`ligneAdresse3` | string
`postalCode` | string
`countrySubdivision` | string
`locality` | string
`codePays` | string

## Example

```typescript
import type { AFNORAddressEdit } from ''

// TODO: Update the object below with actual values
const example = {
  "ligneAdresse1": 16 BIS RUE HENRI BARBUSSE,
  "ligneAdresse2": CEDEX 1,
  "ligneAdresse3": Bâtiment le Callipso,
  "postalCode": 38100,
  "countrySubdivision": Bretagne,
  "locality": Grenoble,
  "codePays": FR,
} satisfies AFNORAddressEdit

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AFNORAddressEdit
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


