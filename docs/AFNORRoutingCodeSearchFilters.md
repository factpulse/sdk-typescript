
# AFNORRoutingCodeSearchFilters


## Properties

Name | Type
------------ | -------------
`routingIdentifier` | [AFNORRoutingCodeSearchFiltersRoutingIdentifier](AFNORRoutingCodeSearchFiltersRoutingIdentifier.md)
`siret` | [AFNORSearchSiretFiltersSiret](AFNORSearchSiretFiltersSiret.md)
`routingCodeName` | [AFNORRoutingCodeSearchFiltersRoutingCodeName](AFNORRoutingCodeSearchFiltersRoutingCodeName.md)
`administrativeStatus` | [AFNORRoutingCodeSearchFiltersAdministrativeStatus](AFNORRoutingCodeSearchFiltersAdministrativeStatus.md)
`addressLines` | [AFNORSearchSiretFiltersAddressLines](AFNORSearchSiretFiltersAddressLines.md)
`postalCode` | [AFNORSearchSiretFiltersPostalCode](AFNORSearchSiretFiltersPostalCode.md)
`locality` | [AFNORSearchSiretFiltersLocality](AFNORSearchSiretFiltersLocality.md)

## Example

```typescript
import type { AFNORRoutingCodeSearchFilters } from ''

// TODO: Update the object below with actual values
const example = {
  "routingIdentifier": null,
  "siret": null,
  "routingCodeName": null,
  "administrativeStatus": null,
  "addressLines": null,
  "postalCode": null,
  "locality": null,
} satisfies AFNORRoutingCodeSearchFilters

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AFNORRoutingCodeSearchFilters
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


