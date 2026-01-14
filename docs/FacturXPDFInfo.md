
# FacturXPDFInfo

Information about the generated Factur-X PDF.

## Properties

Name | Type
------------ | -------------
`size` | number
`profile` | string
`signed` | boolean

## Example

```typescript
import type { FacturXPDFInfo } from ''

// TODO: Update the object below with actual values
const example = {
  "size": null,
  "profile": null,
  "signed": null,
} satisfies FacturXPDFInfo

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FacturXPDFInfo
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


