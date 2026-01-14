
# ConvertSuccessResponse

Reponse succes de conversion.  Le champ `invoice` contient les donnees de la facture au format FacturXInvoice (cf. facture_electronique.models.FacturXInvoice). Ce modele est le meme que celui utilise pour la generation Factur-X, garantissant une coherence totale.

## Properties

Name | Type
------------ | -------------
`status` | string
`conversionId` | string
`documentType` | [DocumentTypeInfo](DocumentTypeInfo.md)
`invoice` | { [key: string]: any; }
`extraction` | [ExtractionInfo](ExtractionInfo.md)
`validation` | [ValidationInfo](ValidationInfo.md)
`files` | [FilesInfo](FilesInfo.md)
`processingTimeMs` | number
`pdfRegenerated` | boolean
`pdfRegeneratedReason` | string

## Example

```typescript
import type { ConvertSuccessResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "status": null,
  "conversionId": null,
  "documentType": null,
  "invoice": null,
  "extraction": null,
  "validation": null,
  "files": null,
  "processingTimeMs": null,
  "pdfRegenerated": null,
  "pdfRegeneratedReason": null,
} satisfies ConvertSuccessResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ConvertSuccessResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


