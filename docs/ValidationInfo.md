
# ValidationInfo

Informations sur la validation.

## Properties

Name | Type
------------ | -------------
`profile` | string
`schematronRulesPassed` | number
`schematronRulesTotal` | number
`pdfaCompliant` | boolean
`xmlEmbedded` | boolean
`errors` | [Array&lt;ValidationError&gt;](ValidationError.md)

## Example

```typescript
import type { ValidationInfo } from ''

// TODO: Update the object below with actual values
const example = {
  "profile": null,
  "schematronRulesPassed": null,
  "schematronRulesTotal": null,
  "pdfaCompliant": null,
  "xmlEmbedded": null,
  "errors": null,
} satisfies ValidationInfo

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ValidationInfo
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


