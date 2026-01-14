
# FileInfo

Informations sur un fichier genere (contenu inline en base64).

## Properties

Name | Type
------------ | -------------
`contentB64` | string
`sizeBytes` | number

## Example

```typescript
import type { FileInfo } from ''

// TODO: Update the object below with actual values
const example = {
  "contentB64": null,
  "sizeBytes": null,
} satisfies FileInfo

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FileInfo
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


