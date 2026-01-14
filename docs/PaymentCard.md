
# PaymentCard

Payment card information (BG-18).  Used when payment is made by payment card.

## Properties

Name | Type
------------ | -------------
`cardId` | string
`cardholderName` | string

## Example

```typescript
import type { PaymentCard } from ''

// TODO: Update the object below with actual values
const example = {
  "cardId": null,
  "cardholderName": null,
} satisfies PaymentCard

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PaymentCard
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


