
# AFNORLegalUnitPayloadIncludedNoSiren


## Properties

Name | Type
------------ | -------------
`businessName` | string
`entityType` | [AFNOREntityType](AFNOREntityType.md)
`administrativeStatus` | [AFNORLegalUnitAdministrativeStatus](AFNORLegalUnitAdministrativeStatus.md)

## Example

```typescript
import type { AFNORLegalUnitPayloadIncludedNoSiren } from ''

// TODO: Update the object below with actual values
const example = {
  "businessName": Boulangerie Pascale,
  "entityType": null,
  "administrativeStatus": null,
} satisfies AFNORLegalUnitPayloadIncludedNoSiren

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AFNORLegalUnitPayloadIncludedNoSiren
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


