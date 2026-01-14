
# PDFValidationResultAPI

Complete result of a Factur-X PDF validation.

## Properties

Name | Type
------------ | -------------
`isCompliant` | boolean
`xmlPresent` | boolean
`xmlCompliant` | boolean
`detectedProfile` | string
`xmlErrors` | Array&lt;string&gt;
`pdfaCompliant` | boolean
`pdfaVersion` | string
`pdfaValidationMethod` | string
`validatedRules` | number
`failedRules` | number
`pdfaErrors` | Array&lt;string&gt;
`pdfaWarnings` | Array&lt;string&gt;
`xmpPresent` | boolean
`xmpFacturxCompliant` | boolean
`xmpProfile` | string
`xmpVersion` | string
`xmpErrors` | Array&lt;string&gt;
`xmpMetadata` | { [key: string]: any; }
`isSigned` | boolean
`signatureCount` | number
`signatures` | [Array&lt;SignatureInfoAPI&gt;](SignatureInfoAPI.md)
`signatureErrors` | Array&lt;string&gt;
`summaryMessage` | string

## Example

```typescript
import type { PDFValidationResultAPI } from ''

// TODO: Update the object below with actual values
const example = {
  "isCompliant": null,
  "xmlPresent": null,
  "xmlCompliant": null,
  "detectedProfile": null,
  "xmlErrors": null,
  "pdfaCompliant": null,
  "pdfaVersion": null,
  "pdfaValidationMethod": null,
  "validatedRules": null,
  "failedRules": null,
  "pdfaErrors": null,
  "pdfaWarnings": null,
  "xmpPresent": null,
  "xmpFacturxCompliant": null,
  "xmpProfile": null,
  "xmpVersion": null,
  "xmpErrors": null,
  "xmpMetadata": null,
  "isSigned": null,
  "signatureCount": null,
  "signatures": null,
  "signatureErrors": null,
  "summaryMessage": null,
} satisfies PDFValidationResultAPI

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PDFValidationResultAPI
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


