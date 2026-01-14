
# MissingField

Champ manquant requis pour la conformite.

## Properties

Name | Type
------------ | -------------
`field` | string
`btCode` | string
`description` | string
`requiredFor` | Array&lt;string&gt;
`suggestedValue` | string
`confidence` | number

## Example

```typescript
import type { MissingField } from ''

// TODO: Update the object below with actual values
const example = {
  "field": null,
  "btCode": null,
  "description": null,
  "requiredFor": null,
  "suggestedValue": null,
  "confidence": null,
} satisfies MissingField

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MissingField
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


