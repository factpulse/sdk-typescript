
# AFNORSearchSiret


## Properties

Name | Type
------------ | -------------
`filters` | [AFNORSearchSiretFilters](AFNORSearchSiretFilters.md)
`sorting` | [Array&lt;AFNORSearchSiretSortingInner&gt;](AFNORSearchSiretSortingInner.md)
`fields` | [Array&lt;AFNORSiretField&gt;](AFNORSiretField.md)
`include` | Array&lt;string&gt;
`limit` | number
`ignore` | number

## Example

```typescript
import type { AFNORSearchSiret } from ''

// TODO: Update the object below with actual values
const example = {
  "filters": null,
  "sorting": [{champ=siret, order=ascending}, {champ=name, order=descending}],
  "fields": [siret, siren, name, facilityType, address, diffusible, administrativeStatus, pmStatus, pmOnly, managesPaymentStatus, managesLegalCommitment, managesLegalCommitmentOrService, serviceCodeStatus, idInstance],
  "include": [siren],
  "limit": 50,
  "ignore": 20,
} satisfies AFNORSearchSiret

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AFNORSearchSiret
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


