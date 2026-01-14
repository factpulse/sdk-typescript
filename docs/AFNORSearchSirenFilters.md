
# AFNORSearchSirenFilters


## Properties

Name | Type
------------ | -------------
`siren` | [AFNORSearchSirenFiltersSiren](AFNORSearchSirenFiltersSiren.md)
`businessName` | [AFNORSearchSirenFiltersBusinessName](AFNORSearchSirenFiltersBusinessName.md)
`entityType` | [AFNORSearchSirenFiltersEntityType](AFNORSearchSirenFiltersEntityType.md)
`administrativeStatus` | [AFNORSearchSirenFiltersAdministrativeStatus](AFNORSearchSirenFiltersAdministrativeStatus.md)

## Example

```typescript
import type { AFNORSearchSirenFilters } from ''

// TODO: Update the object below with actual values
const example = {
  "siren": null,
  "businessName": null,
  "entityType": null,
  "administrativeStatus": null,
} satisfies AFNORSearchSirenFilters

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AFNORSearchSirenFilters
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


