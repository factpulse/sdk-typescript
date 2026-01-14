
# SignatureInfoAPI

Information about an electronic signature in a PDF.

## Properties

Name | Type
------------ | -------------
`fieldName` | string
`signer` | string
`signingDate` | string
`reason` | string
`location` | string
`isValid` | boolean

## Example

```typescript
import type { SignatureInfoAPI } from ''

// TODO: Update the object below with actual values
const example = {
  "fieldName": null,
  "signer": null,
  "signingDate": null,
  "reason": null,
  "location": null,
  "isValid": null,
} satisfies SignatureInfoAPI

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SignatureInfoAPI
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


