
# AFNORFacilityPayloadIncluded


## Properties

Name | Type
------------ | -------------
`siret` | string
`siren` | string
`name` | string
`facilityType` | [AFNORFacilityType](AFNORFacilityType.md)
`diffusible` | [AFNORDiffusionStatus](AFNORDiffusionStatus.md)
`administrativeStatus` | [AFNORFacilityAdministrativeStatus](AFNORFacilityAdministrativeStatus.md)
`address` | [AFNORAddressRead](AFNORAddressRead.md)
`b2gAdditionalData` | [AFNORFacilityPayloadHistoryUleB2gAdditionalData](AFNORFacilityPayloadHistoryUleB2gAdditionalData.md)

## Example

```typescript
import type { AFNORFacilityPayloadIncluded } from ''

// TODO: Update the object below with actual values
const example = {
  "siret": 70204275500240,
  "siren": 702042755,
  "name": Boulangerie Pascale,
  "facilityType": null,
  "diffusible": null,
  "administrativeStatus": null,
  "address": null,
  "b2gAdditionalData": null,
} satisfies AFNORFacilityPayloadIncluded

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AFNORFacilityPayloadIncluded
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


