
# AFNORSearchSiretFilters


## Properties

Name | Type
------------ | -------------
`siret` | [AFNORSearchSiretFiltersSiret](AFNORSearchSiretFiltersSiret.md)
`siren` | [AFNORSearchSirenFiltersSiren](AFNORSearchSirenFiltersSiren.md)
`facilityType` | [AFNORSearchSiretFiltersFacilityType](AFNORSearchSiretFiltersFacilityType.md)
`name` | [AFNORSearchSiretFiltersName](AFNORSearchSiretFiltersName.md)
`addressLines` | [AFNORSearchSiretFiltersAddressLines](AFNORSearchSiretFiltersAddressLines.md)
`postalCode` | [AFNORSearchSiretFiltersPostalCode](AFNORSearchSiretFiltersPostalCode.md)
`countrySubdivision` | [AFNORSearchSiretFiltersCountrySubdivision](AFNORSearchSiretFiltersCountrySubdivision.md)
`locality` | [AFNORSearchSiretFiltersLocality](AFNORSearchSiretFiltersLocality.md)
`administrativeStatus` | [AFNORSearchSiretFiltersAdministrativeStatus](AFNORSearchSiretFiltersAdministrativeStatus.md)

## Example

```typescript
import type { AFNORSearchSiretFilters } from ''

// TODO: Update the object below with actual values
const example = {
  "siret": null,
  "siren": null,
  "facilityType": null,
  "name": null,
  "addressLines": null,
  "postalCode": null,
  "countrySubdivision": null,
  "locality": null,
  "administrativeStatus": null,
} satisfies AFNORSearchSiretFilters

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AFNORSearchSiretFilters
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


