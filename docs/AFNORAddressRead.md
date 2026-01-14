
# AFNORAddressRead

Wrapper for postal addresses

## Properties

Name | Type
------------ | -------------
`addressLine1` | string
`addressLine2` | string
`addressLine3` | string
`postalCode` | string
`countrySubdivision` | string
`locality` | string
`countryCode` | string
`countryName` | string

## Example

```typescript
import type { AFNORAddressRead } from ''

// TODO: Update the object below with actual values
const example = {
  "addressLine1": 16 BIS RUE HENRI BARBUSSE,
  "addressLine2": CEDEX 1,
  "addressLine3": Bâtiment le Callipso,
  "postalCode": 38100,
  "countrySubdivision": Bretagne,
  "locality": Grenoble,
  "countryCode": FR,
  "countryName": France,
} satisfies AFNORAddressRead

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AFNORAddressRead
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


