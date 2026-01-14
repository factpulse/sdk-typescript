
# AFNORLegalUnitPayloadIncluded


## Properties

Name | Type
------------ | -------------
`siren` | string
`businessName` | string
`entityType` | [AFNOREntityType](AFNOREntityType.md)
`administrativeStatus` | [AFNORLegalUnitAdministrativeStatus](AFNORLegalUnitAdministrativeStatus.md)

## Example

```typescript
import type { AFNORLegalUnitPayloadIncluded } from ''

// TODO: Update the object below with actual values
const example = {
  "siren": 702042755,
  "businessName": Boulangerie Pascale,
  "entityType": null,
  "administrativeStatus": null,
} satisfies AFNORLegalUnitPayloadIncluded

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AFNORLegalUnitPayloadIncluded
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


