
# VerifiedFieldSchema

A verified field with all its information (extraction + compliance + location).

## Properties

Name | Type
------------ | -------------
`businessTerm` | string
`label` | string
`pdfValue` | string
`xmlValue` | string
`status` | [FieldStatus](FieldStatus.md)
`message` | string
`confidence` | number
`source` | string
`bbox` | [BoundingBoxSchema](BoundingBoxSchema.md)

## Example

```typescript
import type { VerifiedFieldSchema } from ''

// TODO: Update the object below with actual values
const example = {
  "businessTerm": null,
  "label": null,
  "pdfValue": null,
  "xmlValue": null,
  "status": null,
  "message": null,
  "confidence": null,
  "source": null,
  "bbox": null,
} satisfies VerifiedFieldSchema

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as VerifiedFieldSchema
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


