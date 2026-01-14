
# AFNORSearchSiren


## Properties

Name | Type
------------ | -------------
`filters` | [AFNORSearchSirenFilters](AFNORSearchSirenFilters.md)
`sorting` | [Array&lt;AFNORSearchSirenSortingInner&gt;](AFNORSearchSirenSortingInner.md)
`fields` | [Array&lt;AFNORSirenField&gt;](AFNORSirenField.md)
`limit` | number
`ignore` | number

## Example

```typescript
import type { AFNORSearchSiren } from ''

// TODO: Update the object below with actual values
const example = {
  "filters": null,
  "sorting": [{field=siren, order=ascending}, {field=administrativeStatus, order=descending}],
  "fields": [siren, businessName, entityType, administrativeStatus, idInstance],
  "limit": 50,
  "ignore": 20,
} satisfies AFNORSearchSiren

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AFNORSearchSiren
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


