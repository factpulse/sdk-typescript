
# AFNORSearchDirectoryLine


## Properties

Name | Type
------------ | -------------
`filters` | [AFNORSearchDirectoryLineFilters](AFNORSearchDirectoryLineFilters.md)
`sorting` | [Array&lt;AFNORSearchDirectoryLineSortingInner&gt;](AFNORSearchDirectoryLineSortingInner.md)
`fields` | [Array&lt;AFNORDirectoryLineField&gt;](AFNORDirectoryLineField.md)
`limit` | number
`ignore` | number

## Example

```typescript
import type { AFNORSearchDirectoryLine } from ''

// TODO: Update the object below with actual values
const example = {
  "filters": null,
  "sorting": [{champ=addressingIdentifier, order=ascending}],
  "fields": [addressingIdentifier, siren, siret, addressingSuffix, idInstance],
  "limit": 50,
  "ignore": 20,
} satisfies AFNORSearchDirectoryLine

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AFNORSearchDirectoryLine
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


