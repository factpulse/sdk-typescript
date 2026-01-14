
# ProductClassification

Item classification identifier (BG-31).  Product classification according to a classification scheme.

## Properties

Name | Type
------------ | -------------
`classCode` | string
`listId` | string
`listVersionId` | string

## Example

```typescript
import type { ProductClassification } from ''

// TODO: Update the object below with actual values
const example = {
  "classCode": null,
  "listId": null,
  "listVersionId": null,
} satisfies ProductClassification

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ProductClassification
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


