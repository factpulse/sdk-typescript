
# DocumentTypeInfo

Informations sur le type de document detecte.

## Properties

Name | Type
------------ | -------------
`code` | number
`label` | string
`detectedAs` | string

## Example

```typescript
import type { DocumentTypeInfo } from ''

// TODO: Update the object below with actual values
const example = {
  "code": null,
  "label": null,
  "detectedAs": null,
} satisfies DocumentTypeInfo

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DocumentTypeInfo
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


