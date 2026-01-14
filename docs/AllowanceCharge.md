
# AllowanceCharge

Document-level or line-level allowance/charge.  Represents BG-20 (Document level allowances), BG-21 (Document level charges), BG-27 (Invoice line allowances), or BG-28 (Invoice line charges).

## Properties

Name | Type
------------ | -------------
`isCharge` | boolean
`amount` | [Amount1](Amount1.md)
`baseAmount` | [BaseAmount](BaseAmount.md)
`percentage` | [Percentage](Percentage.md)
`reason` | string
`reasonCode` | [AllowanceChargeReasonCode](AllowanceChargeReasonCode.md)
`vatCategory` | [VATCategory](VATCategory.md)
`vatRate` | [VatRate](VatRate.md)

## Example

```typescript
import type { AllowanceCharge } from ''

// TODO: Update the object below with actual values
const example = {
  "isCharge": null,
  "amount": null,
  "baseAmount": null,
  "percentage": null,
  "reason": null,
  "reasonCode": null,
  "vatCategory": null,
  "vatRate": null,
} satisfies AllowanceCharge

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AllowanceCharge
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


