
# AFNORDirectoryLinePayloadHistoryLegalUnitFacilityRoutingCodeRoutingCode


## Properties

Name | Type
------------ | -------------
`routingIdentifier` | string
`routingIdentifierType` | string
`routingCodeName` | string
`managesLegalCommitment` | boolean
`administrativeStatus` | [AFNORRoutingCodeAdministrativeStatus](AFNORRoutingCodeAdministrativeStatus.md)
`address` | [AFNORAddressRead](AFNORAddressRead.md)

## Example

```typescript
import type { AFNORDirectoryLinePayloadHistoryLegalUnitFacilityRoutingCodeRoutingCode } from ''

// TODO: Update the object below with actual values
const example = {
  "routingIdentifier": dcsc456sdcsdcs556,
  "routingIdentifierType": 0224,
  "routingCodeName": Libellé Code routage,
  "managesLegalCommitment": true,
  "administrativeStatus": null,
  "address": null,
} satisfies AFNORDirectoryLinePayloadHistoryLegalUnitFacilityRoutingCodeRoutingCode

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AFNORDirectoryLinePayloadHistoryLegalUnitFacilityRoutingCodeRoutingCode
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


