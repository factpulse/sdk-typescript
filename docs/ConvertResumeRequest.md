
# ConvertResumeRequest

Requete de reprise de conversion avec corrections.  Le champ `overrides` accepte n\'importe quel sous-ensemble de FacturXInvoice. Seuls les champs fournis seront mis a jour (merge profond).  Exemple:     {         \"overrides\": {             \"supplier\": {                 \"name\": \"Ma Société\",                 \"siret\": \"12345678901234\"             },             \"totals\": {                 \"total_net_amount\": 1000.00             }         }     }

## Properties

Name | Type
------------ | -------------
`overrides` | { [key: string]: any; }

## Example

```typescript
import type { ConvertResumeRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "overrides": null,
} satisfies ConvertResumeRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ConvertResumeRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


