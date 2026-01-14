
# AFNORUpdatePatchRoutingCodeBody


## Properties

Name | Type
------------ | -------------
`routingIdentifierType` | string
`routingCodeName` | string
`administrativeStatus` | [AFNORRoutingCodeAdministrativeStatus](AFNORRoutingCodeAdministrativeStatus.md)
`address` | [AFNORAddressPatch](AFNORAddressPatch.md)

## Example

```typescript
import type { AFNORUpdatePatchRoutingCodeBody } from ''

// TODO: Update the object below with actual values
const example = {
  "routingIdentifierType": 0224,
  "routingCodeName": Libellé Code routage,
  "administrativeStatus": null,
  "address": null,
} satisfies AFNORUpdatePatchRoutingCodeBody

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AFNORUpdatePatchRoutingCodeBody
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


