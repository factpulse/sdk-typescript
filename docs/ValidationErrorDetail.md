
# ValidationErrorDetail

Validation error detail (aligned with AFNOR AcknowledgementDetail).  Unified format for all Factur-X validation errors, compatible with AFNOR XP Z12-013 standard.

## Properties

Name | Type
------------ | -------------
`level` | [ErrorLevel](ErrorLevel.md)
`item` | string
`reason` | string
`source` | [ErrorSource](ErrorSource.md)
`code` | string

## Example

```typescript
import type { ValidationErrorDetail } from ''

// TODO: Update the object below with actual values
const example = {
  "level": null,
  "item": null,
  "reason": null,
  "source": null,
  "code": null,
} satisfies ValidationErrorDetail

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ValidationErrorDetail
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


