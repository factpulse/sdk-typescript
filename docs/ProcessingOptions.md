
# ProcessingOptions

Processing options for generation and submission.

## Properties

Name | Type
------------ | -------------
`facturxProfile` | [APIProfile](APIProfile.md)
`autoEnrich` | boolean
`validateXml` | boolean
`verifyDestinationParameters` | boolean

## Example

```typescript
import type { ProcessingOptions } from ''

// TODO: Update the object below with actual values
const example = {
  "facturxProfile": null,
  "autoEnrich": null,
  "validateXml": null,
  "verifyDestinationParameters": null,
} satisfies ProcessingOptions

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ProcessingOptions
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


