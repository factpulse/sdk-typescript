
# AFNORSearchSirenSortingInner

A sorting criteria composed of a field and an order (ascending or descending).

## Properties

Name | Type
------------ | -------------
`field` | [AFNORSirenField](AFNORSirenField.md)
`sortingOrder` | [AFNORSortingOrder](AFNORSortingOrder.md)

## Example

```typescript
import type { AFNORSearchSirenSortingInner } from ''

// TODO: Update the object below with actual values
const example = {
  "field": null,
  "sortingOrder": null,
} satisfies AFNORSearchSirenSortingInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AFNORSearchSirenSortingInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


