
# AFNORCreateRoutingCodeBody


## Properties

Name | Type
------------ | -------------
`facilityNature` | [AFNORFacilityNature](AFNORFacilityNature.md)
`routingIdentifier` | string
`siret` | string
`routingIdentifierType` | string
`routingCodeName` | string
`managesLegalCommitmentCode` | boolean
`administrativeStatus` | [AFNORRoutingCodeAdministrativeStatus](AFNORRoutingCodeAdministrativeStatus.md)
`address` | [AFNORAddressEdit](AFNORAddressEdit.md)

## Example

```typescript
import type { AFNORCreateRoutingCodeBody } from ''

// TODO: Update the object below with actual values
const example = {
  "facilityNature": null,
  "routingIdentifier": dcsc456sdcsdcs556,
  "siret": 70204275500240,
  "routingIdentifierType": 0224,
  "routingCodeName": Libellé Code routage,
  "managesLegalCommitmentCode": true,
  "administrativeStatus": null,
  "address": null,
} satisfies AFNORCreateRoutingCodeBody

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AFNORCreateRoutingCodeBody
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


