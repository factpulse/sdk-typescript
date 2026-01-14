
# ConvertValidationFailedResponse

Reponse echec de validation - inclut les donnees extraites pour correction.

## Properties

Name | Type
------------ | -------------
`status` | string
`conversionId` | string
`message` | string
`extraction` | [ExtractionInfo](ExtractionInfo.md)
`extractedData` | { [key: string]: any; }
`missingFields` | [Array&lt;MissingField&gt;](MissingField.md)
`validation` | [ValidationInfo](ValidationInfo.md)
`resumeUrl` | string
`expiresAt` | Date

## Example

```typescript
import type { ConvertValidationFailedResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "status": null,
  "conversionId": null,
  "message": null,
  "extraction": null,
  "extractedData": null,
  "missingFields": null,
  "validation": null,
  "resumeUrl": null,
  "expiresAt": null,
} satisfies ConvertValidationFailedResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ConvertValidationFailedResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


