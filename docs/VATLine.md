
# VATLine

Represents a VAT breakdown line by rate (BG-23).  For exemptions (categories E, AE, K, G, O), the fields `exemption_reason` and `vatex_code` are required per EN16931.

## Properties

Name | Type
------------ | -------------
`taxableAmount` | [TaxableAmount](TaxableAmount.md)
`vatAmount` | [VATAmount](VATAmount.md)
`rate` | string
`manualRate` | [ManualRate](ManualRate.md)
`category` | [VATCategory](VATCategory.md)
`dueDateTypeCode` | [VATPointDateCode](VATPointDateCode.md)
`exemptionReason` | string
`vatexCode` | string

## Example

```typescript
import type { VATLine } from ''

// TODO: Update the object below with actual values
const example = {
  "taxableAmount": null,
  "vatAmount": null,
  "rate": null,
  "manualRate": null,
  "category": null,
  "dueDateTypeCode": null,
  "exemptionReason": null,
  "vatexCode": null,
} satisfies VATLine

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as VATLine
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


