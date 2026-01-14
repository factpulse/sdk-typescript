
# MandatoryNoteSchema

Mandatory note detected with location and XML/PDF comparison.

## Properties

Name | Type
------------ | -------------
`subjectCode` | string
`label` | string
`pdfValue` | string
`xmlValue` | string
`status` | [FieldStatus](FieldStatus.md)
`message` | string
`bbox` | [BoundingBoxSchema](BoundingBoxSchema.md)

## Example

```typescript
import type { MandatoryNoteSchema } from ''

// TODO: Update the object below with actual values
const example = {
  "subjectCode": null,
  "label": null,
  "pdfValue": null,
  "xmlValue": null,
  "status": null,
  "message": null,
  "bbox": null,
} satisfies MandatoryNoteSchema

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MandatoryNoteSchema
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


