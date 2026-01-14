
# SupplementaryAttachment

Represents a supplementary attachment.

## Properties

Name | Type
------------ | -------------
`description` | string
`id` | number
`linkId` | number
`invoiceLineNumber` | number
`type` | string

## Example

```typescript
import type { SupplementaryAttachment } from ''

// TODO: Update the object below with actual values
const example = {
  "description": null,
  "id": null,
  "linkId": null,
  "invoiceLineNumber": null,
  "type": null,
} satisfies SupplementaryAttachment

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SupplementaryAttachment
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


