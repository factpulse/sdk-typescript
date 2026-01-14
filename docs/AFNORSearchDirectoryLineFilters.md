
# AFNORSearchDirectoryLineFilters


## Properties

Name | Type
------------ | -------------
`addressingIdentifier` | [AFNORSearchDirectoryLineFiltersAddressingIdentifier](AFNORSearchDirectoryLineFiltersAddressingIdentifier.md)
`siren` | [AFNORSearchSirenFiltersSiren](AFNORSearchSirenFiltersSiren.md)
`siret` | [AFNORSearchSiretFiltersSiret](AFNORSearchSiretFiltersSiret.md)
`routingIdentifier` | [AFNORRoutingCodeSearchFiltersRoutingIdentifier](AFNORRoutingCodeSearchFiltersRoutingIdentifier.md)
`addressingSuffix` | [AFNORSearchDirectoryLineFiltersAddressingSuffix](AFNORSearchDirectoryLineFiltersAddressingSuffix.md)

## Example

```typescript
import type { AFNORSearchDirectoryLineFilters } from ''

// TODO: Update the object below with actual values
const example = {
  "addressingIdentifier": null,
  "siren": null,
  "siret": null,
  "routingIdentifier": null,
  "addressingSuffix": null,
} satisfies AFNORSearchDirectoryLineFilters

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AFNORSearchDirectoryLineFilters
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


