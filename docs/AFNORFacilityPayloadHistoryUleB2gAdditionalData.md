
# AFNORFacilityPayloadHistoryUleB2gAdditionalData


## Properties

Name | Type
------------ | -------------
`pm` | boolean
`pmOnly` | boolean
`managesPaymentStatus` | boolean
`managesLegalCommitmentCode` | boolean
`managesLegalCommitmentOrServiceCode` | boolean
`serviceCodeStatus` | boolean

## Example

```typescript
import type { AFNORFacilityPayloadHistoryUleB2gAdditionalData } from ''

// TODO: Update the object below with actual values
const example = {
  "pm": true,
  "pmOnly": true,
  "managesPaymentStatus": true,
  "managesLegalCommitmentCode": true,
  "managesLegalCommitmentOrServiceCode": true,
  "serviceCodeStatus": true,
} satisfies AFNORFacilityPayloadHistoryUleB2gAdditionalData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AFNORFacilityPayloadHistoryUleB2gAdditionalData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


