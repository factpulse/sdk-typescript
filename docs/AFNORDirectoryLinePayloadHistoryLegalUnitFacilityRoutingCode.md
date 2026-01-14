
# AFNORDirectoryLinePayloadHistoryLegalUnitFacilityRoutingCode


## Properties

Name | Type
------------ | -------------
`addressingIdentifier` | string
`siren` | string
`siret` | string
`addressingSuffix` | string
`routingCode` | [AFNORDirectoryLinePayloadHistoryLegalUnitFacilityRoutingCodeRoutingCode](AFNORDirectoryLinePayloadHistoryLegalUnitFacilityRoutingCodeRoutingCode.md)
`platform` | [AFNORDirectoryLinePayloadHistoryLegalUnitFacilityRoutingCodePlatform](AFNORDirectoryLinePayloadHistoryLegalUnitFacilityRoutingCodePlatform.md)
`legalUnit` | [AFNORLegalUnitPayloadIncludedNoSiren](AFNORLegalUnitPayloadIncludedNoSiren.md)
`facility` | [AFNORFacilityPayloadIncluded](AFNORFacilityPayloadIncluded.md)

## Example

```typescript
import type { AFNORDirectoryLinePayloadHistoryLegalUnitFacilityRoutingCode } from ''

// TODO: Update the object below with actual values
const example = {
  "addressingIdentifier": dcsc456sdcsdcs556,
  "siren": 702042755,
  "siret": 70204275500240,
  "addressingSuffix": dcsc456sdcsdcs556,
  "routingCode": null,
  "platform": null,
  "legalUnit": null,
  "facility": null,
} satisfies AFNORDirectoryLinePayloadHistoryLegalUnitFacilityRoutingCode

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AFNORDirectoryLinePayloadHistoryLegalUnitFacilityRoutingCode
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


