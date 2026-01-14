
# LineSubType

Sub-line type for EXTENDED profile (BT-X-8 / EXT-FR-FE-163).  Defines the role of an invoice line in a hierarchical structure: - DETAIL: Standard billing line, included in VAT calculations - INFORMATION: Additional information line, not included in VAT calculations - GROUP: Grouping/subtotal line, not included in VAT calculations

## Properties

Name | Type
------------ | -------------

## Example

```typescript
import type { LineSubType } from ''

// TODO: Update the object below with actual values
const example = {
} satisfies LineSubType

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as LineSubType
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


