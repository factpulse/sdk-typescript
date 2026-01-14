
# AFNORRoutingCodeSearch


## Properties

Name | Type
------------ | -------------
`filters` | [AFNORRoutingCodeSearchFilters](AFNORRoutingCodeSearchFilters.md)
`sorting` | [Array&lt;AFNORRoutingCodeSearchSortingInner&gt;](AFNORRoutingCodeSearchSortingInner.md)
`fields` | [Array&lt;AFNORRoutingCodeField&gt;](AFNORRoutingCodeField.md)
`include` | Array&lt;string&gt;
`limit` | number
`ignore` | number

## Example

```typescript
import type { AFNORRoutingCodeSearch } from ''

// TODO: Update the object below with actual values
const example = {
  "filters": null,
  "sorting": [{field=siret, order=ascendant}, {field=routingIdentifier, order=ascendant}],
  "fields": [siret, routingIdentifierType, routingCodeName, routingIdentifier, managesLegalCommitmentCode, administrativeStatus, address, idInstance],
  "include": [siren, siret],
  "limit": 50,
  "ignore": 20,
} satisfies AFNORRoutingCodeSearch

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AFNORRoutingCodeSearch
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


